function inverse(str){
    let tabLettre = str.split('');
    let motinverse = "";
    for (let i = str.length-1; i >= 0; i--){
        motinverse += tabLettre[i];
    }
    console.log(motinverse)
}
function replace(str){
    let tabLettre = str.split('');
    let motReplace = "";
    console.log(String.fromCharCode(tabLettre[1].charCodeAt()+1))
    for (let i = 0; i < str.length; i++){
        motReplace += String.fromCharCode(tabLettre[i].charCodeAt()+1);
    }
    console.log(motReplace);
}


inverse("hector");
replace("hector");