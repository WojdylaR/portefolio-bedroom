varying vec2 vUv;

#include ../tools.glsl


void main () {

    vec2 pos = vUv * vec2(10., 3.);

    // Add noise (warp)
    pos = rotate2d( noise2d(pos) ) * pos;

    // Draw lines
    float pattern = lines(pos, .5);

    vec3 color = mix(
        vec3(0.45, 0.28, 0.15),
        vec3(0.15, 0.08, 0.04),
        pattern);

    csm_DiffuseColor = vec4(color, 1.0);
}