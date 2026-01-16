class Bottle<T> {
  private contain: T | undefined;

//   constructor(con: T) {
//     this.contain = con;
//   }
  set(item: T) {
    this.contain = item
  }
  fill(item: T): void {
    this.contain = item;
    console.log("Bottle filled");
  }
  empty(){
    console.log("Bottle emptied");
    return this.contain;
  }
  getContent() {
    return this.contain;
  }
}

const drink = new Bottle<string>();
drink.set("coke")
// drink.fill("coke");
console.log(drink.getContent());
drink.empty();

