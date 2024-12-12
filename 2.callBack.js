//Data fetching
const fetchUser = (userName) => {
  setTimeout(() => {
    return { userName: userName };
  }, 2000);
};

const user = fetchUser("Skyy");
//console.log(user) //! undefined

// Now with callBack()
const fetchUserCb = (userName, callback) => {
  console.log(`Fetching...⌛`);
  setTimeout(() => {
    console.log("Now we have the user");
    callback({ userName });
  }, 2000);
};

const userCb = fetchUserCb("Skyy CB", (userCb) => {
  console.log(`Your name is: ${userCb.user}`);
});
