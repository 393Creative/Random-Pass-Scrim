const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById("pass-elOne")
let passTwo = document.getElementById("pass-elTwo")
let passLength = 12

function getRandomPass()  {
    let randomPass = Math.floor(Math.random() * characters.length)
    return characters[randomPass]
}

function generatePass() {
    let randomPassword = ""
    for (let i = 0; i < passLength; i++){
        randomPassword += getRandomPass()
    }
    return randomPassword
}


function pass()  {
    const genPassOne = generatePass()
    const genPassTwo = generatePass()
    passOne.textContent = genPassOne
    passTwo.textContent = genPassTwo
}









let interval = null;

document.getElementById('one-el').onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((character, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return characters[Math.floor(Math.random() * characters.length)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 5;
  }, 15);
}

document.getElementById('two-el').onmouseover = event => {  
    
    let iteration = 0;
    
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((character, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return characters[Math.floor(Math.random() * characters.length)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 5;

      
    }, 20);
    
  }
  
  