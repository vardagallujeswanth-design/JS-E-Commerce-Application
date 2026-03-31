# JS E-Commerce Application

hey! this is my first react project. its a simple online store where you can browse apple products and add them to a cart.


---

## github repo

--> https://github.com/vardagallujeswanth-design/JS-E-Commerce-Application

---

## setup steps

make sure node.js is installed on your computer first, then follow these steps

**1. clone the repo**

git clone https://github.com/vardagallujeswanth-design/JS-E-Commerce-Application.git

**2. go into the project folder**

cd JS-E-Commerce-Application

**3. install packages**

npm install

**4. run the project**

npm run dev

**5. open browser and go to**

http://localhost:5173

---

## features

**Home Page**
- welcome screen with a short intro
- buttons to go to products and cart
- shows product categories like laptops, phones, headphones, watches
- free shipping, returns, secure checkout info at the bottom

**Products Page**
- all products shown in a grid
- search by product name or description
- filter by category
- sort by price or name
- shows count of visible products
- empty message if nothing matches the search

**Cart Page**
- shows all added items with image, name and price
- increase or decrease quantity with + and - buttons
- remove single items
- clear full cart button
- save cart button for storing list of items in the local storage
- order summary with subtotal, shipping and 18% gst
- free shipping on orders above 50,000
- cart stays saved even after page refresh

**Navbar**
- logo on the left
- home and products links in the center
- cart icon with live item count badge on the right
- active page link is highlighted

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
- products are hardcoded, no backend
- images are stored locally in the public folder

---

made by JS 😊