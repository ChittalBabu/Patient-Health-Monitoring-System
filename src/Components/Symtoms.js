import React, { Component } from 'react';
class Symtoms extends Component{

  HeadacheEvent(selectedValue){
    this.props.onHeadacheChange();
  }
  ColdEvent(selectedValue){
  this.props.onColdChange();
  }
  FeverEvent(selectedValue){
  this.props.onFeverChange();
  }
  render(){
    return (
          <div>
          <label className="container">HeadAche
          <input type="checkbox" value='1' onChange={event => this.HeadacheEvent(event.target.value)} />
          <span className="checkmark"></span>
          </label>

          <label className="container">Cold
          <input type="checkbox" value='2' onChange={event => this.ColdEvent(event.target.value)}/>
          <span className="checkmark"></span>
          </label>

          <label className="container">Fever
          <input type="checkbox" value='3' onChange={event => this.FeverEvent(event.target.value)}/>
          <span className="checkmark"></span>
          </label>
          </div>
    )
  }
}
export default Symtoms;
