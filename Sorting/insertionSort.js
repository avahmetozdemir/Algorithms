function insertionSort(arr) {
    let i, key, j;
    const n = arr.length 
    for (i=1;i<n;i++) { // begin from second element to compare it with its left elemet and say i = 1
        key = arr[i];
        j = i -1  // by saying j = i -1, we are having an element that going to compare with i 

        while (j >= 0 && arr[j]> key) {  //we use && operator and tell the loop that control arr[j] > key , it is going to prevent infinite loop!!!
            arr[j+1] = arr[j] //that slides right element to left 
            j = j -1 // every slide decrease j element 
        }
        arr[j+1] = key
    }
    return arr
    
} 

let arr = [ 5 , 12, 1, 26, 4, 11]

const newArr  = insertionSort(arr)

console.log(newArr)