//Reusable Function 1: to add money by id
//id=input ammount of each section
function addMoneyFromSections(id){
    const inputValue = document.getElementById(id).value;
    const donationValue = parseFloat(inputValue);
    // console.log(donationValue);
    return donationValue;
}

//Reusable Function 2: to show this money in section balance
//id = show section balance in the top of the texts
function SectionBalance(id){
    const gettingPrevSectionBalance = document.getElementById(id).innerText;
    const prevSectionBalance = parseFloat(gettingPrevSectionBalance);
    return prevSectionBalance;
}

//Get main balance value in number


//adding fund in Noakhali Donation
const sectionTotalDonationNoakhali = document.getElementById('noakhali-donate-now-btn').addEventListener('click', function(){

    const mainBalance = SectionBalance('main-balance');
    const noakhaliNewDonation = addMoneyFromSections('input-noakhali-donation');
    //validation
    if (isNaN(noakhaliNewDonation) || noakhaliNewDonation > mainBalance || noakhaliNewDonation <=0 ) {
        alert("Please enter a valid ammount in numeric");
        return;
    }

    const noakhaliSectionBalance = SectionBalance('noakhali-donation-balance');
    const noakhaliNewBalance = noakhaliSectionBalance + noakhaliNewDonation;
    const showSectionBalance = document.getElementById('noakhali-donation-balance').innerText = noakhaliNewBalance;

    //decrease in main balance after donation in any section
    // const mainBalance = SectionBalance('main-balance');
    const newMainBalance = mainBalance - noakhaliNewDonation;
    const showNewMainBalance = document.getElementById('main-balance').innerText = newMainBalance;

    //history
    const div = document.createElement('div');
    const date = new Date();
    div.innerHTML = `
    <p class="text-xl m-2 border-2 border-neutral-500 rounded px-3"> ${noakhaliNewDonation} was Donated at ${date} in the Noakhali Flood Donation.</p>
    `
    document.getElementById('history-items').appendChild(div);
    })

//adding fund in Feni Donation
const sectionTotalDonationFeni = document.getElementById('feni-donate-now-btn').addEventListener('click',function(){
    const mainBalance = SectionBalance('main-balance');
    const feniNewDonation = addMoneyFromSections('input-feni-donation');
    //validation
    if (isNaN(feniNewDonation) || feniNewDonation > mainBalance || feniNewDonation <=0 ) {
        alert("Please enter a valid ammount in numeric");
        return;
    }

    const feniSectionBalance = SectionBalance('feni-donation-balance');
    const feniNewBalance = feniSectionBalance + feniNewDonation;
    const showSectionBalance = document.getElementById('feni-donation-balance').innerText = feniNewBalance;

    //decrease in main balance after donation in any section
    const newMainBalance = mainBalance - feniNewDonation;
    const showNewMainBalance = document.getElementById('main-balance').innerText = newMainBalance;
    //history
    const div = document.createElement('div');
    const date = new Date();
    div.innerHTML = `
    <p class="text-xl m-2 border-2 border-neutral-500 rounded px-3"> ${feniNewDonation} was Donated at ${date} in the Feni Flood Donation.</p>
    `
    document.getElementById('history-items').appendChild(div);
    })

//adding fund in Qouta Donation
const sectionTotalDonationQouta = document.getElementById('qouta-donate-now-btn').addEventListener('click', function(){
    const mainBalance = SectionBalance('main-balance');
    const qoutaNewDonation = addMoneyFromSections('input-qouta-donation');
    //validation
    if (isNaN(qoutaNewDonation) || qoutaNewDonation > mainBalance || qoutaNewDonation <=0 ) {
        alert("Please enter a valid ammount in numeric");
        return;
    }
    const qoutaSectionBalance = SectionBalance('qouta-donation-balance');
    const qoutaNewBalance = qoutaSectionBalance + qoutaNewDonation;
    const showSectionBalance = document.getElementById('qouta-donation-balance').innerText = qoutaNewBalance;

    //decrease in main balance after donation in any section
    const newMainBalance = mainBalance - qoutaNewDonation;
    const showNewMainBalance = document.getElementById('main-balance').innerText = newMainBalance;

    const div = document.createElement('div');
    const date = new Date();
    div.innerHTML = `
    <p class="text-xl m-2 border-2 border-neutral-500 rounded px-3"> ${qoutaNewDonation} was Donated at ${date} for Injured in the Quota Movement.</p>
    `
    document.getElementById('history-items').appendChild(div);
    })


