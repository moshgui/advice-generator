const button = document.querySelector('button');
const h3 = document.querySelector('h3');
const p = document.querySelector('p');

button.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
      .then((result) => result.json())
      .then((data) => {
        h3.innerHTML = `ADVICE #${data.slip.id}`;
        p.innerHTML = `"${data.slip.advice}"`;        
      });
});