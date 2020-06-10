import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    editedPizza: {
      id: null,
      topping: "",
      size: "",
      vegetarian: false,
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(res=>res.json())
    .then(pizzas => this.setState({pizzas: pizzas}))
  }

  editPizza = (pizza) => {
    this.setState({editedPizza: pizza})
  }

  onFormChange = (e) => {
    const name = e.target.name
    let value = e.target.value
    if (name ==="vegetarian"){
      e.target.value === "Vegetarian" ? value = true : value = false
    }
    this.setState({
      editedPizza: {...this.state.editedPizza, [name]: value}
    })
  }

  onFormSubmit = () => {
    const {pizzas, editedPizza} = this.state
    let index = pizzas.findIndex(pizza => pizza.id === editedPizza.id)
    let newPizzas = [...pizzas]
    newPizzas[index] = editedPizza
    this.setState({pizzas: newPizzas})
  }

  render() {
    console.log(this.state)
    const {pizzas, editedPizza} = this.state
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={editedPizza} onFormChange={this.onFormChange} onFormSubmit={this.onFormSubmit} />
        <PizzaList pizzas={pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
