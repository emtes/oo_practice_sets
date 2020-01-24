class MySet {
	constructor() {
		this.data = {};
	}

	add(value) {
		if (!value in this.data) {
			this.data.value = 1;
		}
	}

	del(value) {
		if (value in this.data) {
			delete this.data.value;
		}
		return 'Item not in set';
	}

	has(value) {
		if (value in this.data) { return true }
		return false;
	}

	static from(iterable) {
		const newSet = new MySet();
		for (let item in iterable) {
			if (!item in newSet.data) {
				newSet.data.value = 1;
			}
		}
	}
}


let mySet = MySet.from([10, 20])
console.log(mySet.has(10) === true);
console.log(mySet.has(30) === false);

mySet.add(10);
console.log(mySet.data);

mySet.del(10);
console.log(mySet.has(10) === false);
