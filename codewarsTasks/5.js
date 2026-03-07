ShoppingCart.prototype.addButtonClicked = function (item) {
  this.checkQuantityAsync(item, this.addButtonClicked1.bind(this));
};

ShoppingCart.prototype.addButtonClicked1 = function ({ item, quantity }) {
  if (quantity > 0) {
    this.addToCartAsync(item, 1, (success) => {
      this.addButtonClicked2(success);
    });
  }
};

ShoppingCart.prototype.addButtonClicked2 = function (success) {
  if (success) {
    this.updateCartDisplayAsync((success) => this.addButtonClicked3(success));
  }
};

ShoppingCart.prototype.addButtonClicked3 = function (success) {
  this.showMessage(
    `${success ? "Successfully" : "Unsuccessfully"} added item to cart`,
  );
};
