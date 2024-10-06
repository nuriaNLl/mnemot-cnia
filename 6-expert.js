//creo una variable per referir-me a totes les paraules que poden aparèixer a l'exercici:
let llistaDeParaulesExpertes = ["daltabaix", "deambular", "decapitar", "deliberat", "democràcia", "dentadura", "deplorable", "depredador", "derrapada", "derrotista", "desapercebut", "descalcificador", "desdir-se'n", "desenvolupament", "desempallegar-se"]

//creo una variable per referir-me a tots els colors que poden aparèixer a la paraula:
let llistaDeColors1 = ["#ff009f", "#9600ff", "#ffed00", "#87ff00", "#00abff", "#ffab00", "#000000"]
let llistaDeColors2 = ["#9600ff", "#ffed00", "#87ff00", "#00abff", "#ffab00", "#000000", "#ff009f"]
let llistaDeColors3 = ["#ffed00", "#87ff00", "#00abff", "#ffab00", "#000000", "#ff009f", "#9600ff"]
let llistaDeColors4 = ["#87ff00", "#00abff", "#ffab00", "#000000", "#ff009f", "#9600ff", "#ffed00"]
let llistaDeColors5 = ["#00abff", "#ffab00", "#000000", "#ff009f", "#9600ff", "#ffed00", "#87ff00"]
let llistaDeColors6 = ["#ffab00", "#000000", "#ff009f", "#9600ff", "#ffed00", "#87ff00", "#00abff"]
let llistaDeColors7 = ["#000000", "#ff009f", "#9600ff", "#ffed00", "#87ff00", "#00abff", "#ffab00"]
let llistaDeColors8 = ["#ff009f", "#9600ff", "#ffed00", "#87ff00", "#00abff", "#ffab00", "#000000"]
let llistaDeColors9 = ["#9600ff", "#ffed00", "#87ff00", "#00abff", "#ffab00", "#000000", "#ff009f"]
let llistaDeColors10 = ["#ffed00", "#87ff00", "#00abff", "#ffab00", "#000000", "#ff009f", "#9600ff"]
let llistaDeColors11 = ["#87ff00", "#00abff", "#ffab00", "#000000", "#ff009f", "#9600ff", "#ffed00"]
let llistaDeColors12 = ["#00abff", "#ffab00", "#000000", "#ff009f", "#9600ff", "#ffed00", "#87ff00"]
let llistaDeColors13 = ["#ffab00", "#000000", "#ff009f", "#9600ff", "#ffed00", "#87ff00", "#00abff"]
let llistaDeColors14 = ["#000000", "#ff009f", "#9600ff", "#ffed00", "#87ff00", "#00abff", "#ffab00"]
let llistaDeColors15 = ["#ff009f", "#9600ff", "#ffed00", "#87ff00", "#00abff", "#ffab00", "#000000"]
let llistaDeColors16 = ["#9600ff", "#ffed00", "#87ff00", "#00abff", "#ffab00", "#000000", "#ff009f"]

//l'equació per a obtenir aleatorietat és la següent, i es farà servir tant per la paraula com pels colors:
let paraula = llistaDeParaulesExpertes[Math.floor(Math.random() *llistaDeParaulesExpertes.length)].toUpperCase();  
console.log(paraula); 

