// Tableau de type array stockant des objets de type json (paire clef : valeur) les index du tableau sont des chiffres 
// pour les objert json l'accès aux valeurs (ex:"insulte") se fait à l'aide de clef (ex: auteur ou son ou titre) ce qui donne pour un tableau : tableau[0] pour la première valeur et objet .auteur pour la première valeur du json

var ressources = [
    { auteur: "Amara", type: "voix", son: 'amara.mp3', titre: "Amara", img: "amara.jpg"},
    { auteur: "Chloé", type: "voix", son: 'chloe-hercu.mp3', titre: "Chloé - Herculanum", img: "chloe-hercu.jpg"},
    { auteur: "Chloé", type: "voix", son: 'chloe-pano.mp3', titre: "Chloé - Panorama", img: "chloe-pano.jpg"},
    { auteur: "Elena", type: "voix", son: 'elena-poseido.mp3', titre: "Elena - Poseidon", img: "elena.jpg"},
    { auteur: "Elena", type: "voix", son: 'elena-corps.mp3', titre: "Elena - Corps pétrifiés", img: "elena-corps.jpg"},
    { auteur: "Elena", type: "voix", son: 'elena-glace.mp3', titre: "Elena - Les glaces", img: "elena-glace.jpg"},
    { auteur: "Elena", type: "voix", son: 'elena-reco.mp3', titre: "Elena - Recomposition", img: "elena-reco.jpg"},
    { auteur: "Elena", type: "voix", son: 'elena-statue.mp3', titre: "Elena - Statues", img: "elena-statue.jpg"},
    { auteur: "Eva", type: "voix", son: 'eva-serca.mp3', titre: "Eva - Hephaistos", img: "eva-serca.jpg"},
    { auteur: "Ines", type: "voix", son: 'ines-chat.mp3', titre: "Ines - Bruno", img: "ines-chat.jpg"},
    { auteur: "Lise", type: "voix", son: 'lise-fresque.mp3', titre: "Lise - Fresque", img: "lise-fresque.jpg"},
    { auteur: "Lucie", type: "voix", son: 'lucie-santa.mp3', titre: "Lucie - Basilique", img: "lucie-santa.jpg"},
    { auteur: "Lucie", type: "voix", son: 'lucie-decollage.mp3', titre: "Lucie - Avion", img: "lucie-avion.jpg"},
    { auteur: "Lucie", type: "voix", son: 'lucie-alex.mp3', titre: "Lucie - Mosaïque", img: "lucie-alex.jpg"},
    { auteur: "Lucie", type: "voix", son: 'lucie-naples.mp3', titre: "Lucie - Gradin", img: "lucie-gradin.jpg"},
    { auteur: "Melissa", type: "voix", son: 'melissa-palestre.mp3', titre: "Melissa - Palestre", img: "melissa-palestre.jpg"},
    { auteur: "Melissa", type: "voix", son: 'melissa-soleil.mp3', titre: "Melissa - Soleil", img: "melissa-soleil.jpg"},
    { auteur: "Rahil", type: "voix", son: 'rahil-atrium.mp3', titre: "Rahil - Atrium", img: "rahil-atrium.jpg"},
    { auteur: "Rahil", type: "voix", son: 'rahil-vent.mp3', titre: "Rahil - Pierres noires", img: "rahil-vent.jpg"},
    { auteur: "Safia", type: "voix", son: 'sofia-fresques.mp3', titre: "Sofia - Fresques", img: "safia-fresques.jpg"},
    { auteur: "Souleymane", type: "voix", son: 'souleymane-restitua.mp3', titre: "Souleymane", img: "souleymane-restitua.jpg"},
    { auteur: "Souleymane", type: "voix", son: 'souleymane-therme.mp3', titre: "Souleymane - Therme", img: "souleymane-therme.jpg"},
    { auteur: "Yasmine", type: "voix", son: 'yasmine-dieux.mp3', titre: "Yasmine - Fresque dieux ", img: "yasmine-4dieux.jpg"},
    { auteur: "Yasmine", type: "voix", son: 'yasmine-neptune.mp3', titre: "Yasmine - Neptune", img: "yasmine-neptune.jpg"},
    { auteur: "Yasmine", type: "voix", son: 'yasmine-pots.mp3', titre: "Yasmine - Thermopodium", img: "yasmine-pots.jpg"},
    { auteur: "Zineb", type: "voix", son: 'zineb-villas.mp3', titre: "Zineb - Villas", img: "zineb-villas.png"}
] 

