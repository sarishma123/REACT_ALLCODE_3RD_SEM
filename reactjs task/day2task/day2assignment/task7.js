function fetchSettings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ theme: "dark", language: "en" });
    }, 2000);
  });
}

fetchSettings().then((settings) => {
  console.log(settings);
});
