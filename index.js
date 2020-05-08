let ville = 'Conflans-Sainte-Honorine';



let changerVille = document.querySelector('#changer');
changerVille.addEventListener('click', () => {
    ville = prompt('Quelle ville souhaitez-vous voir ?');
    recevoirTemperature(ville)
});

function recevoirTemperature(ville) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=7b09561a2b69b3426d0701d6ab5f0e1b&units=metric';




    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function() {
        if(requete.readyState === XMLHttpRequest.DONE) {
            if(requete.status === 200) {
                let response = requete.response
                // console.log(response);
                temperature = response.main.temp;
                // console.log(temperature);
                document.querySelector('#temperature_label').textContent = temperature;
                let ville = response.name;
                document.querySelector('#ville').textContent = ville;
                // console.log(ville);
            
            }
            else {
                alert('Un problème est survenu, merci de réessayer plutart ! ')
            }
        }
    }
}

