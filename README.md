# OBJECTS AND ITERATION


## GOAL

In this lab, you'll start to deal with objects that organize data more and more clearly. We'll start with a list of some of my favorite things, but each favorite item has a unique key.

```javascript
var myFirstObject = {
	favFood: "Pizza",
	favNumber: 8,
	favSinger: "Beyonce",
	"Home State": "Minnesota",
}
```

For example, to print my favorite food, you'd use the code `console.log(myFirstObject["favFood"])` or `console.log(myFirstObject.favFood)`.

Open up `script.js`, code out solutions to the challenges, and open the JavaScript console to see if the program is running correctly.

Once you finish your analysis the favoriteBook's object, there is a nested data structure that will require to use your knowledge of both lists and objects! Use the comments in `script.js` to help you out! 

![](https://media.giphy.com/media/BmmfETghGOPrW/giphy.gif)


## TIPS, EXAMPLES, & ANSWERS

Iteration for a dictionary is really similar to iteration for a list. Here's an example:
```javascript
var treatments = {
    "sunburn": "apply some aloe vera",
    "dehydration": "drink some water",
    "headache": "drink some water and consider taking a pain-reliever"
  }

//You're naming this internal variable (propery in this case). You can call it whatever you want, but the more descriptive your variable names, the easier they are to use.
for property in treatments {

    console.log("If you're suffering from " + property + ", you should probably " + treatments[property] + ".") 
    // or with templateing
    console.log(`If you're suffering from ${property} you should probably ${treatments[property]}.`)
}

//Since the issue variable is only taking on the value of keys from the tratements dictionary, we need to use bracket notation to get the matching remedy for each issue.
```

If you need a boost, you can see answers to challenge 1.

<details>
  <summary> Click to see a solution to challenge 1 </summary>

  ```javascript

    //Reassign values for a key in a dictionary the same way we replace items in a list:
  
    myFirstObject["favFood"] = "Pho"
  
    // You can print it out to check whether it works by also including this line of debugging code:
  
    console.log(myFirstObject["favFood"])
  
    //You can also access by using dot notation:
    
    console.log(myFirstObject.favFood)
  ```

</details>
<br>