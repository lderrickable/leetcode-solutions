export class MinHeap {
    constructor() {
        this.heap = [];
    }

    heapifyUp() {
        let currentIndex = this.heap.length-1;
        let parentIndex = this.getParentIndex(currentIndex);

        while(currentIndex > 0 && this.heap[parentIndex] > this.heap[currentIndex]) {
            this.swap(currentIndex, parentIndex);

            currentIndex = parentIndex;
            parentIndex = this.getParentIndex(currentIndex);
        }
    }

    heapifyDown(index) {
        let currentIndex = index;
        let childIndexLeft = this.getLeftChildIndex(currentIndex);
        let childIndexRight = this.getRightChildIndex(currentIndex);

        let smallest = currentIndex;

        if(childIndexLeft < this.heap.length && this.heap[smallest] > this.heap[childIndexLeft]) {
            smallest = childIndexLeft;
        }

        if(childIndexRight < this.heap.length && this.heap[smallest] > this.heap[childIndexRight]) {
            smallest = childIndexRight;
        }

        if(smallest !== currentIndex) {
            this.swap(currentIndex, smallest);
            this.heapifyDown(smallest);
        }
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
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

    pop() {
        if(this.heap.length === 0) {
            return null;
        } else if(this.heap.length === 1) {
            return this.heap.pop();
        }

        let smallest = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);

        return smallest;
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }
}

let newMinHeap = new MinHeap();

newMinHeap.push(5);
newMinHeap.push(3);
newMinHeap.push(8);
newMinHeap.push(6);
newMinHeap.push(1);
newMinHeap.push(9);
newMinHeap.push(7);

console.log(newMinHeap.heap);
console.log(newMinHeap.pop());
console.log(newMinHeap.heap);