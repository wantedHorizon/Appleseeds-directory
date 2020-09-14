// Make a div

const div = document.createElement('div');
// document.body.innerHTML=`<div></div>`

// add a class of wrapper to it
div.classList.add('wrapper');

// document.body.innerHTML = `<wrapper>${document.body.innerHTML}</wrapper`;

// put it into the body

document.body.insertAdjacentElement('afterbegin', div);
// make an unordered list
const ul = document.createElement('ul');

// add three list items with the words "one, two three" in them

const createLi = (str) => {
    const li = document.createElement('li');
    li.textContent = str;
    return li;
}
ul.appendChild(createLi("one"));
ul.appendChild(createLi("two"));
ul.appendChild(createLi("three"));

// put that list into the above wrapper
div.appendChild(ul);

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = "https://www.energylivenews.com/wp-content/uploads/2014/06/Smiley-face-emoticon-575.jpg";
// set the width to 250
img.style.width = "250px";
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = "Cute Puppy";
// Append that image to the wrapper
div.appendChild(img);
// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
div.innerHTML = `<div><p>paragraph 1 </p> <p>paragraph 2 </p> </div>` + div.innerHTML;
// add a class to the second paragraph called warning
div.firstElementChild.lastElementChild.classList.add('warning');
// remove the first paragraph
div.firstElementChild.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
const generatePlayerCard = (name, age, height) => {
    return `
    <div class="playerCard">
        <h2>${name} — ${age}</h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be ${age*7}. That would be a tall dog!</p>
        <button>&times delete </delete>
    </div>
    `;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const div2 = document.createElement('div');
div2.classList.add('cards');

// Have that function make 4 cards
// append those cards to the div
for(let i=0; i<4; i++){
    div2.innerHTML+=(generatePlayerCard("name"+i,5*i+3,150+i*10));
}
// put the div into the DOM just before the wrapper element
document.body.insertAdjacentElement("afterbegin",div2);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed




// select all the buttons!
// make out delete function
// loop over them and attach a listener

const buttons =document.querySelectorAll('button');
const removeParent =(e) => {
    console.log(e.path[1].remove());
};
buttons.forEach( btn => {btn.addEventListener('click',removeParent)})