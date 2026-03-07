function submitOrder(user) {
  var shoppingCart, zipCode, shippingRate;
  
  OrderAPI.getShoppingCartAsync(user)
    .then(function (cart) {
      shoppingCart = cart;
      return CustomerAPI.getProfileAsync(user);
    })
    .then(function (profile) {
      zipCode = profile.zipCode;
      shippingRate = calculateShipping(shoppingCart, zipCode);
      return OrderAPI.placeOrderAsync(shoppingCart, shippingRate);
    })
    .then(function (orderSuccessful) {
      console.log(
        `Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`,
      );
    });
}