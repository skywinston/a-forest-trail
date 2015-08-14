# a forest trail

Your task is to build an MVP of a game somewhat similar to this: http://adarkroom.doublespeakgames.com/

The version of the game you will build involves moving the user through a forest trail, in which they will be prompted to pick/eat berries and find/drink water while moving along a grid. Each step they take through the forest will decrease their overal energy, but every berry and water resource that is consumed will increase their energy. Running out of energy effectively "loses" the game, and making it through to the end of the trail essentially "wins" the game. You will keep track of how long it takes the user to move to the end of trail, effectively making speed an important part of the game.

Here is a live example of what you will be building. This currently covers up through the first three stretch goals. http://gschool.github.io/async-event-problem-solving-game-a-forest-trail/

## Programming Objectives

This game is designed to cover the following programming objectives:

1.  [Find an element by id, tagname, classname, and more advanced CSS selectors](https://students.galvanize.com/objectives/180)
1.  [Set an element’s innerHTML and text](https://students.galvanize.com/objectives/181)
1.  [Construct and add simple elements to the DOM](https://students.galvanize.com/objectives/182)
1.  [Remove elements from the DOM](https://students.galvanize.com/objectives/183)
1.  [Detach and reattach DOM elements](https://students.galvanize.com/objectives/184)
1.  [Access properties of DOM elements such as text, html, value](https://students.galvanize.com/objectives/185)
1.  [Add, update, and remove attributes on elements](https://students.galvanize.com/objectives/187)
1.  [Add syntactically valid event listeners using named and anonymous functions](https://students.galvanize.com/objectives/204)
1.  [Write valid click, keypress, and form submission event listeners](https://students.galvanize.com/objectives/212)
1.  [Define functions that take callbacks and run async code](https://students.galvanize.com/objectives/1237)

## Programming Requirements

You will write code to satisfy the following features and requirements. If you complete all of the below features, feel free to add some of your own to make this a more complex game.

-  Make **one commit per numbered MVP Story**. As currently stands, you should have 8 commits for the MVP, and an additional 5 commits for the stretch goals.
-  **Please provide code comments on all major pieces of code**. Comments should give a general idea of what your code is doing, especially if the function of a piece of code is not immediately obvious. Generally, comments should go above the lines of code they are referencing. You do not need comments for _every_ line of code; use your best judgement on what needs commenting based on the complexity of the code block. Please see the image towards the bottom for an example of sufficient code comments.
-  Please pay attention to indentation; code should be indented with the intention of being easy to read and manipulate.
-  After every story, reflect on your problem solving process. Were you able to use Polya's method for problem solving successfully? Ask yourself the following questions:
  -  What programming objectives allowed me to be successful on the previous story?
  -  What programming objectives could I spend more time reviewing to make stories like this easier the next time around?

## MVP Stories

Please deliver code to satisfy the following stories/features. **Update this list of items if you end up adding more features**.

1.  On page load, initialize a users energy to 100 and display it on the right side of the DOM as "energy: 100". You may find it useful to use [createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) and [appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) to create and show the element with the user's health.
1.  Display a [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) that prompts the user to "walk the trail". The above 
  1. After clicking the button, make it [disabled](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Attribute/disabled) for three seconds. If you are stuck, refer to this example and see if you can follow a similar pattern, [button disabled](http://jsfiddle.net/z2ad9a6o/)
  1.  Keep track of every click a user makes on the button and display these as "steps" on the page (one click of the button = one step). Display this underneath the "Energy" label in a similar format.
  1.  On the left side of the page, display "you continue down the trail" every time the walk button is clicked.
1.  Every 10 "steps", prompt the user to "pick berries"
  1.  When this button is clicked, give the user a random number of berries between 1 and 10.
  1.  Like the above steps, display how many berries a user has, but only after they have at least one berry.
  1.  On the left side of the page, display "you picked {X} berries" every time the walk button is clicked.
1.  Every twenty steps, prompt the user to "look for water"
  1.  Give the user a 50% chance of finding water. If found, increase their supply of water by 1, and display how much water the user has on the screen. Again, only display water after the user has found water for the first time.
  1.  On the left side of the page, display either "you found water", or "you couldn't find any water" every time the walk button is clicked.
1.  On every step, decrease the user's energy by a random number between 1 and 10.
1.  Every ten seconds, give the option to "eat berries". One click of this button decreases the "berries" count by 1, and increases energy by 2.
  1.  On the left side of the page, display "you ate berries and gained energy" when this button is.
1.  Every five seconds, give the option to "drink water". One click of this button decreases the "water" count by 1. and increases energy by 10.
  1.  On the left side of the page, display "you ate berries and gained energy" when this button is clicked.
1.  Add your own story that interacts with the "player status" in any way.


## Stretch Goals

1.  Display a rectangle on the page to represent the "forest". The rectangle should should be 25 pixels wide, and be as tall as the page.
  1. Inside this rectangle, place 50 divs that are 5% as tall as the forest itself. In the topmost div inside of the forest, make the background black to represet the current position of the player.
1.  Everytime the "walk the trail" button is clicked, move the black background to the div underneath the current position.
1.  On page load, keep track of how long it takes the user to move through the forest.
1.  Adjust the timeouts in the above functions to make the game harder/easier.
1.  Store a leaderboard in localStorage.


## Getting Started

To get started, create an `index.html` page, an `app.js` and `app.css` file, and setup the valid [HTML document](http://www.sitepoint.com/a-minimal-html-document-html5-edition/) in your `index.html` page. You can view the `index.html` page in chrome by double clicking it, or by running a simple `http-server` from the command line and visiting the local URL.

Break every story/feature down using [Polya's Steps for Problem Solving](http://faculty.salisbury.edu/~dccathcart/mathreasoning/polya.html). That is, for each story, make sure you:

1.  Understand the problem by restating the problem in your own words, diagramming, and asking questions.
1.  Devise a plan by looking for patterns, looking for similar formulas, and by extracting your problem so that it can be solved in a simplified environment.
1.  Carry out the plan. If the plan does not work, revisit step 2.
1.  Look back at how you solved your problem. Can it be simplified? Will this solution help you solve similar problems in the future?

If you are looking for a place to start, consider this illustration. Certainly this problem can be solved in a number of ways, but this may be helpful for going through the first and second steps of Polyia's method for the first story.

![Story One](story-1-forest-trail.jpg)


Since we haven't covered CSS at this point, the application can have little to no styling. Here are some base styles that will play nicely with the markup in the above image.

```
#left, #right, #middle {
  width: 33%;
  float: left;
  min-height: 100px;
}

#status {
  border: 2px solid #000;
  padding: 10px;
}
```
