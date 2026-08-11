#include ../tools

uniform vec3 uWater;
uniform vec3 uSand;
uniform vec3 uGrass;
uniform vec3 uRock;
uniform vec3 uSnow;

varying vec3 vPosition;
varying float vUpDot;

void main() {

    vec3 color = vec3(0.);

    color = uWater;

    color = mix(color, uSand, step(-0.05, vPosition.y));
    color = mix(color, uGrass, step(.0, vPosition.y));
    color = mix(color, uRock, step(.08, vPosition.y));
    color = mix(color, uSnow, step(.18, vPosition.y));


    csm_DiffuseColor = vec4(color, 1.0);
}