function gcd(x, y){
    if (!y) { //if y is zero, gcd is y
        return x 
} else {
    return gcd(y, x % y) // if y is not zero, gcd is y and remainder of x/y
    
}
}

console.log(gcd(10, 5))