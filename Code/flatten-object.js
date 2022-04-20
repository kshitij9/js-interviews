const Obj = {
    A: 1,
    B: {C: 2},
    D: [ 1, {E: { F: 2, G: 3}}]
}

const result = { A: 1, 'B.C': 2, 'D.0': 1, 'D.1.E.F': 2, 'D.1.E.G': 3 }

const flattenObject = (obj, keyName = '', res = {}) => {
    for(key in obj) {
        const val = obj[key];
        const newKey = `${keyName}${key}`;
        if(typeof val === 'object') {
            flattenObject(val, `${newKey}.`, res);
        }
        else {
            res[newKey] = val;
        }
    }

    return res;
}

console.log(flattenObject(Obj));