let color1 = llistaDeColors1[Math.floor(Math.random() *llistaDeColors1.length)];  
console.log(color1);
let color2 = llistaDeColors2[Math.floor(Math.random() *llistaDeColors2.length)];  
console.log(color2);
let color3 = llistaDeColors3[Math.floor(Math.random() *llistaDeColors3.length)];  
console.log(color3);
let color4 = llistaDeColors4[Math.floor(Math.random() *llistaDeColors4.length)];  
console.log(color4);
let color5 = llistaDeColors5[Math.floor(Math.random() *llistaDeColors5.length)];  
console.log(color5);
let color6 = llistaDeColors6[Math.floor(Math.random() *llistaDeColors6.length)];  
console.log(color6);
let color7 = llistaDeColors7[Math.floor(Math.random() *llistaDeColors7.length)];  
console.log(color7);
let color8 = llistaDeColors8[Math.floor(Math.random() *llistaDeColors8.length)];  
console.log(color8);
let color9 = llistaDeColors9[Math.floor(Math.random() *llistaDeColors9.length)];  
console.log(color9);
let color10 = llistaDeColors10[Math.floor(Math.random() *llistaDeColors10.length)];  
console.log(color10);
let color11 = llistaDeColors11[Math.floor(Math.random() *llistaDeColors11.length)];  
console.log(color11);
let color12 = llistaDeColors12[Math.floor(Math.random() *llistaDeColors12.length)];  
console.log(color12);
let color13 = llistaDeColors13[Math.floor(Math.random() *llistaDeColors13.length)];  
console.log(color13);
let color14 = llistaDeColors14[Math.floor(Math.random() *llistaDeColors14.length)];  
console.log(color14);
let color15 = llistaDeColors15[Math.floor(Math.random() *llistaDeColors15.length)];  
console.log(color15);
let color16 = llistaDeColors16[Math.floor(Math.random() *llistaDeColors16.length)];  
console.log(color16);

//aquesta serà la primera funció en realitzar-se, per tant ha de mostrar la paraula aleatòria i amagar la resta de l'exercici:
window.onload = function() { //window.onload fa que la funció s'executi un cop carregada la pàgina  

    //alla on es troba id="parula", hi aparaixarà la paraula aleatòria 
    document.getElementById("primeraLletra").innerText = paraula.charAt(0); 
    document.getElementById("primeraLletra").style.color = color1;

    document.getElementById("segonaLletra").innerText = paraula.charAt(1); 
    document.getElementById("segonaLletra").style.color = color2;
    
    document.getElementById("terceraLletra").innerText = paraula.charAt(2); 
    document.getElementById("terceraLletra").style.color = color3;

    document.getElementById("quartaLletra").innerText = paraula.charAt(3); 
    document.getElementById("quartaLletra").style.color = color4;

    document.getElementById("cinquenaLletra").innerText = paraula.charAt(4); 
    document.getElementById("cinquenaLletra").style.color = color5;

    document.getElementById("sisenaLletra").innerText = paraula.charAt(5);
    document.getElementById("sisenaLletra").style.color = color6;

    document.getElementById("setenaLletra").innerText = paraula.charAt(6); 
    document.getElementById("setenaLletra").style.color = color7;

    document.getElementById("vuitenaLletra").innerText = paraula.charAt(7); 
    document.getElementById("vuitenaLletra").style.color = color8;

    if (paraula.length >=9) {
    document.getElementById("novenaLletra").innerText = paraula.charAt(8); 
    document.getElementById("novenaLletra").style.color = color9;
    } else {
        document.getElementById("novenaLletra").style.display = "none";
    } 
    
    if (paraula.length >=10) {
        document.getElementById("desenaLletra").innerText = paraula.charAt(9); 
        document.getElementById("desenaLletra").style.color = color10;
    } else {
        document.getElementById("desenaLletra").style.display = "none";
    }

    if (paraula.length >=11) {
        document.getElementById("onzenaLletra").innerText = paraula.charAt(10); 
        document.getElementById("onzenaLletra").style.color = color11;
    } else {
        document.getElementById("onzenaLletra").style.display = "none";
    }

    if (paraula.length >=12) {
        document.getElementById("dotzenaLletra").innerText = paraula.charAt(11); 
        document.getElementById("dotzenaLletra").style.color = color12;
    } else {
        document.getElementById("dotzenaLletra").style.display = "none";
    }

    if (paraula.length >=13) {
        document.getElementById("tretzenaLletra").innerText = paraula.charAt(12); 
        document.getElementById("tretzenaLletra").style.color = color13;
    } else {
        document.getElementById("tretzenaLletra").style.display = "none";
    }

    if (paraula.length >=14) {
        document.getElementById("catorzenaLletra").innerText = paraula.charAt(13); 
        document.getElementById("catorzenaLletra").style.color = color14;
    } else {
        document.getElementById("catorzenaLletra").style.display = "none";
    }

    if (paraula.length >=15) {
        document.getElementById("quinzenaLletra").innerText = paraula.charAt(14); 
        document.getElementById("quinzenaLletra").style.color = color15;
    } else {
        document.getElementById("quinzenaLletra").style.display = "none";
    }

    if (paraula.length >=16) {
        document.getElementById("setzenaLletra").innerText = paraula.charAt(15); 
        document.getElementById("setzenaLletra").style.color = color16;
    } else {
        document.getElementById("setzenaLletra").style.display = "none";
    }

    let textColor = document.getElementById("colorsResposta")
        textColor.style.display = "none";

    let taula2 = document.getElementById("exercici");
        taula2.style.display = "none";

    let botóSegüent = document.getElementById("següent");
        botóSegüent.style.display = "none";
}

