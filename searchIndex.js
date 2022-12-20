
let searchArray = ['java', 'html', 'javascript', 'css']

function searchIndex(array, term){
    //Base case, checks if end of array has been reached
    if(array.length < 1) return -1
    //Recursive code
    if(array[0] === term) return 0
    return searchIndex(array.slice(1), term) +1 || -1
}

console.log(searchIndex(searchArray, ''))

