import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newItem: "",
      list: [],
      lineThrough: false
    }
  }

  updateInput(key, value) {
    this.setState({
      [key]: value
    })
  }



  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    }
    // copy of current list item
    const list = [...this.state.list]

    // adding an item to the list
    list.push(newItem)

    //update status with new list and restet new item input
    this.setState({
      list,
      newItem: ""
    })
  }
  deleteItem(id) {
    const list = [...this.state.list]
    const updatedList = list.filter(item => item.id !== id)
    this.setState({ list: updatedList })
  }

  strikeThrough(event) {
    console.log(event.target)

    const line = this.state.lineThrough

    this.setState({
      lineThrough:!line
    })
     if(this.state.lineThrough){
       (event.target.style.textDecoration='line-through')
     } else{
      event.target.style.textDecoration='none'
     }
  }

  render() {

    return (
      <div>

        <header>
          <p id="header">My Todo List</p>
        </header>
        <div id="input">
          <input id="addItem" type="text" placeholder="Add Item Here" value={this.state.newItem} onChange={e => this.updateInput("newItem", e.target.value)} />
          <button className="enter" type="submit" onClick={() => this.addItem()}>Enter</button>
        </div>
        <ul>
          {this.state.list.map(item => {
            return (
              <li key={item.id}><ion-icon name="add-circle-outline"></ion-icon>
                <a onClick={this.strikeThrough.bind(this)}>{item.value}</a>
                <button className="delete" onClick={() => this.deleteItem(item.id)}><ion-icon name="close-outline"></ion-icon></button>
              </li>
            )
          })}
        </ul>

      </div>
    )
  }
}


export default App