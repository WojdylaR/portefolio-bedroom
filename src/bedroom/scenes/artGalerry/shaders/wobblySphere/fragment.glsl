varying float vWobble;

uniform vec3 uColor1;
uniform vec3 uColor2;

void main() {

    float colorMix = smoothstep(-1.0, 1.0, vWobble * 30.);

    csm_DiffuseColor.rgb = mix(uColor1, uColor2, colorMix );
}