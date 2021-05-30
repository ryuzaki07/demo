import React , { useState } from 'react'
function Count(props){
    const array=["rahul","nair","is","my","name"];
     const [st,steval]=useState(() => { return {count:1,text:"rahul"}})
    
     function statemanipulate(){
        steval(()=>{
        return {count:4 , text:"nair"}})
         
     }
     /*function statemanipulatesecond(){
        steval( (prev)=>(
            prev+1
        )
        )  
     }*/
     //<button onClick={statemanipulatesecond}>Click Me!</button>
  console.log(array);
  console.log(props.msg);
    return(
        <div>
            <button onClick={statemanipulate}>Click Me!</button>
            
        
        <p>{props.msg.map((str,index)=>(
    <div>
    <li key={index}>{str.task}</li>
    <li>{index}</li>
    </div>
    )
    )
    }</p>
   
        </div>
    );

}

export default Count;

//usestate returns 2 values one is state name or variable ans other is function
// const [state,func] = usestate(initial value of state)

// better to make different states bcoz it will be tedious when state is used as an object 
// const [state,setState]=useState({count:1,color='blue'})
//
/*
function setstate(){
    setState((prevstate)=>
    return(...prevstate,count:prevstatecount+1)) ->so that it does not make change to entire state

*/
/*
also to initialize the state use a function to initialize it 
useState(()=>(
    console.log()
    return intital value
))
*/

/*
useEffect() -> used as a component methods like omponeddidmount 
useEffect(()=>{

},[statecomponentname]) in [] if the statecomponentname changes the useeffect occurs
if empty [] then it will occur only once when the component mounts
like componentdidmount 
even if we have to use state we can directly use the state name no state.something 
if a component unmounts then we can doe this 
useEffect(()=>{
    //code to do 
    return ()=>{
        anyhting related to component will unmount
    }

},[])
useRef hook is used to count number of renders or by if we have to store the previous
value of state 
example:
const prevstate=useRef('')  -> it returns an object with attribute current
useEffect(()=>{
prevState.current=name
},[name])
on changin the value of useRef the component does not re render
to count render
useEffect(()=>(
    rendercount.cuurent=rendercount.current+1
))
*/