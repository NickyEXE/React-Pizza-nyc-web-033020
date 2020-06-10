import React from "react"

const PizzaForm = (props) => {
  const {topping, size, vegetarian} = props.pizza
  return(
      <div className="form-row" onChange={props.onFormChange} >
        <div className="col-5">
            <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" value={
                topping
              }/>
        </div>
        <div className="col">
          <select value={size} name="size" className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check" >
            <input className="form-check-input" type="radio" name="vegetarian" value="Vegetarian" checked={vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" value="Not Vegetarian" checked={!vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.onFormSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
