function fetchUser(userId: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) resolve("Alice");
      else reject("User not found");
    }, 1000);
  });
}

fetchUser(1)
  .then((name) => console.log("User:", name))
  .catch((err) => console.error("Error:", err));

async function getUser() {
  try {
    const name = await fetchUser(1);
    console.log("User:", name);
  } catch (err) {
    console.error("Error:", err);
  }
}

// Chaining promises

function fetchOrders(user: string): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([`${user}'s Order 1`, `${user}'s Order 2`]);
    }, 1000);
  });
}

fetchUser(1)
  .then((user) => fetchOrders(user))
  .then((orders) => console.log("Orders:", orders))
  .catch((err) => console.error("Something went wrong:", err));

// Promise.all

const p1 = fetchUser(1);
const p2 = fetchOrders("Alice");

Promise.all([p1, p2]).then(([user, orders]) => {
  console.log("User:", user);
  console.log("Orders:", orders);
});
