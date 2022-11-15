console.log("Hello, World!");
// changed h1 element
let h1_arr = document.getElementsByTagName("h1")
console.log( h1_arr[0] )
let h = h1_arr[0]
h.innerHTML = "Lab12 Assignment"
h.style.color = "blue"

// added hr element
let hr = document.createElement("hr")
console.log(hr)
document.body.appendChild(hr)

// added h2 element
let h2 = document.createElement("h2")
h2.innerHTML = "Task"
h2.style.color = "red"
document.body.appendChild(h2)

let p1 = document.createElement("p")
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
p1.style.color = "black"
document.body.appendChild(p1)

let ul1 = document.createElement("ul")
let li = document.createElement("li")
li.innerHTML = "find elements in the DOM (<b>5 points</b>);"
li.style.color = "green"
ul1.appendChild(li)
document.body.appendChild(ul1)
let li1 = document.createElement("li")
li1.innerHTML = "create/add/remove elements (<b>5 points</b>);"
li1.style.color = "purple"
ul1.appendChild(li1)
document.body.appendChild(ul1)
let li2 = document.createElement("li")
li2.innerHTML = "change content of the elements (<b>5 points</b>);"
li2.style.color = "green"
ul1.appendChild(li2)
document.body.appendChild(ul1)
let li3 = document.createElement("li")
li3.innerHTML = "change styles of the elements (<b>5 points</b>);"
li3.style.color = "purple"
ul1.appendChild(li3)
document.body.appendChild(ul1)
let li4 = document.createElement("li")
li4.innerHTML = "change attributes of the elements (<b>5 points</b>);"
li4.style.color = "green"
ul1.appendChild(li4)
document.body.appendChild(ul1)
let li5 = document.createElement("li")
li5.innerHTML = "change classes of the elements (<b>5 points</b>)."
li5.style.color = "purple"
ul1.appendChild(li5)
document.body.appendChild(ul1)

let p2 = document.createElement("p")
p2.innerHTML = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this link."
p2.style.color = "black"
document.body.appendChild(p2)

// added hr element
let hr1 = document.createElement("hr")
console.log(hr1)
document.body.appendChild(hr1)


// added h2 element
let h3 = document.createElement("h2")
h3.innerHTML = "Submission"
h3.style.color = "red"
document.body.appendChild(h3)

let p3 = document.createElement("p")
p3.innerHTML = "To submit your work, follow these instructions:"
p3.style.color = "black"
document.body.appendChild(p3)

let ul2 = document.createElement("ul")
let li6 = document.createElement("li")
li6.innerHTML = "Create a new repository on Github, named <b>lab12</b> (<b>1 point</b>)."
li6.style.color = "green"
ul2.appendChild(li6)
document.body.appendChild(ul2)

let li7 = document.createElement("li")
li7.innerHTML = "Clone this repository to your local machine and work inside it."
li7.style.color = "purple"
ul2.appendChild(li7)
document.body.appendChild(ul2)

let li8 = document.createElement("li")
li8.innerHTML = "Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; Hello World tag with message (<b>1 point</b>)."
li8.style.color = "green"
ul2.appendChild(li8)
document.body.appendChild(ul2)

let li9 = document.createElement("li")
li9.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain our program (assignment) described above (<b>1 point</b>).;"
li9.style.color = "purple"
ul2.appendChild(li9)
document.body.appendChild(ul2)

let li10 = document.createElement("li")
li10.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section)."
li10.style.color = "green"
ul2.appendChild(li10)
document.body.appendChild(ul2)

let li11 = document.createElement("li")
li11.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>)."
li11.style.color = "purple"
ul2.appendChild(li11)
document.body.appendChild(ul2)

let li12 = document.createElement("li")
li12.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>)."
li12.style.color = "green"
ul2.appendChild(li12)
document.body.appendChild(ul2)

let hr3 = document.createElement("hr")
document.body.appendChild(hr3)
