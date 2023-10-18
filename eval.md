mercredi 18 octobre 2023

# Evaluation JS
### Événements 

</br>

##### Q1) Que permettent les événements en JavaScript ? 
- Les événements permettent d'interagir avec les éléments d'une page web, de déclencher des actions en réponse à des interactions.

##### Q2) Que se passe-t-il lorsqu'un événement survient ? 
-  Le navigateur crée un objet d’événement qui permet aux développeurs de  récupérer des données liés à cette valeur.

##### Q3) Quelle propriété de l’objet Event permet de cibler l’élément auquel il est rattaché ? 
-  La propriété de l'objet Event qui permet de cibler l'élément auquel l'événement est rattaché est appelée "target". Anisi on peut accéder à l'élement ciblé ````event.target````.

##### Q4) Quelle méthode permet d’écouter un événement ?
-  La méthode qui permet d’écouter un événement est ````addEventListener()```` de l'objet document.

##### Q5) Quel événement permet de déplacer un fichier ?
-  Les événements "drag and drop".

##### Q6) Quel événement permet d’initialiser un formulaire ?
-  Il faut récupérer le formulaire en utilisant la méthod ```` querySelector(form) ```` de l'objet document, anisi il sera initier.

##### Q7) Quel sont les différents moyens de définir un événement ?
- La méthode ```` addEventListener ```` de l'objet document
- Dans le HTML aux attributs d'événement exemple : ` <button onclick="maFonction()">Cliquez ici</button> `

##### Q8) Quel sont les attributs d’Event pour la souris ?
-  `event.target`: récupérer l'élément HTML
- `event.type`: contient le type d'événement de souris
- `event.clientX et event.clientY`: récupérer les coordonnées X et Y du curseur de la souris par rapport à la fenêtre du navigateur.
- `event.preventDefault()`: une méthode permettant d'annuler le comportement par défaut de l'événement de souris.

##### Q9) Dans quel sens se propage un événement lorsqu’il est dans la phase “capture” ?
- Pendant cette phase, l'événement se propage du haut vers le bas dans la hiérarchie des éléments, en partant du document racine et descendant vers l'élément cible.

##### Q10) Expliquer le fonctionnement de la méthode addEventListner()
- La méthode `addEventListener()` est utilisée pour attacher des gestionnaires d'événements à des éléments HTML en JavaScript.

</br>

### Objets 

##### Q11) Définissez ce qu’est un objet en JavaScript ?
- Un objet est une entité qui permet de stocker et manipuler des propriétés et des methods.

##### Q12) Listez les objets prédéfinis de JavaScript.
Object : L'objet de base à partir duquel tous les autres objets JavaScript sont dérivés. Il contient des méthodes et des propriétés de base.

