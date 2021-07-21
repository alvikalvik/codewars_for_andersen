function crossProduct (vector1, vector2) {
    const is3D = Array.isArray(vector1) &&
        Array.isArray(vector2) &&
        vector1.length === 3 &&
        vector2.length === 3 &&
        vector1.every( item => typeof item === 'number') &&
        vector2.every( item => typeof item === 'number');

    if(!is3D) throw "Arguments are not 3D vectors!";   

    const [ax, ay, az] = vector1;
    const [bx, by, bz] = vector2;

    return [ ay*bz - az*by, az*bx - ax*bz, ax*by - ay*bx]
}