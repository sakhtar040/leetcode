class Node {
    constructor(data, left=null, right=null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor(root) {
        this.root = root;
    }

    printLeftView() {
        if(this.root == null) {
            return null;
        } else {
            const result = [];
            const preOrder = (node) => {
                result.push(node.data);
                if(node.left) {
                    preOrder(node.left);
                }
                if(node.right) {}
            }
            preOrder(this.root)
            return result;
        }
    }

    printOuterView() {
        if(this.root == null) {
            return null;
        } else {
            const result = []
            const inOrderLeft = (node) => {
                if(node.left) {
                    inOrderLeft(node.left);
                }
                result.push(node.data);
            }
            inOrderLeft(this.root);

            const inOrderRight = (node) => {
                result.push(node.data);
                if(node.right){
                    inOrderRight(node.right);
                }
            }
            inOrderRight(this.root.right);
            return result;
        }
    }
}

const node = new Node(1);
node.left = new Node(2);
node.right = new Node(3);
node.left.left = new Node(4);
node.left.right = new Node(5);
node.right.left = new Node(6);
node.right.right = new Node(7);

const tree = new Tree(node);
console.log(tree.printLeftView());

console.log(tree.printOuterView());