// En prèmer el botó "amaga-la", cal amagar la primera part de l'exercici (es fa el mateix que a la funció anterior):
function mostrarOcultarText() {
    let taula1 = document.getElementById("imatgeMental");
        taula1.style.display = "none"; //si es veu amaga-ho

    let botons = document.getElementById("botons");
        botons.style.display = "none";

    let textColor = document.getElementById("colorsResposta");
        textColor.style.display = "inline";
    
    let botóContinua = document.getElementById("continua");
        botóContinua.style.display = "none";

        if (paraula.length <= 9) {
            document.getElementById("desèColor").style.display = "none";
            document.getElementById("onzèColor").style.display = "none";
            document.getElementById("dotzèColor").style.display = "none";
            document.getElementById("tretzèColor").style.display = "none";
            document.getElementById("catorzèColor").style.display = "none";
            document.getElementById("quinzèColor").style.display = "none";
            document.getElementById("setzèColor").style.display = "none";
        } else if (paraula.length <= 10) {
            document.getElementById("onzèColor").style.display = "none";
            document.getElementById("dotzèColor").style.display = "none";
            document.getElementById("tretzèColor").style.display = "none";
            document.getElementById("catorzèColor").style.display = "none";
            document.getElementById("quinzèColor").style.display = "none";
            document.getElementById("setzèColor").style.display = "none";
        } else if (paraula.length <= 11) {
            document.getElementById("dotzèColor").style.display = "none";
            document.getElementById("tretzèColor").style.display = "none";
            document.getElementById("catorzèColor").style.display = "none";
            document.getElementById("quinzèColor").style.display = "none";
            document.getElementById("setzèColor").style.display = "none";
        } else if (paraula.length <= 12) {
            document.getElementById("tretzèColor").style.display = "none";
            document.getElementById("catorzèColor").style.display = "none";
            document.getElementById("quinzèColor").style.display = "none";
            document.getElementById("setzèColor").style.display = "none";
        } else if (paraula.length <= 13) {
            document.getElementById("catorzèColor").style.display = "none";
            document.getElementById("quinzèColor").style.display = "none";
            document.getElementById("setzèColor").style.display = "none";
        } else if (paraula.length <= 14) {
            document.getElementById("quinzèColor").style.display = "none";
            document.getElementById("setzèColor").style.display = "none";
        } else if (paraula.length <= 15) {
            document.getElementById("setzèColor").style.display = "none";
        } else {
            document.getElementById("desèColor").style.display = "inline";
            document.getElementById("onzèColor").style.display = "inline";
            document.getElementById("dotzèColor").style.display = "inline";
            document.getElementById("tretzèColor").style.display = "inline";
            document.getElementById("catorzèColor").style.display = "inline";
            document.getElementById("quinzèColor").style.display = "inline";
            document.getElementById("setzèColor").style.display = "inline";
        }
}   

