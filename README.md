# Project developed for Bootcamp Driven Education


### *Mobile Layout*

https://user-images.githubusercontent.com/95102911/218332313-de4ce459-86ff-4915-b876-1feedb31a91b.mp4?raw=true

---

### *Desktop Layout*

<img width="1423" alt="Captura de Tela 2022-12-22 às 19 06 42" src="https://user-images.githubusercontent.com/95102911/209235142-04203509-9566-43c8-a425-c08122ab74de.png">

---

### *Desktop Layout Without Sidebar*

<img width="466" alt="Captura de Tela 2022-12-22 às 19 16 03" src="https://user-images.githubusercontent.com/95102911/209235158-5fe7ca81-2925-4337-82b2-c51529b5f56a.png">

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

✅ Requirements

- Layout
     - [ ] Apply layout to *desktop*, following layout provided in Figma;
     - [ ] Apply layout to *mobile*, following layout provided in Figma;
     - [ ] The layout without *sidebar* must be activated when the screen width is less than 935px;
     - [ ] The layout for *mobil*e must be activated when the screen width is less than 614px;
     - [ ] It is not mandatory that the *sidebar* is fixed as the user scrolls down the page as it happens on Instagram (but it is a bonus).

- CSS and Images
     - [ ] CSS files must be placed in the `public` folder and linked directly in the `index.html` of the `public` folder.
     - [ ] You must also create, inside `public`, an `assets` folder to put the images.
- Components
     - [ ] The page must be componentized in different files, using `import`/`export`:
         - List of components to be made
             - `App`
             - `Body`
             - `SideBar`
             - `NavBar`
             - `User`
             - `Stories` (where each item will be a different component, the `Story`)
             - `Posts` (where each item will be a different component, the `Post`)
             - `Suggestions` (where each item will be a different component, the `Suggestion`)
- [ ] All repetitive items in the project must be represented as Arrays/Objects in components and rendered in JSX using `map`. In the project, these items are:
     - The stories (must have at least 3 stories)
     - The posts (must have at least 3 posts)
     - Suggestions from followers (must have at least 3 suggestions)
     - The user above suggestions (this is not an array but the data must come from props)
- Example
     - Instead of:
        
         ``` jsx
         export default function List() {
         return(
         <ul>
         <li>Item 1</li>
         <li>Item 2</li>
         <li>Item 3</li>
         </ul>
         );
         }
         ```
        
     - You must follow the approach of:
        
         ``` jsx
         export default function List() {
         const items = ["Item 1", "Item 2", "Item 3"]
        
         return(
         <ul>
         {items.map((item) => <li>{item}</li>)}
         </ul>
         )
         }
         ```
        
- Dynamic data
     - [ ] The project should also have some dynamic data that will change on the screen. Are they:
         - [ ] Username (by pressing the pencil, a `prompt` appears to change it). If an empty string is passed, it does not update.
         - [ ] Profile image (when clicking once on the image, a `prompt` appears asking for a new link). If an empty string is passed, it does not update.
         - [ ] Save the post (by clicking on the icon to save the post, it should be filled in).
             - If the post is already saved, when clicking on the icon, the post should change to unsaved.
         - [ ] *Like* the post:
             - By clicking on the *like* icon the user will be able to like the post. That is, the heart icon should be filled in and red.
                 - If the post is already liked, when clicking on the icon, the post must be changed to disliked.
             - When clicking on the image of a *feed* post, the user will be able to like the post, that is, the *like* button must be filled in red.
                 - NOTE: just like on real Instagram, clicking on the image **NO** removes *likes*, just adds it if you don't already have it.
             - About the phrase “Liked by *so-and-so* and other **xxx** people”:
                 - The number of *likes* should increase when the person gives a *like* and decrease when removing it.
                 - The beginning of the sentence “Liked by *so-and-so*” can have any value in place of *so-and-so*, it doesn't need to be the name of the logged in user or change when the post is liked.

## ☑️ Bonus (optional)

- *Like* with *double click* on the image
     - [ ] To give *like* by clicking on the image, it is necessary to click twice in a row, quickly.
     - Double clicking with a long time interval DOES NOT SET *double click*. Only implementations using `onDoubleClick` from React or equivalent native event will be accepted:
     - When implementing bonuses, beware of transparent animation divs on top of the image. If these divs partially block the image click, the mandatory like requirement on the image click will fail.

- Heart animation on *double click*
     - [ ] When you *double click* the image, a heart should appear in the center of the image, which first grows and then disappears.
     - [ ] Animation parameters:
       - Initial scale: 0.2
       - Final scale: 1
       - Animation time: 0.3s
       - Heart color: white
       - After 0.5s, the heart disappears from the screen
