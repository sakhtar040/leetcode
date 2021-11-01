class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	addNode(data) {
		let rootNode = this.root;
		if (rootNode == null) {
			this.root = new Node(data);
			return;
		} else {
			const formTree = (rootNode) => {
				if (data < rootNode.data) {
					if (rootNode.left == null) {
						rootNode.left = new Node(data);
						return;
					} else {
						return formTree(rootNode.left);
					}
				} else if (data > rootNode.data) {
					if (rootNode.right == null) {
						rootNode.right = new Node(data);
						return;
					} else {
						return formTree(rootNode.right);
					}
				} else {
					return null;
				}
			};
			return formTree(rootNode);
		}
	}

	inOrderTraversal() {
		if (this.root == null) {
			return null;
		} else {
			const result = [];
			const traverse = (node) => {
				node.left && traverse(node.left);
				result.push(node.data);
				node.right && traverse(node.right);
			};
			traverse(this.root);
			return result;
		}
	}

	preOrderTraversal() {
		if (this.root == null) {
			return null;
		} else {
			const node = this.root;
			const result = [];
			const traverse = (node) => {
				result.push(node.data);
				node.left && traverse(node.left);
				node.right && traverse(node.right);
			};
			traverse(node);
			return result;
		}
	}

	postOrderTraversal() {
		if (this.root == null) {
			return null;
		} else {
			const node = this.root;
			const result = [];
			const traverse = (node) => {
				node.left && traverse(node.left);
				node.right && traverse(node.right);
				result.push(node.data);
			};
			traverse(node);
			return result;
		}
	}

	searchNode(data) {
		let rootNode = this.root;
		if (rootNode == null) {
			return "Tree is Empty";
		} else {
			const search = (rootNode) => {
				if (data > rootNode.data) {
					if (rootNode.right == null) return false;
					return search(rootNode.right);
				} else if (data == rootNode.data) {
					return "Item Found --> " + data;
				} else {
					if (rootNode.left == null) return false;
					return search(rootNode.left);
				}
			};
			return search(rootNode);
		}
	}

	deleteNode(data) {
		let rootNode = this.root;
		if (rootNode == null) {
			return null;
		} else {
			if (this.searchNode(data)) {
				const remove = (rootNode) => {
					if (rootNode == null) {
						return null;
					}
					if (data == rootNode.data) {
						if (rootNode.left == null && rootNode.right == null) {
							return null;
						}
						if (rootNode.left == null) {
							return rootNode.right;
						}
						if (rootNode.right == null) {
							return rootNode.left;
						}
						let tempNode = rootNode.right;
						while (tempNode.left != null) {
							tempNode = tempNode.left;
						}
						rootNode.data = tempNode.data;
						rootNode.right = null;
						return rootNode;
					} else if (data > rootNode.data) {
						rootNode.right = remove(rootNode.right);
						return rootNode;
					} else {
						rootNode.left = remove(rootNode.left);
						return rootNode;
					}
				};
				return remove(rootNode);
			} else {
				return "Item not Present, can not be deleted !!";
			}
		}
	}

	constructTreeFromPreOrder(preOrder) {
		let rootNode = new Node(preOrder[0]);
		let array = [];
		array.push(rootNode);

		for (let i = 1; i < preOrder.length; i++) {
			let temp = null;
			while (array.length && preOrder[i] > array[array.length - 1].data) {
				temp = array.pop();
			}

			if (temp != null) {
				temp.right = new Node(preOrder[i]);
				array.push(temp.right);
			} else {
				temp = array[array.length - 1];
				temp.left = new Node(preOrder[i]);
				array.push(temp.left);
			}
        }

        if (rootNode == null) {
			return null;
		} else {
			const node = rootNode;
			const result = [];
			const traverse = (node) => {
				node.left && traverse(node.left);
				result.push(node.data);
				node.right && traverse(node.right);
			};
			traverse(node);
			return result;
		}
	}
}

class Node {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

const binarySearchTree = new BinarySearchTree();

console.log(binarySearchTree.searchNode(50));

binarySearchTree.addNode(50);
binarySearchTree.addNode(60);
binarySearchTree.addNode(40);
binarySearchTree.addNode(55);
binarySearchTree.addNode(65);

console.log(binarySearchTree.searchNode(60));

binarySearchTree.addNode(6);
binarySearchTree.addNode(7);
binarySearchTree.addNode(8);
binarySearchTree.addNode(9);
binarySearchTree.addNode(10);

//binarySearchTree.deleteNode(60);

console.log("Inorder -> ", binarySearchTree.inOrderTraversal());
console.log("Preorder -> ", binarySearchTree.preOrderTraversal());
console.log("Postorder -> ", binarySearchTree.postOrderTraversal());

console.log("Pre -> In: ", binarySearchTree.constructTreeFromPreOrder(binarySearchTree.postOrderTraversal()));
