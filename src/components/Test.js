import Card from "./Card"
import {useState} from 'react';
import "../index.css";
import {getDatabase, ref,onValue, child, get } from "firebase/database";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCzKjRaCbrubxYofXuH_PlZ8HD0ye9GRDc",
  authDomain: "tinder-polityczny.firebaseapp.com",
  databaseURL: "https://tinder-polityczny-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tinder-polityczny",
  storageBucket: "tinder-polityczny.appspot.com",
  messagingSenderId: "664655285531",
  appId: "1:664655285531:web:28a79cf94b58121c4797be",
  measurementId: "G-RSDFKQM8BF",
  
};

const app=initializeApp(firebaseConfig);
const Test = () => {
  const cards = [
    {
      id: 0,
      text: 'DUPA 1'
      
    },
    // {
    //   id:2,
    //   text:'dupa2'
    // }
  ];


  const db = getDatabase();
  const odwolanie= ref(db,"Pytania")


  function dupa1(klucze){
    const cards=[]
    for(let i =0;i<klucze.length;i++){
        cards.push({id:i ,text:klucze[i] })
      }
      console.log(cards)
    
  }

  // onValue(odwolanie,(snapshot)=>{
  //   const dane= Object.values(snapshot.val());
  //   const klucze= Object.keys(snapshot.val());

    
  //   // console.log(dane)
  //   // console.log(klucze)
  //   renderlist = klucze.map((item,index)=>
  //   <p key={index}>{item}</p>)  
  //   dupa1(klucze)
    
  // })

get(child(ref(db),'Pytania')).then((snapshot) => {
    if (snapshot.exists()) {
      return(dupa1(Object.keys(snapshot.val())))
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });




  return (

    
    <div className='App'>

      {
      cards.map((card) => (
        <Card text={card.text} color={'#55ccff'} key={card.id}></Card>
      ))}
    

    </div>
  );
}
 
export default Test;