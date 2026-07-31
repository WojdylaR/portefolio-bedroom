MatOutput wood( vec2 uv )
{
    vec2 pos = uv.yx * vec2(52, 3.);

    pos = rotate2d( noise2d(pos) ) * pos * 1.36;
    float pattern = lines(pos, .5);

    MatOutput m;
    m.color = mix( uColor, max(uColor - vec3(0.18, 0.13, 0.09), .0), pattern);
    m.roughness = 0.55 + pattern * .3;
    m.metalness = .0;

    return m;
}