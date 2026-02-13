// ADOPT & HELP PAGE
// Select the DOM element for output
const showAll = document.querySelector('#all'); 
const dogsFilter = document.querySelector('#dogs');
const catsFilter = document.querySelector('#cats');
const othersFilter = document.querySelector('#others');
const smallFilter = document.querySelector('#small');
const mediumFilter = document.querySelector('#medium');
const bigFilter = document.querySelector('#big');
// FORM SELECTION
const form = document.querySelector("form");

// Pets Array of Objects:
const petsForAdoption = [
    {
        animal: "dog",
        name: "Pelusa",
        size: "small",
        breed: "Mixed-breed",
        age: 1,
        imageUrl: "images/dog1-pelusa.webp"
    },
    {
        animal: "dog",
        name: "Rambo",
        size: "medium",
        breed: "Podenco Andaluz",
        age: 0.3,
        imageUrl: "images/dog2-rambo.webp"
    },
    {
        animal: "dog",
        name: "Pantera",
        size: "big",
        breed: "Labrador",
        age: 4,
        imageUrl: "images/dog3-pantera.webp"
    },
    {
        animal: "dog",
        name: "Bravo",
        size: "small",
        breed: "Mixed-breed",
        age: 2,
        imageUrl: "images/dog4-bravo.webp"
    },
    {
        animal: "dog",
        name: "Mimi",
        size: "medium",
        breed: "Mixed-breed",
        age: 0.8,
        imageUrl: "images/dog5-mimi.webp"
    },
    {
        animal: "dog",
        name: "Fofi",
        size: "big",
        breed: "Mixed-breed",
        age: 2,
        imageUrl: "images/dog6-fofi.webp"
    },
    {
        animal: "cat",
        name: "Thor",
        size: "small",
        breed: "Mixed-breed",
        age: 2,
        imageUrl: "images/cat1-thor.webp"
    },
    {
        animal: "cat",
        name: "Kitty",
        size: "small",
        breed: "Mixed-breed",
        age: 4,
        imageUrl: "images/cat2-kitty.webp"
    },
    {
        animal: "cat",
        name: "Hopper",
        size: "small",
        breed: "Mixed-breed",
        age: 1,
        imageUrl: "images/cat3-hopper.webp"
    },
    {
        animal: "bunny",
        name: "Big Fluff",
        size: "small",
        breed: "Dutch rabbit",
        age: 1,
        imageUrl: "images/bunny1-bigfluff.webp"
    }
];

// CARD CREATION
createPetCard(petsForAdoption);

// FILTERS
showAll.addEventListener('click', () => createPetCard(petsForAdoption));
// By Animal
dogsFilter.addEventListener('click', () => {
    createPetCard(petsForAdoption.filter(pet => pet.animal == 'dog'));
});
catsFilter.addEventListener('click', () => {
    createPetCard(petsForAdoption.filter(pet => pet.animal == 'cat'));
});
othersFilter.addEventListener('click', () => {
    createPetCard(petsForAdoption.filter(pet => pet.animal != 'dog' && pet.animal != 'cat'));
});
// By Size
smallFilter.addEventListener('click', () => {
    createPetCard(petsForAdoption.filter(pet => pet.size == 'small'));
});
mediumFilter.addEventListener('click', () => {
    createPetCard(petsForAdoption.filter(pet => pet.size == 'medium'));
});
bigFilter.addEventListener('click', () => {
    createPetCard(petsForAdoption.filter(pet => pet.size == 'big'));
});

// CARD CREATION FUNCTION
function createPetCard(filteredCards) {
    document.querySelector('.petAdoption').innerHTML = "";
    filteredCards.forEach(pet => {
        let card = document.createElement('figure');
        let name = document.createElement('figcaption');
        let img = document.createElement('img');
        let age = document.createElement('p');
        let breed = document.createElement('p');
        let size = document.createElement('p');

        name.innerHTML = pet.name;
        // Pet Img
        img.setAttribute('src', pet.imageUrl);
        img.setAttribute('alt', `${pet.name}. ${pet.animal} for adoption.`);
        img.setAttribute("loading", "lazy");
        // Pet Age
        petAge = `${pet.age} years`;
        if (pet.age < 1) {
            realAge = 12 * pet.age;
            petAge = `${Math.floor(realAge)} months`;
        };
        age.innerHTML = `<span class='label'>Age: </span>${petAge}`;
        breed.innerHTML = `<span class='label'>Breed: </span>${pet.breed}`;
        size.innerHTML = `<span class='label'>Size: </span>${pet.size}`;

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(age);
        card.appendChild(breed);
        card.appendChild(size);

        card.setAttribute("class", "card")

        document.querySelector('.petAdoption').appendChild(card);
    });
}

// FORM FUNCTIONALITY
localStorage.setItem('successful-submit', false);

form.addEventListener('submit', async () => {
  localStorage.setItem('successful-submit', 1);
});