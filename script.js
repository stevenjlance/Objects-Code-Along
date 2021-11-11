// Below is a a list. Why is this a confusing way to store data?
var slance651 = ["Steven", "Lance", 32, "Brown", "Brown", "6 foot 0 inches", 190, 8, "slance@democracyprep.org", "(651)-555-5555"]

// 1. Let's turn this data into a list! A list is a variable, but instead of [ ] we use { }. Each value gets written as a name: value pair and each name: value pair is sperated by a comma. An example object is commented out below.

var myFirstObject = {
  favFood: "Pizza",
  favNumber: 8,
  favSinger: "Beyonce",
  "Home State": "Minnesota",
}
console.log(myFirstObject.favFood)
console.log(myFirstObject["Home State"])
myFirstObject.favFood = "Ramen"
myFirstObject.favColor = "Blue"
console.log(myFirstObject)
delete myFirstObject.favNumber
console.log(myFirstObject)

// 2. CREATE: Make an object called myInfo and store at least 5 things about yoursel in the list (e.g. First Name, Last Name, etc.). Make sure all name: value pairs are seperated with commans and all name items are enclosed in quotation marks!
var myInfo = {
	first: "Steven",
	last: "Lance",
	city: "Bronx",
	age: 33,
	favSinger: "Beyonce"
}


//3. READ: Print out your first name from myInfo using [] notation and you age using . notation
console.log(myInfo.first)


//4. UPDATE: Add your favorite TV show to your myInfo object.
// Add a key of sport and value of basketball
myInfo.sport = "basketball"

// Update a value in an object
myInfo.age += 1
console.log(myInfo)

// 5. DELETE: Delete your age from the myInfo object.
delete myInfo.age
console.log(myInfo)


// 6. ITERATE: Print out each person's favorite superhero with a sentence like "steven likes wonder woman", "taylor likes Jessica Jones", etc.)
var superheroes = {
  steven: "Wonder Woman",
  taylor: "Jessica Jones",
  danny: "Ms. Marvel",
  gabe: "Supergirl",
  sara: "The Hulk",
  shana: "Black Panther"
}

// note that keys are returned as strings so can't use dot notation.
for(key in superheroes){
	console.log(`${key} really likes ${superheroes[key]}`)
}




//7. ITERATE: You want to deliver a special message if the person likes Black Panther. If the person likes Black Panther say "______ loves the best superhero ever: Black Panther" otherwise say "_____ likes ______"
for(key in superheroes){
	if(superheroes[key] == "Black Panther"){
		console.log(`${key} likes the best superhero: Black Panther`)
	}
	else {
		console.log(`${key} really likes ${superheroes[key]}`)
	}
}





// This is the arrays you'll interact with! It's pretty good. Scroll down for the first challenge.
let names = ["Daniel","Yaika","Luke","William","Kathryn","Taylor","Makenzie","Brenton","Max","Mike","Olivia","Rebecca","Daley","Tim","Ahmad","Chelsey","Faedra","Terrace","Kate","Zaire"]

let nickname = ["Danny","Yikes","Loki","Wild Bill","Kath","Tay","Kenzy","Smelly","Smallman","","Liv","Becca","","Tim","Ahms","","Mattox","T-Dawg","KMoMo",""]

let age = [31,30,28,29,51,25,27,30,100,19,26,29,25,27,29,29,43,31,27,29]

let favoriteBand = ["Booker T and the MGs","OAR","Miike Snow","Pentatonix","Imagine Dragons","Joseph","Something Corporate","Guster","adele","Led Zeppelin","","The Beatles","Leon Bridges","Kishi Bashi","Saves The Day","Eli young band","OAR","Chicago","Adele","MCR"]

let favoriteShow = ["Mad Men","Penny Dreadful","Game of Thrones","Steven Universe","Game of Thrones","The West Wing","Bob's Burgers","Rick and Morty","Game of Thrones","Welcome to the NHK","Parks and Rec","Hunter x Hunter","Stranger Things","The Wire","The West Wing","WOD","The Office","The Office","Game of Thrones","Rick and morty"]

let isProgrammer  = [true,false,false,false,false,true,false,false,true,false,true,false,false,true,false,false,false,false,false,false]

let state = ["NY","TX","N/A - UK","TX","NC","NY","TX","ON","CA","AZ","AZ","TX","TN","CA","MI","ID","WI","AZ","AZ","TX"]

let hairColor = ["Brown","Black","Dark Blonde","Brown","Brown","Brown","Brown","Blonde","Brown","Blonde","Blonde","Brown","Brown","Black","Black","Blonde","Brown","Brown","Amber ","Black"]

let motto = ["Don't overthink it.","I guess we'll find out. ","People have catchphrases in America?","Being kind is always a good idea.","You can practice being right or you can practice being kind. ","The work always gets done.","Meh","Ohmydog","Get along little doggy","I never die.","The best is yet to come!","The thing is","You can lock your heart up","Swing Away","That's Dope!","Don't tell me","She is clothed in strength and dignity and she laughs without fear of the future","Beep beep beep. ","Do not pity the dead. Pity the living; most of all","I totally got this Motto/0","Don't overthink it.","I guess we'll find out. ","People have catchphrases in America?","Being kind is always a good idea.","You can practice being right or you can practice being kind. ","The work always gets done.","Meh","Ohmydog","Get along little doggy","I never die.","The best is yet to come!","The thing is","You can lock your heart up","Swing Away","That's Dope!","Don't tell me","She is clothed in strength and dignity and she laughs without fear of the future","Beep beep beep. ","Do not pity the dead. Pity the living; most of all","I totally got this "]

// 8. console.log the name of every person who responded to the survey

//for loop version
for(var i = 0; i < names.length; i++){
	console.log(names[i])
}
// Can use a for in loop here as well
for(index in names){
	console.log(names[index])
}



// 9. console.log "Hi, my name is _____, and I live in ____." for every person who responded to the survey
for(index in names){
	console.log(`Hi my name is ${names[index]} and I live in ${state[index]}`)
}




// 10. Create an empty array and name it shortBios. Inside of shortBios, create an object that stores each respondents name, nickname, and age. Then, console.log shortBios.
var shortBios = []
for(index in names){
	var person = {}
	person.name = names[index]
	person.nickname = nickname[index]
	person.age = age[index]
	shortBios.push(person)
}
console.log(shortBios)


// 11. Add the favorite show and favorite band to each person object inside of the shortBios array. Then, console.log shortBios.
// Easiest is to just modify number 10 with new values
for(var i = 0; i < shortBios.length; i++){
	shortBios[i].favoriteShow = favoriteShow[i]
	shortBios[i].favoriteBand = favoriteBand[i]
}
console.log(shortBios)



// 12. Create a new array called longBios. Inside of longBios, create an object that stores each respondents name, nickname, age, favorite show, favorite band, if they are a programmer, the state they live in, their hair color, and their personal bio. Then, console.log longBios.
var longBios = []
for(index in names){
	var person = {}
	person.name = names[index]
	person.nickname = nickname[index]
	person.age = age[index]
	person.favoriteBand = favoriteBand[index]
	person.favoriteShow = favoriteShow[index]
	person.isProgrammer = isProgrammer[index]
	person.hairColor = hairColor[index]
	person.motto = motto[index]
	longBios.push(person)
}
console.log(longBios)