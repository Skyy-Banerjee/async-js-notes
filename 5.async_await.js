// Async functions return  promises - always
// ASYNC => AWAIT
const fetchNum = async () => {
  return 29;
};

//console.log(fetchNum()); //Promise { 29 }

//fetchNum().then((num) => console.log(num)); //29

const consoleFetchedNum = async () => {
  //console.log(fetchNum()); //Promise { 29 }
  console.log(await fetchNum()); //29
};

//consoleFetchedNum();

/*
ASYNC/AWAIT- Looks like sync. code, cleaner, no callbacks(), no thenables, no BS!
*/

//! Refactoring prev. file's code with async/await
const fetchUser = (username) => {
  return new Promise(function (resolve, reject) {
    console.log("[Waiting for the result.. ⏳]");
    setTimeout(() => {
      console.log("[Result:]");
      resolve({ username }); //resolve acts as the success-cb()
      reject("User not found"); //reject acts as the error-cb()
    }, 2000);
  });
};

const fetchUserPhotos = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`[Now, we have the photos for ${username}]`);
      resolve(["photo 1️⃣", "photo 2️⃣", "photo 3️⃣"]);
      reject("Photo not found");
    }, 2000);
  });
};

const fetchPhotoDetails = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`[Now, we have the photo-details for ${username}]`);
      resolve("Details... 📸📊📝");
      reject("Details not found");
    }, 2000);
  });
};
const displayData = async () => {
  const user = await fetchUser("Count Dracula🧛🏻‍♂️");
  //console.log(`User name: ${user}`);
  const photos = await fetchUserPhotos(user.username);
  const details = await fetchPhotoDetails(photos[0]);
  console.log(details);
};

displayData();
