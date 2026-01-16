// Implement a PromotionSystem observer that announces special offers
// to customers when a drink is served
// Customer Observer
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.notify = function (msg) {
        console.log("Customer: ".concat(msg));
    };
    return Customer;
}());
// Inventory Observer
var Inventory = /** @class */ (function () {
    function Inventory() {
    }
    Inventory.prototype.notify = function (msg) {
        console.log("Inventory: ".concat(msg));
    };
    return Inventory;
}());
// PromotionSystem Observer 
var PromotionSystem = /** @class */ (function () {
    function PromotionSystem() {
    }
    PromotionSystem.prototype.notify = function (msg) {
        console.log("Congratulations: you Get 20% OFF on your next drink!");
    };
    return PromotionSystem;
}());
// Subject
var DrinkOrder = /** @class */ (function () {
    function DrinkOrder() {
        this.observers = [];
    }
    DrinkOrder.prototype.addObserver = function (obj) {
        this.observers.push(obj);
    };
    DrinkOrder.prototype.notifyAll = function (msg) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.notify(msg);
        }
    };
    DrinkOrder.prototype.completeOrder = function () {
        this.notifyAll("Order complete!");
    };
    return DrinkOrder;
}());
var order = new DrinkOrder();
var ob1 = new Customer();
var ob2 = new Inventory();
var ob3 = new PromotionSystem();
order.addObserver(ob1);
order.addObserver(ob2);
order.addObserver(ob3);
order.completeOrder();
