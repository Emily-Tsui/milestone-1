let myWords = []
const inputEl = document.getElementById("input-vocab")
const inputBtn = document.getElementById("input-button")
const thEl = document.getElementById("th1")

let myPronunciations = []
const inputPro = document.getElementById("input-pronunciation")
const tdEl = document.getElementById("td1")

let myDefinitions = []
const inputDef = document.getElementById("input-definition")
const td2El = document.getElementById("td2")


inputBtn.addEventListener("click", function() {
    myWords.push(inputEl.value)
    console.log(myWords)
    renderWords()

    myPronunciations.push(inputPro.value)
    console.log(myPronunciations)
    renderPronunciations()

    myDefinitions.push(inputDef.value)
    console.log(myDefinitions)
    renderDefinitions()
})

function renderWords() {
    let listItems = ""
    for (let i = 0; i < myWords.length; i++) {
        listItems += "<li>" + myWords[i] + "<li>"
    }
    thEl.innerHTML = listItems
}

function renderPronunciations() {
    let listItems = ""
    for (let i = 0; i < myPronunciations.length; i++) {
        listItems += "<li>" + myPronunciations[i] + "<li>"
    }
    tdEl.innerHTML = listItems
}

function renderDefinitions() {
    let listItems = ""
    for(let i = 0; i < myDefinitions.length; i++) {
        listItems += "<li>" + myDefinitions[i] + "<li>"
    }
    td2El.innerHTML = listItems
}