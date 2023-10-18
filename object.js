
class Document {

    id;
    dateEdition;

    constructor(id, dateEdition){
        this.id = id;
        this.dateEdition = dateEdition;
    }
}

class Livre extends Document {

    titre;
    auteur;

    constructor(id, dateEdition, titre, auteur){
        super(id, dateEdition);
        this.titre = titre;
        this.auteur = auteur;
    }

    infoLivre(titre, auteur, date) {
        return `
            Le titre du livre: ${titre}
            L'auteur du livre: ${auteur}
            La date d'édition: ${date}
            `;
    }

}

// instanciation de la class Document
const document = new Document(1, '2023-10-18');
const document2 = new Document(2, '2023-10-19');

// instanciation de la class Livre
const livre1 = new Livre(101, '2023-10-20', 'Le Livre 1', 'Auteur 1');
const livre2 = new Livre(102, '2023-10-21', 'Le Livre 2', 'Auteur 2');
const livre3 = new Livre(103, '2023-10-22', 'Le Livre 3', 'Auteur 3');

console.log(livre1.infoLivre('Le chat', "Adil Chafour", "Chef Edition"));


