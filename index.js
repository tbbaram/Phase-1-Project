
// NODE Getters

const mainDiv = () => document.getElementById("main")

// Templates

const homePageTemplate = () => {
    return `
    <h1 class="center-align">Welcome to the Drink Maker</h1>
    `
}

//  Renderers

const renderHomePage = () => {
    mainDiv().innerHTML = homePageTemplate();
}

// When DOM Loads

document.addEventListener('DOMContentLoaded', () => {
    //renderHomePage();
})