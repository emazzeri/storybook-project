import Card from "./Card/Card"
import CardsList from "./CardsList/CardsList";
// import {bike} from '../data';

export default {
  title: "View/CardsList",
  component: CardsList,
}
const Template = ({ ...args }) => {
  const numberOfChildren = args.children;
  return(
  <CardsList {...args}>
    {[...Array(numberOfChildren).keys()].map(n => {
      const isNew = (n % 2 === 0) ? true : false;
      const rating = 3;
      // (n % 2 === 0) ? (bike[0].label = 'Nuovo'): (bike[0].label = 'Usato');
      // const item = {...bike[0] };
      return (
      <Card key={`card-${n}`} isNew={isNew} rating={rating}/>
    )}
    )}
  </CardsList>
)}

export const Horizontal = Template.bind({})
Horizontal.args = {
  children: 4,
  spacing: 10,
  column: 2,
}
