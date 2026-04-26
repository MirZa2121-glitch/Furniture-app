import { cardIMG } from "./img.ts";
import { cardsWorkIMG } from "./img.ts";

export const cards = [
    {id: 1, name: 'Dining', href: '#dining', IMG: cardIMG.img_1},
    {id: 2, name: 'Living', href: '#living', IMG: cardIMG.img_2},
    {id: 3, name: 'Bedroom', href: '#bedroom', IMG: cardIMG.img_3},
]

export const cardsVariant = [
    {
        id: 1,
        name: 'Purchase Securely',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        IMG: cardsWorkIMG.img_1,
    },

    {
        id: 2,
        name: 'Ships From Warehouse',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        IMG: cardsWorkIMG.img_2,
    },

    {
        id: 3,
        name: 'Style Your Room',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        IMG: cardsWorkIMG.img_3,
    },
] 