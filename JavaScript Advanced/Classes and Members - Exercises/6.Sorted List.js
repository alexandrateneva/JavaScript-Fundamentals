class SortedList {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if (index >= 0 && index < this.list.length) {
            this.list.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (index >= 0 && index < this.list.length) {
            return this.list[index];
        }
    }
}

let myList = new SortedList();
myList.add(5);
myList.add(3);
myList.remove(0);
console.log(myList.get(0));
console.log(myList.size);