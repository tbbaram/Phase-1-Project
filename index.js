// Globals
const baseUrl = 'http://localhost:3000';
let drinks = [];

// NODE Getters

const mainDiv = () => document.getElementById("main");
const homePageLink = () => document.getElementById('home-page-link');
const drinkListLink = () => document.getElementById('drink-list-link');

// Templates

const homePageTemplate = () => {
    return `
    <h1 class="center-align">Welcome to the Drink Maker</h1>
    `
}

const drinkListTemplate = () => {
    return `
    <h1>Drink List</h1>
            <table class="highlight">
                <thead>
                  <tr>
                      <th>Drink</th>
                      <th>Ingredients</th>
                      <th>Price</th>
                  </tr>
                </thead>

                <tbody>
                ${renderDrinks()}
                </tbody>
              </table>
    `
}

const drinkTemplate = (drink) => {
    return `
    <tr>
        <td>${drink.drink}</td>          
        <td>${drink.ingredients}</td>
        <td>${drink.cost}</td>
    </tr>
    `
}

//  Renderers
const renderDrinks = () => {
    return drinks.map(drink => drinkTemplate(drink));
}

const renderHomePage = () => {
    mainDiv().innerHTML = homePageTemplate();
}

const renderDrinkListPage = () => {
    mainDiv().innerHTML = drinkListTemplate();
}

// Events

const loadDrinks = async () => {
    const resp = await fetch(baseUrl + '/drinks')
    const data = await resp.json()
    drinks = data 
}

const homePageLinkEvent = () => {
    homePageLink().addEventListener('click', (e) => {
        e.preventDefault();
        renderHomePage();
    })
}

const drinkListLinkEvent = () => {
    drinkListLink().addEventListener('click', async (e) => {
        e.preventDefault();
        await loadDrinks();
        renderDrinkListPage();
    })
}

// When DOM Loads

document.addEventListener('DOMContentLoaded', () => {
    renderHomePage();
    homePageLinkEvent();
    drinkListLinkEvent();
})