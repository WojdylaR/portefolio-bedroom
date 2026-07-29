uniform int uMaterialFrom;
uniform int uMaterialTo;
uniform float uProgress;
uniform float uTime;
uniform vec3 uColor;

varying vec2 vUv;

float random(vec2 st) {
    vec3 p = fract(vec3(st.xyx) * 0.1031);
    p += dot(p, p.yzx + 33.33);
    return fract((p.x + p.y) * p.z);
}

float noise2d(vec2 uv) {
    vec2 i = floor(uv);
    vec2 f = fract(uv);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);   // smoothstep manuel
    return mix(mix(a, b, u.x),
               mix(c, d, u.x),
               u.y);
}

float fbm(vec2 uv, int octaves) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < octaves; i++) {
        value += noise2d(uv) * amplitude;
        uv *= 2.;
        amplitude *= 0.5;
    }
    return value;
}


struct MatOutput {
    vec3 color;
    float roughness;
    float metalness;
};

MatOutput leather(vec2 uv) {

    float grain = pow(fbm(uv * 20., 6), 2.);

    MatOutput m;
    m.color = mix( uColor, max(uColor - vec3(0.12, 0.14, .15), .0), grain);
    m.roughness = .75 + grain * .5;
    m.metalness = .0;

    return m;
}

MatOutput brushedMetal(vec2 uv) {

    float grain = pow(fbm(uv * 20.  * vec2(0.2, 300.), 5), 2.5);

    MatOutput m;
    m.color = mix( uColor, max(uColor - vec3(0.35), .0), grain);
    
    m.roughness = .45 + grain * .3;
    m.metalness = 1.;

    return m;
}


MatOutput defaultMaterial(vec2 uv) {
    float grain = fbm(uv * 10., 4);
    MatOutput m;
    m.color = mix(uColor, max(uColor - vec3(0.04), 0.0), grain);
    m.roughness = .9 + grain * .1; 
    m.metalness = .0;
    return m;
}

MatOutput getMaterial(int id, vec2 uv) {

    if (id == 0)   {
        return leather(uv);
    } else if (id == 1){
        return brushedMetal(uv);
    }

    return defaultMaterial(uv);
}


void main () {

    MatOutput materialFrom = getMaterial(uMaterialFrom, vUv);
    MatOutput materialTo = getMaterial(uMaterialTo, vUv);

    csm_DiffuseColor = vec4(mix(materialFrom.color, materialTo.color, uProgress), 1.0);

    csm_Metalness = mix(materialFrom.metalness, materialTo.metalness, uProgress);
    csm_Roughness = mix(materialFrom.roughness, materialTo.roughness, uProgress);
}