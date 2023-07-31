const posts = [
  { title: "Post One", body: "This is the Post One" },
  { title: "Post Two", body: "This is the Post Two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
}

createPost({ title: "Post Three", body: "The body doesn't matter" });
getPosts();
