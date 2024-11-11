import { arraytoLinkedList } from "../utils/conversion-utils.js";

/**
 * https://leetcode.com/problems/reverse-nodes-in-k-group/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let nodesEmpty = false;
    let previousNode = null;
    let currentNode = null;

    if(head == undefined) {
        return null;
    } else if (head.next == undefined || k === 1) {
        return head;
    }
    currentNode = head;

    while(!nodesEmpty) {
        let [newHead, newPrevious] = reverseOrderToIndex(currentNode, k);
        if(newPrevious == undefined) {
            return head;
        }

        if(previousNode == undefined) {
            head = newHead;
        } else {
            previousNode.next = newHead;
        }
        previousNode = newPrevious;
        currentNode = previousNode.next;
        
        if(currentNode == undefined) {
            return head;
        }
    }
    return head;
};

function reverseOrderToIndex(head, k) {
    let count = 1;
    let currentNode = head.next;
    let newLastNode = head;
    let tempNode;

    while(count<k) {
        if(currentNode == undefined) {
            newLastNode.next = null;
            return reverseOrderToIndex(head, count);
        }

        tempNode = currentNode.next;
        currentNode.next = head;
        head = currentNode;
        currentNode = tempNode;

        count++;
    }

    if(currentNode != undefined) {
        newLastNode.next = currentNode;
    } else {
        newLastNode.next = null;
    }
    return [head, newLastNode];
}

// console.log(reverseKGroup(arraytoLinkedList([]), 1));
// console.log(reverseKGroup(arraytoLinkedList([1,2,3,4,5,6]), 1));
console.log(reverseKGroup(arraytoLinkedList([1,2,3,4,5,6]), 2));
console.log(reverseKGroup(arraytoLinkedList([1,2,3,4,5]), 2));
// console.log(reverseKGroup(arraytoLinkedList([1,2,3,4,5,6]), 3));
// console.log(reverseKGroup(arraytoLinkedList([1,2,3,4,5,6]), 3));
// console.log(reverseKGroup(arraytoLinkedList([1,2,3,4,5,6]), 4));
// console.log(reverseKGroup(arraytoLinkedList([1,2,3,4]), 4));
// console.log(reverseKGroup(arraytoLinkedList([1,2,3,4,5,6]), 5));
// console.log(reverseKGroup(arraytoLinkedList([1,2,3,4,5,6]), 15));