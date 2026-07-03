const resolvePromise = new Promise((resolve) => {
  resolve("Promise resolved");
});

const rejectPromise = new Promise((resolve, reject) => {
  reject("Promise rejected");
});

resolvePromise.then((result) => {
  console.log(result);
});

rejectPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

const waitTwoSeconds = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Waited 2 seconds");
    }, 2000);
  });
};

function getData() {
  return new Promise((resolve) => {
    resolve("Data received");
  });
}

getData()
  .then((data) => {
    console.log(data);
    return waitTwoSeconds();
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

async function asyncExample() {
  const data = await getData();
  console.log(data);
}

async function waitExample() {
  const message = await waitTwoSeconds();
  console.log(message);
}

async function multipleAwaitExample() {
  const data = await getData();
  console.log(data);

  const waitMsg = await waitTwoSeconds();
  console.log(waitMsg);

  const finalMessage = await Promise.resolve("All done");
  console.log(finalMessage);
}

asyncExample();
waitExample();
multipleAwaitExample();
