import React from 'react'
import ReactDOM from 'react-dom'
import Todos from '../components/Todos'

// Your code goes here
//variables
var inputText = document.querySelector('#inputNote')
var inputBtn = document.querySelector('#addBtn')
var inputValue
inputText.addEventListener('keypress', enter)
inputBtn.addEventListener('click', addToDo)

//array
var todos = []
console.log(todos)

//functions
function enter(event) {
    if ( event.key === 'Enter'){
        addToDo()
    }
}
function addToDo() {
    var inputValue = document.querySelector('#inputNote').value
    if(inputValue !== ''){
        console.log(inputValue)
        todos.push(inputValue)
        renderView(todos)
        document.querySelector('#inputNote').value = ''
    }
}

window.renderView = (data) => {
    ReactDOM.render(
        <Todos data={data} />,
        document.getElementById('inputResults')
    )
}
