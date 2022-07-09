import Card from "./Card/Card"
import CardsList from "./CardsList/CardsList"

export default {
  title: "View/CardsList",
  component: CardsList,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 },
  },
}

const Template = ({ numberOfChildren, ...args }) => (
  <CardsList {...args}>
    {[...Array(numberOfChildren).keys()].map(n => (
      <Card />
    ))}
  </CardsList>
)

export const Horizontal = Template.bind({})
Horizontal.args = {
  spacing: 10,
  column: 2,
}
