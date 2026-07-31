float random(vec2 st) {
    vec3 p = fract(vec3(st.xyx) * 0.1031);
    p += dot(p, p.yzx + 33.33);
    return fract((p.x + p.y) * p.z);
}

mat2 rotate2d(float angle) {
    return mat2(cos(angle), -sin(angle),
                sin(angle),  cos(angle));
}

float noise2d(vec2 uv) {
    vec2 i = floor(uv);
    vec2 f = fract(uv);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
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

float lines(in vec2 pos, float b){
    float scale = 6.3;
    pos *= scale;
     return smoothstep(0.8,
        .9 + b * .9,
        abs((sin(pos.x * 3.1415) + b * 2.0)) * .5);
}