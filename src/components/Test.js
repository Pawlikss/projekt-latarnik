import { useState } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import { initializeApp } from 'firebase/app';
import Header from './Header'
import Tutorial from './Tutorial';

import Card from "./Card"

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

const app = initializeApp(firebaseConfig);
function shuffle(sourceArray) {
  for (var i = 0; i < sourceArray.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (sourceArray.length - i));

      var temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
  }
  return sourceArray;
}
const Test = () => {
  const db = getDatabase();

  const [IsActive, setIsActive] = useState(false)
  const cards = [];
  const [karty, setKarty] = useState(cards);
  const initialState = []
  const [draggedCards, setDraggedCards] = useState(initialState)

  const toggleActiveState = () => setIsActive(true)

  const addObjectToArray = obj => {
    setKarty(current => [...current, obj]);

  };
  // do testów
  const pytania={pytanie1:{osoba1:true,osoba2:false,osoba3:true},pytanie2:{osoba1:false,osoba2:false,osoba3:false},pytanie3:{osoba1:false,osoba2:true,osoba3:false}};
  var pytania2=[];
  var nazwy2 = shuffle(Object.keys(pytania))
  for(var i=0;i<nazwy2.length;i++){
      pytania2.push(pytania[nazwy2[i]])
  } 
  //TODO odpowiedzi mają być odpowiedziami z state.karty
  const odpowiedzi = [0, 0, 1];

  function liczenie(pytania) {
    //TODO ustawic pytania na prawdziwe pytania:gotowe chyba idk
    const nazwy = Object.keys(pytania);
    //
    const osoby = Object.keys(pytania[Object.keys(pytania)[0]])
    const wyniki = {};

    for (const key of osoby) {
      wyniki[key] = 0;
    }

    for (let i = 0; i < nazwy.length; i++) {
      for (let j = 0; j < (Object.values(pytania[nazwy[i]])).length; j++) {
        // //console.log("pytanie nr: "+i+" osoba: "+j+" "+pytania[nazwy[i]][osoby[j]]);
        if (pytania[nazwy[i]][osoby[j]] === true && odpowiedzi[i] === 1) {
          wyniki[osoby[j]] += 1
        }
        else if (pytania[nazwy[i]][osoby[j]] === false && odpowiedzi[i] === 0) {
          wyniki[osoby[j]] += 1
        }
      }
    }
    console.log(wyniki)
    return(generujItemki(wyniki))
  }
  
  console.log(draggedCards)
  function generujItemki(wyniki){
    wyniki = Object.entries(wyniki)
    const dlugosc=wyniki.length
    wyniki.sort(([,b],[,a]) => a-b)
    wyniki.reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    console.log(wyniki)
    const listItems = (wyniki).map((x) =>  <li>{Number((x[1]/dlugosc*100).toFixed(1))+"%"+x[0]}</li>);
    return listItems
  }
  //moje stop |dawid
  return (
    <>
      <div class="background">
        <Header />
        <Tutorial />

        <div className='App'>
          {IsActive ? null : <button className="button3" onClick={() => {
            toggleActiveState()
            get(child(ref(db), 'Pytania')).then((snapshot) => {
              if (snapshot.exists()) {
                var nazwy = Object.keys(snapshot.val())
                var pytania=[];
                nazwy = shuffle(nazwy)
                for(var i=0;i<nazwy.length;i++){
                    pytania.push(snapshot.val()[nazwy[i]])
                } 
                console.log(pytania)
                pytania2=liczenie(pytania)
                
                for (let j = 0; j < nazwy.length; j++) {
                  addObjectToArray({ id: j, text: nazwy[j] })
                }
              } else {
                console.log("No data available");
              }
            }).catch((error) => {
              console.error(error);
            })
          }}>Rozpocznij test</button>}
          <div class="null"></div>
        </div>
        <div className="con">
          <div class="karta">
            <div className='CardText'>
              {IsActive ? karty.map((karty) => (<Card text={karty.text} color={'#3F1292'} key={karty.id} id={karty.id} state={draggedCards} setState={setDraggedCards}></Card>)) : null}
            </div>
          </div>
        </div>
        <div class="dupa">wyniki:<ul>{liczenie(pytania2)}</ul></div>
      </div>
      <button onClick={() =>
        addObjectToArray({
          id: Math.random(),
          text: 'test1',
        })
      }>dodaj do tescik</button>
    </>
  );
}

export default Test;