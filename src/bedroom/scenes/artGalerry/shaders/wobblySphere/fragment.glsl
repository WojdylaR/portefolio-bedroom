varying float vWobble;

void main() {

    float colorMix = smoothstep(-1.0, 1.0, vWobble);

    // csm_Metalness = step(0.25, vWobble);

    csm_DiffuseColor.rgb = mix(vec3(0.639, 0.302, 0.302), vec3(0.353, 0.165, 0.165), colorMix );
}