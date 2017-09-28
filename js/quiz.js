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