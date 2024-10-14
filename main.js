// Main Variables

let theInput = document.querySelector(".get-repos input");
let grtButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

grtButton.onclick = function(){
    getRepos()
}

// Get Repos function
function getRepos(){

if(theInput.value == ""){
reposData.innerHTML = "<span> Please Write Githup Username.</span>"
}else{
     fetch(`https://api.github.com/users/${theInput.value}/repos`)
    .then((res) =>  res.json())
    .then((data)=>{
      reposData.innerHTML = '';

// Loop on Repos
data.forEach(data =>{

// Create the main div Element
let mainDiv  = document.createElement("div");

// Create Reop Name Text
let repoName = document.createTextNode(data.name);

// Append The Text To Main  Div
mainDiv.appendChild(repoName)

// Create Repo URL Anchot
let theUrl = document.createElement("a");

// Create Repo Url Text
let theUrlText = document.createTextNode("Visit")

// Append the Repo URL text to Anchor Tag
theUrl.appendChild(theUrlText)

// Add thje Hypertext Reference 'href'
theUrl.href =`https://api.github.com/users/${theInput.value}/${data.name}`

// Set Attribute Blank
theUrl.setAttribute('target', '_blank')

// Append URL Anchor To Mmin Div
mainDiv.appendChild(theUrl)

// Create Starts Count Span
let StartsSpan = document.createElement("span");

// Create The Start Count Text
let  startsText = document.createTextNode(`Stars ${data.stargazers_count}`);

// Add Star Count  Text To Stars Span
StartsSpan.appendChild(startsText)

// Apend stars count Span To Main Div
mainDiv.appendChild(StartsSpan)

// add class on main div
mainDiv.className = 'repo-box'

// Append The Naim Div To Container
reposData.appendChild(mainDiv)
     })
   })
  }
 }