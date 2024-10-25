/**
 * https://leetcode.com/problems/add-two-numbers/description/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

import { arraytoLinkedList } from "../utils/conversion-utils.js";

class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 * Success
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let whileTrue = true;
    let carry = 0;
    let previousNode;
    let currentNode;
    let firstNode;

    while(whileTrue) {
        let add = l1.val + l2.val + carry;
        let digit = add % 10;
        carry = add > 9 ? 1 : 0;
        currentNode = new ListNode(digit, null);
        if(!firstNode) {
            firstNode = currentNode;
        } else {
            previousNode.next = currentNode;
        }
        previousNode = currentNode;

        l1 = l1.next;
        l2 = l2.next;

        if(!l1 && !!l2){
            l1 = new ListNode(0, null);
        } else if (!!l1 && !l2) {
            l2 = new ListNode(0, null);
        } else if(!l1 && !l2) {
            whileTrue = false;
        }
    }

    return firstNode;
};

// console.log(addTwoNumbers(
//     arraytoLinkedList([2,4,3]), 
//     arraytoLinkedList([5,6,4])
// ))
// console.log(addTwoNumbers(
//     arraytoLinkedList([0,0]), 
//     arraytoLinkedList([0,0])
// ))
console.log(addTwoNumbers(
    arraytoLinkedList([9,9,9,9,9,9,9]), 
    arraytoLinkedList([9,9,9,9])
))