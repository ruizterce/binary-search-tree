import Node from "./Node.mjs";

export default class Tree {
  constructor(array) {
    this.array = array;
    this.root = this.buildTree(array);
  }

  // MergeSort an array removing duplicates
  mergeSort(array) {
    if (array.length <= 1) return array;
    const mid = Math.ceil(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid, array.length);
    let leftSorted = this.mergeSort(left);
    let rightSorted = this.mergeSort(right);
    let arraySorted = [];

    while (leftSorted.length > 0 || rightSorted.length > 0) {
      if (
        rightSorted.length <= 0 ||
        (leftSorted.length > 0 && leftSorted[0] < rightSorted[0])
      ) {
        arraySorted.push(leftSorted.shift());
      } else if (
        leftSorted.length <= 0 ||
        (rightSorted.length > 0 && rightSorted[0] < leftSorted[0])
      ) {
        arraySorted.push(rightSorted.shift());
      } else if (leftSorted[0] === rightSorted[0]) {
        // If both compared values are equal, we only save one of them and remove the duplicate.
        arraySorted.push(leftSorted.shift());
        rightSorted.shift();
      }
    }
    return arraySorted;
  }

  // Build the Tree
  buildTree(array, sorted = false) {
    if (array.length === 0) return null;
    if (!sorted) {
      // Sort the array at the start of first iteration
      array = this.mergeSort(array);
    }
    let mid = Math.ceil(array.length / 2) - 1;
    let node = new Node(array[mid]);

    node.left = this.buildTree(array.slice(0, mid), true);
    node.right = this.buildTree(array.slice(mid + 1, array.length), true);

    return node;
  }

  // Print the Tree in console
  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  // Insert the given value refusing duplicates
  insert(value, node = this.root) {
    const dupeMsg = "Oops, " + value + " is already in the tree.";
    if (value === node.data) {
      console.log(dupeMsg);
      return;
    }
    if (value < node.data) {
      if (node.left === null) {
        node.left = new Node(value);
        return;
      }
      return this.insert(value, node.left);
    }
    if (value > node.data) {
      if (node.right === null) {
        node.right = new Node(value);
        return;
      }
      return this.insert(value, node.right);
    }
  }
}
