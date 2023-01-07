function getWeekNumber(timestamp) {
    //Fonction générée par GPT-3
    // Récupérer la date correspondant au timestamp
    var date = new Date(timestamp);

    // Récupérer le premier jour de l'année
    var firstDayOfYear = new Date(date.getFullYear(), 0, 1);

    // Calculer le nombre de jours écoulés depuis le premier jour de l'année
    var elapsedDays = (date - firstDayOfYear) / 86400000;

    // Récupérer le jour de la semaine du premier jour de l'année (0 = dimanche, 1 = lundi, etc.)
    var firstDayOfYearWeekday = firstDayOfYear.getDay();

    // Calculer le numéro de la semaine en ajoutant 1 au résultat du calcul
    // (puisque le premier jour de l'année peut être dans la semaine précédente)
    var weekNumber = Math.ceil((elapsedDays + firstDayOfYearWeekday) / 7);

    return weekNumber;
}

function addCard(container, date) {
    //Fonction générée par GPT-3

    // Créer un nouvel élément div
    var card = document.createElement('div');

    // Ajouter la classe "card shadow-1 hoverable-1 rounded-3" à l'élément div
    card.classList.add('card', 'shadow-1', 'hoverable-1', 'rounded-3', 'my-4', 'mx-4', 'white');

    // Créer un nouvel élément div pour le contenu
    var cardContent = document.createElement('div');

    // Ajouter la classe "card-content" à l'élément div
    cardContent.classList.add('card-content');

    // Ajouter le texte "2 Janvier - 6 Janvier" à l'élément div
    cardContent.textContent = date;

    // Ajouter l'élément div du contenu à l'élément div de la carte
    card.appendChild(cardContent);

    // Ajouter la carte à l'élément sélectionné
    container.appendChild(card);
}

function getDateFromTimestamp(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.toLocaleString('fr', {month: 'long'});
    return `${day} ${month}`;
}


function addTabs(href, date, color) {


    var tabs = document.createElement('li');
    tabs.classList.add('tab-link', color);
    tabs.setAttribute("id", href + "d");
    var link = document.createElement('a');
    link.setAttribute("href", href);
    link.setAttribute("id", href + "dd");

    link.textContent = date;
    tabs.appendChild(link);
    var liste = document.querySelector('.tab-menu');

    liste.appendChild(tabs);

}

function addTabsItems() {
    var holyday = [1672055745000, 1676289345000, 1681127745000];
    var dateDeb = 1669636545000;
    var dateFin = dateDeb + 4 * 24 * 60 * 60 * 1000;
    for (let j = 1; j < 26; j++) {
        if (!(holyday.includes(dateDeb))) {
            var date = getDateFromTimestamp(dateDeb) + " - " + getDateFromTimestamp(dateFin);


            if (dateFin < Date.now()) {
                var color = 'amaranth';
            }
            if (dateDeb > Date.now()) {
                var color = "airforce";
            }
            if (dateFin - 1 * 7 * 24 * 60 * 60 * 1000 < Date.now() && dateDeb > Date.now()) {
                var color = 'viride';

            }
            addTabs("#tab" + j, date, color)
            var tab = document.createElement("div");
            tab.setAttribute("id", "tab" + j);

            var edt = document.createElement("img");
            edt.setAttribute("src", "edt/1A_complet-" + (j < 10 ? '0' : '') + j + ".png");
            edt.classList.add('edt');
            tab.appendChild(edt);
            var tabs = document.querySelector('#tab');
            tabs.appendChild(tab);
            dateDeb += 7 * 24 * 60 * 60 * 1000
            dateFin = dateDeb + 4 * 24 * 60 * 60 * 1000

        } else {
            dateDeb += 1 * 7 * 24 * 60 * 60 * 1000
            dateFin = dateDeb + 4 * 24 * 60 * 60 * 1000
            j = j - 1
        }

    }


}


