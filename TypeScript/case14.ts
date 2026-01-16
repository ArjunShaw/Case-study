//Generic Class
class FeedbackBox<T> {
  private feedbacks: T[] = [];

  addFeedback(f: T) {
    this.feedbacks.push(f);
  }

  getAllFeedback(): T[] {
    return this.feedbacks;
  }
}

let obj1 = new FeedbackBox<string>();
obj1.addFeedback("Great service!");
obj1.addFeedback("Could be better.");
console.log(obj1.getAllFeedback());


//Generic Function
function getFirstItem<T>(items: T[]): T | undefined {
  return items[2];
}



console.log(getFirstItem<number>([10, 20, 30]));
console.log(getFirstItem<string>(["apple", "banana", "cherry"]));