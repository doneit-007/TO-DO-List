import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Item extends React.Component{
constructor(props){
  super(props);

  this.state={show:true,};


 }
 
render(){
   console.log("agya");
     if(this.state.show===false)
    	return null;
   return(
   
   <li className = "listitem">
    
   <div className ="messagebox" >
   <span className = "List">
   	{this.props.message}
   </span>
   <button className = "delete" onClick={()=> this.setState({show:false})}>DONE</button>
   </div>
     </li>
   	)


}
}
function ReturnList(props) {
 

  return (
    <ul>
      {props.list.map((items) => (
        <Item message={items}/>
      ))}
    </ul>
  );
}
class Additem extends React.Component{
constructor(props){
super(props);

this.state = {
  message : '',
  list : [],
 
}

this.updateInput = this.updateInput.bind(this);
this.renderitem = this.renderitem.bind(this);
}


updateInput(event){
this.setState({message: event.target.value})
}
 
renderitem(mes)
 {  
      
       let listitem = this.state.list;

// Add item to it
listitem.push(mes);

// Set state
this.setState({list:listitem});

    /*
    console.log(this.state.list.length);*/
 }


render(){
   return(
   	<div className = "todolist">
  <div className = "inputbox">
   <form >
   <input id ="message" type="text" onChange={this.updateInput}/>
   </form>
   
   <button className="Add" onClick={()=>this.renderitem(this.state.message)}>ADD TO LIST</button>
   </div>
   <div className="todo">
     <h1 align = "center">TODO LIST</h1>
     <div>
       <ReturnList list ={this.state.list}/>
     </div>
     </div>
     </div>
   	)


}


}

ReactDOM.render(
  <Additem/>,
  document.getElementById('root')
);

