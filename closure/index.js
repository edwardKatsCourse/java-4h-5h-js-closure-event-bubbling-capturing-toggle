//lexical context


//class Person
//  public int age;
//  public void print() {
//      System.out.println(age); <- closure
//  }

let name = 'Peter';

//global scope
function outer() {
    //local scope = outer scope = parent function

    let returnValue = function () { //declaration

        //inner scope = child function
        let anotherPointlessVariable = '...';
        console.log(name);
    };

    return returnValue; //Function
}
let f = outer(); //Function
f();




//Declaration
//Call





//DaGeSH - problems with 'var'
//D - declaration multiple times inside the same scope
//G - globally accessible (outside 'global' scope - to 'window')
//S - scoping problems
//H - hoisting ('телега впереди лошади')