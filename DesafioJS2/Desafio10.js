function ranking(list) {
    let newobj = {Time: '', P: 0, J: 0, V: 0, E: 0, D: 0, GP: 0, GC: 0, SG:  0}
    let times = []
    let pontos = []
    let result = []

    list.forEach((element, idx) => {
        for (let i in element) {
            if (typeof element[i] == 'string') {
                if (idx == 0) {
                    times.push(element[i])
                } else if (times.includes(element[i])) {
                    times = times
                } else {
                    times.push(element[i])
                }
            }
        }
    });
    let tam = list.length
    let tamtime = times.length
    let x = 0
    let a = 0
    let controllA = false
    let controllB = false
    let pontant = 0
    let pontprox = 0
    let idxpontA = 0
    let idxpontB = 0
    let j = 0
    let vit = 0
    let emp = 0
    let derr = 0
    let gp = 0
    let gc = 0

    for (let i = 0; i < tamtime; i++) [
        pontos.push(0)
    ]

    while (tamtime > 0) {
        vit = 0
        emp = 0
        derr = 0
        gp = 0
        gc = 0
        j = 0

        list.forEach((item, idx) => {
            idxpontA = 0
            idxpontB = 0

            for (let i in item) {
                if (controllA) {
                    pontant = item[i]
                    controllA = false
                    idxpontA = 1
                    j+=1
                } else if (controllB) {
                    pontprox = item[i]
                    controllB = false
                    idxpontB = 1
                }

                if (typeof item[i] == 'string') {
                    if (item[i] == times[x]) {
                        controllA = true
                    } else {
                        controllB = true
                    }
                }

                if (idxpontA == 1 && idxpontB == 1) {
                    if (pontant > pontprox) {
                        pontos[x] += 3
                        vit += 1
                        gp += pontant
                        gc += pontprox
                    } else if (pontant < pontprox) {
                        gp += pontant
                        gc += pontprox
                        pontos[x] += 0
                        derr += 1
                    } else {
                        gp += pontant
                        gc += pontprox
                        pontos[x] += 1
                        emp += 1
                    }
                }

            }
            // { Time: 'Brasil',     P: 7, J: 3, V: 2, E: 1, D: 0, GP: 5, GC: 1, SG:  4 }

            if (idx == tam - 1) {
                newobj.Time = times[a]
                newobj.P = pontos[a]
                newobj.J = j
                newobj.V = vit
                newobj.D = derr
                newobj.E = emp
                newobj.GP = gp
                newobj.GC = gc
                newobj.SG = gp - gc

                tamtime -= 1
                x += 1
                a += 1

                result.push(newobj)
                newobj = {Time: '', P: 0, J: 0, V: 0, E: 0, D: 0, GP: 0, GC: 0, SG:  0}
            }
        })

    }

    result.sort((a, b) => {
        if (a.P > b.P) return -1
        if (a.P < b.P) return 1
        if (a.P == b.P) {
            if (a.V > b.V) return -1
            if (a.V < b.V) return 1
            if (a.V == b.V) {
                if (a.SG > b.SG) return -1
                if (a.SG < b.SG) return 1
                if (a.SG == b.SG) {
                    if (a.GP > b.GP) return -1
                    if (a.GP < b.GP) return 1
                    return 0
                }
            }
        }

    })

    return result

}
