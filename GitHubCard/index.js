

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/chukalicious
*/


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/




/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const cards = document.querySelector('.cards');
cards.classList.add('cards')
axios.get("https://api.github.com/users/chukalicious")
  .then((successResponse) => {
    console.log(successResponse);
    cards.appendChild(userCard(successResponse.data));
  })
  .catch(error => console.log(error))

const userCard = (data) => {
  // create all your elements
  const card = document.createElement('div');
  card.classList.add('card'); 
  const image = document.createElement('img');
  image.src = data.avatar_url;
  card.appendChild(image); 

  // add your appropriate classes to the correct elements
  const cardInfo = document.createElement('div'); 
  card.appendChild(cardInfo); 
  const name = document.createElement('h3');
  name.classList.add('name')
  name.textContent = data.name; 
  cardInfo.appendChild(name)
  const userName = document.createElement('p');
  userName.textContent = data.login;
  userName.classList.add('username')
  cardInfo.appendChild(userName)
  const location = document.createElement('p');
  cardInfo.appendChild(location);
  location.textContent = `Location: ${data.location}`



  // add your appropriate text content

  // append your elements correctly 
  const profile = document.createElement('p');
  cardInfo.appendChild(profile)
  const addressLink = document.createElement('a');
  addressLink.textContent = `Profile: ${data.html_url}`;
  profile.appendChild(addressLink); 
  addressLink.href = data.html_url;
  const followers = document.createElement('p');
  followers.textContent = `Followers: ${data.followers}`; 
  cardInfo.appendChild(followers);
  const following = document.createElement('p');
  cardInfo.appendChild(following); 
  following.textContent = `Following: ${data.following}`
  const bio = document.createElement('p');
  cardInfo.appendChild(bio);
  bio.textContent = `Bio: ${data.bio}`



  // return your card 
  return card;

}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/


const followersArray = ['https://api.github.com/users/tetondan', 'https://api.github.com/users/dustinmyers', 'https://api.github.com/users/justsml', 'https://api.github.com/users/luishrd', 'https://api.github.com/users/bigknell'];

followersArray.forEach(user => {
  axios.get(user)
  .then((successResponse) => {
    console.log(successResponse);
    cards.appendChild(userCard(successResponse.data));
  })
  .catch(error => console.log(error))
})