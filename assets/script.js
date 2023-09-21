let docTitle = document.title;
document.title = "The Collection";
console.log(docTitle);

let subject = ["Music", "Food", "Animes", "Crossfit"];

let food = subject[1];

const collection = [
  {
    img: "https://www.budgetbytes.com/wp-content/uploads/2022/07/Sheet-Pan-Portobello-Fajitas-plate.jpg",
    name: "Fajita",
    originalName: "fajita",
    date: "+/- 1930",
    region: "Mexico",
    ingredients: ["tortilla", "salad", "meat", "guacamole", "paprika"],
    lang: "es-MX",
  },
  {
    img: "https://lacerisesurlemaillot.fr/wp-content/uploads/2021/10/ramen-poulet.jpg",
    name: "Ramen",
    originalName: "ラーメン",
    origin: "chinese",
    region: "Japan",
    ingredients: ["nodles", "broth", "meat or fish", "egg", "vegetables"],
    lang: "ja-JP",
  },
  {
    img: "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F12.2F04.2F7d30685c-0d9c-4ddc-a3ed-f5ed8ac0a48d.2Ejpeg/400x400/quality/80/crop-from/center/focus-point/2382%2C2620/choucroute-garnie.jpeg",
    name: "Choucroute",
    originalName: "Sauerkraut",
    date: "+/- III century",
    origin: "Chine",
    land: "Germany",
    ingredients: ["cabbage", "porc", "bacon", "sausages", "white wine"],
    lang: "de-DE",
  },
  {
    img: "https://assets.afcdn.com/recipe/20160401/38946_w1024h576c1cx2690cy1793.jpg",
    name: "Tartiflette",
    originalName: "Tartiflette",
    date: "+/- 1980",
    origin: "Savoie",
    land: "France",
    ingredients: ["potatoes", "onions", "bacon", "roblochon"],
  },
  {
    img: "https://www.cuisineactuelle.fr/imgre/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fcac.2F2023.2F07.2F21.2Fd6d4f282-c01c-4ab0-99ca-2824d28e1fd2.2Ejpeg/750x562/quality/80/crop-from/center/cr/wqkgQmVyZ2Vyb24vU3VjcsOpIFNhbMOpIC8gQ3Vpc2luZSBBY3R1ZWxsZQ%3D%3D/focus-point/731%2C820/paella-traditionnelle.jpeg",
    name: "Paella",
    originalName: "Paella",
    date: "+/- XVIII century",
    origin: "Valencia",
    land: "Spain",
    ingredients: ["rice", "seafoods", "vegetables"],
    lang: "es-ES",
  },
  {
    img: "https://www.tupperware.fr/assets/uploads/sites/2/2021/06/tupperware_hamurger-png-940x662.jpeg",
    name: "Hamburger",
    originalName: "Hamburger",
    date: "+/- 1758",
    origin: "Hambourg",
    land: "Germany",
    ingredients: ["sandwich", "cheese", "steack", "salad", "sauce"],
    lang: "de-DE",
  },
  {
    img: "https://www.regal.fr/sites/art-de-vivre/files/spaghettis-bolognaise_istock.jpg",
    name: "Pasta bolognese",
    originalName: " ragù bolognese",
    date: "1982",
    origin: "Bologne",
    land: "Italy",
    ingredients: ["pasta", "tomato sauce", "ground beef", "carrot"],
    lang: "it-IT",
  },
  {
    img: "https://www.darty.com/darty-et-vous/sites/default/files/2022-07/raclette_2021_494.jpg",
    name: "Raceltte",
    originalName: "Bratchäs",
    date: "Middle Age",
    origin: "Canton of valais",
    land: "Switzerland",
    ingredients: ["cold cuts", "differents finds of cheese", "potatoes"],
    lang: "de-CH",
  },
  {
    img: "https://media-cdn.tripadvisor.com/media/photo-s/21/f3/69/36/kuro-meny-for-flere.jpg",
    name: "Sushis",
    originalName: "寿司",
    date: "+/- V century",
    origin: "Japan",
    land: "Japan",
    ingredients: ["rice", "fried chicken or fish"],
    lang: "ja-JA",
  },
  {
    img: "https://p1.storage.canalblog.com/13/24/1249553/100024038_m.jpg",
    name: "Goulasch",
    originalName: "gulyásleves",
    date: "",
    origin: "Alföld",
    land: "Hungary",
    ingredients: ["meat", "vegetables", "paprika"],
    lang: "hu-HU",
  },
];
//selectionner l'élément <body> ou l'on veut ajouter la structur html
const body = document.body;
//créer le header
const header = document.createElement("header");
//créer div dans le header
const hDiv = document.createElement("div");
hDiv.setAttribute("id", "hDiv");
//créer  l'élément img
const img = document.createElement("img");
img.setAttribute(
  `src`,
  `https://media.licdn.com/dms/image/D4E03AQGKuo7mDHoemA/profile-displayphoto-shrink_800_800/0/1681738923125?e=1700697600&v=beta&t=Oa2n0WnMqGANmyxLc1w8lt4PeE6VBQ2RZKeXLrL1Vn4`
);
//créer l'élément h1
const h1 = document.createElement("h1");
h1.textContent = "My food's Collection";
//créer l'élément p
const p = document.createElement("p");
p.textContent = `Je me présente, je m'appelle Lidwine. Je voudrais bien réussir ma vie être aimée, être belle, gagner de l'argent. Mais surtout être intelligente.`;
//ajouter les éléments dans la div
hDiv.appendChild(h1);
hDiv.appendChild(p);
//ajouter les éléments au header
header.appendChild(img);
header.appendChild(hDiv);

