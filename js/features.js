//adding toggle : show sections by clicking
document.getElementById('show-donation').addEventListener('click', function(){
    showSectionById('donation-section');
    //colorToggle
    //adds bgColor
    const btnDonation = document.getElementById('show-donation');
    btnDonation.classList.add('bg-lime-400')
    //removes bgColor
    const btnHistory = document.getElementById('show-history');
    btnHistory.classList.remove('bg-lime-400')
})

document.getElementById('show-history').addEventListener('click', function(){
    showSectionById('history-section');
    //adds bgColor
    const btnHistory = document.getElementById('show-history');
    btnHistory.classList.add('bg-lime-400')
    
    //removes bgColor
    const btnDonation = document.getElementById('show-donation');
    btnDonation.classList.remove('bg-lime-400');

    
})


