function outer_2() {
    console.log('outer');
    return function () {
       console.log('inner');

       return function () {
            console.log('inner of inner');
            return function () {
                console.log('inner of inner of inner');
            }
       }
    }
}

// console.log(outer_2());
outer_2()()()();