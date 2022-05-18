const firstName = prompt("What's your first name?");
const lastName = prompt("What's your last name?");
const favoriteColor = prompt("What's your favorite color?");

const password = `${firstName}${lastName}${favoriteColor}22`;

const spanpassword = document.getElementById("span-password");


spanpassword.innerHTML = `${password}`;
console.dir(spanpassword);
