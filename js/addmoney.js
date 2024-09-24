//add money by id
//id=input ammount of each section
function addMoneyFromSections(id){
    const inputValue = document.getElementById(id).value;
    const donationValue = parseFloat(inputValue);
    // console.log(donationValue);
    return donationValue;
}

//show this money in section balance
//id = show section balance in the top of the texts
function SectionBalance(id){
    const gettingPrevSectionBalance = document.getElementById(id).innerText;
    const prevSectionBalance = parseFloat(gettingPrevSectionBalance);
    return prevSectionBalance;
}

//adding fund in Noakhali Donation
const sectionTotalDonationNoakhali = document.getElementById('noakhali-donate-now-btn').addEventListener('click',function(){
    const noakhaliNewDonation = addMoneyFromSections('input-noakhali-donation');
    const noakhaliSectionBalance = SectionBalance('noakhali-donation-balance');
    const noakhaliNewBalance = noakhaliSectionBalance + noakhaliNewDonation;
    const showSectionBalance = document.getElementById('noakhali-donation-balance').innerText = noakhaliNewBalance;

    //decrease in main balance after donation in any section
    const mainBalance = SectionBalance('main-balance');
    const newMainBalance = mainBalance - noakhaliNewDonation;
    const showNewMainBalance = document.getElementById('main-balance').innerText = newMainBalance;
    })

//adding fund in Feni Donation
const sectionTotalDonationFeni = document.getElementById('noakhali-donate-now-btn').addEventListener('click',function(){
    const noakhaliNewDonation = addMoneyFromSections('input-noakhali-donation');
    const noakhaliSectionBalance = SectionBalance('noakhali-donation-balance');
    const noakhaliNewBalance = noakhaliSectionBalance + noakhaliNewDonation;
    const showSectionBalance = document.getElementById('noakhali-donation-balance').innerText = noakhaliNewBalance;

    //decrease in main balance after donation in any section
    const mainBalance = SectionBalance('main-balance');
    const newMainBalance = mainBalance - noakhaliNewDonation;
    const showNewMainBalance = document.getElementById('main-balance').innerText = newMainBalance;
    })

//adding fund in Qouta Donation
const sectionTotalDonationQouta = document.getElementById('noakhali-donate-now-btn').addEventListener('click',function(){
    const noakhaliNewDonation = addMoneyFromSections('input-noakhali-donation');
    const noakhaliSectionBalance = SectionBalance('noakhali-donation-balance');
    const noakhaliNewBalance = noakhaliSectionBalance + noakhaliNewDonation;
    const showSectionBalance = document.getElementById('noakhali-donation-balance').innerText = noakhaliNewBalance;

    //decrease in main balance after donation in any section
    const mainBalance = SectionBalance('main-balance');
    const newMainBalance = mainBalance - noakhaliNewDonation;
    const showNewMainBalance = document.getElementById('main-balance').innerText = newMainBalance;
    })


