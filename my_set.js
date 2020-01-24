class MySet {
	constructor() {
		this.data = {};
	}
	add(value) {
		if (!value in this.data) {
			this.data.value = true;
		}
	}
	del(value) {
		if (value in this.data) {
			delete this.data.value;
		}
	}
	has(value) {
		if (value in this.data) { return true }
		return false;
	}

	static from(iterable) {
		for (let item in iterable) {
			this.add(item);
		}
	}
}
