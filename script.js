let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  const maintitle = document.querySelector("#main-title");
  maintitle.textContent = "DOM";

  // Part 2
  const body = document.querySelector("body");
  body.style.backgroundColor = "aqua";

  // Part 3
  const favEl = document.querySelector("li:last-child");
  favEl.parentElement.removeChild(favEl);

  // Part 4
  const specialTitle = document.querySelectorAll(".special-title");

  specialTitle.forEach((element) => {
    element.style.fontSize = "2rem";
  });

  // Part 5
  const pastRacesList = document.getElementById("past-races");

  const listItems = pastRacesList.getElementsByTagName("li");
  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].textContent === "Chicago") {
      pastRacesList.removeChild(listItems[i]);
    }
  }

  // Part 6
  const newCityListItem = document.createElement("li");
  newCityListItem.textContent = "Paris";
  const pastRaces = document.getElementById("past-races");
  pastRaces.appendChild(newCityListItem);

  // Part 7
  const newB = document.createElement("div");
  newB.className = "blog-post";
  const cityTitle = document.createElement("h2");
  cityTitle.textContent = "Paris";
  const cityContent = document.createElement("p");
  cityContent.textContent = "Let Race in the city of love.";
  newB.appendChild(cityTitle);
  newB.appendChild(cityContent);
  const mainContent = document.querySelector(".main");
  mainContent.appendChild(newB);

  // Part 8
  const quoteTitle = document.querySelector("#quote-title");
  quoteTitle.addEventListener("click", randomQuote);

  // Part 9
  const blogPostE = document.querySelectorAll(".blog-post");
  blogPostE.forEach((blogPost) => {
    blogPost.addEventListener("mouseout", () => {
      blogPost.classList.toggle("purple");
    });
    blogPost.addEventListener("mouseenter", () => {
      blogPost.classList.toggle("red");
    });
  });
});
