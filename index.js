// NODE Getters

const mainDiv = () => document.getElementById("main")

const homePageLink = () => document.getElementById('home-page-link')

// Templates

const homePageTemplate = () => {
    return `
    <h1 class="center-align">Welcome to the Drink Maker</h1>
    `
}

const mealListTemplate = () => {
    `
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
                  <tr>
                    <td>Moscow Mule</td>
                    <td>Eclair</td>
                    <td>$0.87</td>
                  </tr>
                  <tr>
                    <td>Mojito</td>
                    <td>Jellybean</td>
                    <td>$3.76</td>
                  </tr>
                  <tr>
                    <td>Old Fashioned</td>
                    <td>Lollipop</td>
                    <td>$7.00</td>
                  </tr>
                </tbody>
              </table>
    `
}

//  Renderers

const renderHomePage = () => {
    mainDiv().innerHTML = homePageTemplate();
}

const renderDrinkListPage = () => {
    mainDiv().innerHTML = drinkListTemplate();
}

// Events

const homePageLinkEvent = () => {
    homePageLink().addEventListener('click', (e) => {
        e.preventDefault();
        renderHomePage();
    })
}

// When DOM Loads

document.addEventListener('DOMContentLoaded', () => {
    //renderHomePage();
    homePageLinkEvent();
})