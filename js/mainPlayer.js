window.onload = function(){
    // Gestion du player VAR
    //recuperation du conteneur des boutons de lancement du son
        var conteneurBtn = document.getElementById('conteneurBtnSon');
    // tableau de stockage des boutons crées dans le conteneurBtn
        var btnSon = [];
    // recup dde la balise audio
        var player = document.getElementById('player');
        var fileDir = "son/";
    // FIN
    // Gestion duu menu VAR
    var conteneurMenu = document.getElementById('conteneurMenu');
    var btnMenu = conteneurMenu.children[0];
    var btnTout = conteneurMenu.children[1];
    var menu = conteneurMenu.children[2];
    var openMenu = false;//variable booleen permettant de determiner si le menu est ouvert ou non
    // FIN
    
    //Gestion du player Function
    
    //Fonction qui crée et met les boutons audios directement dans le conteneur en s'appyuyant sur le fichier source : tant qu'il y a des objets son dans le fichiers, un nombre équivalent de bouton seront crée par la boucle de la fonction
    // Gestion du player Function
        function createBtnSon(){    
            //boule sur le nombre d'objets du fichier ressources
            for (var i = 0;i< ressources.length; i++){
            //création d'un node(balise html ou tag) 'li' dans le DOM
            var li = document.createElement('LI');
            //creation d'un node(balise html ou tag) "a" dans le DOM( document object mobile)
            var btn = document.createElement('A');
            //Stockage du 'a' dans le tableau
            btnSon.push(btn);
            // inclusion dans le li
            li.appendChild(btn);
            // application du "#" dans le parametre "href" du a(btn)
            btn.href = "#";
            // boucle permettant de rajouter autant de parametres "data-kekchose" qu'il y a de clef (la paire {clef:"valeur"}) dans l'objet a l'index 'i' du fichier ressources
            for(var key in ressources[0]){
                // test conditionnel pour ne pas mettre les valeurs de "son" et de titre des objets de ressources dans les parametres data du lien (btnson): si clef de l'objet est different de 'son' et (and) clef de l'objet est different de "titre" on rentre dans les accolades....
                if(key !== 'son' && key !== 'titre'){
                    //... et on utilise dataset pour rajouter un "data-meme nom que clef dans le lien dont la valeur est égale à la valeur de la même clef dans l'objet ex:<A HREF="#" DATA-AUTEUR="Kaaris"> texte </a>
                    btn.dataset[key]=ressources[i][key];
                }
            }
                //ajout du text du lien correspondant à la clef "titre" des objets ressources
            btn.textContent = ressources[i].titre;
                //ajout de l'ecouteur d'evenement de type 'click' au lien a (btn) permettant de lire un son
            btn.addEventListener('click',function(event){
                // bloquage du comportement par défaut du lien
                event.preventDefault();
                // lancement de la fonctionde lecture de son avec comme paramètre l'index de placement du bouton (this = celui-ci au moment ou il est clické) dans le tableau de stockage
                play(btnSon.indexOf(this))
            });
                //au final on place les li contenant les boutons dans la page
            conteneurBtn.appendChild(li);
        };
    }
    

    // fonction de lancement du son
    function play(pIndex){
        //on attribut une valeur chaine de caractère à l'attribut src de la balise son pour lire le son a la bonne adresse. L'adresse du src est constitué de la variable 'fileDir' concaténée à la valeur de la clef 'son' de l'objet correspondant au parametre index
        player.src = fileDir+ressources[pIndex].son
    }
    
   
    // FIN

    // Gestion du menu Function

    function openCloseMenu(pThis){
        // "!openMenu" est exactement l'équivalent de "openMenu === false"
        if(!openMenu){
            conteneurMenu.classList.add('openMenu'); // appel du CSS avec openMenu
            pThis.classList.add('close');
            openMenu = true;
        }else{
           conteneurMenu.classList.remove('openMenu');
           pThis.classList.remove('close');
           openMenu = false;
        }
    }

    btnMenu.addEventListener('click',function(){
        openCloseMenu(this);
    });
    
    var rubriques = [];
    
    // commencement de la création des rubriques et des liens du menu
    // cette fonction permet de créer un nombre de rubrique correspondnat au nombre de clef
    function createRubriques(){
        //boucle qui va livre les objet et renvoyer les clef de l'objet dans la variable key ex: sur cette objet 
            for(var key in ressources[0]){
                //on test alors si les valeurs renvoyés sont différentes de "son" et de titre...
                if(key !== 'son' && key !== 'titre'){
                    //... si c'est le cas on crée un "div" dans le DOM, puis un h3...
                    var div = document.createElement('DIV');
                    var h3 = document.createElement('h3');
                    //... dans le quel on met le texte de la clef...
                    h3.textContent = key;
                    //... puis on le place dan le div...
                    div.appendChild(h3);
                    //... entre temps on lance la fonction creatrubriqueitem()...
                    createItemRubrique(div,key);
                    //...pour enfin mettre dans l'objet menu ce que l'on a crée
                    menu.appendChild(div);
                }
                //...si le "if" n'est pas "true" on fait rien
            }
        }
    // fonction permettant de créer les liens qui vont servir de filtre et qui prend 2 parametre, pConteneur qui est le div crée dans createRubriques() et pKey qui est la clef de l'objet utilisé dans createRubrique()
        function createItemRubrique(pConteneur, pKey){
            //creation d'une variable et initialisation avec une chaine vide
            var typeItem = "";
            // boucle sur le nombre d'objet de ressources
            for (var i = 0; i < ressources.length; i++){
                //si la valeur de l'objet a la clef "key" est strictement egale a  la valeur de la variable "typeitem" alors fait quelque chose sinon rien
                if(ressources[i][pKey] !== typeItem){
                typeItem = ressources[i][pKey];
                var a = document.createElement('a');
                a.href = '#';
                a.dataset[pKey] = ressources[i][pKey];
                a.textContent = ressources[i][pKey];
                a.addEventListener('click', function(event){
                    event.preventDefault();
                    filtre(this,pKey);
                });
                pConteneur.appendChild(a);
             }
         };
     }
        
    function filtre(pThis,pKey){
        
        console.log('menu -->',pThis.dataset[pKey],pKey)
        for (var i = 0; i< btnSon.length; i++){
            console.log('btnSon -->',btnSon[i].dataset[pKey]);
            if(pThis.dataset[pKey] === btnSon[i].dataset[pKey]){
                btnSon[i].style.display = "block";
            }else{
                btnSon[i].style.display = "none";
            }
        };
        openCloseMenu(btnMenu)
    };
    function resetFiltre(){
        for (var i = 0; i < btnSon.length;i++){
            btnSon[i].style.display = "block";
        }
        openCloseMenu(btnMenu)
    }
    
    btnTout.addEventListener('click',function(event){
        event.preventDefault();
        resetFiltre();
    });
    
    
    
    
    
    
    
    
    
    function init(){
        createBtnSon();
        createRubriques();
    }
    init();
}