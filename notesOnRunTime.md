


/*   STEP ONE RUN TIME NOTES

Results for the tinyArray
insert 43 μs
append 95.1 μs

Results for the smallArray
insert 47.9 μs
append 94.6 μs

Results for the mediumArray
insert 166.6 μs
append 121 μs

Results for the largeArray
insert 8.6065 ms
append 510.1 μs

Results for the extraLargeArray
insert 975.8502 ms
append 2.7951 ms

the Append function scaled in a non-linear fashion, not much change at the smallest level, actually running faster on the small over the tiny
but jumping greatly as the size increased, the larger it got the greater the difference in scale.

The insert function scaled almost exponetially after the medium array, increasing in run times at a dramatic fashion.

For that reason I would say that the Append scaled better, because while it may be slower at the smalles of scales, (the time difference hardly matters at that point) it had a significatanly faster runtime during the larger arrays, I would say that this means that the append is better because of the reasons listed below.





Unshift is slower than Push 
Because unshift() has to increment all the elements that are already present in the Array. But, push() only has to insert an element at the end of the array, so none of the Array elements' index has to change. 

*/