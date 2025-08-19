//const { createElement } = require("react");

console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

//const body = document.getElementsByTagName("body")[0]; // we can append it directly to body at the bottom without having to create a variable for it first

const newPost = document.createElement("article");
newPost.classList.add("post");

const postContent = document.createElement("p");
postContent.classList.add("post__content");
postContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const footer = document.createElement("footer");
footer.classList.add("post__footer");

const userName = document.createElement("span");
userName.classList.add("post__username");
userName.textContent = "@username";

const postButton = document.createElement("button");
postButton.classList.add("post__button");
postButton.setAttribute("type", "button");
//postButton.setAttribute("data-js", "like-button"); // we don't need this cause the post button is already created in JS so it can be targeted immediately
postButton.textContent = "♥ Like";
postButton.addEventListener("click", handleLikeButtonClick);

footer.append(userName, postButton);
newPost.append(postContent, footer);
document.body.append(newPost);
