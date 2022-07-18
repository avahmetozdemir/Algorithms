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