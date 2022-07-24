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

### Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Insertion sort**    | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |

### References

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

### Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Merge sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | Yes       |           |

### References

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

### Complexity

 Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | No        |  Quicksort is usually done in-place with O(log(n)) stack space |

### References

- [GeeksforGeeks](https://www.geeksforgeeks.org/quick-sort/)

## Counting Sort

In computer science, **counting sort** is an algorithm for sorting 
a collection of objects according to keys that are small integers; 
that is, it is an integer sorting algorithm. It operates by 
counting the number of objects that have each distinct key value, 
and using arithmetic on those counts to determine the positions 
of each key value in the output sequence. Its running time is 
linear in the number of items and the difference between the 
maximum and minimum key values, so it is only suitable for direct 
use in situations where the variation in keys is not significantly 
greater than the number of items. However, it is often used as a 
subroutine in another sorting algorithm, radix sort, that can 
handle larger keys more efficiently.

Because counting sort uses key values as indexes into an array, 
it is not a comparison sort, and the `Ω(n log n)` lower bound for 
comparison sorting does not apply to it. Bucket sort may be used 
for many of the same tasks as counting sort, with a similar time 
analysis; however, compared to counting sort, bucket sort requires 
linked lists, dynamic arrays or a large amount of preallocated 
memory to hold the sets of items within each bucket, whereas 
counting sort instead stores a single number (the count of items) 
per bucket.

Counting sorting works best when the range of numbers for each array
element is very small.

### Algorithm

**Step I**

In first step we calculate the count of all the elements of the 
input array `A`. Then Store the result in the count array `C`.
The way we count is depicted below.

![Counting Sort](https://3.bp.blogspot.com/-jJchly1BkTc/WLGqCFDdvCI/AAAAAAAAAHA/luljAlz2ptMndIZNH0KLTTuQMNsfzDeFQCLcB/s1600/CSortUpdatedStepI.gif)

**Step II**

In second step we calculate how many elements exist in the input 
array `A` which are less than or equals for the given index. 
`Ci` = numbers of elements less than or equals to `i` in input array.

![Counting Sort](https://1.bp.blogspot.com/-1vFu-VIRa9Y/WLHGuZkdF3I/AAAAAAAAAHs/8jKu2dbQee4ap9xlVcNsILrclqw0UxAVACLcB/s1600/Step-II.png)

**Step III**

In this step we place the input array `A` element at sorted 
position by taking help of constructed count array `C` ,i.e what 
we constructed in step two. We used the result array `B` to store 
the sorted elements. Here we handled the index of `B` start from
zero.
 
![Counting Sort](https://1.bp.blogspot.com/-xPqylngqASY/WLGq3p9n9vI/AAAAAAAAAHM/JHdtXAkJY8wYzDMBXxqarjmhpPhM0u8MACLcB/s1600/ResultArrayCS.gif)

### Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Counting sort**     | n + r           | n + r               | n + r               | n + r     | Yes       | r - biggest number in array |

### References

- [Wikipedia](https://en.wikipedia.org/wiki/Counting_sort)
- [YouTube](https://www.youtube.com/watch?v=OKd534EWcdk&index=61&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [EfficientAlgorithms](https://efficientalgorithms.blogspot.com/2016/09/lenear-sorting-counting-sort.html)

## Heap Sort

Heap Sort is an in-place, non-stable, comparison-based sorting algorithm.

It does not require auxiliary data structures - it sorts the data in place and affects the original data (in-place). It doesn't preserve the relative order or equal elements. If you have two elements with the same value in an unsorted collection, their relative order might be changed (or stay the same) in the sorted collection (non-stable). Finally, the elements are compared to each other to find their order (comparison-based).

Although Heap Sort is in-place (doesn't require an auxillary data structure), to make the implementation a bit clear, we will recruit an additional array during sorting.

The mechanism underlying Heap Sort is fairly simple and some even call it "Improved Selection Sort".

It starts by converting the unsorted array into a heap - either a max-heap or min-heap. In the case of a max-heap, each parent holds a greater value than its descendants, making the root element the largest among the heap and vice versa.

Heap Sort relies on this heap condition.

At each iteration, the algorithm removes the root of the heap and pushes it into an empty array. After each removal, the heap restores itself, bubbling its second-largest (or second-smallest) element up to the root to preserve its heap condition. This process is also known as heapifying and you'll oftentimes see people refer to methods doing this as heapify.

Heap Sort continues shifting the newly located root elements into the sorted array until there is none left.

Using a max-heap in this manner will result in an array with elements in descending order. For the array to be in ascending order, one has to opt for a min-heap.

This sort of self-sorting and selective removal is reminiscent of Selection Sort (sans the self-sorting part) hence the parallel people draw.

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/1/1b/Sorting_heapsort_anim.gif)

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/4/4d/Heapsort-example.gif)

### Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Heap sort**         | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | 1         | No        |           |

### References

[stackabuse](https://stackabuse.com/heap-sort-in-javascript/)


## Binary Search

In computer science, binary search, also known as half-interval 
search, logarithmic search, or binary chop, is a search algorithm 
that finds the position of a target value within a sorted 
array. Binary search compares the target value to the middle 
element of the array; if they are unequal, the half in which 
the target cannot lie is eliminated and the search continues 
on the remaining half until it is successful. If the search 
ends with the remaining half being empty, the target is not 
in the array.

![Binary Search](https://upload.wikimedia.org/wikipedia/commons/8/83/Binary_Search_Depiction.svg)

Binary Search Algorithm: The basic steps to perform Binary Search are:

- Begin with the mid element of the whole array as a search key.
- If the value of the search key is equal to the item then return an index of the search key.
- Or if the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half.
- Otherwise, narrow it to the upper half.
- Repeatedly check from the second point until the value is found or the interval is empty.

### Complexity

**Time Complexity**: `O(log(n))` - since we split search area by two for every
next iteration.

### References

- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)
- [GeeksforGeeks](https://www.geeksforgeeks.org/binary-search/)