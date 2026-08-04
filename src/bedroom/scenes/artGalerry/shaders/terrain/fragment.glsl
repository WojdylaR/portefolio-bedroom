#include ../tools

varying vec3 vPosition;
varying float vUpDot;

void main() {

    vec3 color = vec3(1.0);

    float surfaceWaterMix = smoothstep(-1.0, -0.1, vPosition.y);

    color = mix(vec3(0.000000, 0.168627, 0.239216), vec3(0.400000, 0.658824, 1.000000), surfaceWaterMix);

    float sandMix = step(-0.1, vPosition.y);
    color = mix(color, vec3(1.000000, 0.909804, 0.580392), sandMix);

    float grassMix = step(-0.06, vPosition.y);
    color = mix(color, vec3(0.521569, 0.835294, 0.20392), grassMix);

    float rockMix = vUpDot;
    rockMix = 1.0 - step(0.8, rockMix);
    rockMix *= step(-0.06, vPosition.y);

    color = mix(color, vec3(0.749020, 0.741176, 0.552941), rockMix);


    float snowThreshold = 0.45;
    snowThreshold += simplexNoise2d(vPosition.xz * 15.0) * 0.1;
    float snowMix = step(snowThreshold, vPosition.y);
    color = mix(color, vec3(1.000000, 1.000000, 1.000000), snowMix);


    csm_DiffuseColor = vec4(color, 1.0);

}