// En prèmer el botó envia:
function corregir() {
    //per assegurar-nos dels valors que comparem escrivim:
    let respostaColor1 = document.getElementById("primerColor").value;
    let respostaColor2 = document.getElementById("segonColor").value;
    let respostaColor3 = document.getElementById("tercerColor").value;
    let respostaColor4 = document.getElementById("quartColor").value;
    let respostaColor5 = document.getElementById("cinquèColor").value;
    let respostaColor6 = document.getElementById("sisèColor").value;
    let respostaColor7 = document.getElementById("setèColor").value;
    let respostaColor8 = document.getElementById("vuitèColor").value;
    let respostaColor9 = document.getElementById("novèColor").value;
    let respostaColor10 = document.getElementById("desèColor").value;
    let respostaColor11 = document.getElementById("onzèColor").value;
    let respostaColor12 = document.getElementById("dotzèColor").value;
    let respostaColor13 = document.getElementById("tretzèColor").value;
    let respostaColor14 = document.getElementById("catorzèColor").value;
    let respostaColor15 = document.getElementById("quinzèColor").value;
    let respostaColor16 = document.getElementById("setzèColor").value;
    
    console.log("resposta: " + respostaColor1 + " " + respostaColor2 + " " + respostaColor3 + " " + respostaColor4 + " " + respostaColor5 + " " + respostaColor6 + " " + respostaColor7 + " " + respostaColor8 + " " + respostaColor9 + " " + respostaColor10 + " " + respostaColor11 + " " + respostaColor12 + " " + respostaColor13 + " " + respostaColor14 + " " + respostaColor15 + " " + respostaColor16);
    console.log("paraula correcta: " + color1 + " " + color2 + " " + color3 + " " + color4 + " " + color5 + " " + color6 + " " + color7 + " " + color8 + " " + color9 + " " + color10 + " " + color11 + " " + color12 + " " + color13 + " " + color14 + " " + color15 + " " + color16);

    //si no s'ha respost, no s'ha de poder continuar
    let botóContinua = document.getElementById("continua");

    let colors = {
        "#ff009f": "rosa", 
        "#9600ff": "lila", 
        "#ffed00": "groc", 
        "#87ff00": "verd", 
        "#00abff": "blau", 
        "#ffab00": "taronja", 
        "#000000": "negre",
    };

    //si algun camp no s'ha respost:
    if (respostaColor1 === "#ffffff" ||
        respostaColor2 === "#ffffff" ||
        respostaColor3 === "#ffffff" ||
        respostaColor4 === "#ffffff" ||
        respostaColor5 === "#ffffff" ||
        respostaColor6 === "#ffffff" ||
        respostaColor7 === "#ffffff" ||
        respostaColor8 === "#ffffff" ||
        respostaColor9 === "#ffffff" ||
        (paraula.length >= 10 && respostaColor10 === "#ffffff") ||
        (paraula.length >= 11 && respostaColor11 === "#ffffff") ||
        (paraula.length >= 12 && respostaColor12 === "#ffffff") ||
        (paraula.length >= 13 && respostaColor13 === "#ffffff") ||
        (paraula.length >= 14 && respostaColor14 === "#ffffff") ||
        (paraula.length >= 15 && respostaColor15 === "#ffffff") ||
        (paraula.length >= 16 && respostaColor16 === "#ffffff")) {
        
        botóContinua.style.display = "none";
    } 

    //si tots els camps s'han respost el botó de continuar ha d'aparèixer
    if (respostaColor1 != "" &&
        respostaColor2 != "" &&
        respostaColor3 != "" &&
        respostaColor4 != "" &&
        respostaColor5 != "" &&
        respostaColor6 != "" &&
        respostaColor7 != "" &&
        respostaColor8 != "" &&
        respostaColor9 != "" &&
        (paraula.length < 10 || respostaColor10 != "") &&
        (paraula.length < 11 || respostaColor11 != "") &&
        (paraula.length < 12 || respostaColor12 != "") &&
        (paraula.length < 13 || respostaColor13 != "") &&
        (paraula.length < 14 || respostaColor14 != "") &&
        (paraula.length < 15 || respostaColor15 != "") &&
        (paraula.length < 16 || respostaColor16 != "")) {

        botóContinua.style.display = "inline";

        if (respostaColor1 === color1 &&
            respostaColor2 === color2 &&
            respostaColor3 === color3 &&
            respostaColor4 === color4 &&
            respostaColor5 === color5 &&
            respostaColor6 === color6 &&
            respostaColor7 === color7 &&
            respostaColor8 === color8 &&
            respostaColor9 === color9 &&
            (paraula.length < 10 || (paraula.length >= 10 && respostaColor10 === color10)) &&
            (paraula.length < 11 || (paraula.length >= 11 && respostaColor11 === color11)) &&
            (paraula.length < 12 || (paraula.length >= 12 && respostaColor12 === color12)) &&
            (paraula.length < 13 || (paraula.length >= 13 && respostaColor13 === color13)) &&
            (paraula.length < 14 || (paraula.length >= 14 && respostaColor14 === color14)) &&
            (paraula.length < 15 || (paraula.length >= 15 && respostaColor15 === color15)) &&
            (paraula.length < 16 || (paraula.length >= 16 && respostaColor16 === color16))) {
            
            document.getElementById("sol·lució1").innerText = "BONA FEINA!";
        } else {
            if (paraula.length == 9) {
                document.getElementById("sol·lució1").innerText = "HAS RELLISCAT! La resposta és: " + colors[color1] + ", " + colors[color2] + ", " + colors[color3] + ", " + colors[color4] + ", " + colors[color5] + ", " + colors[color6] + ", " + colors[color7] + ", " + colors[color8] + ", " + colors[color9] + ", però encara pots continuar"; //escrivint (colors[colorx]) ens referim al mateix clolor que colorx, però aparaixerà el seu nom i no el codi hexadecimal 
            } else if (paraula.length == 10) {
                document.getElementById("sol·lució1").innerText = "HAS RELLISCAT! La resposta és: " + colors[color1] + ", " + colors[color2] + ", " + colors[color3] + ", " + colors[color4] + ", " + colors[color5] + ", " + colors[color6] + ", " + colors[color7] + ", " + colors[color8] + ", " + colors[color9] + ", " + colors[color10] + ", però encara pots continuar";
            } else if (paraula.length == 11) {
                document.getElementById("sol·lució1").innerText = "HAS RELLISCAT! La resposta és: " + colors[color1] + ", " + colors[color2] + ", " + colors[color3] + ", " + colors[color4] + ", " + colors[color5] + ", " + colors[color6] + ", " + colors[color7] + ", " + colors[color8] + ", " + colors[color9] + ", " + colors[color10] + ", " + colors[color11] + ", però encara pots continuar";
            } else if (paraula.length == 12) {
                document.getElementById("sol·lució1").innerText = "HAS RELLISCAT! La resposta és: " + colors[color1] + ", " + colors[color2] + ", " + colors[color3] + ", " + colors[color4] + ", " + colors[color5] + ", " + colors[color6] + ", " + colors[color7] + ", " + colors[color8] + ", " + colors[color9] + ", " + colors[color10] + ", " + colors[color11] + ", " + colors[color12] + ", però encara pots continuar";
            } else if (paraula.length == 13) {
                document.getElementById("sol·lució1").innerText = "HAS RELLISCAT! La resposta és: " + colors[color1] + ", " + colors[color2] + ", " + colors[color3] + ", " + colors[color4] + ", " + colors[color5] + ", " + colors[color6] + ", " + colors[color7] + ", " + colors[color8] + ", " + colors[color9] + ", " + colors[color10] + ", " + colors[color11] + ", " + colors[color12] + ", " + colors[color13] + ", però encara pots continuar";
            } else if (paraula.length == 14) {
                document.getElementById("sol·lució1").innerText = "HAS RELLISCAT! La resposta és: " + colors[color1] + ", " + colors[color2] + ", " + colors[color3] + ", " + colors[color4] + ", " + colors[color5] + ", " + colors[color6] + ", " + colors[color7] + ", " + colors[color8] + ", " + colors[color9] + ", " + colors[color10] + ", " + colors[color11] + ", " + colors[color12] + ", " + colors[color13] + ", " + colors[color14] + ", però encara pots continuar";
            } else if (paraula.length == 15) {
                document.getElementById("sol·lució1").innerText = "HAS RELLISCAT! La resposta és: " + colors[color1] + ", " + colors[color2] + ", " + colors[color3] + ", " + colors[color4] + ", " + colors[color5] + ", " + colors[color6] + ", " + colors[color7] + ", " + colors[color8] + ", " + colors[color9] + ", " + colors[color10] + ", " + colors[color11] + ", " + colors[color12] + ", " + colors[color13] + ", " + colors[color14] + ", " + colors[color15] + ", però encara pots continuar";
            } else if (paraula.length == 16) {
                document.getElementById("sol·lució1").innerText = "HAS RELLISCAT! La resposta és: " + colors[color1] + ", " + colors[color2] + ", " + colors[color3] + ", " + colors[color4] + ", " + colors[color5] + ", " + colors[color6] + ", " + colors[color7] + ", " + colors[color8] + ", " + colors[color9] + ", " + colors[color10] + ", " + colors[color11] + ", " + colors[color12] + ", " + colors[color13] + ", " + colors[color14] + ", " + colors[color15] + ", " + colors[color16] + ", però encara pots continuar";
            }
        }

        //un cop duta a terme a funció de correcció, es pot deshabilitar el camp de text per mitjà de:
        document.getElementById("primerColor").disabled = true;
        document.getElementById("segonColor").disabled = true;
        document.getElementById("tercerColor").disabled = true;
        document.getElementById("quartColor").disabled = true;
        document.getElementById("cinquèColor").disabled = true;
        document.getElementById("sisèColor").disabled = true;
        document.getElementById("setèColor").disabled = true;
        document.getElementById("vuitèColor").disabled = true;
        document.getElementById("novèColor").disabled = true;
        if (paraula.length >= 10) {
            document.getElementById("desèColor").disabled = true;
        } else if (paraula.length >= 11) {
            document.getElementById("nozèColor").disabled = true;
        } else if (paraula.length >= 12) {
            document.getElementById("dotzèColor").disabled = true;
        } else if (paraula.length >= 13) {
            document.getElementById("tretzèColor").disabled = true;
        } else if (paraula.length >= 14) {
            document.getElementById("catorzèColor").disabled = true;
        } else if (paraula.length >= 15) {
            document.getElementById("quinzèColor").disabled = true;
        } else if (paraula.length >= 16) {
            document.getElementById("setzèColor").disabled = true;
        }

        //un cop duta a terme a funció de correcció, els botons de "refresca" i "envia" ja no son necessaris:
        document.getElementById("refresca2").style.display = "none";
        document.getElementById("envia1").style.display = "none";
    }
}

