import Card from "./Card"

import "../index.css";

const Test = () => {
  const cards = [
    {
      text: 'Ustawa 1',
      color: '#55ccff'
    },
    {
      text: 'Ustawa 2',
      color: '#e8e8e8'
    },
    {
      text: 'Ustawa 3',
      color: '#0a043c'
    },
    {
      text: 'Ustawa 4',
      color: 'black'
    }
  ];
  
  return (
    <div className='App'>
      
      {/* Traversing through cards array using map function
      and populating card with different image and color */}
        
      {cards.map((card) => (
        <Card text={card.text} color={card.color}></Card>
      ))}
    </div>
  );
}
 
export default Test;