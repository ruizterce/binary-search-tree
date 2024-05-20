import Tree from "./Tree.mjs";

const array = [1, 8, 3, 23, 7, 8, 3, 2, 5, 7, 10, 54, 4321, 526];

// Build the tree from an array
console.log("Building Balanced Binary Search Tree...");
const myTree = new Tree(array);
// Print the tree in console
console.log("Printing the tree:");
myTree.prettyPrint();
// Insert a few values
console.log("Inserting 4, 6, 12, 54 and 333");
myTree.insert(4);
myTree.insert(6);
myTree.insert(12);
myTree.insert(54);
myTree.insert(333);
// Print the tree in console
console.log("Printing the tree:");
myTree.prettyPrint();
