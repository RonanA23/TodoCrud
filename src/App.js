import {useState,useEffect} from 'react'
import './App.css';
import Header from './Header';
import Items from './Items';
import Input from './Input'
import {db} from './firebase'
import {query,collection, onSnapshot, querySnapshot, addDoc, deleteDoc,doc, updateDoc} from 'firebase/firestore'

function App() {
  const[datam,setData]=useState([])



  useEffect(()=>{
    const q=query(collection(db,'todo'))
    const unsubscribe= onSnapshot(q,(querySnapshot)=>{
      let todosArr=[]
      querySnapshot.forEach((doc)=>{
        todosArr.push({...doc.data(),id:doc.id})
      });
      setData(todosArr)
    })
    return ()=>unsubscribe()
  },[])

  const addHandler=async (text)=>{
    await addDoc(collection(db,'todo'),{
      text:text,
      completed:false

    })

  }
  const DeleteHandler= async(id)=>{
   await deleteDoc(doc(db,'todo',id))
  }

  const EditHandler=(id,text)=>{
    setData(datam.map((item)=> item.id === id? {...item,...text}:item))
  }
  const toggleComplete= async (todo)=>{
   await updateDoc(doc(db,'todo',todo.id),{
    completed:!todo.completed
  })}
  
  return (
    <div className="bg-gray-900 h-screen">
     <Header/>
     <Input addHandler={addHandler}/>
     {datam.map((thing,index)=>(
      <Items Delete={DeleteHandler} thing={thing} key={index} toggleComplete={toggleComplete}/>
    
      
     ))
     }
    </div>
  );
}

export default App;
