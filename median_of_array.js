function findMedianSortedArrays(nums1, nums2) {
    // Make sure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;

    let low = 0;
    let high = m;

    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

        const maxX = (partitionX === 0) ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        const minX = (partitionX === m) ? Number.POSITIVE_INFINITY : nums1[partitionX];

        const maxY = (partitionY === 0) ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
        const minY = (partitionY === n) ? Number.POSITIVE_INFINITY : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            // Found the correct partition
            if ((m + n) % 2 === 0) {
                // Even number of elements, return the average of the middle elements
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                // Odd number of elements, return the middle element
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            // Move the partition to the left in nums1
            high = partitionX - 1;
        } else {
            // Move the partition to the right in nums1
            low = partitionX + 1;
        }
    }

    throw new Error("Input arrays are not sorted!");
}

// Example usage:
const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.0
