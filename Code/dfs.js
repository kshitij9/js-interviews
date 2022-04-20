//Depth-First Search
const root = {
	val: 10,
	left: {
		val: 5,
		left: {
			val: 20,
		},
		right: {
			val: 7,
		},
	},
	right: {
		val: 12,
	},
};

const DFS = () => {
    let dfsValues = [];
    let stack = [root];
    let tempNode;

    while(stack.length) {
        tempNode = stack.shift();
        dfsValues.push(tempNode.val);
        if(tempNode.right) stack.unshift(tempNode.right);
        if(tempNode.left) stack.unshift(tempNode.left);
    }

    return dfsValues;
}

console.log(DFS());