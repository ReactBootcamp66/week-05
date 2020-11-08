const timeoutPromise = (interval) => {
  return Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done');
    }, interval);
  });
};

timeoutPromise(5000).then((message) => {
  console.log(message);
});

async function timeTest() {
  await timeoutPromise(5000);
  await timeoutPromise(5000);
  await timeoutPromise(5000);
}

timeTest();

// await timeoutPromise(5000);
