function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["User1", "User2", "User3"]);
    }, 1000);
  });
}

async function loadUsers() {
  const users = await fetchUsers();
  console.log(users);
}

loadUsers();
