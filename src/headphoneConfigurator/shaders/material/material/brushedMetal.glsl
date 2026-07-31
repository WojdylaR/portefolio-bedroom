
MatOutput brushedMetal(vec2 uv) {

    float grain = pow(fbm(uv * 20.  * vec2(0.2, 300.), 5), 2.5);

    MatOutput m;
    m.color = mix( uColor, max(uColor - vec3(0.35), .0), grain);
    
    m.roughness = .45 + grain * .3;
    m.metalness = 1.;

    return m;
}