import Card from "./Card"

import "../index.css";

const Test = () => {
  const cards = [
    {
      id: 0,
      text: 'Ustawa 1',
      color: '#55ccff'
    },
  ];
  
  return (
    <div className='App'>

      {cards.map((card) => (
        <Card text={card.text} color={card.color} key={card.id}></Card>
      ))}
    </div>
  );
}
 
export default Test;