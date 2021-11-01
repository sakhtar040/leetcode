class TrieNode {
    constructor() {
        this.isEndOfNode = false;
        this.children = new Array(26).fill(null);
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(item) {
        let index;
        let length = item.length;
        for(let i=0; i<length; i++) {
            index = item[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if(this.root.children[index] == null) {
                this.root.children[index] = new TrieNode();
            }
            this.root = this.root.children[index];
        }
        this.root.isEndOfNode = true;
    }

    search(item) {
        let index;
        let length = item.length;

        for(let i=0; i<length; i++) {
            index = item[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if(this.root.children[index] == null) {
                return false;
            }
            this.root = this.root.children[index];
        }
        return this.root.isEndOfNode;
    }
}

const trie = new Trie();

trie.insert("the");
console.log(trie.search("the"));

