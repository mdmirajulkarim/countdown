import React, { Component } from 'react';
import Title from './title'
import Countdown from './countdown/index'
import Controller from './controller/index'
import Laps from './laps/index'

class App extends Component {

  constructor(props)
  {
    super(props)
this.state =
   {
  time:{
    min:0,
    sec:0,
    mili:0
     },
laps:[]


  }

}

getstart()
{
 this.intervalid = setInterval(() => {
    let min = this.state.time.min
    let sec = this.state.time.sec
    let mili = this.state.time.mili

    if(mili >= 10)
    {
      sec = sec + 1
      mili = 0
    }
    if(sec >= 60)
     {
       min = min + 1
       sec  = 0
     }
this.setState({
...this.state,
 time :{
   min,
  sec,
  mili: mili + 1
 }


})

  },100)

}

getpause(){
  clearInterval(this.intervalid)
}
getreset()
 {
this.setState({
  time:{
    min:0,
    sec:0,
    mili:0
     },
laps:[]

})

 }

 getlaps()
   {
     let time = {
...this.state.time
     }
 this.setState({
   ...this.state,
laps:[time, ...this.state.laps]
 })


   }




  render() {
    return (
      <div className="App">
       <div className="container py-5">
       <div className="row">
          <div className="col-sm-8 offset-2">
          <Title/>
          <Countdown time={this.state.time} />
<Controller
 start = {this.getstart.bind(this)}
 pause = {this.getpause.bind(this)}
reset =  {this.getreset.bind(this)}
laps = {this.getlaps.bind(this)}
 />
<Laps  laps= {this.state.laps}/>

          </div>
       </div>
       </div>

      </div>
    );
  }
}

export default App;