class Sorter {
  constructor() {
    this.arr = [];
    this.compareFunction = (a, b) => a - b;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    
    return this.arr;
  }

  sort(indices) {
    // your implementation
    indices.sort();
    let tempArr = [];
    for(let i in indices ){
      tempArr[i]=this.arr[indices[i]];}
    tempArr.sort(this.compareFunction);
   
    for(let i in indices ){
      this.arr[indices[i]]=tempArr[i];}
  
   }

  setComparator(compareFunction) {
    this.compareFunction=compareFunction;
  }
 
}

module.exports = Sorter;