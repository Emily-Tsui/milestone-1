const bodEl = document.getElementById("tbod")

const inputVocab = document.getElementById("input-vocab")

let myWord = ""
const inputBtn = document.getElementById("input-button")

let myPronunciation = ""
const inputPro = document.getElementById("input-pronunciation")

let myDefinition = ""
const inputDef = document.getElementById("input-definition")





inputBtn.addEventListener("click", function() {
    addEntries()
    // myWord = inputVocab.value  
    // myPronunciation = inputPro.value 
    // myDefinition = inputDef.value

    // let newRow = document.createElement("tr")

    // let newDataVocab = document.createElement("td")
    // let newDataPro = document.createElement("td")
    // let newDataDef = document.createElement("td")

    // newDataVocab.append(myWord)
    // newRow.append(newDataVocab)
    // console.log(myWord)

    // newDataPro.append(myPronunciation)
    // newRow.append(newDataPro)
    // console.log(myPronunciation)

    // newDataDef.append(myDefinition)
    // newRow.append(newDataDef)
    // console.log(myDefinition)

    // bodEl.append(newRow)
})

function addEntries() {
    myWord = inputVocab.value  
    myPronunciation = inputPro.value 
    myDefinition = inputDef.value


    let newRow = document.createElement("tr") //container for each cell data

    let word = createTableCells(myWord)
    let pro = createTableCells(myPronunciation)
    let def = createTableCells(myDefinition)

    let myDeleteBtn = document.createElement("button")
    let del = createTableCells(myDeleteBtn)
    myDeleteBtn.innerHTML = "Delete"

    let myEditBtn = document.createElement("button")
    let edit = createTableCells(myEditBtn)
    myEditBtn.innerHTML = "Edit"

    newRow.append(word)
    newRow.append(pro)
    newRow.append(def)
    newRow.append(del)
    newRow.append(edit)

    // newDataVocab.append(myWord)
    // newRow.append(newDataVocab)
    // console.log(myWord)

    // newDataPro.append(myPronunciation)
    // newRow.append(newDataPro)
    // console.log(myPronunciation)

    // newDataDef.append(myDefinition)
    // newRow.append(newDataDef)
    // console.log(myDefinition)

    

    myDeleteBtn.onclick() = function () {
        alert("Are you sure you want to delete");
    }
    bodEl.append(newRow)

    
}

function createTableCells(data) {
    let val = document.createElement("td")
    val.append(data)

    return val

}


function editRow() {

}


function deleteRow(row) {
    row.remove()
}

