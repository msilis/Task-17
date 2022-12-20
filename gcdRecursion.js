function gcd(x, y){
//if y is zero, gcd is y
    if (!y) { 
        return x 
} else {
// if y is not zero, gcd is y and remainder of x/y
    return gcd(y, x % y) 
    
}
}

console.log(gcd(10, 5))