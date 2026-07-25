uniform float uMetalness;
uniform float uRoughness;
uniform float uTime;
uniform vec3 uColor;

void main () {

    csm_Metalness = uMetalness;
    csm_Roughness = uRoughness;
    csm_DiffuseColor  = vec4(uColor, 1.0);
}