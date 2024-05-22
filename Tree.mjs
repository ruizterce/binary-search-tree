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

  // Delete the given value
  delete(value, node = this.root) {
    if (node === null) return node;
    if (value < node.data) {
      node.left = this.delete(value, node.left);
    } else if (value > node.data) {
      node.right = this.delete(value, node.right);
    } else {
      // Node with 1 child or no children
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
      // Node with 2 children - Copy and delete the successor
      node.data = this.minValue(node.right);
      node.right = this.delete(node.data, node.right);
    }
    return node;
  }

  // Find the successor of a node (the next smaller value)
  minValue(node) {
    let minV = node.data;
    while (node.left != null) {
      minV = node.left.data;
      node = node.left;
    }
    return minV;
  }

  // Return the node containing the given value
  find(value, node = this.root) {
    if (node === null || node.data === value) {
      return node;
    }

    if (value < node.data) {
      return this.find(value, node.left);
    } else {
      return this.find(value, node.right);
    }
  }

  // Run a callback function with every node as an argument in breadth-first level order. Return an ordered array of nodes if callback is not included.
  levelOrder(callback = null) {
    let node = this.root;
    if (node === null) return [];
    let queue = [node];
    let array = [];
    while (queue.length > 0) {
      let currentNode = queue.shift();
      if (callback === null) {
        array.push(currentNode);
      } else {
        callback(currentNode);
      }
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    if (callback === null) {
      return array;
    }
    return;
  }

  // Run a callback function with every node as an argument InOrder.  Return an ordered array of nodes if callback is not included.
  inOrder(callback = null, node = this.root, array = []) {
    if (node === null) return;
    if (node.left != null) {
      this.inOrder(callback, node.left, array);
    }
    if (callback === null) {
      array.push(node);
    } else {
      callback(node);
    }
    if (node.right != null) {
      this.inOrder(callback, node.right, array);
    }
    return array;
  }

  // Run a callback function with every node as an argument preOrder.  Return an ordered array of nodes if callback is not included.
  preOrder(callback = null, node = this.root, array = []) {
    if (node === null) return;
    if (callback === null) {
      array.push(node);
    } else {
      callback(node);
    }
    if (node.left != null) {
      this.preOrder(callback, node.left, array);
    }
    if (node.right != null) {
      this.preOrder(callback, node.right, array);
    }
    return array;
  }

  // Run a callback function with every node as an argument postOrder.  Return an ordered array of nodes if callback is not included.
  postOrder(callback = null, node = this.root, array = []) {
    if (node === null) return;
    if (node.left != null) {
      this.postOrder(callback, node.left, array);
    }
    if (node.right != null) {
      this.postOrder(callback, node.right, array);
    }
    if (callback === null) {
      array.push(node);
    } else {
      callback(node);
    }
    return array;
  }
}
