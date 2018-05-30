import React, { Component } from 'react';
import Symtoms from './Symtoms';
import Result from './Result';
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      Headche:false,
      Cold:false,
      Fever:false
    }
    this.updateHeadcheState=this.updateHeadcheState.bind(this);
    this.updateColdState=this.updateColdState.bind(this);
    this.updateFeverState=this.updateFeverState.bind(this);
  }
  updateHeadcheState() {
    this.setState({Headche: !this.state.Headche});
  }
   updateColdState(){
    this.setState({Cold: !this.state.Cold});
  }
   updateFeverState(){
    this.setState({Fever: !this.state.Fever});
  }
  render(){
    return (
<div className="backgorund">
<div className="col-xs-12 col-md-6 divHeader" >
 Select your symptoms below to get tablet name:
  </div>
  <div className="col-xs-12 col-md-6 divCheckbox" >
<Symtoms onHeadacheChange={this.updateHeadcheState} onColdChange={this.updateColdState} onFeverChange={this.updateFeverState}/>
</div>
<If condition={this.state.Headche && this.state.Cold && this.state.Fever }>
       <Then>
         <p className="resultTextDie">Dont use home remedies, go to doctor before u die!</p>
       </Then>
       <ElseIf condition={this.state.Headche && this.state.Cold}>
         <p className="resultText">Please take tablet for headche and cold</p>
       </ElseIf>
       <ElseIf condition={this.state.Headche && this.state.Fever}>
         <p className="resultText">Please take tablet for headche and Fever</p>
       </ElseIf>
       <ElseIf condition={this.state.Cold && this.state.Fever}>
         <p className="resultText">Please take Acetaminophen and Ibuprofen</p>
       </ElseIf>
       <ElseIf condition={this.state.Headche}>
        <p className="resultText">Please take Crosin tablet</p>
       </ElseIf>
       <ElseIf condition={this.state.Cold}>
         <p className="resultText">Please take tablet for Cold</p>
       </ElseIf>
        <ElseIf condition={this.state.Fever}>
       <p className="resultText">Please take tablet for Fever</p>
       </ElseIf>
       <Else>
       <p className="resultText"></p>
       </Else>
     </If>
</div>
)};

}
export default Home;
