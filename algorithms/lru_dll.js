class LRU_DLL {
	constructor(cacheLimit) {
		this.length = 0;
		this.head = null;
		this.cacheLimit = cacheLimit;
		this.pageFault = 0;
	}

	isPresent(req) {
		let currentNode = this.head;
		while (currentNode) {
			if (req == currentNode.data) {
				if (currentNode.prev == null) {
					currentNode.next.prev = null;
					this.head = currentNode.next;
				}
				if (currentNode.prev) {
					currentNode.prev.next = currentNode.next;
				}
				return true;
			}
			currentNode = currentNode.next;
		}
		return false;
	}

	push(node) {
		let currentNode = this.head;
		while (currentNode.next) {
			currentNode = currentNode.next;
		}
		currentNode.next = node;
		node.prev = currentNode;
	}

	add(req) {
		const node = new Node(req);
		if (this.head == null) {
			this.head = node;
            this.length++;
            this.pageFault++;
		} else {
            let isPresent = this.isPresent(req);
            console.log(req, isPresent, this.length, this.pageFault);
			if (!isPresent) {
                if (this.length == this.cacheLimit) {
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
const linkedList = new LRU_DLL(cacheLimit);

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(2);
linkedList.add(1);
linkedList.add(4);
linkedList.add(5);
linkedList.add(2);

console.log(linkedList.getCache());
console.log(linkedList.getPageFault());
