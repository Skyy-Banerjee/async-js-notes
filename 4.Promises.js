//! What are promises?
/*
They are objects{} that either return the successfully fetched data or the error (easier, cleaner than callbacks).
*/

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

const fetchPhotoDetails = (photo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`[Now, we have the photo-details for ${photo}]`);
      resolve("Details... 📸");
      reject("Details not found");
    }, 2000);
  });
};

//then-ables, better than callback hell=

fetchUser("Count Dracula 🧛🏻‍♂️")
  .then((user) => fetchUserPhotos(user.username))
  .then((photos) => fetchPhotoDetails(photos[0]))
  .then((details) => console.log(`Your photo details: ${details}`))
  .catch((err) => console.log(err))
  .finally(() => console.log("Process finished ✅"));
