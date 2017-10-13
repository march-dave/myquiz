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
var dictionary = {};

for (var i = 0; i < arr.length; i++) {

    var b = p.includes(arr[i]);

    if (!b) {
        dictionary[arr[i]] = 1;
        p.push(arr[i]);
    } else {
        var n = dictionary[arr[i]];
        dictionary[arr[i]] = n + 1;
        console.log('n', n);
    }
}

console.log(dictionary);


const posts = [
    { id: 1, likes: [] },
    { id: 2, likes: ['Peter'] },
    { id: 3, likes: ['John', 'Mark'] },
    { id: 4, likes: ['Paul', 'Lilly', 'Alex'] },
    { id: 5, likes: ['Sarah', 'Michelle', 'Alex', 'John'] }
];

var dic;
var expectedOutput = [];

for (var i = 0; i < posts.length; i++) {

    dic = new Object();
    dic.id = posts[i].id;

    if (posts[i].likes.length == 0) {
        dic.text = 'No one likes this'
    } else if (posts[i].likes.length == 1) {

        var str = posts[i].likes;
        str += ' likes this';
        dic.text = str;

    } else if (posts[i].likes.length == 2) {

        var str = posts[i].likes;

        str = str.join();
        str = str.replace(",", " and ");
        str += ' likes this';
        dic.text = str

    } else if (posts[i].likes.length == 3) {

        var arr = posts[i].likes;
        var arrRet = [];
        var str = "";
        var strAnd = "";

        for (j = 0; j < arr.length; j++) {
            if (j <= 1) {
                arrRet.push(arr[j]);
            } else {
                strAnd = arr[j];
            }
        }

        str = arrRet.join(", ");
        str += ' and ' + strAnd;
        str += ' likes this';
        dic.text = str;

    } else if (posts[i].likes.length >= 4) {

        var arr = posts[i].likes;
        var arrRet = [];
        var str = "";
        var strAnd = "";

        for (j = 0; j < arr.length; j++) {
            if (j <= 1) {
                arrRet.push(arr[j]);
            } else {
                strAnd = arr.length - 2 + " others";
            }
        }

        str = arrRet.join(", ");
        str += ' and ' + strAnd;
        str += ' likes this';
        dic.text = str;

    }

    expectedOutput.push(dic);
}

console.log(expectedOutput);

//   // out 
// const expectedOutput = [
//     { id: 1, text: 'No one likes this' },
//     { id: 2, text: 'Peter likes this' },
//     { id: 3, text: 'John and Mark like this' },
//     { id: 4, text: 'Paul, Lilly and Alex like this' },
//     { id: 5, text: 'Sarah, Michelle and 2 others like this' }
// ];

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');

    arr = arr.map(Number)

    var str = arr.reverse().join(' ');
    console.log(str);
}

function main() {
    var arr = [];
    for (arr_i = 0; arr_i < 6; arr_i++) {
        arr[arr_i] = readLine().split(' ');
        arr[arr_i] = arr[arr_i].map(Number);
    }

}

// console.log();

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 9 2 -4 -4 0
// 0 0 0 -2 0 0
// 0 0 -1 -2 -4 0

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]