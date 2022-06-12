var s = "";

for(var i = 1; i <= 10; i++){
    if(i % 2 == 0){
        for(var j = 1; j <= 3; j++){
            s += " #"
        }
        s += "\n"
    }else{
        for(var k = 1; k <= 3; j++){
            s += "# "
        }
        s += "\n"
    }
}

console.log(s);