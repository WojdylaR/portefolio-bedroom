varying vec2 vUv;

#include ../tools.glsl


void main () {

    float grain = pow(fbm(vUv * 20., 6), 2.);

    vec3 color = mix( vec3(0.431373, 0.384314, 0.352941), max(vec3(0.431373, 0.384314, 0.352941) - vec3(0.12, 0.14, .15), .0), grain);
    csm_Roughness = .75 + grain * .5;
    csm_Metalness = .0;
    csm_DiffuseColor = vec4(color, 1.);
}