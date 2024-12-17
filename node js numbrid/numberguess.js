const readline = require('readline'); // Kasutaja sisendi jaoks

function numberGuessingGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Juhuslik number 1-100
    let attempts = 9; // Katsete arv

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("Tere tulemast numbrimängu! Arva ära number vahemikus 1 kuni 100.");
    console.log(`Sul on kokku ${attempts} katset.\n`);

    function askGuess() {
        if (attempts > 0) {
            rl.question(`Sisesta oma pakkumine (katseid jäänud: ${attempts}): `, (input) => {
                const guess = parseInt(input);

                if (isNaN(guess)) {
                    console.log("Palun sisesta number!");
                    askGuess(); // Korda küsimust
                    return;
                }

                if (guess === randomNumber) {
                    console.log("Palju õnne! Arvasid numbri ära!");
                    rl.close(); // Lõpeta mäng
                } else if (guess > randomNumber) {
                    console.log("Liiga kõrge! Proovi väiksemat arvu.");
                    attempts--;
                    askGuess();
                } else {
                    console.log("Liiga madal! Proovi suuremat arvu.");
                    attempts--;
                    askGuess();
                }

                if (attempts === 0) {
                    console.log(`Oled kaotanud! Õige number oli ${randomNumber}.`);
                    rl.close();
                }
            });
        }
    }

    askGuess(); // Alusta mängu
}

numberGuessingGame();
