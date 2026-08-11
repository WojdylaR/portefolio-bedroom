varying vec2 vUv;

void main() {

    vUv = uv;
    vUv = position.xy + 0.5;
}