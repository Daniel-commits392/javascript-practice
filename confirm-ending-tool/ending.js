function confirmEnd(start, end){
    if(start.endsWith(end)){
        return true ;
    }
    else{
        return false ;
    }
};
console.log(confirmEnd("Bastian", "n"))
// this is how the code looks like when u use the .endsWith() method.

function confirmEnding(str, strcheck){
    if(str.substring(str.length - strcheck.length) === strcheck){
        return true ;
    }
    else{
        return false ;
    }
};
console.log(confirmEnding("congratulation", "on"))
console.log(confirmEnding("Bastian", "n"))
console.log(confirmEnding("Connor", "n"))
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"))
console.log(confirmEnding("He has to give me a new name", "name"))
console.log(confirmEnding("Open sesame", "same") )
console.log(confirmEnding("Open sesame", "sage"))
console.log(confirmEnding("Open sesame", "game"))
console.log(confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain"))
// this is without using the .endsWith() method.