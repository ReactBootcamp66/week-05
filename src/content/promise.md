chooseToppings()
  .then((toppings) => {
    return placeOrder(toppings);
  })
  .then((order) => {
    return collectOrder(order);
  })
  .then((burger) => {
    return eatHamburger(burger);
  })
  .catch(failureCallback);

chooseToppings()
  .then((toppings) => placeOrder(toppings))
  .then((order) => collectOrder(order))
  .then((burger) => eatHamburger(burger))
  .catch(failureCallback);

chooseToppings()
  .then(placeOrder)
  .then(collectOrder)
  .then(eatHamburger)
  .catch(failureCallback);

const arr = ['1', '2', '3', '4'];

parseInt('1'); // 1

const newArr = arr.map(parseInt); // [1, 2, 3, 4]

const wait = (interval) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, interval);
  });
};

wait(5000).then(() => {
  // islemi yap
});
