import Card from "./Card"

import "../index.css";

const Test = () => {
  const cards = [
    {
      text: 'Ustawa 1',
      color: '#55ccff'
    },
  ];
  
  return (
    <div className='App'>

      {cards.map((card) => (
        <Card text={card.text} color={card.color} key={card.text}></Card>
      ))}
    </div>
  );
}
 
export default Test;