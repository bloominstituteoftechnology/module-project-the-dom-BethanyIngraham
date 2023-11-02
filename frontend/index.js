

function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
   const widgets = document.querySelectorAll('section div');
   widgets.forEach(widget => widget.classList.add('widget'));

  // 👉 TASK 2 - Build a "Quote of the Day" widget
 const randomIndex = Math.floor(Math.random() * quotes.length);//eslint-disable-line
 const randomQuote = quotes[randomIndex];//eslint-disable-line
 // flesh out quote
 const quote = document.createElement('div');
 const quoteText = randomQuote.quote;
 quote.textContent = quoteText;
 const widget1 = document.querySelector('.quoteoftheday');
 widget1.appendChild(quote);
 // flesh out author and date
 const authorDate = document.createElement('div');
 const {author, date} = randomQuote; //deconstruction
 authorDate.textContent = `${author} in ${date || ' an unknown date'}`;
 widget1.appendChild(authorDate);

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  // adverbs, nouns, verbs arrays
  const adverb1 = adverbs[Math.floor(Math.random() * adverbs.length)];//eslint-disable-line
  const adverb2 = adverbs[Math.floor(Math.random() * adverbs.length)];//eslint-disable-line
  const noun1   = nouns[Math.floor(Math.random() * nouns.length)];//eslint-disable-line
  const noun2   = nouns[Math.floor(Math.random() * nouns.length)];//eslint-disable-line
  const verb1   = verbs[Math.floor(Math.random() * verbs.length)];//eslint-disable-line
  const verb2   = verbs[Math.floor(Math.random() * verbs.length)];//eslint-disable-line


  const word1 = adverb1;
  const word2 = adverb2;
  const word3 = noun1;
  const word4 = noun2;
  const word5 = verb1;
  const word6 = verb2;
  
  const corpWord = document.createElement('p');
  corpWord.textContent = `We need to ${word5} our ${word3} ${word1} in order to ${word6} our ${word4} ${word2}.`;
  const widget2 = document.querySelector('.corporatespeak');
  widget2.appendChild(corpWord);


  // 👉 TASK 4 - Build a "Countdown" widget
  const countdownWidget = document.querySelector('.countdown');
  let count = 5;
  const countdown = document.createElement('p');
  countdown.textContent = `T-minus ${count}...`;
  countdownWidget.appendChild(countdown);
  const id = setInterval(() => {
    if(count === 1){
      countdown.textContent = 'Liftoff! 🚀'
      clearInterval(id)
    }else{
      countdown.textContent = `T-minus ${--count}...`
    }
  }, 1000);

  // 👉 TASK 5 - Build a "Friends" widget
  const person = people[Math.floor(Math.random() * people.length)]; //eslint-disable-line
  const personParagraph = document.createElement('p');
  document.querySelector('.friends').appendChild(personParagraph);

  const year = person.dateOfBirth.split('-')[0]

  let sentence = `${person.fname} ${person.lname} was born in ${year} and `

  if(!person.friends.length){
    sentence += 'has no friends.'
  } else {
    sentence += 'is friends with '
    for(let idx = 0; idx < person.friends.length; idx++){
      const friendId = person.friends[idx]
      const friend = people.find(p => p.id === friendId) //eslint-disable-line
      const fullName = `${friend.fname} ${friend.lname}`
      
      let isLastIdx = idx === person.friends.length - 1;
      let isNextToLastIdx = idx === person.friends.length - 2;
      if(isLastIdx){
        sentence += `${fullName}.` // period
      }else if(isNextToLastIdx){
        sentence += `${fullName} and ` // and
      }else{
        sentence += `${fullName}, ` // comma
      }
    }
  }
personParagraph.textContent = sentence;


  // 👉 TASK 6 - Make it so user can tab through the widgets
  widgets.forEach((widget,idx) => {
    widget.setAttribute('tabindex', idx + 1 + '')
  });
  

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
