import React,{Component} from 'react'
import './title.css'

class Title extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            title: 'this is dummy title',
            test:'testing one',
            isInput: false
               }

   }

edithandler()
{
    this.setState({
...this.state,
isInput:true

    })

}

inputchange(event)
{
this.setState({
    ...this.state,
    title:event.target.value,
})
}
KeyPresshandler(event)
{
    if(event.key === 'Enter' )
    {
    this.setState({

        ...this.state,
        isInput:false

    })

}

}
blurhandler(event)
{
this.setState({
...this.state,
isInput:false

})

}



    render() {
        let output = null;
if(this.state.isInput)
{
output =(
<div className="title">
<input type="text" className="form-control"
 value={this.state.title}
 onChange={ (event) => this.inputchange(event)}
 onKeyPress = { (event) => this.KeyPresshandler(event)}
onBlur ={ (event) => this.blurhandler(event)}
 />


</div>

)
// console.log('working');

}

else
{

   output =
   (
       <div className="d-flex Title">
   <h1 className="display-4">{this.state.title}</h1>
<span className="ml-auto edit-icon" onClick = { () => this.edithandler()}>Edit</span>
</div>

)

}

        return(

/* <h1> name one is:{this.props.name} and Email:{this.props.email} </h1> */
<div>{ output }</div>

   )
 }

}

export default Title
