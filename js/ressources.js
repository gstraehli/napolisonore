// Tableau de type array stockant des objets de type json (paire clef : valeur) les index du tableau sont des chiffres 
// pour les objert json l'accès aux valeurs (ex:"insulte") se fait à l'aide de clef (ex: auteur ou son ou titre) ce qui donne pour un tableau : tableau[0] pour la première valeur et objet .auteur pour la première valeur du json

var ressources = [
    { Auteurs: "Amara", son: 'amara.mp3', titre: "Amara - Le Vésuve", img: "amara.jpg", showId:"1"},
    { Auteurs: "Chloé", son: 'chloe-hercu.mp3', titre: "Chloé - Herculanum", img: "chloe-hercu.jpg", showId:"2"},
    { Auteurs: "Chloé", son: 'chloe-pano.mp3', titre: "Chloé - Panorama", img: "chloe-pano.jpg", showId:"3"},
    { Auteurs: "Elena", son: 'elena-poseido.mp3', titre: "Elena - Poseidon", img: "elena.jpg", showId:"4"},
    { Auteurs: "Elena", son: 'elena-corps.mp3', titre: "Elena - Corps pétrifiés", img: "elena-corps.jpg", showId:"5"},
    { Auteurs: "Elena", son: 'elena-glace.mp3', titre: "Elena - Les glaces", img: "elena-glace.jpg", showId:"6"},
    { Auteurs: "Elena", son: 'elena-reco.mp3', titre: "Elena - Reconstitutions", img: "elena-reco.jpg", showId:"7"},
    { Auteurs: "Elena", son: 'elena-statue.mp3', titre: "Elena - Une statue", img: "elena-statue.jpg", showId:"8"},
    { Auteurs: "Eva", son: 'eva-serca.mp3', titre: "Eva - Mosaïques", img: "eva-serca.jpg", showId:"9"},
    { Auteurs: "Ines", son: 'ines-chat.mp3', titre: "Ines - Bruno", img: "ines-chat.jpg", showId:"10"},
    { Auteurs: "Lucie", son: 'lucie-decollage.mp3', titre: "Lucie - Décollage", img: "lucie-avion.jpg", showId:"11"},
    { Auteurs: "Lucie", son: 'lucie-alex.mp3', titre: "Lucie - Alexandre", img: "lucie-alex.jpg", showId:"12"},
    { Auteurs: "Lucie", son: 'lucie-santa.mp3', titre: "Lucie - Basilique", img: "lucie-santa.jpg", showId:"13"},
    { Auteurs: "Lucie", son: 'lucie-naples.mp3', titre: "Lucie - Théâtre", img: "lucie-gradin.jpg", showId:"14"},
    { Auteurs: "Melissa", son: 'melissa-palestre.mp3', titre: "Melissa - Palestre", img: "melissa-palestre.jpg", showId:"15"},
    { Auteurs: "Melissa", son: 'melissa-soleil.mp3', titre: "Melissa - Soleil", img: "melissa-soleil.jpg", showId:"16"},
    { Auteurs: "Rahil", son: 'rahil-atrium.mp3', titre: "Rahil - Atrium", img: "rahil-atrium.jpg", showId:"17"},
    { Auteurs: "Rahil", son: 'rahil-vent.mp3', titre: "Rahil - Plage noire", img: "rahil-vent.jpg", showId:"18"},
    { Auteurs: "Safia", son: 'sofia-fresques.mp3', titre: "Sofia - Fresques", img: "safia-fresques.jpg", showId:"19"},
    { Auteurs: "Souleymane", son: 'souleymane-restitua.mp3', titre: "Souleymane - Eglise", img: "souleymane-restitua.jpg", showId:"20"},
    { Auteurs: "Souleymane", son: 'souleymane-therme.mp3', titre: "Souleymane - Thermes", img: "souleymane-therme.jpg", showId:"21"},
    { Auteurs: "Yasmine", son: 'yasmine-dieux.mp3', titre: "Yasmine - Les dieux", img: "yasmine-4dieux.jpg", showId:"22"},
    { Auteurs: "Yasmine", son: 'yasmine-neptune.mp3', titre: "Yasmine - Neptune", img: "yasmine-neptune.jpg", showId:"23"},
    { Auteurs: "Yasmine", son: 'yasmine-pots.mp3', titre: "Yasmine - Thermopolium", img: "yasmine-pots.jpg", showId:"24"},
    { Auteurs: "Zineb", son: 'zineb-villas.mp3', titre: "Zineb - Les villas", img: "zineb-villas.png", showId: "25"}
] 

