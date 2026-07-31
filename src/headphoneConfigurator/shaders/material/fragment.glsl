uniform int uMaterialFrom;
uniform int uMaterialTo;
uniform float uProgress;
uniform vec3 uColor;
varying vec2 vUv;

#include ../tools
#include ../materialStruct

#include ./material/leather
#include ./material/brushedMetal
#include ./material/defaultMaterial
#include ./material/wood

#include ../materialTools


void main () {

    MatOutput materialFrom = getMaterial(uMaterialFrom, vUv);
    MatOutput materialTo = getMaterial(uMaterialTo, vUv);

    csm_DiffuseColor = vec4(mix(materialFrom.color, materialTo.color, uProgress), 1.0);

    csm_Metalness = mix(materialFrom.metalness, materialTo.metalness, uProgress);
    csm_Roughness = mix(materialFrom.roughness, materialTo.roughness, uProgress);
}