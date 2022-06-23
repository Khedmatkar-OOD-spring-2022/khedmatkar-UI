export const getStorage = (storage) => {
  return {
    id: "a694b474-87f2-4875-af1d-410ca969f129",
    username: "erfanfi79",
    firstName: "عرفان",
    lastName: "فراوانی",
    email: "erfanfaravani@gmail.com",
    birthday: "2012-01-07",
    password: "FsN4wbuALVQLAZq",
    isLogin: true,
  };
};

export const setUserId = (id) => localStorage.setItem("id", id);

export const setUserInStorage = (storage, value) =>
  localStorage.setItem(storage, JSON.stringify([...value]));

export const updateStorage = (users, myUser, login) => {
//   const myVerifyUserIdx = users.findIndex((user) => user.id === myUser.id);
//   users.splice(myVerifyUserIdx, 1);
//   if (login) myUser.isLogin = login;
//   users.push(myUser);
  setUserInStorage("users", users);
};