Array : Permet de créer et de manipuler des tableaux (listes d'éléments).

String : Fournit des méthodes pour manipuler des chaînes de caractères.

Number : Fournit des méthodes pour manipuler des nombres.

Boolean : Représente des valeurs booléennes (true ou false).

Date : Permet de travailler avec des dates et des heures.

Math : Fournit des fonctions mathématiques, telles que Math.random(), Math.round(), etc.

RegExp (Expression régulière) : Permet de travailler avec des expressions régulières pour rechercher et manipuler des chaînes de caractères.

Function : Les fonctions sont des objets de première classe en JavaScript, ce qui signifie que vous pouvez les stocker dans des variables, les passer en tant qu'arguments et les retourner en tant que résultats.

Error : Représente des erreurs d'exécution qui se produisent dans le code JavaScript.

JSON : Fournit des méthodes pour travailler avec le format de données JSON (JavaScript Object Notation), telles que JSON.parse() et JSON.stringify().

Global : L'objet global, généralement window dans un navigateur, contient des variables et des fonctions globales accessibles depuis n'importe où dans le code JavaScript.

Promise : Permet de travailler avec des opérations asynchrones en utilisant des promesses pour gérer les résultats de ces opérations.

Map et Set : De nouvelles structures de données introduites dans ECMAScript 6 pour gérer des collections d'éléments uniques.

WeakMap et WeakSet : Similaires à Map et Set, mais permettent de gérer des références faibles, ce qui peut aider à prévenir les fuites de mémoire.

ArrayBuffer et autres objets liés à TypedArray : Pour manipuler des données binaires et des tableaux de nombres typés.

Intl : Contient des fonctionnalités pour la gestion des formats de nombres, dates et heures en fonction des locales.

##### Q13) Comment sont instancier les objets DOM (window, navigator) 
Les objets DOM (Document Object Model) tels que window et navigator sont des objets prédéfinis qui sont automatiquement disponibles dans l'environnement JavaScript d'un navigateur web.
Exemple : `window.innerWidth` ou `navigator.userAgent`

##### Q14) A quoi sert la méthode constructor() ?
La méthode constructor est utilisée pour initialiser les propriétés d'un objet lorsque cet objet est instancié à partir d'une classe.

##### Q15) Quel objet et quelle méthode permet de surveiller les événements ?
On peut surveiller (ou écouter) les événements en utilisant:

1. L'objet EventTarget
2. La méthode addEventListener()

##### Q16) Quel objet et quelle méthode permet d’appliquer une expression régulière ?

- Les méthodes qui permettent d’appliquer une expression régulière sont :
 1. la méthode exec : `/exemple/.exec(test)`
 2. la méthode match : `test.match(/exmple/)`
 3. l'objet RegExp : `new RegExp('exemple')`

 ##### Q17) Quel objet et quelle méthode permet de surveiller les événements ?

- L'objet `document`
- La méthode `addEventListener()`

 ##### Q18) Quel objet et quelle méthode permet de convertir la date et l’heure au format locale ?

-  L'objet `Intl`
- la méthode `DateTimeFormat()`

  ##### Q19) Quel objet et quelle méthode permet de faire une recherche avec une expression régulière ?
 - L'objet RegExp
- la méthode exec : `/exemple/.exec(test)`

  ##### Q20) Quel fonction prédéfini permet de vérifier si la valeur n’est pas un nombre ?

 - la fonction isNaN()

### Promise 

 ##### Q21) Qu’est-ce qu’une promesse ?
- Une promesse en JavaScript est un mécanisme qui permet d'exécuter du code de manière asynchrone

 ##### Q22) Quelles sont les garanties apportées par les promesses (Promise) ?
 - Gestion de l'asynchronisme
 - Gestion des erreurs ( .catch() )
 - Ordonnancement et enchaînement ( .then() )

##### 23)  Comment est appelé la fonction passée à “new Promise((la_fonction)) ?
- asynchrone

##### 24)  Quelle sont les fonctions de retour directement fourni par JavaScript avec les promesses (Promise) ? À quoi servent-elles ?

- resolve() : au cas où si la fonction sort le bon return
- reject() : au cas où si la fonction sort le mauvais return
- then() : pour poursuivre la promesse en cas de succes
- catch() : pour gerer les erreus en cas d'echec de la promesse

##### 25) Quelle sont les propriétés internes de l’objet promesse (Promise) retourné par “new Promise” ?

- "pending" : L'état initial, lorsque la promesse est en attente.
- "fulfilled" : L'état lorsque la promesse est résolue avec succès.
- "rejected" : L'état lorsque la promesse est rejetée.
- "resolve" : la valeur résultante de la promesse 
- "reject" : lorsque la promesse est rejetée dans catch()
- finally :  la fin d'une promesse succes
- then :  la suite d'une promesse succes
- catch : la gestion d'une promesse failed

##### 26) Quelle sont les différents états d’une promesse (Promise) ?
- "pending" : L'état initial, lorsque la promesse est en attente.
- "fulfilled" : L'état lorsque la promesse est résolue avec succès.
- "rejected" : L'état lorsque la promesse est rejetée.
- "resolve" : la valeur résultante de la promesse 
- "reject" : lorsque la promesse est rejetée dans catch()
- finally :  la fin d'une promesse succes
- then :  la suite d'une promesse succes
- catch : la gestion d'une promesse failed

##### 27) Quelle sont les fonctions consommatrices de promesse (Promise) ? À quoi servent-elles ?
- then()
- catch()
- finally()

##### 28)  On ne peut pas chaîner promesses. Est-ce vrai ou faux ?
Faux, on peut chainer une promesse avec un then() qui est la suite d'une promesse succes

##### 29)  Je ne peux pas chaîner après un catch. Est-ce vrai ou faux ?
Vrai, on ne peut pas chainer après un catch()

##### 30) Que se passe-t-il en cas de rejet d’une promesse ?
Il y aura un gestionnaire d'erreur qui sera immédiatement appelé.

## Travaux pratiques
### Objets

#### Exercice 1 : Manipulation des classes
Manipulation des classes et objets en javascript ES6
a) Créer la classe Document contenant les attributs id et dateEdition b) Créer la classe Livre qui hérite de la classe Document contenant en plus les attributs titre et auteur.
c) Créer deux instances de Document
d) Créer trois instances de Livre
e) Créer la méthode infoLivre qui retourne les informations du livre

