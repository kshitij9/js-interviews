//Breadth-First Search
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

const BFS = () => {
    let bfsValues = [];
    let queue = [root];
    let tempNode;
    while(queue.length) {
        tempNode = queue.pop();
        bfsValues.push(tempNode.val);
        if(tempNode.left) queue.unshift(tempNode.left);
        if(tempNode.right) queue.unshift(tempNode.right);
    }

    return bfsValues;
}

console.log(BFS());
