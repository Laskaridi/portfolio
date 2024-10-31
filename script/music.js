//Dropdown

const dropdownLink = document.querySelector("#dropdownLink");
const dropdownMenu = document.querySelector("#dropdownMenu");

dropdownLink.addEventListener("click", function(event) {
    event.preventDefault();
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", function(event) {
    if (!event.target.matches('#dropdownLink')) {
        dropdownMenu.style.display = "none";
    }
});



//Search

const searchButton = document.querySelector('#search-button');
const searchContainer = document.querySelector('.search-container');

searchButton.addEventListener('click', () =>{
    if(searchContainer.style.display === 'none'){
        searchContainer.style.display = 'block';
        document.querySelector('#search-input').focus();
    }
    else{
        searchContainer.style.display = 'none';
    }
});

// const toggleButton = document.getElementById('toggleButton');
//         const searchContainer = document.getElementById('searchContainer');

//         toggleButton.addEventListener('click', () => {
//             // Перемикання видимості блоку з полем пошуку
//             if (searchContainer.style.display === 'none' || searchContainer.style.display === '') {
//                 searchContainer.style.display = 'block'; // Відобразити поле
//                 document.getElementById('searchInput').focus(); // Зосередити увагу на полі пошуку
//             } else {
//                 searchContainer.style.display = 'none'; // Приховати поле
//             }
//         });