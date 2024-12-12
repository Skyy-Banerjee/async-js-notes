//Dummy examples to simulate delays
const fetchUser = (username, callBack) => {
  setTimeout(() => {
    console.log("[Now we have the user name]");
    callBack({ username });
  }, 2000);
};

const fetchUserPhotos = (username, callback) => {
  setTimeout(() => {
    console.log(`[Now, we have the photos for ${username}]`);
    callback(["photo 1", "photo 2", "photo 3"]);
  }, 2000);
};

const fetchPhotoDetails = (photo, callback) => {
  setTimeout(() => {
    console.log(`[Now, we have the photo-details for ${photo}]`);
    callback("Details... 📸");
  }, 2000);
};

//The infamous CALLBACK-HELL 👿💀😵☠️❌
//Solution? - Promises{} 🤞🏻
fetchUser("Skyy", (user) => {
  console.log(`Your name is: ${user.username}`);
  fetchUserPhotos(user.username, (userPhotos) => {
    console.log(`Your photos are: ${userPhotos}`);
    fetchPhotoDetails(userPhotos[0], (details) => {
      console.log(`Your photo detail: ${details}, for ${userPhotos[0]} only`);
    });
  });
});
