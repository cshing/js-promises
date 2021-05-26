const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback()
  }, 2000);
}

// getPosts();

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);


// createPost takes 2s to happen, but getPosts takes 1s. When getPosts is done, the DOM has been updated and so it never gets to getPosts.
// we can use async callback to handle this.
// make getPosts() as the callback so that getPosts will be run right after new post is pushed/createPost is run
// with the callback, getPosts is run after a post is pushed.