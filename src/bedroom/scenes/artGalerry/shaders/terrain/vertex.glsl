#include ../tools

uniform float uTime;

varying float vUpDot;
varying vec3 vPosition;

float getElevation(vec2 position) {

    float time = uTime * 0.1;

    float elevation = fbmSN2D(position + time, 2);

    return elevation;
}

void main() {

    float elevation = getElevation(csm_Position.xz * 1.25);
    
    csm_Position.y = elevation * 0.35 ;
    vPosition = csm_Position;
}