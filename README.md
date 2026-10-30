# Fitness App Store

A front-end store built with vanilla HTML, CSS and JavaScript.

## About this project

This project started from a course starter template for a furniture store. Rather than
following the course content as-is, I am rebuilding it around a completely different
subject — fitness products — while keeping the same underlying functionality.

The goal is to practise taking an existing structure apart and adapting it: the same
features (fetching and rendering products, filtering, a cart, page navigation) have to
work for different data, different content and a different design.

## What it does

- Loads products from an API and renders them dynamically
- Filters products by search term, company and price
- Shopping cart with add, remove and quantity handling
- Cart state saved in local storage so it survives a page refresh
- Separate pages for home, products, single product and about
- Responsive sidebar navigation

## Built with

- HTML5
- CSS3
- JavaScript (ES modules)

## Structure

```
index.html          home page
products.html       product listing with filters
product.html        single product page
about.html          about page
index.js            entry point
styles.css          styles
src/
  cart/             cart logic and DOM rendering
  filters/          search, company and price filters
  pages/            page-specific logic
  fetchProducts.js  API calls
  displayProducts.js
  store.js
  utils.js
images/
```

## Running it locally

Clone the repository and open `index.html` in a browser. Because the project uses ES
modules, it is best served through a local server — the Live Server extension in VS Code
works well.

```
git clone https://github.com/alexandrosgialantzis/fitness-app-store.git
cd fitness-app-store
```

## Status

Work in progress. The structure is in place and I am currently adapting the content,
data and styling to the fitness theme.
