import { useState } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { motion, useMotionValue, useAnimationControls } from 'framer-motion';
import Header from './Header'
import Tutorial from './Tutorial';

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
  const motionValue = useMotionValue(0);

  const animControls = useAnimationControls();

  const style = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundColor: '#3F1292',
    borderRadius: 15,
    height: 190,
    width: 190,
    verticalAlign: 'middle',
    display: 'table-cell',
    position: 'absolute',
    left: '0px',
    padding: '5px'
  };

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

  console.log(draggedCards)
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
                liczenie(pytania)
                
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
              {IsActive ? karty.map((karty) => (
                <motion.div
                  drag='x'
                  x={motionValue}
                  dragConstraints={{ left: 0, right: 0 }}
                  style={style}
                  children={karty.text}
                  id={karty.id}
                  animate={animControls}
                  key={karty.id}

                  onDragEnd={(event, info) => {
                    if (info.point.x >= (window.innerWidth/2)-style.width*0.25 && info.point.x <= (window.innerWidth/2)+style.width*0.25) {
                      animControls.start({ x: 0 });
                    } else {
                      animControls.start({
                        x: info.point.x <= (window.innerWidth/2) ? -(window.innerWidth/2): (window.innerWidth/2)-70,
                        opacity: 0,
                        scale:0
                      });
                    }
                    const kartyid = karty.id
                    if (info.point.x <= (window.innerWidth/2)) {
                      setDraggedCards(current => [...current, { id: kartyid, IsDragRight: 0 }])
                    }
                    if (info.point.x >= (window.innerWidth/2)) {
                      setDraggedCards(current => [...current, { id: kartyid, IsDragRight: 1 }])
                    }
                  }
                  } />)) : null}
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