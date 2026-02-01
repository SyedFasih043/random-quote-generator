
const quoteText = document.getElementById('quote-text');
const nextBtn = document.getElementById('next-btn');
const themeCapsule = document.getElementById('theme-capsule');

//  THE QUOTE
const quotes = [
    "Don’t let your mouth write checks your ass can’t cash.",
    "Karma’s just a slut with a memory.",
    "Don’t put your dick where your brain should be.",
    "Life’s a blowjob—sometimes messy,but atleast you’re good at it.",
    "Don’t let your dick decide your destiny.",
    "Life’s short… fuck it, then nap.",
    "DONT BE A BITCH!!!",
    "Funny how some people earn 45k a month, yet their first question is always: 'So, what are you treating me to?'",
    "Life will fuck you sideways… unless you’re lying down.",
    "Don't destroy your goal for a Hole!",
    "Some people bring happiness wherever they go… others brings E Challan or STD rumors.",
    "Be Good, Karma’s just a fat chick who remembers your face.",
    "Be that fucking penguin who wanted to reach the top of that mountain for no fucking reason at all.",
    "Be like the 6-7 kid—nobody knows why you’re here, not even you.",
    "FK JEWS!",
    "Be the goldfish that judges everyone, because why the fuck not?",
    "Hail Hitler!!!",
    "It was a JOKE.... Not really.",
    "WOSSAP MANIGA",
    "Life’s too short to care if an Asian calculates your debt faster than your bank.."
];

// THE NEXT QUOTE LOGIC
nextBtn.addEventListener('click', () => {
    const randomindex = Math.floor(Math.random() * quotes.length);
    
    quoteText.innerText = quotes[randomindex];
});

//THE THEME TOGGLE LOGIC
themeCapsule.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    console.log("Theme swapped!");
});

function fn () {



    
}