function mostrarExercici() {
    let textColor = document.getElementById("colorsResposta");
        textColor.style.display = "none";

    let taula2 = document.getElementById("exercici");
        taula2.style.display = "inline";    
}

function refresca() {
    let refresca1 = document.getElementById("refresca1");
    refresca1.addEventListener('click', _ => {
        location.reload();
    })

    let refresca2 = document.getElementById("refresca2");
    refresca2.addEventListener('click', _ => {
        location.reload();
    })

    let refresca3 = document.getElementById("refresca3");
    refresca3.addEventListener('click', _ => {
        location.reload();
    })
}

function corregeixLaParaula() {
    let resposta = document.getElementById("espaiPerALaParaula").value.trim().toUpperCase(); //amb textContent el programa compara el que es troba escrit DINS l'espaiPerALaParaula i amb les funcions trim i toUpperCase, ens assegurem que no hi hagis espais en blanc de més i que tot estigui en majúscula
    //per assegurar-nos dels valors que comparem escrivim:
    console.log("resposta: " + resposta)
    console.log("paraula correcta: " + paraula) 

    //si no s'ha respost, no pot aparèixer el botó de següent
    if (resposta == "") {
        let botóSegüent = document.getElementById("següent");
        botóSegüent.style.display = "none";

    //si s'ha respost ( != vol dir diferent a ):
    } else if (resposta != "") {
        if (resposta === paraula) { //amb tres = (===) la comparació es converteix en estricta
            document.getElementById("sol·lució2").innerText = "BONA FEINA!";
        } else {
            document.getElementById("sol·lució2").innerText = "HAS RELLISCAT! La resposta és " + paraula;
        }
        //un cop acabat l'exercici ha d'apareixer el botó de seguent:
        let botóSegüent = document.getElementById("següent");
        if (botóSegüent.style.display === "none"){
            botóSegüent.style.display = "inline";
        }
        //un cop duta a terme a funció de correcció, es pot deshabilitar el camp de text per mitjà de:
        document.getElementById("espaiPerALaParaula").disabled = true;
    }
}    