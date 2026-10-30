# Fitness App Store

A front-end store for fitness products, built with plain HTML, CSS and JavaScript. No frameworks, no build tools, just the basics done properly.

## Why I built it

I wanted to work out how a store actually holds together once you move past static pages. Fetching real data, keeping track of what the user has picked, making filters that stack on top of each other without falling apart. It sounds simple until you try it.

## What it does

Products come in from an API and get rendered on the fly. You can filter them by name, by brand and by price, and the filters work together rather than cancelling each other out. Anything you add to the cart stays there if you close the tab and come back, which turned out to be the fiddliest part to get right.

There are four pages: the home page, a products page with the filters, a single product page that reads the id from the URL, and an about page. The sidebar collapses on smaller screens.

## How it is put together

Everything lives in `src`.

**cart** holds the cart logic and the DOM rendering that goes with it. **filters** has the search, company and price filtering. **pages** keeps whatever is specific to each individual page.

Then `fetchProducts.js` and `displayProducts.js` do what you would expect, `store.js` keeps the shared state, and `utils.js` is the usual collection of small helpers that end up everywhere.

## Running it

```bash
git clone https://github.com/alexandrosgialantzis/fitness-app-store.git
cd fitness-app-store
```

Serve it through a local server rather than opening `index.html` directly. The project uses ES modules, so the browser will complain otherwise. Live Server in VS Code is the easiest way.

## Where it stands

Still a work in progress, and not a small one. The skeleton is up and running, but I am going back through the whole thing properly now, not just the content and the styling. The data layer, the filters, how the cart handles state, the way the pages talk to each other, all of it is getting reworked to fit what this store actually needs to do rather than what it happened to do when I first got it standing.
