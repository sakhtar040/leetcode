var removeDuplicates = function (nums) {
	let obj = {};
	for (let i = 0; i < nums.length; i++) {
		if (!obj.hasOwnProperty(nums[i])) {
			obj[nums[i]] = nums[i];
		} else {
			nums.splice(i, 1);
			i--;
		}
	}
	return nums.length;
};
