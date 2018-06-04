// Tableau de type array stockant des objets de type json (paire clef : valeur) les index du tableau sont des chiffres 
// pour les objert json l'accès aux valeurs (ex:"insulte") se fait à l'aide de clef (ex: auteur ou son ou titre) ce qui donne pour un tableau : tableau[0] pour la première valeur et objet .auteur pour la première valeur du json

var ressources = [
    { auteur: "Amara", type: "voix", son: 'amara.mp3', titre: "Amara", img: "amara.jpg", showId:"1"},
    { auteur: "Chloé", type: "voix", son: 'chloe-hercu.mp3', titre: "Chloé - Herculanum", img: "chloe-hercu.jpg", showId:"2"},
    { auteur: "Chloé", type: "voix", son: 'chloe-pano.mp3', titre: "Chloé - Panorama", img: "chloe-pano.jpg", showId:"3"},
    { auteur: "Elena", type: "voix", son: 'elena-poseido.mp3', titre: "Elena - Poseidon", img: "elena.jpg", showId:"4"},
    { auteur: "Elena", type: "voix", son: 'elena-corps.mp3', titre: "Elena - Corps pétrifiés", img: "elena-corps.jpg", showId:"5"},
    { auteur: "Elena", type: "voix", son: 'elena-glace.mp3', titre: "Elena - Les glaces", img: "elena-glace.jpg", showId:"6"},
    { auteur: "Elena", type: "voix", son: 'elena-reco.mp3', titre: "Elena - Recomposition", img: "elena-reco.jpg", showId:"7"},
    { auteur: "Elena", type: "voix", son: 'elena-statue.mp3', titre: "Elena - Statues", img: "elena-statue.jpg", showId:"8"},
    { auteur: "Elena", type: "voix", son: 'elena-serca.mp3', titre: "Elena - Hephaistos", img: "eva-serca.jpg", showId:"9"},
    { auteur: "Ines", type: "voix", son: 'ines-chat.mp3', titre: "Ines - Bruno", img: "ines-chat.jpg", showId:"10"},
    { auteur: "Lucie", type: "voix", son: 'lise-decollage.mp3', titre: "Lucie - Decollage", img: "lucie-avion.jpg", showId:"11"},
    { auteur: "Lucie", type: "voix", son: 'lise-alex.mp3', titre: "Lucie - Alexandre", img: "lucie-alex.jpg", showId:"12"},
    { auteur: "Lucie", type: "voix", son: 'lise-santa.mp3', titre: "Lucie - Basilique", img: "lucie-santa.jpg", showId:"13"},
    { auteur: "Lucie", type: "voix", son: 'lise-naples.mp3', titre: "Lucie - Gradins", img: "lucie-gradin.jpg", showId:"14"},
    { auteur: "Melissa", type: "voix", son: 'melissa-palestre.mp3', titre: "Melissa - Palestre", img: "melissa-palestre.jpg", showId:"15"},
    { auteur: "Melissa", type: "voix", son: 'melissa-soleil.mp3', titre: "Melissa - Soleil", img: "melissa-soleil.jpg", showId:"16"},
    { auteur: "Rahil", type: "voix", son: 'rahil-atrium.mp3', titre: "Rahil - Atrium", img: "rahil-atrium.jpg", showId:"17"},
    { auteur: "Rahil", type: "voix", son: 'rahil-vent.mp3', titre: "Rahil - Pierres noires", img: "rahil-vent.jpg", showId:"18"},
    { auteur: "Safia", type: "voix", son: 'sofia-fresques.mp3', titre: "Sofia - Fresques", img: "safia-fresques.jpg", showId:"19"},
    { auteur: "Souleymane", type: "voix", son: 'souleymane-restitua.mp3', titre: "Souleymane", img: "souleymane-restitua.jpg", showId:"20"},
    { auteur: "Souleymane", type: "voix", son: 'souleymane-therme.mp3', titre: "Souleymane - Therme", img: "souleymane-therme.jpg", showId:"21"},
    { auteur: "Yasmine", type: "voix", son: 'yasmine-dieux.mp3', titre: "Yasmine - Fresque dieux ", img: "yasmine-4dieux.jpg", showId:"22"},
    { auteur: "Yasmine", type: "voix", son: 'yasmine-neptune.mp3', titre: "Yasmine - Neptune", img: "yasmine-neptune.jpg", showId:"23"},
    { auteur: "Yasmine", type: "voix", son: 'yasmine-pots.mp3', titre: "Yasmine - Thermopodium", img: "yasmine-pots.jpg", showId:"24"},
    { auteur: "Zineb", type: "voix", son: 'zineb-villas.mp3', titre: "Zineb - Villas", img: "zineb-villas.png", showId: "25"}
] 

