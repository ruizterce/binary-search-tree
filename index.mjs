import Tree from "./Tree.mjs";

const array = [1, 8, 3, 23, 7, 8, 3, 2, 5, 7, 10, 54, 4321, 526];

// Build the tree from an array
console.log("Building Balanced Binary Search Tree...");
const myTree = new Tree(array);
// Print the tree in console
console.log("Printing the tree:");
myTree.prettyPrint();
// Insert a few values
console.log("Inserting 4, 6, 12, 54 and 333...");
myTree.insert(4);
myTree.insert(6);
myTree.insert(12);
myTree.insert(54);
myTree.insert(333);
// Print the tree in console
console.log("Printing the tree:");
myTree.prettyPrint();
// Delete a couple values
console.log("Deleting 6 and 54...");
myTree.delete(6);
myTree.delete(54);
// Print the tree in console
console.log("Printing the tree:");
myTree.prettyPrint();
// Find a node
console.log("Finding the node with value 5");
console.log(myTree.find(5));
// Print a breadth-first level ordered list of the Nodes
console.log("Breadth-first level order list of Nodes:");
myTree.levelOrder(console.log);
// Print a InOrder list of the Nodes
console.log("InOrder list of nodes");
myTree.inOrder(console.log);
// Print a PreOrder list of the Nodes
console.log("PreOrder list of nodes");
myTree.preOrder(console.log);
