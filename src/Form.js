import React from 'react'
import {useState} from 'react'
import Loop from './Loop'
import ReactDOM from 'react-dom';
import Count from './Count';

function Form(){
   const[username,setuser]=useState('');
   const[password,setpass]=useState('');
   const[task,settask]=useState([])

   function updateUser(e){
       setuser(e.target.value);
       
   }
   function updatePass(e){
    setpass(e.target.value);

}
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function sendMessage(e){
    e.preventDefault();
    //{'name': "{'username': 'faefdf'}", 'password': "{'password': 'aaafwef'}"}
    var csrftoken = getCookie('csrftoken')
    const obj={
        'username':{username},
        'password':{password}
    }
    var list
    fetch('http://127.0.0.1:8000/tasks/usertasks/',{
        method:'POST',
        body:JSON.stringify(obj),
        headers: {
            "Content-type": "application/json",
            'X-CSRFToken':csrftoken,
        }
    }
    ).then(response=>response.json())
    .then(data=>(
        settask(data)
    )
    )
    return(
        ReactDOM.render(<Count msg={task}/>,document.getElementById('second'))
    )}
    /*{
        return(
        console.log(data),
        settask(data)
        )
        //console.log(list)
    })*/
   /**/

   
   return(
       <div>
           <form>
               <label>Username:</label>
               <input type="text" onChange={updateUser} value={username} ></input>
               <label>Password:</label>
               <input type="text" onChange={updatePass} balue={password} ></input>
               <button type="submit" onClick={sendMessage}>Submit</button>
           </form>
       </div>
   )

}
export default Form;