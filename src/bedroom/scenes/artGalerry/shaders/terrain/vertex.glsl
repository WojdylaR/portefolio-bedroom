#include ../tools

uniform float uTime;

varying float vUpDot;
varying vec3 vPosition;

float getElevation(vec2 position) {

    float time = uTime * 0.2;

    vec2 warpedPosition = position + time;

    warpedPosition += simplexNoise2d(warpedPosition * 0.2 * 5.0) * 0.5;

    float elevation = 0.0;
    elevation += simplexNoise2d(warpedPosition * 0.2) / 2.0;
    elevation += simplexNoise2d(warpedPosition * 0.2 * 2.0) / 4.0;
    elevation += simplexNoise2d(warpedPosition * 0.2 * 4.0) / 8.0;

    float elevationSign = sign(elevation);
    elevation = pow(abs(elevation), 2.0) * elevationSign;

    elevation *= 2.0;

    return elevation;
}

void main() {

    float elevation = getElevation(csm_Position.yz);
    float shift = 0.1;

    vec3 positionA = position.xyz + vec3(0.0, 0.0, - shift);
    vec3 positionB = position.xyz + vec3(0.0, shift, 0.0);

    csm_Position.x += elevation;

    positionA.x = getElevation(positionA.yz);
    positionB.x = getElevation(positionB.yz);

    vec3 toA = normalize(positionA - csm_Position);
    vec3 toB = normalize(positionB - csm_Position);
    csm_Normal = cross(toA, toB);

    vPosition = csm_Position;
    vPosition.yz += uTime * 0.2;

    vUpDot = dot(csm_Normal, vec3(1.0, 0.0, 0.0));
}