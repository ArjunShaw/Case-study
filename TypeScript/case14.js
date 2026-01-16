//Generic Class
var FeedbackBox = /** @class */ (function () {
    function FeedbackBox() {
        this.feedbacks = [];
    }
    FeedbackBox.prototype.addFeedback = function (f) {
        this.feedbacks.push(f);
    };
    FeedbackBox.prototype.getAllFeedback = function () {
        return this.feedbacks;
    };
    return FeedbackBox;
}());
var obj1 = new FeedbackBox();
obj1.addFeedback("Great service!");
obj1.addFeedback("Could be better.");
console.log(obj1.getAllFeedback());
//Generic Function
function getFirstItem(items) {
    return items[2];
}
console.log(getFirstItem([10, 20, 30]));
console.log(getFirstItem(["apple", "banana", "cherry"]));
