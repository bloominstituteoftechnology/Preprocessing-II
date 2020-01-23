# Preprocessing II: Fun Bus Website
______________________________________________________________

## Task 3: Import LESS Files

* [x] Navigate to your `index.less` file. Notice the file is blank.  In order for you to see the styles for this project you must import them in a certain order.  That order is as follows:

1. `variables.less`
2. `mixins.less`
3. `reset.less`
4. `global.less`
5. `navigation.less`
6. `footer.less`
7. `home-page.less`
______________________________________________________________

## Task 4: Desktop Updates Needed
* [ ] Review the [desktop design file](design-files/fun-bus-desktop.png).  Notice the navigation, header, and buttons at the bottom of the page are missing.
* [ ] Navigation: Use the `navigation.less` file for all your navigation styling
* [ ] Main Header: Use the `home-page.less` file for the header styling.
* [ ] Buttons: Create a parametric mixin that can create the missing buttons in the design file. Use the `mixins.less` file to create your mixin.
______________________________________________________________

## Task 5: Mobile Updates Needed
* [ ] Use escaping to create a variable named `@mobile` that contains this value: `(max-width: 500px)`.  Use the `variables.less` file to house your variables.
* [ ] Review the [mobile design file](design-files/fun-bus-mobile.png). You will see several design updates that need updating. 
* [ ] Match the design file at `500px` as well as you can 
______________________________________________________________

## Stretch Goals: 
* [ ] Create an animation mixin using parametric mixins
* [ ] Introduce a form with inputs allowing users to select a vacation package and a submit button at the bottom of the page. Introduce inputs for name, email, phone number, and an area for them to leave special instructions. 
* [ ] Style the site to look good at all sizes, not just desktop and phone



