uniform float uTime;
varying float vWobble;

#include ../tools

float getWobble(vec3 position) {

    vec3 warpedPosition = position;

    warpedPosition += simplexNoise4d(vec4(
        position * .5,
        uTime * 0.4
    )) * 1.7;

    return simplexNoise4d(vec4(
        warpedPosition * .6 ,
        uTime * .7
    )) * .3;
}

void main() {

    vec3 biTangent = cross(normal, vec4(1.).xyz);
    float shift = 0.01;

    vec3 positionA = csm_Position + vec4(1.).xyz * shift;
    vec3 positionB = csm_Position + biTangent * shift;

    float wobble = getWobble(csm_Position);
    csm_Position += wobble * normal;

    positionA += getWobble(positionA) * normal;
    positionB += getWobble(positionB) * normal;

    vec3 toA = normalize(positionA - csm_Position);
    vec3 toB = normalize(positionB - csm_Position);

    csm_Normal = cross(toA, toB);

    vWobble = wobble / 0.3;

}