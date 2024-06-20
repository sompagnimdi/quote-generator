const quotes = [
    "The only way to do great work is to love what you do.",
"Believe you can and you're halfway there.",
"Success is not final, failure is not fatal: It is the courage to continue that counts.",
"Your time is limited, don't waste it living someone else's life.",
"Don't watch the clock; do what it does. Keep going.", "Nous sommes dans un monde de predation et pour avoir la paix il faut faire la guerre. IB",
"The future belongs to those who believe in the beauty of their dreams.",
"It does not matter how slowly you go as long as you do not stop.",
"You are never too old to set another goal or to dream a new dream.",
"Act as if what you do makes a difference. It does.",
"The best way to predict your future is to create it.",
"Empowerment isn't about giving people power. It's about unblocking the power they already have.",

"The best way to predict the future is to create it.",

"When people are financially invested, they want a return. When people are emotionally invested, they want to contribute.",

"The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.",

"Don't micromanage. Empower your people to make decisions.",

"An empowered organization is one in which individuals have the knowledge, skill, desire, and opportunity to personally succeed in a way that leads to collective organizational success.",

"Leadership is not about being in charge. It is about taking care of those in your charge.",

"You don't build a business—you build people—and then people build the business.",

"The only way to do great work is to love what you do.",

"To handle yourself, use your head; to handle others, use your heart.",
"The best relationships are the ones where you both help each other to become better people.",

"Empowered women empower women.",

"A healthy relationship is one where both people feel heard, valued, and respected.", "The greatest gift you can give is love"

];

const usedIndexes = new Set()
const quoteElement = document.getElementById('quote')

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }
    while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length)

    if (usedIndexes.has(randomIdx)) continue
    const quote = quotes [randomIdx] 
    quoteElement.innerHTML = quote,
    usedIndexes.add(random)
    break
}
}
