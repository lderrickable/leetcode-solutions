import { arraytoLinkedList } from "../utils/conversion-utils.js";

/**
 * https://leetcode.com/problems/merge-k-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let listMergeInterval = 1;

    if(lists.length === 0) {
        return null;
    }

    while(listMergeInterval < lists.length) {
        for(let i=0; i<lists.length; i=i+(listMergeInterval*2)) {
            lists[i] = mergeTwoLists(lists[i], lists[i+listMergeInterval]);
        }
        listMergeInterval = listMergeInterval*2;
    }
    return lists[0]
};

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

console.log(mergeKLists([arraytoLinkedList([1,4,5]),arraytoLinkedList([1,3,4]),arraytoLinkedList([2,6])]));
console.log(mergeKLists([arraytoLinkedList([])]));
console.log(mergeKLists([arraytoLinkedList([], [])]));
console.log(mergeKLists([arraytoLinkedList([1,2]), arraytoLinkedList([])]));
console.log(mergeKLists([arraytoLinkedList([-1,0,2]), arraytoLinkedList([1,5])]));