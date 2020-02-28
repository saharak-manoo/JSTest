const sortMaxValueToCenter = data => {
	return data
		.sort((a, b) => {
			return a - b;
		})
		.map((value, index, array) => {
			let p = ~~(array.length / 2);
			return index >= p ? array[array.length - index + p - 1] : value;
		});
};

// ข้อที่ 1
console.log('ข้อที่ 1');
console.log(sortMaxValueToCenter([1, 2, 3]));

// ข้อที่ 2
console.log('ข้อที่ 2');
console.log([3, 2, 1].sort());

// ข้อที่ 3
console.log('ข้อที่ 3');
console.log(sortMaxValueToCenter([1, 1, 5]));
