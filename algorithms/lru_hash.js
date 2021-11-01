class LRU_Hash {
	constructor(cacheLimit) {
		this.length = 0;
		this.head = null;
		this.tail = null;
		this.cacheLimit = cacheLimit;
		this.pageFault = 0;
		this.hashTable = {};
	}

	isPresent(req) {
		//for searching in O(1)
		if (this.hashTable.hasOwnProperty(req) && this.hashTable[req] != null) {
			let currentNode = this.hashTable[req];
			if (currentNode.prev == null) {
				currentNode.next.prev = null;
				this.head = currentNode.next;
			}
			if (currentNode.prev) {
				currentNode.prev.next = currentNode.next;
			}
			delete this.hashTable[req];
			return true;
		}
		delete this.hashTable[req];
		return false;
	}

	push(node) {
		//O(1)
		this.tail.next = node;
		node.prev = this.tail;
		node.next = null;
		this.tail = node;
		Object.assign(this.hashTable, { [node.data]: node });
	}

	add(req) {
		const node = new Node(req);
		if (this.head == null) {
			this.head = node;
			this.tail = node;
			this.length++;
            this.pageFault++;
            Object.assign(this.hashTable, { [node.data]: node });
		} else {
			let isPresent = this.isPresent(req);
			if (!isPresent) {
				if (this.length == this.cacheLimit) {
					delete this.hashTable[this.head.data];
					this.head = this.head.next;
                    this.head.prev = null;
				}
				this.push(node);
				this.length + 1 <= this.cacheLimit && this.length++;
				this.pageFault++;
			} else {
				this.push(node);
			}
		}
	}

	getCache() {
		let currentNode = this.head;
		let array = [];
		while (currentNode) {
			array.push(currentNode);
			currentNode = currentNode.next;
		}
		return array;
	}

	getPageFault() {
		return this.pageFault;
	}
}

class Node {
	constructor(data) {
		this.data = data;
		this.prev = null;
		this.next = null;
	}
}

let cacheLimit = 3;
const lruHash = new LRU_Hash(cacheLimit);

lruHash.add(1);
lruHash.add(2);
lruHash.add(3);
lruHash.add(4);
lruHash.add(2);
lruHash.add(1);
lruHash.add(4);
lruHash.add(5);
lruHash.add(2);

console.log(lruHash.getCache());
console.log(lruHash.getPageFault());
