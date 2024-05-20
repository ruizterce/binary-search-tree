import Tree from "./Tree.mjs";

const array = [1, 8, 3, 23, 7, 8, 3, 2, 5, 7, 10, 54, 4321, 526];

// Build the tree from an array
console.log("Building Balanced Binary Search Tree...");
const myTree = new Tree(array);
// Print the tree in console
console.log("Printing the tree:");
myTree.prettyPrint();
