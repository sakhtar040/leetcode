const longestCommonSubsequences = (str1, str2) => {
	let array = [];

	for (let i = 0; i <= str1.length; i++) {
		array[i] = [];
		for (let j = 0; j <= str2.length; j++) {
			if (i == 0 || j == 0) {
				array[i][j] = 0;
			} else if (str1[i-1] == str2[j-1]) {
				array[i][j] = array[i - 1][j - 1] + 1;
			} else {
                array[i][j] = Math.max(array[i - 1][j], array[i][j - 1]);
			}
		}
	}
	console.log(array);
	return array[str1.length][str2.length];
};

console.log("Length of longest common subsequence is: ", longestCommonSubsequences("abc", "abc"));
