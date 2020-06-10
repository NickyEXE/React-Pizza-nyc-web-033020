import React from "react"

const Pizza = (batman) => {
  const {topping, size, vegetarian} = batman.pizza
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Leafy" : "Meaty"}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => batman.editPizza(batman.pizza)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
