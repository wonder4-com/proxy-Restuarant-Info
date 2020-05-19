var Trie = function() {
    this.value = {}
};
// this.value = {a:{}}
/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let firstLetter = word[0];
    if(this.value[firstLetter] === undefined) {
        this.value[firstLetter] = {}
    return this.insert
};

Trie.prototype.search = function(word) {
    // if(word.length === 0) {
    //     return true;
    // }
    // if(!this.value.includes(word[0])){
    //     return false;
    // }
    // return this.children.search(word.substring(1,word.length))
};

let trie = new Trie();
trie.insert("apple");
// console.log(trie.search("appl"));   // returns true
// console.log(trie);
