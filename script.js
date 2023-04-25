const monkeyList = [{
    "nom": "Lémurien",
    "description": "Découvrez notre adorable lémurien, avec ses grands yeux émerveillés et sa fourrure douce. Ce petit primat est le compagnon parfait pour apporter de la joie et de la bonne humeur à votre foyer. Adoptez dès maintenant votre lémurien et laissez-vous charmer par sa personnalité espiègle !",
    "prix": "9.99M",
    "img": "./ressources/lemur.jpeg",
    "Habitat": "Madagascar"
    },

    {
        "nom": "Tamarin",
        "description": "Le tamarin est un petit singe plein d'énergie et de vivacité. Avec sa petite taille et son pelage coloré, il apportera une touche d'exotisme à votre quotidien. Jouez et câlinez votre tamarin tous les jours, et découvrez une relation unique avec ce primat plein de malice.",
        "prix": "10.99M",
        "img": "./ressources/Tamoreo.jpeg",
        "Habitat": "Jungle est-Asiatique" 
    },

    {
    "nom": "Macaque",
    "description": "Le macaque est un singe intelligent et joueur, capable de vous surprendre chaque jour. Avec sa fourrure épaisse et sa queue touffue, il est non seulement un animal de compagnie fascinant, mais aussi un véritable ami fidèle. Laissez-vous séduire par la beauté de notre macaque et offrez-lui une maison chaleureuse dès maintenant.",
    "prix": "12.99M",
    "img": "./ressources/macaque.jpeg",
    "Habitat": "Afrique Centrale, Est-Asiatique"
    },
    
    {
    "nom": "Chimpanzé",
    "description": "Le chimpanzé est un primate intelligent, amical et joueur, au pelage doux et foncé avec des bras longs et forts. Bien qu'ils ne conviennent pas comme animaux domestiques, nos chimpanzés élevés en captivité sont en bonne santé et ont tous les papiers en règle. Adoptez un chimpanzé peut être une expérience merveilleuse et enrichissante. ",
    "prix": "13.99M",
    "img": "./ressources/Panze.jpeg",
    "Habitat": "Afrique Centrale, Amazonie"
    },

    {
    "nom": "Orang-Outan",
    "description": "L'orang-outan est un singe majestueux et imposant, avec ses longs bras et son pelage roux. C'est un animal intelligent et affectueux, qui saura vous étonner par sa capacité à communiquer et à s'adapter à son environnement. Si vous cherchez un compagnon qui vous accompagnera toute votre vie, l'orang-outan est fait pour vous.",
    "prix": "15.99M",
    "img": "./ressources/orange.jpeg",
    "Habitat": "Amazonie, Est-Asiatique"
    },

    {
        "nom": "Gorille à dos Argenté",
        "description": "Le gorille est l'un des plus grands primates du monde, mais derrière sa taille impressionnante se cache une âme sensible et affectueuse. Adopter un gorille, c'est faire le choix d'un animal intelligent, protecteur et aimant. Offrez à votre famille une expérience unique en accueillant un gorille dans votre foyer.",
        "prix": "16.99M",
        "img": "./ressources/Gor.jpeg",
        "Habitat": "Afrique Centrale"
    },


]



// Voici la liste des burgers (le fichier se trouve dans le dossier data.js)
console.log(monkeyList.nom)
const container =document.querySelector("#monkeyContainer")

// Indice :
// Utiliser la méthode forEach pour parcourir la liste des burgers  
// Pour chaque burger, créer un élément HTML (div) et l'ajouter dans #burger-container avec la méthode innerHTML

// Etape 1
// Pour chacun des burgers affiche le nom dans la console
monkeyList.forEach(e => {
    console.log(e.nom)
});
// Etape 2
// Dans #burger-container afficher le nom des burgers
    // monkeyList.forEach(e => {
    //     container.innerHTML+=
    //         `<div class="flex justify-center pt-5 px-2">
    //         <div class="flex flex-col">
    //              <div class="flex underline underline-offset-4 text-xl ">${e.nom}:</div>
    //              <div class="flex pt-5">
    //                  <a href="#" class="bg-slate-500 flex justify-center rounded-2xl mx-10 p-2 text-slate-100 mb-5 cursor-pointer hover:scale-105">Participez aux enchères</a>
    //              </div>
    //         </div>
    //         <div class=" pl-20 pt-5"> <img src="${e.img}"></img> </div>
    //     </div>
    //     <div class="pt-5"></div>`
    //     })
// Etape 3 
// Ajouter la description et le prix 
    // monkeyList.forEach(e => {
    //     container.innerHTML+=
    //         `<div class="flex pt-10 px-5">
    //         <div class="flex flex-col">
    //              <div class="flex underline underline-offset-4 text-xl ">${e.nom}:</div>
    //              <div class="flex pt-5" style="max-width:800px"> ${e.description}</div>
    //              <div class="flex pt-5"> Prix :<div class="font-bold"> ${e.prix}€ </div></div>
    //              <div class="flex pt-5">
    //                  <a href="#" class="bg-slate-500 flex justify-center rounded-2xl mx-10 p-2 text-slate-100 mb-5 cursor-pointer hover:scale-105">Participez aux enchères</a>
    //              </div>
    //         </div>
    //     </div>
    //     <div class="pt-5"></div>`
    //     })
// Etape 4 
// Afficher l'image du burger
monkeyList.forEach(e => {
    container.innerHTML+=
        `<div class="flex   border-4 border-black rounded-xl">
        <div class="flex pt-10 px-5 flex-col">
             <div class="flex underline underline-offset-4 text-xl ">${e.nom}:</div>
             <div class="flex pt-5" style="max-width:800px"> ${e.description}</div>
             <div class="flex pt-5"> Prix :<div class="font-bold"> ${e.prix}€ </div></div>
             <div class="flex pt-5">
             <div class="flex pt-2"> Habitats: ${monkeyList.Habitat} </div>
                 <a href="#" class="text-center bg-red-600 flex justify-center rounded-2xl mx-10 p-2 text-slate-100 mb-5 cursor-pointer hover:scale-105">Participez aux enchères!!</a>
             </div>
        </div>
        <div class=""> <img class="h-full w-full" src="${e.img}"></img> </div>
    </div>
    <div class="pt-5"></div>`
    })
// Etape 5
// Ajouter des nouveaux burgers dans le fichier data.js
//      Non désolé le fichier data.js ne veut pas s'importer
// Etape 6 
// Ajouter votre site sur github page et ajouter le lien dans le cours 

// Etape 7 (Bonus)
// Rendre vos site le plus attractif possible en changeant le style
// Vous pouvez remplacer les burgers par d'autre élements (ex: des films, des livres, des jeux vidéos, des personnages, des animaux, etc...)

// Etape 8 (Bonus)
// Afficher la liste des ingrédients