MatOutput defaultMaterial(vec2 uv) {
    float grain = fbm(uv * 10., 4);
    MatOutput m;
    m.color = mix(uColor, max(uColor - vec3(0.04), 0.0), grain);
    m.roughness = .9 + grain * .1; 
    m.metalness = .0;
    return m;
}