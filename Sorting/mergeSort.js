const merge = (leftArr,rightArr)=> {
    const output = []
    let leftIndex = 0
    let rigthIndex = 0

    while(leftIndex < leftArr.length && rigthIndex < rightArr.length){
        const leftEl = leftArr[leftIndex]
        const rigthEl = rightArr[rigthIndex]

        if(leftEl<rigthEl) {
            output.push(leftEl)
            leftIndex++
        } else{
            output.push(rigthEl)
            rigthIndex++
        }
    }

    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rigthIndex)]

}

const mergeSort= array=> {
    if(array.length <= 1){
        return array
    }

    const middleIndex = Math.floor(array.length / 2)
    const leftArr = array.slice(0,middleIndex)
    const rightArr= array.slice(middleIndex) 
    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
    )
}

console.log(mergeSort([52,26,12,5,8,65,45,14,2,86,36,17,9,32,78,5]));