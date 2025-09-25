// Menu responsive ou interactions simples
document.addEventListener('DOMContentLoaded', () => {
    console.log("EcoGel website loaded");
});

function calculate() {
    const time = parseFloat(document.getElementById("time").value);
    const drink = document.getElementById("drink").value;

    if (isNaN(time) || time <= 0) {
    document.getElementById("result").innerHTML = "<p style='color:red'>Veuillez entrer un temps valide.</p>";
    return;
    }

    let carbsPerHour = 0;
    let gels = 0;
    let recommendations = "";
    let category = "";

    if (time < 2) {
    // Endurance "courte"
    carbsPerHour = 60;
    gels = Math.ceil(time * (60/70));
    category = "Endurance courte";
    } else if (time < 7) {
    // Endurance "longue"
    carbsPerHour = 90;
    if (drink === "oui") {
        gels = Math.ceil(time * (60/70)); // 1 gel par heure si boissons énergétiques
    } else {
        gels = Math.ceil(time * (90/70)); // 1 gel toutes les 45 min
    }
    category = "Endurance longue";
    } else {
    // Endurance "très longue"
    carbsPerHour = 90;
    gels = Math.ceil(time * (60/70)); // rythme 1 gel par heure
    recommendations = "        <h4>Votre course est particulièrement longue, voici quelques conseils supplémentiares :</h4><li>Pensez à alternez le sucré avec du salé (par exemple du gâteau de riz, barres salées, etc.) cela évite l'ecoeurement et vous permet de continuer à bien s'alimenter au fil des heures</li><li>Buvez régulièrement des boissons énergétique (en alternant avec de l'eau)</li>";
    category = "Ultra Endurance";
    }

    document.getElementById("result").innerHTML = `
    <h2>Résultats</h2>
    <p>Catégorie :<strong> ${category}</strong></p>
    <p>Besoins énergétiques estimés :<strong> ${carbsPerHour} g de glucides/heure</strong></p>
    <p>Nombre de gels EcoGel recommandés :<strong> ${gels} gels</strong></p>
    <h3>Recommandations :</h3>
    <ul>
        <h4>Ce calculateur effectue une simple estimation, pour vous guider !</h4>
        <li>Basé sur les recommandations scientifiques, il faut environ 60g de glucides par heure pour efforts d'endurance de moins de 2h. Ainsi que 90 g/h pour efforts plus longs.</li>
        <li>Ces recommandations sont généralisées, en vérité chacun s'alimente de la manière qui lui convient le mieux. C'est pour ça qu'il faut que vous testiez votre stratégie de nutrition à l'entraînement, afin de trouver les quantités et les goûts qui vous conviennent le mieux.</li>
        <li>Un gel EcoGel (100ml) contient ~70 g de glucides.</li>
        ${recommendations}
    </ul>
    <p></p>
    <button onclick="location.href='products.html'">Découvrir nos produits</button>
    `;
}