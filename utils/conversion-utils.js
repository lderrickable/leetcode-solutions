
/**
 * Convert an array into a linked list
 * @param {*} array 
 * @returns 
 */
export const arraytoLinkedList = (array) => {
    let firstNode;
    let previousNode;
    let currentNode;
    if(array.length === 0) {
        return null;
    }
    array.forEach((value) => {
        currentNode = {
            val: value,
            next: null
        };
        if(!firstNode) {
            firstNode = currentNode;
        } else {
            previousNode.next = currentNode;
        }
        previousNode = currentNode;
    });

    return firstNode;
}