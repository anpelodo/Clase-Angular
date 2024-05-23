// 🌑

// SECTION: Light dark mode toggle
const toggleSwitch = document.getElementById("toggleSwitch");

// Event listener for the toggle switch
toggleSwitch.addEventListener("click", switchTheme);

// Switch theme dynamically
function switchTheme() {
  const doc = document.documentElement;

  const state = doc.getAttribute("data-theme");

  // default state
  if (!state) doc.setAttribute("data-theme", "light");

  if (state === "light") {
    doc.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleSwitch.innerHTML = "🌞";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleSwitch.innerHTML = "🌜";
  }
}

// !SECTION

// //SECTION - User Card
import { getRandomUser } from "./user.js";

let userGrid = document.getElementById("user-grid")

function renderUser({ id, image, firstName, lastName, email, age, gender, birthDate }) {
  const userCardTemplate = document.getElementById("user-card-template");
  const userCard = userCardTemplate.content.cloneNode(true);

  const fullName = `${firstName} ${lastName}`;

  userCard.id = `user-${id}`;

  const imgEl = userCard.querySelector("header img");
  imgEl.src = image;
  imgEl.alt = `${fullName} profile picture`;

  userCard.querySelector(".body hgroup h4").textContent = fullName;
  userCard.querySelector(".body hgroup p").textContent = email;

  const details = userCard.querySelector(".details");

  details.innerHTML = '';

  details.innerHTML += `<p><strong>Age:</strong> ${age}</p>`;
  details.innerHTML += `<p><strong>Gender:</strong> ${gender}</p>`;
  details.innerHTML += `<p><strong>Birthdate:</strong> ${birthDate}</p>`;

  return userCard
}

async function addUser() {
  const user = await getRandomUser();
  
  const userCard = renderUser(user);
  userGrid.appendChild(userCard);
}
//!SECTION

// NOTE - At the begginning of the page load, add 1 user
addUser()

// SECTION: user buttons behavior
const addUserButton = document.getElementById("add-user");
addUserButton.addEventListener("click", addUser);

const deleteUserButton = document.getElementById("delete-users");
deleteUserButton.addEventListener("click", () => {
  userGrid.innerHTML = '';
});

const addFourUsersButton = document.getElementById("add-four-users");
addFourUsersButton.addEventListener("click", () => {
  for (let i = 0; i < 4; i++) {
    addUser();
  }
});
// !SECTION



