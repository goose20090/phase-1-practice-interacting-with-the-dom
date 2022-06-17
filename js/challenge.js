//Grabbing buttons and defining them globally
const count = document.getElementById("counter")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const pause = document.querySelector("#pause")
const heart = document.getElementById("heart")
const submit = document.querySelector("#submit")

let likesObj = {}
heart.addEventListener("click", ()=>{
  let counterValue = document.getElementById("counter").textContent
  const ul = document.querySelector(".likes")
  if (likesObj[counterValue] > 0 ){
    const li = document.createElement("li")
    likesObj[counterValue]+= 1
    li.innerText = `${count.innerHTML} has been liked ${likesObj[counterValue]} times`
    ul.appendChild(li)
  } else {
    const li = document.createElement("li")
    likesObj[counterValue] = 1
    li.innerText = `${count.innerHTML} has been liked ${likesObj[counterValue]} times`
    ul.appendChild(li)
  }
})

//See the timer increment every second once the page has loaded
let seconds = 0;

function countSeconds(){
    seconds += 1;
    return count.innerText= seconds;
}

let interval = setInterval(countSeconds, 1000);

//Manually increment and decrement the counter using the plus and minus buttons

plus.addEventListener("click",()=> {
    seconds+=1
    return count.innerText = seconds;
});

minus.addEventListener("click", ()=>{
    seconds -= 1
    return count.innerText = seconds;
})

//Pause the counter, which should: pause the counter, disable all buttons except the pause button, switch the label on the button from "pause" to "resume"

pause.addEventListener("click", (e)=>{
  if(pause.innerText === "pause"){
  plus.disabled = true
  minus.disabled = true
  heart.disabled = true
  submit.disabled = true
  clearInterval(interval)
  pause.innerText= "resume"
}
else {
  pause.innerText = "pause"
  interval = setInterval(countSeconds, 1000)
  plus.disabled = false
  minus.disabled = false
  heart.disabled= false
  submit.disabled = false
}

})

//Leave comments on my gameplay, such as: "Wow, what a fun game this is."

let commentForm = document.querySelector("#comment-form")
let list = document.querySelector("#list")
ul = document.createElement("ul")
list.append(ul)

commentForm.addEventListener("submit", (e)=>{
  e.preventDefault()
  listContainer = document.getElementById("list")
  
  li = document.createElement("li")
  li.innerText = e.target[0].value
  ul.append(li)
  commentForm.reset()
})




// "Like" an individual number of the counter. I should see the count of the number of likes associated with that number displayed











/*let likeArray = []

heart.addEventListener("click", ()=> {

    
    li.textContent= `${seconds} has been liked ${likeCount} time`;
    const li = document.createElement("li")
    likes[0].append(li);
})


function likeTracker() {
  let likeObj = {
    secondsTracker: seconds,
    likeCountTracker: 1
  }
  let found = likeArray.find((obj) => obj.secondsTracker === seconds)

  if (found === undefined) {
    likeArray.push(likeObj)
    return likeArray
  }
  else {
    found.likeCountTracker += 1
    return likeArray
  }
}
*/