class LRU_Array {
	constructor(cacheLimit) {
		this.cacheLimit = cacheLimit;
		this.pageFault = 0;
		this.cache = [];
	}

	storeRequest(req) {
		if (!this.cache.includes(req)) {
			if (this.cache.length == this.cacheLimit) {
				this.cache.splice(0, 1);
			}
			this.cache.push(req);
			this.pageFault++;
		} else {
			let indexOfItem = this.cache.indexOf(req);
			this.cache.splice(indexOfItem, 1);
			this.cache.push(req);
		}
	}

	getCache() {
		return this.cache;
	}

	getPageFaultCount() {
		return this.pageFault;
	}
}

let cacheLimit = 3;
const lruArray = new LRU_Array(cacheLimit);

lruArray.storeRequest(1);
lruArray.storeRequest(2);
lruArray.storeRequest(3);
lruArray.storeRequest(4);
lruArray.storeRequest(2);
lruArray.storeRequest(1);
lruArray.storeRequest(4);
lruArray.storeRequest(5);
lruArray.storeRequest(2);

console.log(lruArray.getCache());
console.log(lruArray.getPageFaultCount());
