import Tree from "./Tree.mjs";

const array = [1, 8, 3, 23, 7, 8, 3, 2, 5, 7, 10, 54, 4321, 526];

// Build the tree from the array
console.log("Building Balanced Binary Search Tree...");
const myTree = new Tree(array);
// Print the tree in console
console.log("Printing the tree:");
myTree.prettyPrint();
// Insert a few values
console.log("Inserting 4, 6, 9, 12, 54, 102 and 333...");
myTree.insert(4);
myTree.insert(6);
myTree.insert(9);
myTree.insert(12);
myTree.insert(54);
myTree.insert(102);
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
// Print the tree in console
console.log("Printing the tree:");
myTree.prettyPrint();
// Print a InOrder list of the Nodes
console.log("InOrder list of nodes");
myTree.inOrder(console.log);
// Print the tree in console
console.log("Printing the tree:");
myTree.prettyPrint();
// Print a PreOrder list of the Nodes
console.log("PreOrder list of nodes");
myTree.preOrder(console.log);
// Print the tree in console
console.log("Printing the tree:");
myTree.prettyPrint();
// Print a PostOrder list of the Nodes
console.log("PostOrder list of nodes");
myTree.postOrder(console.log);
// Print the tree in console
console.log("Printing the tree:");
myTree.prettyPrint();
// Print the height (number of edges on the longest path to a leaf) of the given nodes
console.log("Height of node 8:");
console.log(myTree.height(myTree.find(8)));
console.log("Height of node 102:");
console.log(myTree.height(myTree.find(102)));
console.log("Height of node 5:");
console.log(myTree.height(myTree.find(5)));
console.log("Height of node 12:");
console.log(myTree.height(myTree.find(12)));
// Print the tree in console
console.log("Printing the tree:");
myTree.prettyPrint();
// Print the depth (number of edges to the root node) of the given nodes
console.log("Depth of node 8:");
console.log(myTree.depth(myTree.find(8)));
console.log("Depth of node 102:");
console.log(myTree.depth(myTree.find(102)));
console.log("Depth of node 5:");
console.log(myTree.depth(myTree.find(5)));
console.log("Depth of node 12:");
console.log(myTree.depth(myTree.find(12)));
// Print the tree in console
console.log("Printing the tree:");
myTree.prettyPrint();
// Check if the tree is balanced
console.log("Is the tree balanced?");
console.log(myTree.isBalanced());
// Insert a few values
console.log("Inserting 34, 35, 40, 64, 3233 and 7255...");
myTree.insert(34);
myTree.insert(35);
myTree.insert(64);
myTree.insert(40);
myTree.insert(3233);
myTree.insert(7255);
// Print the tree in console
console.log("Printing the tree:");
myTree.prettyPrint();
// Check if the tree is balanced
console.log("Is the tree balanced?");
console.log(myTree.isBalanced());
// Rebalance the tree
console.log("Rebalancing...");
myTree.rebalance();
// Print the tree in console
console.log("Printing the tree:");
myTree.prettyPrint();
// Check if the tree is balanced
console.log("Is the tree balanced?");
console.log(myTree.isBalanced());
