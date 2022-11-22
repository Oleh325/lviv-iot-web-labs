## Lab 1:
### Simple landing page

Description: Create a landing page following the given design (Figma).

Requirements:

- Use of semantic tags wherever is necessary
- All fonts, colour palette, elements sizes must strictly match the design.
- Pixel perfect is also not required, BUT your website should visually match the design template (i.e. If the element is horizontally centred on the design, it should look centred on the website)
- All class names must not be meaningless (i.e. class=”myClass”) and should follow the same naming convention, preferably BEM, but you could come up with your own (just be consistent)
- Basic cross-browser support (website should look correctly on last versions of modern browsers (Chrome, Safari, Edge)
- For now, responsiveness is not required.

## Lab 2:
### Advanced landing

Description: Improve a landing page following the given design (same as previous) by adding full responsiveness and some animation. 

Requirements:

- The website should be partly responsive:
Required: for 320px (iPhone 5s)  2560px (4K screens).
- The header should collapse to a hamburger on small screens
- The website must contain animations (at least 3). Can be made in any possible way, preferably with css properties (animation/transition).
- Your project should be logically structured (all your CSS can’t be in just one-two files)
- All of the previous work requirements must be kept.

## Lab 3:
### CRUD Javascript App: View Page

Description: In this work, you have to make a simple presentation part of a website - View Page 

For your blocks you must use data from your java/python project class.

Then using JavaScript, you need to implement the following operations on your data (it is up to you to decide which field should be used for each of the operations):
- Sort of your items option
- Search option
- Count total amount of some of the field (e.g total price of all cars)

Requirements:
- Responsiveness absolutely not required.
- Styling is not important at all. Is up to you.

## Lab 4:
### CRUD Javascript App: Create/Edit Pages

Description: In this work, you need to continue working and add two new parts to your website - Create & Edit Pages (You can find the template of these pages by following the link)

_Update/Delete operations are not required for this work!_

Also you must validate the forms using HTML attributes (inputs must be configured for your data format).

If incorrect data is entered in the inputs, you must use JavaScript to inform the user with modal windows or just plain alert() function.

Bonus points are provided for this work, if you implement a styled modal window that will work with JavaScript.

Requirements:
- Responsiveness absolutely not required.
- Styling is not important at all. Is up to you.

## Lab 5:
### CRUD Javascript App: Backend

Description: In the last part of working on the website you have to implement all Create/Read/Update/Delete operations which must be made via the corresponding HTTP methods in your REST API.

Important. You don't have to make a backend from the beginning - connect an existing one that you worked on in the first year.

**If you don’t have a backend server, you should create a new REST API using any preferred technology.**

## Lab 6:
### React.js: Home page

Description: Start creating your React App with a simple Home page (see the link to wireframe above). Your e-commerce app subject is about your entities from previous (3-5) works.

Variants -  (products that you are ‘selling’) the same as for previous works. (see the description to 3rd work)

Requirements:
- You have to use only React.js library for all of your mark-up. Which means - your index.html file shouldn’t be touched.
- Your Home page should follow the wireframe, i.e all of the elements ( header, navigation, footer etc. ) from wireframes must be presented on your website.
- Design: You have to use CSS styling or/and component libraries. Don't overthink it, use your imagination for UI, BUT the work with almost no styling is unacceptable.
- Functionality: For this work nothing but view only part is required. Any interaction (links/buttons) is not necessary, but you will have to complete them in your next labs.
- Code style:
Project structure: Your UI elements should be logically separated into React components (one file for each component) - at least 5 component files are required. In other words, you can’t just put all your JSX into 1-2 files. Use Functional components instead of Class components

## Lab 7:
### React.js: Catalog page

Description: Continue work on your React App by adding a page with Items list (see the link to wireframe of Catalog page above).

Variants - (products that you are ‘selling’) the same as for previous works. (see the description to 3rd work)

Requirements:
- All of the requirements for previous React.js works should be kept.
- Code style:
Use array.map() method for rendering your items list. Routing (switching between pages) should work now. All UI elements (buttons / select) should have corresponding React components (PrimaryButton.jsx / Select.jsx  etc.)
- Functionality (filter / search / view more) is still not required (you have to complete it on next works)

## Lab 8:
### React.js: Item page

Description: Continue work on your React App by adding a page for your Item (see the link to wireframe of Item page above). Also, now, you have to make all your previous pages (Home & Catalog) more interactive.

Variants - (products that you are ‘selling’) the same as for previous works. (see the description to 3rd work)

Requirements:
- All of the requirements for previous React.js works should be kept.
- Code style:
Your items should be stored inside the state or context (your choice) of your page .For your state management use useState() inside Functional Component instead of this.state and Class component. If you decided to use context, use useContext() hook instead of Context.Consumer
- Functionality (**IMPORTANT**):
- - Home page: “View more” button should display more elements on the same page. Tip: Elements can be just random paragraph & heading, use your imagination)
- - Catalog page: You should be able to filter your items list, by applying different filters by item's properties (i.e size/color/type)
- - Catalog page: Search by any text property option should also work
Catalog & Item pages: “View more” action on every item should refer to corresponding Item page, with correct information about item (get the info from your state/context)

