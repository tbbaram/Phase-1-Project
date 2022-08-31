## Next Steps for Phase 1

Alright, eveyrthing you've got here is moving the right direction.
Let's now set it up to minimalize the javascript setup code: (IE
all of the document.createElement calls, and let HTML do the work
where it can.

## Step 1

Let's set a good standard first. HTML is for laying out content
and structures that _do not_ change. That's important. Javascript
should only be used, when absolutely necessary. The less code that
changes things, the better our app is going to be.

Let's refactor the `renderHomePage()` function. The Welcome
H1 doesn't change, and never needs to move. So really, we should
only be using HTML to lay that out. There are 100 ways to do this,
but we'll take what you have and convert it to HTML

**Take This**

```javascript
const renderHomePage = () => {
  mainDiv().innerHTML = "";
  const h1 = document.createElement("h1");
  h1.classList.add("center-align");
  h1.innerText = "Welcome to my Drink Info Page";
  mainDiv().appendChild(h1);
};
```

**To This**

```html
<h1 class="center-align">Welcome to my Drink Info Page</h1>
```

So right here, we were able to cut the amount of code in half.
And we would take that HTML and just put it straight into the
index.html file you have.

## Step 2

Now it's your turn.

Let's just start with the `renderDrinkListPage()` function.
I want you to take a stab at removing the unnecessary javascript code
and migrating what you can to HTML. Remember this too -> Layout as much
as you can in HTML. Really, the only thing that you should be inserting
from javascript is each row of drinks. So at it's lowest level, you should only be
using document.createElement to insert your `drinkTemplate()`.

## Info

I've gone ahead and moved the renderHomePage out of the javascript and into the html
file, and marked in the HTML file where you should start laying out your table.
Remember, you'll need to modify the table rows, so you'll need a way to identify
the table body.....(think ID on the tbody component, and document.getElementById())

If you have questions holler. I also want to know if this is useful or not!

Don't worry about the links obviously being broken at the top. We'll get to that shortly.
