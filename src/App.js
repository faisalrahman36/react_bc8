import React, {useEffect,useState} from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  let data = {title: "Waiting for data"};
  //let data= null;  //use let not const as we will update data
  const [todo,settodo] = useState(data);
  const [isData,setData]= useState(false);
  const [isFetching,setFetching]= useState(false);
  useEffect( () => {
    
  
    async function fetchData () {

      setFetching(true);
      const response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      console.log("response= ",response1);
      
      console.log("Data = ",todo);
      let data2=await response1.json() 
      settodo(data2);
      setData(true);
      setFetching(false);
      console.log("Data = ",todo);
      console.log("isData",isData);
    }
    fetchData();
      }, [isData]
  );

   if(isFetching){
    return <div>Loading ...</div>


   }
  return (
    <div> 

   Fetch data.
  <span>Title: {todo.title}</span>
    </div>
  );
}

export default App;
