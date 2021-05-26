// 1. Introduction 

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve('Success');
  } else {
    reject('Failed');
  }
});

p.then((message) => {
  console.log('This is in the then ' + message);
}).catch((message) => {
  console.log('This is in the catch ' + message);
})


// p.then will be called if promise is success. 
// p.catch will be called if promise is failed.



// 2. Replacing callbacks with Promise


const userLeft = false;
const userWatchingCatMeme = false

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: 'User Left',
//       message: ':('
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: 'User Watching Cat Meme',
//       message: 'WebDevSimplified < Cat'
//     });
//   } else {
//     callback('Thumbs up and Subscribe');
//   }
// }

// watchTutorialCallback((message) => {
//   console.log('Success: ' + message);
// }, (error) => {
//   console.log(error.name + ' ' + error.message)
// })


// promise replaces need to use callbacks

function watchTutorialPromise()  {
  return new Promise((resolve, reject) => {
    if (userLeft) { 
      reject({
        name: 'User Left',
        message: ':('
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat'
      });
    } else {
      resolve('Thumbs up and Subscribe');
    }
  })
}

watchTutorialPromise().then((message) => {
  console.log('Success: ' + message);
}).catch((error) => {
  console.log(error.name + ' ' + error.message)
});


// 3. Promise Examples

const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded');
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded');
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded');
});

// Three promises that only have resolve no reject. 

// Want them to all run at same time instead of one after one -- use promise.all with an array of promises, then do .then
// .then will give an array of all 3 resolve messages.

Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((messages) => {
  console.log(messages)
});

// promise.race do something as soon as one promise is completed.
// it will overturn as soon as first one completes, instead of all three complete, will only return one video

Promise.race([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((messages) => {
  console.log(messages)
});