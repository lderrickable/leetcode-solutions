import { arraytoLinkedList } from "../utils/conversion-utils.js";

/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let returnNode;
    let currentList1 = list1;
    let currentList2 = list2;
    let previousListItem;

    if(list1 == undefined && list2 == undefined) {
        return null;
    } else if (list1 == undefined) {
        return list2;
    } else if (list2 == undefined) {
        return list1;
    }

    if(currentList1.val < currentList2.val) {
        previousListItem = currentList1;
        currentList1 = currentList1.next;
    } else {
        previousListItem = currentList2;
        currentList2 = currentList2.next;
    }
    returnNode = previousListItem;

    while(currentList1 != undefined && currentList2 != undefined) {
        if(currentList1.val < currentList2.val) {
            previousListItem.next = currentList1;
            previousListItem = currentList1;
            currentList1 = currentList1.next;
        } else {
            previousListItem.next = currentList2;
            previousListItem = currentList2;
            currentList2 = currentList2.next;
        }
    }

    previousListItem.next = currentList1 == undefined ? currentList2 : currentList1;
    return returnNode;
};

console.log(mergeTwoLists(arraytoLinkedList([1,2,4]), arraytoLinkedList([1,3,4])));
console.log(mergeTwoLists(arraytoLinkedList([]), arraytoLinkedList([])));
console.log(mergeTwoLists(arraytoLinkedList([]), arraytoLinkedList([0])));
console.log(mergeTwoLists(arraytoLinkedList([1,1]), arraytoLinkedList([2,2])));
console.log(mergeTwoLists(arraytoLinkedList([1]), arraytoLinkedList([])));