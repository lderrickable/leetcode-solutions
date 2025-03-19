export class MaxHeap {
    constructor() {
        this.heap = []
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        let parentIndex = this.getParentIndex(currentIndex);

        while(currentIndex > 0 && this.heap[parentIndex] < this.heap[currentIndex]) {
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.getParentIndex(currentIndex);
        }
    }

    heapifyDown(index) {
        let leftIndex = this.getLeftChildIndex(index);
        let rightIndex = this.getRightChildIndex(index);
        let largest = index;

        if(leftIndex < this.heap.length && this.heap[leftIndex] > this.heap[largest]) {
            largest = leftIndex;
        }

        if(rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[largest]) {
            largest = rightIndex;
        }

        if(largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
        }
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    pop() {
        if(this.heap.length === 0) {
            return null;
        } else if (this.heap.length === 1) {
            return this.heap.pop();
        }
        
        let largest = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return largest;
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    getParentIndex(index) {
        return Math.floor((index-1)/2);
    }

    getLeftChildIndex(index) {
        return (index*2) + 1;
    }

    getRightChildIndex(index) {
        return (index*2) + 2;
    }
}

let newMaxHeap = new MaxHeap();

newMaxHeap.push(5);
newMaxHeap.push(3);
newMaxHeap.push(8);
newMaxHeap.push(6);
newMaxHeap.push(1);
newMaxHeap.push(9);
newMaxHeap.push(7);

console.log(newMaxHeap.heap);
console.log(newMaxHeap.pop());
console.log(newMaxHeap.heap);