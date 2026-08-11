varying vec2 vUv;

#include ../tools.glsl


void main () {

    float grain = pow(fbm(vUv * 20.  * vec2(0.2, 300.), 5), 2.5);

    vec3 color = mix( vec3(0.768627, 0.768627, 0.784314), max(vec3(0.768627, 0.768627, 0.784314) - vec3(0.35), .0), grain);
    csm_Roughness = .45 + grain * .3;
    csm_Metalness = 1.;
    csm_DiffuseColor = vec4(color, 1.);


}