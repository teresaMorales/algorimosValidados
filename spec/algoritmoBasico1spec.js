// 1.- Analiza los valores de un array y obtén el promedio (average) de esos valores.

function sumaArray(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum = sum + x[i];
    }
    return sum / x.length;
}

describe("sumaArray", function() {
    it("deberia devolver el promedio de la suma", function() {
        expect(sumaArray([2, 5, 8])).toEqual(5);
    });
});

// function retornaArray(x) {
//     var arr = [];
//     for (var i = 0; i <= x; i++) {
//         arr.push(i)
//     }
//     return arr;
// }