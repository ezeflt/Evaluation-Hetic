class Book {
    constructor(titre, auteur, description, pages) {
        this.titre = titre;
        this.auteur = auteur;
        this.description = description;
        this.pages = pages;
        this.currentPage = 1; // Par défaut, l'utilisateur commence à la première page
        this.lu = false; // Par défaut, le livre n'est pas lu
    }

    lireLivre(page) {
        if (page < 1 || page > this.pages) {
            console.log(0); // Page invalide
        } else {
            this.currentPage = page;
            if (page === this.pages) {
                this.lu = true;
                console.log("Lu");
            } else {
                console.log("En cours de lecture");
            }
        }
    }
}

// Création de trois instances de la classe Book
const livre1 = new Book("Le Seigneur des Anneaux", "J.R.R. Tolkien", "Une épopée fantastique...", 1000);
const livre2 = new Book("1984", "George Orwell", "Un roman dystopique classique...", 300);
const livre3 = new Book("Le Petit Prince", "Antoine de Saint-Exupéry", "Un conte pour enfants...", 80);

// Tableau de livres
const books = [livre1, livre2, livre3];

// Utilisation de la méthode lireLivre
livre1.lireLivre(500); // En cours de lecture
livre2.lireLivre(300); // Lu

// Affichage d'un livre dans la console
console.log(livre2);
