// Globals
const baseUrl = 'http://localhost:3000';
let drinks = [];

// NODE Getters

const mainDiv = () => document.getElementById('main');
const homePageLink = () => document.getElementById('home-page-link');
const drinkListLink = () => document.getElementById('drink-list-link');
const drinkFormLink = () => document.getElementById('drink-form-link')
const drinkInput = () => document.getElementById('drink')
const ingredientsInput = () => document.getElementById('ingredients')
const priceInput = () => document.getElementById('price')

// Templates


// const drinkListTemplate = () => {
//     return `
//     <h1>Drink List</h1>
//             <table class="highlight">
//                 <thead>
//                   <tr>
//                       <th>Drink</th>
//                       <th>Ingredients</th>
//                       <th>Price</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                 ${renderDrinks()}
//                 </tbody>
//               </table>
//     `
// }

const drinkTemplate = (drink) => {
    const tr = document.createElement('tr')
    const tdDrink = document.createElement('td')
    const tdIngredients = document.createElement('td')
    const tdPrice = document.createElement('td')
    tdDrink.innerText = drink.drink
    tdIngredients.innerText = drink.ingredients
    tdPrice.innerText = drink.price
    tr.appendChild(tdDrink)
    tr.appendChild(tdIngredients)
    tr.appendChild(tdPrice)
    return tr
}

//  Renderers
const renderDrinks = () => {
    return drinks.map(drink => drinkTemplate(drink));
}

const renderHomePage = () => {
    mainDiv().innerHTML = ''
    const h1 = document.createElement('h1')
    h1.classList.add('center-align')
    h1.innerText = 'Welcome to my Drink Info Page'
    mainDiv().appendChild(h1)
}

const renderDrinkListPage = async () => {
    await loadDrinks()
    mainDiv().innerHTML = ''
    const h1 = document.createElement('h1')
    const table = document.createElement('table')
    const thead = document.createElement('thead')
    const tr = document.createElement('tr')
    const thDrink = document.createElement('th')
    const thIngredients = document.createElement('th')
    const thPrice = document.createElement('th')
    const tbody = document.createElement('tbody')
    h1.innerText = 'Drink List'
    thDrink.innerText = 'Drink'
    thIngredients.innerText = 'Ingredients'
    thPrice.innerText = 'Price'
    table.classList.add('highlight')
    tr.appendChild(thDrink)
    tr.appendChild(thIngredients)
    tr.appendChild(thPrice)
    thead.appendChild(tr)
    table.appendChild(thead)
    drinks.forEach(drink => tbody.appendChild(drinkTemplate(drink)))
    table.appendChild(tbody)
    mainDiv().appendChild(h1)
    mainDiv().appendChild(table)
}

const renderDrinkForm = () => {
    const h1 = document.createElement('h1')
    const form = document.createElement('form')
    const drinkDiv = document.createElement('div')
    const drinkInput = document.createElement('input')
    const drinkLabel = document.createElement('label')
    const ingredientsDiv = document.createElement('div')
    const ingredientsInput = document.createElement('input')
    const ingredientsLabel = document.createElement('label')
    const priceDiv = document.createElement('div')
    const priceInput = document.createElement('input')
    const priceLabel = document.createElement('label')
    const submitButton = document.createElement('input')

    drinkInput.setAttribute('id', 'drink')
    drinkInput.setAttribute('type', 'text')
    drinkLabel.setAttribute('for', 'drink')
    ingredientsInput.setAttribute('id', 'ingredients')
    ingredientsInput.setAttribute('type', 'text')
    ingredientsLabel.setAttribute('for', 'ingredients')
    priceInput.setAttribute('id', 'price')
    priceInput.setAttribute('type', 'text')
    priceLabel.setAttribute('for', 'price')
    submitButton.setAttribute('type', 'submit')
    submitButton.setAttribute('value', 'Create Drink')
    
    h1.className = 'center-align'
    drinkDiv.className = 'input-field'
    ingredientsDiv.className = 'input-field'
    priceDiv.className = 'input-field'
    submitButton.className = 'waves-effect waves-light btn'
    
    h1.innerText = 'Create Drink'
    drinkLabel.innerText = 'Drink'
    ingredientsLabel.innerText = 'Ingredients'
    priceLabel.innerText = 'Price'
            
    drinkDiv.appendChild(drinkInput)
    drinkDiv.appendChild(drinkLabel)
    ingredientsDiv.appendChild(ingredientsInput)
    ingredientsDiv.appendChild(ingredientsLabel)
    priceDiv.appendChild(priceInput)
    priceDiv.appendChild(priceLabel)

    form.appendChild(drinkDiv)
    form.appendChild(ingredientsDiv)
    form.appendChild(priceDiv)
    form.appendChild(submitButton)

    form.addEventListener('submit', submitFormEvent)

    mainDiv().appendChild(h1)
    mainDiv().appendChild(form)
}    
//             <form>
//                 <div class="input-field">
//                     <input id="drink" type="text">
//                     <label for="drink">Drink</label>
//                 </div>
//                 <div class="input-field">
//                     <input id="ingredients" type="text">
//                     <label for="ingredients">Ingredients</label>
//                 </div>
//                 <div class="input-field">
//                     <input id="price" type="text">
//                     <label for="price">Price</label>
//                   </div>
//                   <input type="submit" value="Create Drink" class="waves-effect waves-light btn">
//             </form>
// }

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
    drinkListLink().addEventListener('click', (e) => {
        e.preventDefault();
        renderDrinkListPage();
    })
}

const drinkFormLinkEvent = () => {
    drinkFormLink().addEventListener('click', (e) => {
        e.preventDefault()
        renderDrinkForm()
    })
}

const submitFormEvent = e => {
    e.preventDefault()
    fetch('http://localhost:3000/drinks', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            drink: drinkInput().value,
            ingredients: ingredientsInput().value,
            price: priceInput().value
        })
    })
        .then(resp => resp.json())
        .then(drink => {
            renderDrinkListPage()

        })
    }

// When DOM Loads

document.addEventListener('DOMContentLoaded', () => {
    renderHomePage();
    homePageLinkEvent();
    drinkListLinkEvent();
    drinkFormLinkEvent();
})
