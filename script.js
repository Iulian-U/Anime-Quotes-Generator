//Anime quotes API src: https://animechan.vercel.app/

//Target elements of the DOM
const getQuote = document.querySelector("#get-quote");
const animeTitle = document.querySelector("#anime-title");
const animeQuote = document.querySelector("#anime-quote");
const animeCharacter = document.querySelector("#anime-character");

//URL to fetch
const URL = "https://animechan.vercel.app/api/random";

//every time button clicked add new p to the divs and include info from API
getQuote.addEventListener("click", () => {
  getData().then((data) => {
    animeTitle.innerText = data.anime;
    animeQuote.innerText = data.quote;
    animeCharacter.innerText = data.character;
  });
});

//retrieve data from API
const getData = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    animeTitle.innerText = "Sorry! Couldn't find any quote! :(";
  }
};
