import { arraytoLinkedList } from "../utils/conversion-utils.js";

/**
 * https://leetcode.com/problems/swap-nodes-in-pairs/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head == undefined) {
        return null;
    } else if(head.next == undefined) {
        return head;
    }
    let placeholder = null;
    let moreNodes = true;
    let currentNode = null;
    let previousNode = null;
    
    placeholder = head.next;
    head.next = placeholder.next;
    placeholder.next = head;
    head = placeholder;
    currentNode = head.next.next;
    previousNode = head.next;

    while(moreNodes) {
        if(currentNode == undefined || currentNode.next == undefined){
            moreNodes = false;
            break;
        }
        placeholder = currentNode.next;
        previousNode.next = placeholder;
        currentNode.next = placeholder.next;
        placeholder.next = currentNode;
        currentNode = currentNode.next;
        previousNode = placeholder.next;
    }

    return head;
};

console.log(swapPairs(arraytoLinkedList([1,2,3])));
console.log(swapPairs(arraytoLinkedList([])));
console.log(swapPairs(arraytoLinkedList([1])));
console.log(swapPairs(arraytoLinkedList([0,2,3,4,5,6,7])));