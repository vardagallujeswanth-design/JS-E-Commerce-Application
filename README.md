# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# JS E-Commerce Application - My React Project

hey! this is my first react project. its a simple online store where you can browse products and add them to a cart.

i built this to learn react basics like routing, context api and localstorage.

---

## github repo

you can find the full code here 👇

(https://github.com/vardagallujeswanth-design/JS-E-Commerce-Application)



---

## setup steps

make sure you have **node.js** installed on your computer first.

then follow these steps one by one

**1. clone the repo**
```
git clone https://github.com/YOUR_USERNAME/js-store.git
```

**2. go into the project folder**
```
cd js-store
```

**3. install all the packages**
```
npm install
```

**4. start the project**
```
npm run dev
```

**5. open your browser and go to**
```
http://localhost:5173
```

thats it, it should be running now!

---

## features implemented

**Home Page**
- welcome screen with a short description
- buttons to go to products page and cart page
- shows categories like laptops, phones, headphones, watches
- free shipping, returns, secure checkout info at the bottom

**Products Page**
- shows all 8 products in a grid
- search bar to find products by name or description
- filter buttons to filter by category (All, Laptops, Phones, Tablets, Audio, Wearables)
- sort by price low to high, high to low, or name A-Z
- shows how many products are currently visible
- empty state message if no products match the search

**Cart Page**
- shows all items you added with image, name, price
- increase or decrease quantity with + and - buttons
- remove individual items with the x button
- clear entire cart with one button
- order summary on the right side with subtotal, shipping, gst (18%)
- free shipping if order is above ₹50,000
- shows how much more to add for free shipping
- cart data is saved in localstorage so it stays after refresh

**Navbar**
- logo on the left
- home and products links in the center
- cart icon on the right with a badge showing item count
- active page is highlighted

---

## tech used

- React
- React Router v6
- Context API
- LocalStorage
- plain CSS

---

## folder structure

```
src/
  Components/    - Navbar, ProductCard, CartItem
  Pages/         - Home, Products, Cart
  Context/       - CartContext
  Data/          - products list
  App.jsx
  index.css
```

---

## known issues

- checkout button doesnt work yet
- no backend, products are hardcoded
- images are stored in the public folder

---

made by JS 