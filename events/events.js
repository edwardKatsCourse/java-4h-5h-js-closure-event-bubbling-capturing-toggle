//bubbling - пузырь (от ребенка к родителю - вверх)
//capturing - от родителя к ребенку


//bubbling - снизу вверх (button...body) | Netscape | false
//capturing - сверху вниз (body...button) | Microsoft | true

function main() {
    //addEventListener(event type, what to do, is capture)

    let first = document.getElementById('first');
    first.addEventListener('click', function (event) {

        console.log('>>> capturing 1st div');
    }, true);

    let second = document.getElementById('second');
    second.addEventListener('click', function (e) {
        console.log('>>> capturing 2nd div');
    }, true);

    let third = document.getElementById('third');
    third.addEventListener('click', function (e) {
        console.log('>>> capturing 3rd div')
    }, true);

    let button = document.getElementById('button');
    button.addEventListener('click', function (e) {
        console.log('>>> capturing button');
    }, true);

    button.addEventListener('click', function (event) {
        console.log('bubbling >>> button');
        event.stopPropagation();
    });

    third.addEventListener('click', function (e) {
        console.log('bubbling >>> 3rd div');
    });

    second.addEventListener('click', function (e) {
        console.log('bubbling >>> 2nd div');
    });

    first.addEventListener('click', function () {
        console.log('bubbling >>> 1st div');
    });

    alert('Registration successful!!')
}

main();


function buttonClick(event) {
    let button = event.target;

    // console.log('>>>>> button click function');
}