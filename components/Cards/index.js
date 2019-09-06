// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container');

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    // console.log(response);
    const articlesData = Object.values(response.data.articles);
    articlesData.forEach(topic => {
        topic.forEach(index => {
        const artDat = newArticle(index);
        cardsContainer.appendChild(artDat) ; 
    })
    })
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

  

function newArticle (items) {
    const
        newCard = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div'),
        imgContainer = document.createElement('div'),
        authorImg = document.createElement('img'),
        authorsName = document.createElement('span');

    newCard.appendChild(headline);
    newCard.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authorsName);
    imgContainer.appendChild(authorImg);

    newCard.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    
    headline.textContent = items.headline;
    authorImg.src = items.authorPhoto; 
    authorsName.textContent = `By ${items.authorName}`;

    return newCard;
  }


