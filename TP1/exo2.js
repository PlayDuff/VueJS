var arr = [ { a: 1, b: 2 }, { a:2 , b: 4 }, { a: 9, b: 1 }, { a: 19, b: 29 }, { a: 187, b: 4 } ];
var arrSW = [ "Luke Skywalker", "Maître Yoda", "R2D2", "Padmé Amidala",  "Anakin Skywalker", "Obi-Wan Kenobi" ];

function remplaceAB(array){
    array.forEach(element => {
        element["a"] = element["b"];
    });
    console.log(array);
}
function remplaceABMap(array){
    tab = array.map(x => x["a"] = x["b"])
    console.log(tab);
}

function filter(array){
    tab = [];
    array.forEach(element => {
        if (element["a"] > 3){
            tab.push(element);
        }
    });
    console.log(tab);
}

function reduce(array){
    let perso = array.join(',');
    console.log(perso);
}

function reduceFilter(array){
    tab = [];
    array.forEach(element => {
        if (element.includes('Skywalker')){
            tab.push(element);
        }
    });
    let perso = tab.join(',');
    console.log(perso);
}

console.log(remplaceAB(arr));
console.log(remplaceABMap(arr));
console.log(filter(arr));
console.log(reduce(arrSW));
console.log(reduceFilter(arrSW));