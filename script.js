sections = [
  {
    title: "GitHub Project Setup",
    text: "Here you will setup a GitHub project to start practicing your GitHub commands.",
    link: "github.com",
    imageHolder: "https://via.placeholder.com/150/",
    complete: " Assignment Complete?",
  },
  {
    title: "GitHub Local Initializer",
    text: "Here you will setup a GitHub project to start practicing your GitHub commands.",
    link: "github.com",
    imageHolder: "https://via.placeholder.com/150/",
    complete: " Assignment Complete?",
  },
  {
    title: "GitHub Upload Commands",
    text: "Here you will setup a GitHub project to start practicing your GitHub commands.",
    link: "github.com",
    imageHolder: "https://via.placeholder.com/150/",
    complete: " Assignment Complete?",
  },
  {
    title: "GitHub Remove Commands",
    text: "Here you will setup a GitHub project to start practicing your GitHub commands.",
    link: "github.com",
    imageHolder: "https://via.placeholder.com/150/",
    complete: " Assignment Complete?",
  },
  {
    title: "GitHub Trouble Shooting",
    text: "Here you will setup a GitHub project to start practicing your GitHub commands.",
    link: "github.com",
    imageHolder: "https://via.placeholder.com/150/",
    complete: " Assignment Complete?",
  },
  {
    title: "GitHub Codes Section",
    text: "Here is a list of codes to run in the commandline to upload your project if you forgot the commands.",
    link: "github.com",
    imageHolder: "https://via.placeholder.com/150/",
    complete: " Assignment Complete?",
  },
];

let completeDiv = document.getElementById("div2");
//completeDiv.style.display = "none";

// let ids = ["one", "two", "three", "four"];

// for (let i = 0; i < sections.length; i++) {
//   let card = document.createElement("div");
//   let cardBody = document.createElement("div");
//   let cardParagraph = document.createElement("p");
//   let complete = document.createElement("p");

//   let image = document.createElement("img");
//   let h5 = document.createElement("h5");
//   let a = document.createElement("a");
//   let hr = document.createElement("hr");
//   let input = document.createElement("input");
//   let label = document.createElement("label");

//   for (let i = 0; i < ids.length; i++) {
//     card.setAttribute("id", ids[i]);
//   }

//   card.setAttribute("class", "card");
//   image.setAttribute("class", "card-img-top");
//   cardBody.setAttribute("class", "card-body");
//   cardParagraph.setAttribute("class", "card-text");
//   h5.setAttribute("class", "card-title");
//   a.setAttribute("class", "btn btn-primary");
//   input.setAttribute("class", "checkedBox");
//   input.setAttribute("type", "checkbox");

//   complete.setAttribute("class", "complete");

//   //creates the image
//   image.setAttribute("loading", "lazy");
//   image.setAttribute("src", sections[i].imageHolder);
//   image.setAttribute("alt", sections[i].alt);
//   card.appendChild(image);

//   // creates the title
//   h5.textContent = sections[i].title;
//   document.querySelector("div.cards").appendChild(card);
//   card.appendChild(h5);

//   // creates the text
//   cardParagraph.textContent = sections[i].text;
//   card.appendChild(cardParagraph);

//   // creates the button
//   a.textContent = sections[i].link;
//   card.appendChild(a);

//   //
//   label.textContent = "Assignment Complete?";
//   card.appendChild(hr);
//   label.appendChild(input);
//   card.appendChild(label);

//   //complete.textContent = sections[i].complete;
//   card.appendChild(complete);
// }

const searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup", function (e) {
  const term = e.target.value.toLocaleLowerCase();
  const books = document.getElementsByTagName("h3");
  let notAvailable = document.getElementById("notAvailable");

  let hasResults = false;
  Array.from(books).forEach(function (book) {
    const title = book.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      book.parentElement.parentElement.style.display = "inline-block";
      hasResults = true;
    } else {
      book.parentElement.parentElement.style.display = "none";
    }
  });
  notAvailable.style.display = hasResults ? "none" : "block";
});
