export class UnionFindFromGrid {
    constructor(grid) {
        this.unionArray = new Array(grid.length*grid[0].length);
        this.numberOfDisjointSets = grid.length*grid[0].length;

        for(let i=0; i<grid.length; i++) {
            for(let j=0; j<grid[0].length; j++) {
                this.unionArray[i*grid[0].length + j] = i*grid[0].length + j;
            }
        }
    }

    union(node1, node2) {
        let found1 = this.find(node1);
        let found2 = this.find(node2);

        if(found1 !== found2) {
            this.unionArray[found1] = found2;
            this.numberOfDisjointSets--;
        }
    }

    find(node) {
        if(this.unionArray[node] === node) {
            return node;
        }

        this.unionArray[node] = this.find(this.unionArray[node]);
        return this.unionArray[node];
    }
}