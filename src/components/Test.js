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

const Test = () => {
  const cards = [];

  const db = getDatabase();

  //lemme just wrzucic to tu cyk cyk | dawid
  const [IsActive, setIsActive] = useState(false)
  const [karty, setkarty] = useState(cards);

  const toggleActiveState = () => setIsActive(true)

  const addObjectToArray = obj => {
    setkarty(current => [...current, obj]);

  };
  // do testów
  // const pytania={pytanie1:{osoba1:true,osoba2:false,osoba3:true},pytanie2:{osoba1:false,osoba2:false,osoba3:false},pytanie3:{osoba1:false,osoba2:true,osoba3:false}};
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
  }

  //moje stop |dawid
  return (
    <>
      <div class="background">
        <Header />
        <Tutorial />

        <div className='App'>
          <button className="button3" onClick={() => {
            toggleActiveState()
            get(child(ref(db), 'Pytania')).then((snapshot) => {
              if (snapshot.exists()) {
                const pytania = Object.values(snapshot.val())
                const nazwy = Object.keys(snapshot.val())
                liczenie(pytania)
                // to jest obiekt który ma wszystkie pytania snapshot.val()
                for (let j = 0; j < nazwy.length; j++) {
                  addObjectToArray({ id: j, text: nazwy[j] })
                }
              } else {
                console.log("No data available");
              }
            }).catch((error) => {
              console.error(error);
            })
          }}>Rozpocznij test</button>
        </div>
        <div className="con">
          <div className="left"></div>
          <div className="right"></div>
          <div class="abs">
            <div class="karta">
              <div className='CardText'>
                {IsActive ? karty.map((karty) => (<Card text={karty.text} color={'#3F1292'} key={karty.id} id={karty.id}></Card>)) : null}
              </div>
            </div>
          </div>

        </div>
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