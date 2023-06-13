import Card from './Card';

export default function Cards(props) {
   const cards = props.characters;
   return <div>
      {
         cards.map(
            card => <Card 
            name={card.name}
            status={card.status}
            species={card.species}
            gender={card.gender}
            origin={card.origin.name}
            image={card.image} 
            onClose={()=>window.alert(card.id)}
            key={card.id}
            />)
      }
       
   </div>;
}
