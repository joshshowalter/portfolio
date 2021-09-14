import Card from './Card';

const cards = [
  {
    title: 'Card 1'
  },
  {
    title: 'Card 2'
  },
  {
    title: 'Card 3'
  }
];

const cardList = cards.map((item, index) => {
  return (
    <Card key={index}>
      <p className="p-4">{item.title}</p>
    </Card>
  );
});

export default function Home() {
  return (
    <div>
      {cardList}
    </div>
  );
}