//créer une div globale
const globalDiv = document.createElement("div");
globalDiv.setAttribute("id", "globalDiv");

//créer et ajouter 10divs avec le contenu de "collection"
for (let i = 0; i < 10; i++) {
  const boxDiv = document.createElement("div");
  boxDiv.setAttribute("id", "box");
  //ajouter le contenu de "collection dans chaque div box"
  const collectionItem = collection[i];

  //ajouter <figure>
  const figureElement = document.createElement("figure");

  //créer une image
  const imgElement = document.createElement("img");
  //utiliser la propriété img de "collection"
  imgElement.setAttribute("src", collectionItem.img);

  //créer un titre h2
  const h2Element = document.createElement("h2");
  //utiliser la propriété name de "collection"
  h2Element.textContent = collectionItem.name;

  //créer boutton play
  const playBtn = document.createElement("button");
  playBtn.textContent = "Play";
  playBtn.addEventListener("click", () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(collectionItem.originalName);
    utterance.lang = lang;
    synth.speak(utterance);
  });

  //créer un div pour tous les p
  const pTotal = document.createElement("div");
  pTotal.setAttribute("id", "pTotal");

  //créer un tableau pour stocker les <p> avce différentes données
  const pElements = [];
  //créer un paragraphe pour chaque donnée que je souhaite afficher
  const originalNameP = document.createElement("p");
  originalNameP.textContent = `Original name: ${collectionItem.originalName}`;
  const lang = collectionItem.lang;
  pElements.push(originalNameP);

  const dateP = document.createElement("p");
  dateP.textContent = `Date: ${collectionItem.date}`;
  //ajouter le contenu
  pElements.push(dateP);

  const originP = document.createElement("p");
  originP.textContent = `Origin: ${collectionItem.origin}`;
  pElements.push(originP);

  const landP = document.createElement("p");
  landP.textContent = `Land: ${collectionItem.land}`;
  pElements.push(landP);

  const ingredientsP = document.createElement("p");
  ingredientsP.textContent = `Ingredients: ${collectionItem.ingredients.join(
    ", "
  )}`;
  pElements.push(ingredientsP);

  //ajouter h2 à la div box
  boxDiv.appendChild(h2Element);
  //ajouter img à figure
  figureElement.appendChild(imgElement);
  //ajouter img à la div box
  boxDiv.appendChild(figureElement);
  //ajouter bouton play
  boxDiv.appendChild(playBtn);
  //ajouter les p stocké dans le tableau  pElements à la div pTotal
  pElements.forEach((pElement) => {
    pTotal.appendChild(pElement);
  });
  //ajouter pTotal à la div box
  boxDiv.appendChild(pTotal);

  //ajouter les div box à la div globale
  globalDiv.appendChild(boxDiv);
}

// ajouter le header au body
body.appendChild(header);
//ajouter la div globale au body
body.appendChild(globalDiv);
