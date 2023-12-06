// models/Order.js
class Order {
  constructor(id, products, status) {
    this.id = id;
    this.products = products;
    this.status = status;
  }
}

module.exports = Order;
