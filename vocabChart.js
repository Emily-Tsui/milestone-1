const bodEl = document.getElementById("tbod")

const inputVocab = document.getElementById("input-vocab")

let myWord = ""
const inputBtn = document.getElementById("input-button")

let myPronunciation = ""
const inputPro = document.getElementById("input-pronunciation")

let myDefinition = ""
const inputDef = document.getElementById("input-definition")

let selectedtRow = null



inputBtn.addEventListener("click", function() {
    addEntries()
})

function addEntries() {
    myWord = inputVocab.value  
    myPronunciation = inputPro.value 
    myDefinition = inputDef.value

    let currentWord = myWord
    let currentPro = myPronunciation
    let currentDef = myDefinition


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

    

    myDeleteBtn.onclick = function () {
        let confirmDelete = confirm("Are you sure you want to delete this row?")

        if (confirmDelete) {
            deleteRow(newRow)
        }
    }

    myEditBtn.onclick = function () {
        inputVocab.value = currentWord
        inputPro.value = currentPro
        inputDef.value = currentDef

        selectedtRow = newRow
    }   

    if (selectedtRow !== null) {
    selectedtRow.children[0].innerHTML = myWord
    selectedtRow.children[1].innerHTML = myPronunciation
    selectedtRow.children[2].innerHTML = myDefinition

    selectedtRow = null
    return
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

