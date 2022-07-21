# Algorithms

## Seleciton Sort

This algorithm divides the input array into two sublists - a sorted and unsorted sublist. The sorted list is located at the start of the collection, and all elements to the right of the final sorted element are considered unsorted.

Initially, the sorted list is empty, while the rest of the collection is unsorted. Selection Sort goes through the unsorted sublist and finds the smallest or largest element.

The element is then swapped with the leftmost element of the unsorted sublist. Then, the sorted sublist is expanded to include that element.

This is repeated, finding the fitting element, swapping it with the leftmost element of the unsorted list, and expanding the sorted list to encompass it.

After each iteration, one less element needs to be checked, until the entire array or list is sorted. In other words, after the k-th iteration, the first k elements of the array or list are guaranteed to be sorted.

### Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Selection sort**    | n<sup>2</sup>   | n<sup>2</sup>       | n<sup>2</sup>       | 1         | No        |           |

### References

[stackabuse](https://stackabuse.com/selection-sort-in-javascript/)

## Insertion Sort

The idea behind Insertion Sort is often compared to the way people sort a hand of cards while playing Rummy.

In this card game, the dealer deals out cards to each player. Then, the players take the cards given to them one by one, sorting them in their hand in ascending order by inserting each card in its place.

During this entire process, the players hold one sorted pile of cards in their hands, while the unsorted pile from which they draw new cards is in front of them.

A very useful property of Insertion Sort is the fact that it doesn't need to know the entire array in advance in order for it to be sorted - it just inserts the given elements one by one.

This really comes in handy when we want to add more elements in an already sorted array, because Insertion Sort will add the new elements in their proper places without resorting the entire collection.

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Insertion sort**    | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |

## References

[stackabuse](https://stackabuse.com/selection-sort-in-javascript/)

## Merge Sort

- Divide and Conquer 

The Merge Sort algorithm is a sorting algorithm that is considered as an example of the divide and conquer strategy. So, in this algorithm, the array is initially divided into two equal halves and then they are combined in a sorted manner. We can think of it as a recursive algorithm that continuously splits the array in half until it cannot be further divided. This means that if the array becomes empty or has only one element left, the dividing will stop, i.e. it is the base case to stop the recursion. If the array has multiple elements, we split the array into halves and recursively invoke the merge sort on each of the halves. Finally, when both the halves are sorted, the merge operation is applied. Merge operation is the process of taking two smaller sorted arrays and combining them to eventually make a larger one.

### Pseudocode

•    Declare left variable to 0 and right variable to n-1 
•    Find mid by medium formula. mid = (left+right)/2
•    Call merge sort on (left,mid)
•    Call merge sort on (mid+1,rear)
•    Continue till left is less than right
•    Then call merge function to perform merge sort.

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Merge sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | Yes       |           |

## References

- [GeeksforGeeks](https://www.geeksforgeeks.org/merge-sort/)

## QuickSort

- Divide and Conquer

 It picks an element as a pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways. 

Always pick the first element as a pivot.
Always pick the last element as a pivot (implemented below)
Pick a random element as a pivot.
Pick median as the pivot.
The key process in quickSort is a partition(). The target of partitions is, given an array and an element x of an array as the pivot, put x at its correct position in a sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.

### Pseudocode for recursice QuickSort function

* low  –> Starting index,  high  –> Ending index */

quickSort(arr[], low, high) {

    if (low < high) {

        /* pi is partitioning index, arr[pi] is now at right place */

        pi = partition(arr, low, high);

        quickSort(arr, low, pi – 1);  // Before pi

        quickSort(arr, pi + 1, high); // After pi

    }

}

### Pseudocode for partition()

/* This function takes last element as pivot, places the pivot element at its correct position in sorted array, and places all smaller (smaller than pivot) to left of pivot and all greater elements to right of pivot */

partition (arr[], low, high)

{

    // pivot (Element to be placed at right position)
pivot = arr[high];  

 i = (low – 1)  // Index of smaller element and indicates the 
// right position of pivot found so far

for (j = low; j <= high- 1; j++){

 // If current element is smaller than the pivot
if (arr[j] < pivot){
i++;    // increment index of smaller element
 swap arr[i] and arr[j]
     }
 }

    swap arr[i + 1] and arr[high])
return (i + 1)
}

## Complexity

 Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | No        |  Quicksort is usually done in-place with O(log(n)) stack space |

## References

- [GeeksforGeeks](https://www.geeksforgeeks.org/quick-sort/)