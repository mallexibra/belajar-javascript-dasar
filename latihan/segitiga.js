var s = "";

for(var i = 0; i <= 10; i++){
    for(var j = 0; j <= i; j++){
        s += "*";
    }
    s += "\n";
}

for(var k = 10; k >= 0; k--){
    for(var l = 0; l <= k; l++){
        s += "*";
    }
    s += "\n";
}

console.log(s);