- <a href='./object.js'>l'exercice objet 1</a>

#### Exercice 2 : Manipulation des classes
Votre tâche est de créer la classe Book (Livre) et de remplir la base de données de développement de trois ou quatre livres.
La classe Book doit contenir les champs suivants :
→ Titre - string - le titre du livre
→ Auteur - string - l'auteur du livre
→ Description - string - une description du livre
→ Pages - number - le nombre total de pages
→ currentPage - number - la page où se trouve l'utilisateur actuellement
(entre 1 et pages)
→ Lu - Boolean - si l'utilisateur a lu ou non le livre (par défaut : false)

La classe Book doit aussi contenir la méthode instance suivante : lireLivre(page). Cette instance permet à l'utilisateur de dire à quelle page il se trouve actuellement
❑ Si l'argument page est inférieur à un ou supérieur au nombre total de
pages du livre, lireLivre retourne dans la console 0
❑ Si l'argument page est supérieur ou égal à 1 et inférieur au nombre
total de pages du livre, lireLivre modifie le champ currentPage de l'instance pour être égal à la valeur de l'argument passé, et retourne dans la console 1
❑ Si l'argument page est égal au nombre total de pages du livre, lireLivre modifie le champ currentPage de l'instance pour être égal à la valeur de l'argument passé, modifie le champ Lu de l'instance en true, et retourne dans la console 1
Quand vous aurez créé la classe Book, vous en créerez au moins trois instances valables et vous les mettrez dans le tableau books. Affichez un de vos livres dans la console.
Utilisez l'instance de classe lireLivre en lui donnant un argument inférieur au nombre de page de ce livre, cela doit afficher dans la console "En cours de lecture" et testez-la classe lireLivre en lui donnant un argument égal au nombre de pages, ce qui doit afficher "Lu".

- <a href='./object2.js'>l'exercice objet 2</a>


### Événements

Exercice 1 : Gestion des événements à l'aide des propriétés des objets éléments
1. Téléchargerlefichierexo17vide.html.
2. DanslafonctionInit():
3. Identifierchacundestroisélémentsduformulaire;
4. Affecterlegestionnairesoumissionàl'événementclicksurlebouton
de soumission, et le gestionnaire remise_a_zero à l'événement click
sur le bouton de remise à zéro.
5. Lafonctionsoumissionsecontented'afficherletextesaisidansle
champ texte ;
6. Lafonctionderemiseàzéroafficheuneboîted'alerteinformantde
l'action en cours, et remet le champ de saisie à sa valeur par défaut.

- <a href="./Gestion d'événement avec les propriétés des objets éléments.html">l'exercice événements 1</a>

Exercice 2 : Gestion des événements à l'aide d'un event listener
7. DanslafonctionInit(),
a. Identifierl'élémentspan1;
b. Lui affecter le gestionnaire d'événement mongestionnaire en
réponse à un clic de souris, uniquement dans le sens de la
remontée de l'événement (il n'y a pas d'event capture).
8. Danslegestionnaire,changerlacouleurdefonddel'élémentcourant
(objet this).
- <a href="./Gestion d'événement avec les propriétés des objets éléments.html">l'exercice événements 2</a>


### Promesses (Promise)
Considérant cette constante de base (que vous pouvez transformer en fonction si c’est plus simple pour vous, vous allez créer une promesse (Promise) qui :
→ En se basant sur un chiffre aléatoire entre 0 et 1 (success)
→ En se basant sur une latence défini aléatoirement (latency)
→ Qui si success est true alors on résout la promesse avec un délai → Sinon on renvoi un message d’erreur
const getData = (data, successRate = 0.98, maxLatencyMs = 1000) => { });

- <a href='./promise.js'>l'exercice promise</a>
