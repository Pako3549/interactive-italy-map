let regions = {
    aosta: {desc: "La Valle d'Aosta è una regione autonoma situata nel nord-ovest dell'Italia, incastonata tra le Alpi. È la regione più piccola e meno popolata del Paese, ma ricca di bellezze naturali e culturali.Caratterizzata da maestose montagne come il Monte Bianco, il Monte Rosa, il Cervino e il Gran Paradiso, è un paradiso per gli amanti della natura, dello sci e delle escursioni. <br><br> La regione ospita anche il Parco Nazionale del Gran Paradiso, il più antico d'Italia.Dal punto di vista culturale, la Valle d'Aosta è bilingue: si parlano italiano e francese. La sua storia è testimoniata da castelli medievali, come il Castello di Fénis e il Forte di Bard, e dall'eredità romana visibile ad Aosta, il capoluogo, che conserva monumenti come l'Arco di Augusto e il Teatro Romano. <br><br> La gastronomia locale è famosa per specialità come la fontina, ingrediente base della tradizionale fonduta valdostana, e vini di montagna. È una regione che combina perfettamente natura, storia e tradizioni alpine.", img: "https://images.pexels.com/photos/10406387/pexels-photo-10406387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    trentino: {desc: "Questa regione montuosa è un paradiso per gli amanti della natura, con le Dolomiti che offrono attività all'aperto in ogni stagione. La cultura tirolese è evidente nell'architettura e nella gastronomia.", img: ""},
    friuli: {desc: "Caratterizzata da paesaggi montani e costieri, questa regione ha una ricca eredità culturale influenzata da diverse tradizioni. I vini locali, come il Friulano, sono rinomati e spesso accompagnati da piatti tipici regionali.", img: ""},
    veneto: {desc: "Il Veneto è celebre per la sua capitale, Venezia, con i suoi canali e architettura unica. La regione offre anche il Lago di Garda e una tradizione vinicola ricca, con vini come il Prosecco.", img: ""},
    piemonte: {desc: "Il Piemonte è noto per i suoi vini pregiati, come il Barolo e il Barbaresco. Torino, la sua capitale, è una città elegante con musei, caffè storici e una ricca tradizione culinaria.", img: ""},
    lombardia: {desc: "La Lombardia è una delle regioni più dinamiche d'Italia, con Milano come centro della moda e del design. I laghi, come il Lago di Como, offrono scenari romantici e attività all'aperto.", img: ""},
    emilia: {desc: "Questa regione è considerata la culla della gastronomia italiana, con prelibatezze come il parmigiano reggiano e il prosciutto di Parma. Città storiche come Bologna e Modena offrono arte, cultura e una vivace vita notturna.", img: ""},
    toscana: {desc: "La Toscana è famosa per i suoi paesaggi idilliaci, le città d'arte come Firenze e Siena, e i suoi vini pregiati come il Chianti. La cucina toscana è semplice e saporita, con ingredienti freschi e locali.", img: ""},
    umbria: {desc: "L'Umbria è conosciuta come il cuore verde d'Italia, ricca di borghi medievali e paesaggi mozzafiato. La tradizione artistica e religiosa è forte, con eventi come il famoso Festival dei Due Mondi a Spoleto.", img: ""},
    lazio: {desc: "Il Lazio è famoso per Roma, il cuore pulsante della storia e della cultura italiana. Oltre alla capitale, la regione offre borghi affascinanti come Tivoli, con le sue splendide ville e giardini.", img: ""},
    marche: {desc: "Le Marche sono una regione di colline verdi e borghi medievali affascinanti. La costa adriatica offre belle spiagge, mentre l'entroterra è ricco di storia e tradizioni artigianali.", img: ""},
    abruzzo: {desc: " L'Abruzzo è famoso per i suoi paesaggi montuosi, tra cui il Gran Sasso, che offre opportunità per escursioni e sport invernali. La costa adriatica è rinomata per le sue spiagge sabbiose e i deliziosi piatti a base di pesce.", img: ""},
    molise: {desc: "Poco conosciuta, la Molise è una regione tranquilla con paesaggi rurali e una cultura autentica. I suoi borghi medievali raccontano storie antiche e la cucina locale è un vero tesoro da scoprire.", img: ""},
    puglia: {desc: "La Puglia è famosa per i suoi trulli di Alberobello e le splendide spiagge del Salento. La cucina pugliese, con piatti a base di olio d'oliva e pomodori freschi, è una delle più apprezzate d'Italia.", img: ""},
    sicilia: {desc: "La Sicilia è un crocevia di culture, con influenze arabe, spagnole e italiane. La Valle dei Templi e il vulcano Etna sono solo alcune delle meraviglie naturali e storiche che la regione ha da offrire.", img: ""},
    basilicata: {desc: "La Basilicata è conosciuta per i Sassi di Matera, un sito patrimonio dell'umanità UNESCO che affascina per la sua storia antica. La regione è caratterizzata da colline e paesaggi mozzafiato, ideali per gli amanti della natura.", img: ""},
    calabria: {desc: "La Calabria vanta una costa spettacolare, con acque cristalline e spiagge incantevoli. La tradizione culinaria è ricca e variegata, con specialità come la 'nduja, un salume piccante che riflette la cultura locale.", img: ""},
    campania: {desc: "La Campania è la patria della pizza napoletana, riconosciuta in tutto il mondo. Oltre a Napoli, la regione offre siti storici come Pompei e la bellezza naturale della Costiera Amalfitana, con i suoi paesaggi da cartolina.", img: ""},
    liguria: {desc: "La Liguria è conosciuta per la sua costiera frastagliata, i pittoreschi borghi di pescatori e il famoso pesto. Le Cinque Terre, con i loro sentieri panoramici, attraggono turisti da tutto il mondo.", img: ""},
    sardegna: {desc: "La Sardegna offre un mix unico di cultura, storia e bellezze naturali. Le sue spiagge di sabbia bianca e acque turchesi sono tra le più belle del mondo, mentre le tradizioni locali sono ricche e vivaci.", img: ""},
}

const popup = document.querySelector(".popup");
const searchBar = document.querySelector(".search input");
const suggestions = document.querySelector(".suggestions");

//**************************************************

viewRegion = (title) => {
    popup.style.display = "flex";
    popup.querySelector("h2").textContent = title[0].toUpperCase() + title.slice(1);
    popup.querySelector("p").innerHTML = regions[title].desc;
    popup.querySelector(".img").style.background = `url(assets/images/${title}.jpg) center/cover no-repeat`;
}

closePopup = () => {
    popup.style.display = "none";
    searchBar.value = "";
    document.querySelectorAll(".region").forEach(region => region.blur())
}

//**************************************************

document.addEventListener('DOMContentLoaded', () => {
    searchBar.value = ''; 
    suggestions.classList.add('hidden'); 
});

document.querySelectorAll(".region").forEach(region => {
    region.addEventListener("click", event => {
      viewRegion(event.currentTarget.attributes[2].value.toLowerCase());
    });
});

document.addEventListener('keydown', (e) => { if(e.key === 'Escape'){ closePopup() }; });
popup.querySelector(".overlay").addEventListener("click", closePopup)

document.addEventListener('input', (e) => {
    const inputValue = searchBar.value.toLowerCase();
    if(inputValue === "") return;
    if(regions[inputValue]) viewRegion(inputValue);
});

//************************************************** 

const updateSuggestions = (inputValue) => {
    const normalizedInput = inputValue.trim().toLowerCase(); 
    suggestions.innerHTML = '';

    if (normalizedInput === "") {
        suggestions.classList.add('hidden'); 
        return;
    }

    const filteredRegions = Object.keys(regions)
        .filter(region => region.startsWith(normalizedInput))
        .concat(Object.keys(regions).filter(region => region.includes(normalizedInput) && !region.startsWith(normalizedInput)));

    const fragment = document.createDocumentFragment();
    filteredRegions.forEach(region => {
        const li = document.createElement('li');
        li.textContent = region[0].toUpperCase() + region.slice(1);
        li.addEventListener('click', () => {
            viewRegion(region);
            suggestions.classList.add('hidden'); 
        });
        fragment.appendChild(li);
    });

    suggestions.appendChild(fragment);

    if (filteredRegions.length > 0) {
        suggestions.classList.remove('hidden'); 
    } else {
        suggestions.classList.add('hidden'); 
    }
};


searchBar.addEventListener('input', (e) => {
    const inputValue = searchBar.value.trim();
    updateSuggestions(inputValue);
}); 

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search')) {
        suggestions.innerHTML = '';
    }
});

searchBar.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        suggestions.innerHTML = ''; 
    }
});
