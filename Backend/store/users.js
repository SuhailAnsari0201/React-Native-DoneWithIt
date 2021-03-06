const users = [
  {
    id: 1,
    name: "Mosh",
    email: "mosh@domain.com",
    password: "123456",
  },
  {
    id: 2,
    name: "John",
    email: "john@domain.com",
    password: "123456",
  },
  {
    id: 3,
    name: "Suhail",
    email: "suhail@domain.com",
    password: "123456",
  },
  {
    id: 4,
    name: "Demo",
    email: "demo@domain.com",
    password: "123456",
  },
];

const getUsers = () => users;

const getUserById = (id) => users.find((user) => user.id === id);

const getUserByEmail = (email) => users.find((user) => user.email === email);

const addUser = (user) => {
  user.id = users.length + 1;
  users.push(user);
};

module.exports = {
  getUsers,
  getUserByEmail,
  getUserById,
  addUser,
};
