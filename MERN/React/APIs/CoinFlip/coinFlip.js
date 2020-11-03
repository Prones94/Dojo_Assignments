function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

// function fiveHeadsSync() {
//     let headsCount = 0;
//     let attempts = 0;
//     while(headsCount < 5) {
//         attempts++;
//         let result = tossCoin();
//         console.log(`${result} was flipped`);
//         if(result === "heads") {
//             headsCount++;
//         } else {
//             headsCount = 0;
//         }
//     }
//     return `It took ${attempts} tries to flip five "heads"`;
// }

function fiveHeads() {
    return new Promise((resolve, reject) =>{
        let count = 0
        let attempts = 0
        while(count < 5){
            attempts++
            let result = tossCoin()
            if(result === "heads"){
                count++
            } else {
                count = 0
            }
        }
        if(count === 5){
            resolve("heads made it five times in a row!")
        } else if(attempts > 100) {
            reject("Flipped more than 100 tiimes, its broken")
        }
    })
}
console.log( fiveHeads() );
console.log( "This is run after the fiveHeadsSync function completes" );
