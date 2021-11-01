//my solution
const arr1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const arr2 = [2, 5, 6];
const n = 3;

const mergeSort = (arr) => {
	let length = arr.length;
	if (length < 2) return arr;
	let mid = Math.floor(length / 2);
	let left = arr.slice(0, mid);
	let right = arr.slice(mid);
	return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
	let array = [];
	let leftLength = left.length;
	let rightLength = right.length;
	let l = 0;
	let r = 0;
	while (l < leftLength && r < rightLength) {
		if (left[l] < right[r]) {
			array.push(left[l++]);
		} else {
			array.push(right[r++]);
		}
	}
	return array.concat(left.slice(l)).concat(right.slice(r));
};

const mergeSortedArray = (arr1, m, arr2, n) => {
	let arr = mergeSort(arr1.concat(arr2));
	return arr.splice(n);
};

console.log(mergeSortedArray(arr1, m, arr2, n));

//-------------------
var merge = function (nums1, m, nums2, n) {
	var len = m + n;
	m--;
	n--;
	while (len--) {
		if (n < 0 || nums1[m] > nums2[n]) {
			nums1[len] = nums1[m--];
		} else {
			nums1[len] = nums2[n--];
		}
	}
};
