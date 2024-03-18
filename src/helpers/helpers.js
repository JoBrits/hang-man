// helper function to set showNotification to true and after 2sec sets back to false
export function showNotification (setter) {
    setter(true);
    setTimeout(() => {
        setter(false);
    }, 2000);
}

// Helper function to check if user has won or lost
export function checkWin (correct, wrong, word) {
    let status = 'win';

    // check for win
    word.split('').forEach(letter => {
        // if user letters do not include letters from the word  
        if(!correct.includes(letter)){
            status = '';
        }
    });

    // check for loss
    // only have 6 chances
    if(wrong.length === 6 ) status = 'lose'

    console.log(status);
    return status;
}