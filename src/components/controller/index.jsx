import React, { Component } from 'react'

class Controller extends Component
{
    constructor(props)
    {
        super(props)
 this.state = {
   start : true,
   pause : false,
   lap : false,
   reset : false
 }

    }

    starthandler()
    {
     this.setState({
         ...this.state,
    start:false,
    pause:true,
    lap:true
     })
this.props.start();

    }

    pausehandler()
    {
        this.setState({
            ...this.state,
            start:true,
            pause:false,
            reset:true,
            lap:false,
        })
this.props.pause();

    }
    resethandler()
    {
this.setState({
...this.state,
start:true,
start:true,
pause:false,
reset:false,
lap:false,
})

this.props.reset();

    }

    laphandler()
    {
this.props.laps()

    }

    getcontroller()

    {
        let output = null

if(this.state.start && !this.state.reset)
  {
      output = (
          <div>
              <button className ="btn btn-success btn-lg px-5" onClick ={ (event) => this.starthandler() }>Start</button>
          </div>
      )


  }

  else if (this.state.pause && this.state.lap)
    {
        output = (
            <div>
                <button className ="btn btn-primary btn-lg px-5 ml-5" onClick ={ (event) => this.pausehandler() }>
                Pause</button>

                <button className ="btn btn-warning btn-lg px-5 ml-5" onClick ={ (event) => this.laphandler() }>Lap
                </button>
            </div>
        )


    }
    else if(this.state.start && this.state.reset)
{
    output = (
        <div className="my-6">
            <button className ="btn btn-success btn-lg px-5 ml-5" onClick ={ (event) => this.starthandler() }>
            Start</button>

            <button className ="btn btn-danger btn-lg px-5 ml-5" onClick ={ (event) => this.resethandler() }>Reset
            </button>
        </div>
    )

}
 return output;

    }


    render()
    {

        return this.getcontroller()

    }

}

export default Controller;