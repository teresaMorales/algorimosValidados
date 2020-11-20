//Devuelve la suma de 1 a N. Por ejemplo,  Sum1toN(3) devolverá la suma de 1+2+3, la cual es 6
function Sum1toN(z) {
    var sum = 0;
    for (var i = 0; i <= z; i++) {
        sum += i;
    }
    return sum;
}
// suma del primer y ultimo numero de un array
function sumFirstLast(arr) {
    return arr[0] + arr[arr.length - 1];
}
// Ya sea en el mismo archivo o en uno diferente, crea una prueba o función que devuelva la suma del número más grande y el más pequeño del array. Por ejemplo, sumMaxMin([1,3,10]) debería devolver 10 + 1 = 11, y sumMaxMin([-2,-5,-10]) debería devolver -2 + -10 = -12. Una vez que hayas escrito la prueba, ejecútala (sin escribir toda la función para asegurarte de que fallen todas las pruebas), luego completa la función cerciorándote de que pase todas las pruebas. 
function sumMaxMin(x) {
    var max = x[0],
        min = x[0];
    for (var i = 0; i <= x.length; i++) {
        if (max < x[i]) {
            max = x[i];
        } else if (min > x[i]) {
            min = x[i];
        }
    }
    return max + min;
}
describe("Sum1toN", function() {
    it("should return 3 when we pass 2 as an argument", function() {
        expect(Sum1toN(2)).toEqual(3);
    });
    it("should return 6 when we pass 3 as an argument", function() {
        expect(Sum1toN(3)).toEqual(6);
    });
    it("should return 10 when we pass 4 as an argument", function() {
        expect(Sum1toN(4)).toEqual(10);
    });
});

describe("sumFirstLast", function() {
    it("should return 3 when we pass [1,2] as an argument", function() {
        expect(sumFirstLast([1, 2])).toEqual(3);
    });
    it("should return 10 when we pass [2,3,8] as an argument", function() {
        expect(sumFirstLast([2, 3, 8])).toEqual(10);
    });
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() {
        expect(sumFirstLast([-6, 23, 3, -4])).toEqual(-10);
    });
});

describe("sumMaxMin", function() {
    it("suma mayor y menor del arreglo", function() {
        expect(sumMaxMin([4, 5, 2, 6, 7])).toEqual(9);
    });
    it("suma mayor y menor del arreglo", function() {
        expect(sumMaxMin([4, 5, 10, 2, 6, 7])).toEqual(12);
    });
    it("suma mayor y menor del arreglo", function() {
        expect(sumMaxMin([-4, 5, 2, 6])).toEqual(2);
    });
});