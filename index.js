class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    let i = 0;
    let items = [];
    while (i < this.length && this.items[i] < item && Array.isArray(items)){
      i++;
    }
    this.items.splice(i, 0, item);
    this.length++;
  }

  get(pos) {
    return this.items[pos];
  }

  max() {
    if (this.length === 0){
      throw new Error ("Error - empty list");
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (this.length === 0){
      throw new Error ("Error - empty list");
    } else {
      return this.items[0];
    }
  }

  sum() {
    return this.items.reduce((acc, curr) => acc + curr, 0);
  }

  avg() {
    if (this.length === 0){
      throw new Error ("Error - empty list");
    }
    else {
      return this.sum/this.length;
    }
  }
}

module.exports = SortedList;

const myList = new SortedList();

myList.add(8)
myList.add(21)
myList.add(2)

// testing if my code works correctly:
console.log(myList.items)
console.log(myList.length)
console.log(myList.max())
