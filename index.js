const btn = document.querySelector("button");

document.querySelector("h2").style.visibility = "hidden";

// An array of neutral names
let listOfNeutralNames = [
  "Tuna",
  "Starfish",
  "Big Tuna",
  "Miyazaki",
  "Crunchums",
  "MuMu",
  "Pixel",
  "Rex",
  "Catmeat",
  "Toast",
  "Muffin",
  "Sardine",
  "Java",
  "Whiskey",
  "Buttercup",
  "Tickles",
  "Stardust",
  "Cheddar",
  "Crispy",
  "Mint",
  "Cheeseburger",
  "Sauce",
  "Bear",
  "Roadrash",
  "Skid",
  "Skippy",
  "Snot",
  "Sass",
  "Lard",
  "Pickles",
  "Lettuce",
  "Sprinkles",
  "Croc",
  "Paprika",
  "Robin",
  "Lemon",
  "Cake",
  "Salmon",
  "Trout",
  "Scratchy",
  "Garbage",
  "Ambrosia",
  "Pudding",
  "Sushi",
  "Rogue",
  "Cookiedough",
  "Roach",
  "Thickums",
  "Petal",
  "Weasel",
  "Honey Mustard",
  "Ranch",
  "Oregano",
  "Cinnamon",
  "Pepper",
  "Wednesday",
  "Tiny Head",
  "Indy",
  "Biscuit",
  "Dreamsicle",
  "Thin Mint",
  "Grumps",
  "Crinkle",
  "Megabtye",
  "Dog",
  "Scrub",
  "Mildew",
  "Normie",
  "Salisbury",
  "Smirk",
  "Beans",
  "Grayscale",
  "Shanks",
  "Crook",
  "Ribbit",
  "Horse",
  "Peanut",
  "Gordita",
];

// An array of female names
let listOfFemaleNames = [
  "Luna",
  "Geraldine",
  "Karen",
  "Clementine",
  "Blossom",
  "Lilac",
  "Gwen",
  "Piper",
  "Barb",
  "Lilith",
  "Sandy",
  "Willow",
  "Polly",
  "Vampira",
];

// An array of male names
let listOfMaleNames = [
  "Gerald",
  "O'Reginold",
  "Merlin",
  "Harold",
  "Hayo",
  "Parker",
  "Skeeter",
  "Carl",
  "Larry",
  "Jasper",
  "Lars",
  "Bubba",
  "Charlie",
  "Kevin",
  "Julius",
  "Maxwell",
  "Jerry",
  "Boomer",
  "Comstock",
  "Lucifer",
  "Jake",
  "Jareth",
  "Ziggy",
];

//Check if neutral is selected, then generate random neutral gendered names
function checkNeutral() {
  const neutralNames = document.getElementById("neutral");
  const femaleNames = document.getElementById("female");
  const maleNames = document.getElementById("male");
  const maleChoice = document.getElementById("maleChoice");
  const femaleChoice = document.getElementById("femaleChoice");
  if (neutralNames.checked == true) {
    btn.disabled = false;
    femaleChoice.style.textDecoration = "line-through";
    femaleNames.disabled = true;
    femaleNames.style.opacity = "15%";
    maleChoice.style.textDecoration = "line-through";
    maleNames.disabled = true;
    maleNames.style.opacity = "15%";
    btn.addEventListener("click", function () {
      document.querySelector("h2").style.visibility = "visible";
      let catName =
        listOfNeutralNames[
          Math.floor(Math.random() * listOfNeutralNames.length)
        ];
      document.querySelector("h2").innerHTML = catName;
    });
  } else {
    document.querySelector("h2").style.visibility = "hidden";
    btn.disabled = true;
    femaleChoice.style.textDecoration = "none";
    femaleNames.disabled = false;
    femaleNames.style.opacity = "100%";
    maleChoice.style.textDecoration = "none";
    maleNames.disabled = false;
    maleNames.style.opacity = "100%";
  }
}

//Check if female is selected, then generate random female names
function checkFemale() {
  const femaleNames = document.getElementById("female");
  const maleNames = document.getElementById("male");
  const neutralNames = document.getElementById("neutral");
  const maleChoice = document.getElementById("maleChoice");
  const neutralChoice = document.getElementById("neutralChoice");
  if (femaleNames.checked == true) {
    btn.disabled = false;
    neutralChoice.style.textDecoration = "line-through";
    neutralNames.disabled = true;
    neutralNames.style.opacity = "15%";
    maleChoice.style.textDecoration = "line-through";
    maleNames.disabled = true;
    maleNames.style.opacity = "15%";
    btn.addEventListener("click", function () {
      document.querySelector("h2").style.visibility = "visible";
      let catName =
        listOfFemaleNames[Math.floor(Math.random() * listOfFemaleNames.length)];
      document.querySelector("h2").innerHTML = catName;
    });
  } else {
    document.querySelector("h2").style.visibility = "hidden";
    btn.disabled = true;
    neutralChoice.style.textDecoration = "none";
    neutralNames.disabled = false;
    neutralNames.style.opacity = "100%";
    maleChoice.style.textDecoration = "none";
    maleNames.disabled = false;
    maleNames.style.opacity = "100%";
  }
}

//Check if male is selected, then generate random male names
function checkMale() {
  const maleNames = document.getElementById("male");
  const neutralNames = document.getElementById("neutral");
  const femaleNames = document.getElementById("female");
  const femaleChoice = document.getElementById("femaleChoice");
  const neutralChoice = document.getElementById("neutralChoice");
  if (maleNames.checked == true) {
    btn.disabled = false;
    neutralChoice.style.textDecoration = "line-through";
    neutralNames.disabled = true;
    neutralNames.style.opacity = "15%";
    femaleChoice.style.textDecoration = "line-through";
    femaleNames.disabled = true;
    femaleNames.style.opacity = "15%";
    btn.addEventListener("click", function () {
      document.querySelector("h2").style.visibility = "visible";
      let catName =
        listOfMaleNames[Math.floor(Math.random() * listOfMaleNames.length)];
      document.querySelector("h2").innerHTML = catName;
    });
  } else {
    document.querySelector("h2").style.visibility = "hidden";
    btn.disabled = true;
    neutralChoice.style.textDecoration = "none";
    neutralNames.disabled = false;
    neutralNames.style.opacity = "100%";
    femaleChoice.style.textDecoration = "none";
    femaleNames.disabled = false;
    femaleNames.style.opacity = "100%";
  }
}
