function countSort(list) {
    const max = Math.max(...list), min = Math.min(...list);
    const offset = Math.abs(min);
    const range = max + offset + 1;
    console.log(range);
    const count = new Array(range).fill(0);
    console.log(count);
    const output = [];
    list.forEach(num => {
        count[num + offset] += 1;
    });
    for (let num = min; num <= max; num += 1) {
        while(count[num + offset] > 0) {
            output.push(num);
            count[num + offset] -= 1;
        }
    }
    return output;
}

const list = [7,6,8,11,2,4,3,7,1]

console.log(countSort(list));