function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/imgs/icons-coutrys.svg/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/imgs/icons-coutrys.svg/icon-${player2}.svg" alt="Bandeira do ${player2}">
        </li>
    `
}

function createCard(date, day, games) {
    return `
    <div class="card">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
} 
document.querySelector("#app").innerHTML = `
    <header>
        <img src="./assets/imgs/logo.svg" alt="Logo da NLW Copa Calendario">
    </header>
    <main id="cards">
        ${createCard('24/11', 'quinta',
            createGame("switzerland","7:00","cameroon")+
            createGame("uruguay","10:00","southkorea")+
            createGame("portugal","11:00","ghana")+
            createGame("brazil","16:00","serbia"))
        }
        ${createCard('28/11', 'segunda',
            createGame("cameroon","7:00","serbia")+
            createGame("southkorea","10:00","ghana")+
            createGame("brazil","13:00","switzerland")+
            createGame("portugal","16:00","uruguay"))
        }
        ${createCard('02/12', 'sexta',
            createGame("southkorea","12:00","portugal")+
            createGame("ghana","12:00","uruguay")+
            createGame("serbia","16:00","switzerland")+
            createGame("cameroon","16:00","brazil"))
        }
    </main>
    `