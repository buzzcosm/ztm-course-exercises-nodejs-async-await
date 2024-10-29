// async-function.js

// Promise
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// ASYNC AWAIT - ES8
// async function fetchUsers() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await response.json();
//   console.log(data);
// }
// fetchUsers();

/* ****************** */
/* Realistic Scenario */
/* ****************** */

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
];

// Testing catch block
// const urls = [
//   'https://jsonplaceholde.typicode.com/users',
//   'https://jsonplaceholder.typicode.com/posts',
//   'https://jsonplaceholder.typicode.com/albums'
// ];

// const getData = async () => {
//   const [users, posts, albums] = await Promise.all(
//     urls.map((url) => fetch(url).then((res) => res.json()))
//   );
//   console.log("users", users);
//   console.log("posts", posts);
//   console.log("albums", albums);
// };
// getData();

// Error Handling
const getData = async () => {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    );
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch (error) {
    console.log('oops', error);
  }
};
getData();