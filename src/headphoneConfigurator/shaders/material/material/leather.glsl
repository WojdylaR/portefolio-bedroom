MatOutput leather(vec2 uv) {

    float grain = pow(fbm(uv * 20., 6), 2.);

    MatOutput m;
    m.color = mix( uColor, max(uColor - vec3(0.12, 0.14, .15), .0), grain);
    m.roughness = .75 + grain * .5;
    m.metalness = .0;

    return m;
}