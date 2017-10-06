(function() {

    // // script goes here
    // function adjacentElementsProduct(inputArray) {
    //     var arr = [];
    //     for (var i = 1; i < inputArray.length; i++) {
    //         arr.push(inputArray[i] * inputArray[i - 1]);
    //     }

    //     function compareNum(a, b) {
    //         return a - b;
    //     }
    //     arr.sort(compareNum).reverse()
    //     return arr[0]
    // }

    // adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23])



    function adjacentElementsProduct(inputArray) {

        function adjacentElementsProduct(inputArray) {

            console.log(inputArray);

            var arr = [];
            var oneTop = -100;
            var iPush = 0;

            for (var i = 0; i < inputArray.length - 1; i++) {

                iPush = inputArray[i] * inputArray[i + 1];

                if (iPush > oneTop) {
                    oneTop = iPush;
                }

                console.log(oneTop);
                //console.log(arr.sort( (a, b) => b - a ));

            }

            return oneTop;
        }


    }

    adjacentElementsProduct([3, 6, -2, -5, 7, 3])

})();

// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');

    arr = arr.map(Number)

    //var s = arr.sort( (a, b) => { return a + b } ).join(' ');

    var n = arr.sort((a, b) => { return a - b }).reverse().shift();

    arr.push(n);

    console.log(arr);
}


var arr = ['Jone', 'John', 'Jone', 'Tom', 'Bob']

var p = [];

for (var i = 0; i < arr.length; i++) {

    var b = p.includes(arr[i]);

    console.log(b);

    p.push(arr[i]);
}

console.log(p);