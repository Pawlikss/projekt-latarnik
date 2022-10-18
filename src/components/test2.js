import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase();
const odwolanie= ref(db,"Pytania")

const Test2 = () => {
const cards = [
        // {
        //   id: 0,
        //   text: 'DUPA 1'
          
        // },
        // {
        //   id:2,
        //   text:'dupa2'
        // }
      ];
return( 
    
    onValue(odwolanie, (snapshot) => {
    const username = Object.keys(snapshot.val())
    console.log(username)
  }, {
    onlyOnce: true
  })
  
  
  );

}
export default Test2;