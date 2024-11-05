/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

import { arraytoLinkedList } from "../utils/conversion-utils.js";

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let arrayTracker = [];
    let listHasMoreMembers = true;
    let currentNode = head;

    if(head.next == undefined && n === 1) {
        return null;
    } 

    while(listHasMoreMembers) {
        if(arrayTracker.length === n+1) {
            arrayTracker.shift();
        }
        arrayTracker.push(currentNode);
        
        if(currentNode.next == undefined) {
            listHasMoreMembers = false;
            if (arrayTracker.length === n+1) {
                arrayTracker[0].next = arrayTracker[2] == undefined ? null : arrayTracker[2];
            } else {
                head = arrayTracker[1];
            }
        }
        currentNode = currentNode.next;
    }
    return head;
};

console.log(removeNthFromEnd(arraytoLinkedList([1,2,3,4,5]), 2));
console.log(removeNthFromEnd(arraytoLinkedList([1]), 1));
console.log(removeNthFromEnd(arraytoLinkedList([1,2]), 1));
console.log(removeNthFromEnd(arraytoLinkedList([1,2,5,64,3]), 5));
