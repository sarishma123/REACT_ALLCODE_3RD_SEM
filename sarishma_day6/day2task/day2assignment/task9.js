function fetchUsersWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve(["UserA", "UserB"])
        : reject(new Error("Failed to load users"));
    }, 1000);
  });
}

async function loadUsersSafe() {
  try {
    const users = await fetchUsersWithError();
    console.log(users);
  } catch (error) {
    console.log("Something went wrong. Please try again.");
  }
}

loadUsersSafe();
