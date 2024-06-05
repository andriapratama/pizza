import { StaticImageData } from 'next/image';
import Pizza1 from '../public/pizza/pizza_1.png';
import Pizza2 from '../public/pizza/pizza_2.png';
import Pizza3 from '../public/pizza/pizza_3.png';
import Pizza4 from '../public/pizza/pizza_4.png';
import Pizza5 from '../public/pizza/pizza_5.png';

const PizzaList: { name: string; desc: string; image: StaticImageData }[] = [
  {
    name: 'Vegetarian',
    desc: 'A delightful mix of fresh vegetables including bell peppers, onions, mushrooms, olives, and tomatoes, topped with mozzarella cheese on a crispy crust. Perfect for veggie lovers seeking a healthy and flavorful option.',
    image: Pizza1,
  },
  {
    name: 'Hawaiian',
    desc: "A sweet and savory combination of juicy pineapple chunks and savory ham, covered with melted mozzarella cheese on a golden crust. A tropical twist that's both refreshing and satisfying.",
    image: Pizza2,
  },
  {
    name: 'Margherita',
    desc: 'A classic Italian pizza featuring a simple yet delicious blend of fresh tomatoes, mozzarella cheese, and basil leaves, drizzled with olive oil on a thin, crispy crust. Pure and traditional flavors.',
    image: Pizza3,
  },
  {
    name: 'Pepperoni',
    desc: 'A popular favorite loaded with spicy pepperoni slices and gooey mozzarella cheese atop a rich tomato sauce on a crispy crust. Perfect for those who enjoy a bit of spice and a lot of flavor.',
    image: Pizza4,
  },
  {
    name: 'Seafood',
    desc: 'A luxurious pizza topped with a variety of seafood such as shrimp, calamari, and mussels, complemented by garlic, herbs, and melted cheese on a savory crust. A maritime feast for seafood enthusiasts.',
    image: Pizza5,
  },
];
export { Pizza1, Pizza2, Pizza3, Pizza4, Pizza5, PizzaList };
