import React, { Component } from 'react';
import styles from './TraficSignal.css';
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
let setLights=1;
class TraficSignal extends Component{
  constructor(props) {
    super(props);
     this.state = {count: 1,redCount:0,yellowCount:0,greenCount:0}
     this.timer = setInterval(this.tick.bind(this), 1000)
  }
  tick () {
    this.setState({count: (this.state.count + 1)})
        this.setState({redCount: (this.state.redCount + 1)})
  }
  stopTimer () {
    clearInterval(this.timer)
  }

  render(){
    return (
      <div className="trafficlight">
  <div className="protector"></div>
  <div className="protector"></div>
  <div className="protector"></div>

  <If condition={setLights < 4}>
         <Then>
            <div className="red"></div>
         </Then>
         <ElseIf condition={setLights > 3 && setLights < 7}>
          <Then>
          <div className="yellow"></div>
          </Then>
         </ElseIf>
         <ElseIf condition={setLights  > 7 && setLights  < 10}>
          <Then>
          <div className="green"></div>
        </Then>
         </ElseIf>
       </If>
</div>
    )};
}

export default TraficSignal;
