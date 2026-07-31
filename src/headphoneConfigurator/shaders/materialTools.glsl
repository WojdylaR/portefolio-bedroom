MatOutput getMaterial(int id, vec2 uv) {

    if (id == 0)   {
        return leather(uv);
    } else if (id == 1){
        return brushedMetal(uv);
    } else if (id == 2){
        return wood(uv);
    }

    return defaultMaterial(uv);
}