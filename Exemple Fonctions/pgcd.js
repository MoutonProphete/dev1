function PGCD(a,b){
    // algorythme pour calculer le pgcd
    while (b !== 0){
        let temp = b;
        b = a % b;
        a = temp;
    }
    // le pgcd est stocké dans "a"
    alert("le pgcd est:" + a)
}
