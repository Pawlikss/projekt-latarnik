import { useState, useEffect } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import { initializeApp } from 'firebase/app';
import Header from './Header'
import Tutorial from './Tutorial';
import Results from './Results';

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
var pytania={pytanie1:{osoba1:true,osoba2:false,osoba3:true},pytanie2:{osoba1:false,osoba2:false,osoba3:false},pytanie3:{osoba1:false,osoba2:true,osoba3:false}};
var oficjalneOsoby=[]
const Test = () => {
  const db = getDatabase();

  const [IsActive, setIsActive] = useState(false)
  const cards = [];
  const [karty, setKarty] = useState(cards);
  const initialState = []
  const [draggedCards, setDraggedCards] = useState(initialState)
  const [IsClicked, setIsClicked] = useState(false)
  const [draggedCount, setDraggedCount] = useState(0)
  const [loading, setLoading] = useState(false);

  const handleSetLoading = () => {
    setLoading(true);
  }

  useEffect(() => {
    setDraggedCount(draggedCards.length);
  }, [draggedCards, draggedCount])

  const handleClick = () => setIsClicked(true)

  const toggleActiveState = () => setIsActive(true)

  const addObjectToArray = obj => {
    setKarty(current => [...current, obj]);

  };

  function liczenie(pytania) {
    const nazwy = Object.keys(pytania);
    const osoby = Object.keys(pytania[Object.keys(pytania)[0]])
    const wyniki = {};

    for (const key of osoby) {
      wyniki[key] = 0;
    }

    for (let i = 0; i < nazwy.length; i++) {
      for (let j = 0; j < (Object.values(pytania[nazwy[i]])).length; j++) {
        if (pytania[nazwy[i]][osoby[j]] === true && odpowiedzi[i] === 1) {
          wyniki[osoby[j]] += 1
        }
        else if (pytania[nazwy[i]][osoby[j]] === false && odpowiedzi[i] === 0) {
          wyniki[osoby[j]] += 1
        }
      }
    }
    return(generujItemki(wyniki))
  }
  
  const odpowiedzi=[]
  for(var x = 0;x<draggedCards.length;x++){
    odpowiedzi.push(draggedCards[x].IsDragRight)
  }
  function generujItemki(wyniki){
    wyniki = Object.entries(wyniki)

    const dlugosc=odpowiedzi.length
    
    wyniki.sort(([,b],[,a]) => a-b)
    wyniki.reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    wyniki = wyniki.slice(0,15)
    const listItems = (wyniki).map((x) =>  <li key={x[0]}>{Number((x[1]/dlugosc*100).toFixed(1))+"%"+x[0]}<img src={"https://api.sejm.gov.pl/sejm/term9/MP/"+(oficjalneOsoby[x[0].trim()])+"/photo-mini"}></img></li>);
    return listItems
  }
  return (
    <>
      <div className="background">
        <Header />
        {IsClicked ? <Results/> : <Tutorial />}

        <div className='App'>
          {IsActive ? null : <button className="button3" onClick={() => {
            handleSetLoading()
            toggleActiveState()
            get(child(ref(db), 'Osoby')).then((snapshot) => {
              if (snapshot.exists()) {
                
                oficjalneOsoby=[];
                for(var j=0;j<snapshot.val().length;j++){
                  oficjalneOsoby.push([(snapshot.val()[j].lastName).toUpperCase()+" "+(snapshot.val()[j].firstName).toUpperCase(),snapshot.val()[j].id])
                }
                oficjalneOsoby = Object.fromEntries(oficjalneOsoby)
                
              } else {
                console.log("No data available");
              }
            }).catch((error) => {
              console.error(error);
            })
            get(child(ref(db), 'Pytania')).then((snapshot) => {
              if (snapshot.exists()) {
                var nazwy = Object.keys(snapshot.val())
                pytania=[];
                nazwy = shuffle(nazwy)
                for(var i=0;i<nazwy.length;i++){
                    pytania.push(snapshot.val()[nazwy[i]])
                } 
                // console.log(pytania)
                liczenie(pytania)
                
                for (let j = 0; j < nazwy.length; j++) {
                  addObjectToArray({ id: j, text: nazwy[j] })
                }
              } else {
                console.log("No data available");
              }
              setLoading(false)
            }).catch((error) => {
              console.error(error);
            })
          }}>Rozpocznij test</button>}
          {loading ? (
            <div className="animacja">
              <div className="a1"></div>
              <div className="a2"></div>
              <div className="a3"></div>
            </div>
          ) : null}
          <div className="null"></div>
        </div>
        {IsClicked ? null : 
          <div className="con">
              <div className="karta">
                <div className='CardText'>
                  {IsActive ? karty.map((karty) => (<Card text={karty.text} color={'#541B6B'} key={karty.id} id={karty.id} state={draggedCards} setState={setDraggedCards}></Card>)) : null}
                </div>
              </div>
              {draggedCount ? <button className='btn btn-secondary center-horizontally' onClick={() => {handleClick();}}>Wyswietl wyniki</button> : null}
          </div>}
          {IsClicked && (<ol className='results'>{liczenie(pytania)}</ol>)}
        </div>
    </>
  );
}

export default Test;