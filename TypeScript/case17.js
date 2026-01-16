var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base abstract class
var Content = /** @class */ (function () {
    function Content(title, author) {
        this.published = false;
        this.title = title;
        this.author = author;
    }
    Content.prototype.isPublished = function () {
        return this.published;
    };
    Content.prototype.publishIt = function () {
        this.published = true;
    };
    Content.prototype.getContent = function () {
        return "".concat(this.title, " by ").concat(this.author);
    };
    return Content;
}());
var Assignment = /** @class */ (function (_super) {
    __extends(Assignment, _super);
    function Assignment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dueDate = "No due date";
        return _this;
    }
    Assignment.prototype.setDueDate = function (dueDate) {
        this.dueDate = dueDate;
    };
    Assignment.prototype.getDueDate = function () {
        return this.dueDate;
    };
    Assignment.prototype.getType = function () {
        return "Assignment";
    };
    return Assignment;
}(Content));
var Instructor = /** @class */ (function (_super) {
    __extends(Instructor, _super);
    function Instructor(title, author) {
        return _super.call(this, title, author) || this;
    }
    Instructor.prototype.setDate = function (dt) {
        if (!this.isPublished() && dt !== null) {
            _super.prototype.setDueDate.call(this, dt);
        }
    };
    Instructor.prototype.publish = function () {
        _super.prototype.publishIt.call(this);
    };
    Instructor.prototype.getCont = function () {
        return "".concat(_super.prototype.getContent.call(this), " and the assignment due date is ").concat(_super.prototype.getDueDate.call(this));
    };
    Instructor.prototype.getType = function () {
        return _super.prototype.getType.call(this);
    };
    return Instructor;
}(Assignment));
var instructor = new Instructor("1984", "George");
instructor.setDate(new Date("2026-01-30"));
instructor.publish();
console.log(instructor.getCont());
console.log(instructor.getType());
