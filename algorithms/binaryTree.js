class BinaryTree {
	constructor() {
		this.root = null;
	}

	add(data) {
		const node = this.root;
		if (node == null) {
			this.root = new Node(data);
		} else {
			const formTree = (node) => {
				if (node.left == null) {
					node.left = new Node(data);
					return;
				} else if (node.right == null) {
					node.right = new Node(data);
					return;
				} else if (node.left != null) {
					return formTree(node.left);
				} else if (node.right != null) {
					return formTree(node.right);
				}
			};
			return formTree(node);
		}
	}

	delete(data) {
		const node = this.root;
		const remove = (node, data) => {
			if (node == null) {
				return null;
			} else {
				if (data == node.data) {
					if (node.left == null && node.right == null) {
						return null;
					}
					if (node.left == null) {
						return node.right;
					}
					if (node.right == null) {
						return node.left;
					}
					let tempNode = node.right;
					while (tempNode.left !== null) {
						tempNode = tempNode.left;
					}
					node.data = tempNode.data;
                    node.right = null;
					return node;
				} else {
					if (node.left != null) {
						node.left = remove(node.left, data);
						return node;
					} else {
						node.right = remove(node.right, data);
						return node;
					}
				}
			}
		};
		this.root = remove(node, data);
	}

	inOrderTraversal() {
		if (this.root == null) {
			return null;
		} else {
			const node = this.root;
			let array = [];
			const traverse = (node) => {
				node.left && traverse(node.left);
				array.push(node.data);
				node.right && traverse(node.right);
			};
			traverse(node);
			return array;
		}
	}

	preOrderTraversal() {
		if (this.root == null) {
			return null;
		} else {
			const node = this.root;
			let array = [];
			const traverse = (node) => {
				array.push(node.data);
				node.left && traverse(node.left);
				node.right && traverse(node.right);
			};
			traverse(node);
			return array;
		}
	}

	postOrderTraversal() {
		if (this.root == null) {
			return null;
		} else {
			const node = this.root;
			let array = [];
			const traverse = (node) => {
				node.left && traverse(node.left);
				node.right && traverse(node.right);
				array.push(node.data);
			};
			traverse(node);
			return array;
		}
	}
}

class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

const binaryTree = new BinaryTree();
binaryTree.add(1);
binaryTree.add(2);
binaryTree.add(3);
binaryTree.add(4);
binaryTree.add(5);
binaryTree.add(6);
binaryTree.add(7);

console.log(binaryTree.inOrderTraversal());
console.log(binaryTree.preOrderTraversal());
console.log(binaryTree.postOrderTraversal());

binaryTree.delete(4);

console.log(binaryTree.inOrderTraversal());
console.log(binaryTree.preOrderTraversal());
console.log(binaryTree.postOrderTraversal());
