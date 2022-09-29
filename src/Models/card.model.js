export class Card {
    constructor(img, name, desc, nameU, rate) {
        this.imgProduct =  img;
        this.nameProduct = name;
        this.descProduct = desc;
        this.nameUser = nameU;
        this.rateUser = rate;
    }
}

const card1 = new Card("../dist/img/legoPoulet.jpg", "Lego Poulet", "Un homme lego deguisé en poulet", "Johnny Bolt", 5);