## Lab 9:
### React.js: Connecting to REST API

Description: Finally! Now, you are about to put a final touches on all pages you created - implement interaction with your REST API server.

Variants -  (products that you are ‘selling’) the same as for previous works. (see the description to 3rd work)

Backend - just as discussed before, can be the one you used for your 3-5 work or a new one created from scratch. Tech stack - absolutely up to you.

Requirements:
- All of the requirements for previous React.js works should be kept.
- Code style:
- - For any http request - use axios library https://github.com/axios/axios#installing
- - All your API functions should be separated into single file (or folder, if you want) - just like you saw in Live coding for 5 lab with fetch() function.
- Functionality:
- - On Catalog Page - all items should now be fetched from your backend with GET method (using axios)
- - Search with filters - should also be implemented with GET request (search by text field can be left as it is). Hint: pass filters as url parameter
- - Before response from your GET method is received you have to display a Spinner(Loader component) to the user. Something like this: https://projects.lukehaas.me/css-loaders/

## Lab 10:
### React.js: Redux: Cart page (shopping cart)

Description: You are on your way to finishing this insane project… Create the first of three cart pages - Shopping cart page.

Also, here you meet one of the most popular React library - Redux.

Variants -  (products that you are ‘selling’) the same as for previous works. (see the description to 3rd work)

Requirements:
- All of the requirements for previous React.js works should be kept.
- Functionality:
- - Item page: “Add to cart” action should be implemented using Redux flow: when you add an item to cart, it should be added to your redux store. On Cart page you take all of the items from the store
- - Cart page: “add/remove” actions should be implemented through redux actions & reducers as well.
- Code style:
- - Redux: All Redux parts (actions / reducers / store) should be kept in separate and specific files (actions.js / reducers.js / store.js etc.)
- - Use useSelector hook for getting the data from redux store (instead of connect() function)
- - Use useDispatch hook for dispatching your actions (instead of connect() function)

## Lab 11:
### React.js: Formik: Cart page (Checkout & Success)

Description: Finish your project by creating the last of three cart pages - Checkout & Success pages.

As a bonus, you will learn a very handy and powerful form validation library - Formik.

Variants - (products that you are ‘selling’) the same as for previous works. (see the description to 3rd work)

Requirements:
- All of the requirements for previous React.js works should be kept.
- Functionality:
- - Form: Your form should have at least 5 fields
- - Form: Every field should have a validation rule (i.e max length / no special characters / only numbers), just required option - is not enough 
- - Form: You should have at least one field that uses RegEx and at least one field that doesn’t required string value(i.e Phone number)
- - Form: In the error message you should describe all errors in all fields with clear reason (i.e Email is incorrect, First name is a required field...)
- - Form: Error message should be a separate React Component
- - After successful form submit - the user is redirected to final page (Success page)
- Code style:
Use Formik & Yup libraries or any functionality related to form validation (fields validating, error messages, form submit)