const height = document.getElementById('height')
const weight = document.getElementById('weight')
const button = document.getElementById('button')
const result = document.getElementById('result')
button.addEventListener('click', clique)
function clique (){
    const h = Number(height.value);
    const w = Number(weight.value);
    const s = (w /(h * h)).toFixed(2);
    document.getElementById('result').classList.remove('hidden')
    if (s < 18.5){

        result.innerHTML = 'Abaixo do Peso! Seu IMC é de '+ s;

            }
            else if ( s >= 18.5 && s <24.9){
                result.innerHTML = 'Peso Normal! Seu IMC é de '+ s;
                
            }
            else if (s >= 25 && s < 29.9){
                result.innerHTML =  'Você esta Sobrepeso! Seu IMC é de '+ s
            }
            else {
                result.innerHTML = ' Você está obeso! Seu IMC é de '+ s
            }
        }
            
        

