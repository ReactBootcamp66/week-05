// malzemeleri sec
// siparisi ver
// siparisi topla
// hambugeri ye

chooseToppings((toppings) => {
  placeOrder(
    toppings,
    (order) => {
      collectOrder(
        order,
        (burger) => {
          eatHamburger(burger);
        },
        failureCallback
      );
    },
    failureCallback
  );
}, failureCallback);
