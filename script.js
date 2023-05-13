fetch('itens.json')
    .then(itens => itens.json())
    .then(json => renderizaItens(json))
    .catch(err => console.log(err));

const brunch = document.querySelector('.brunch');
const drinks = document.querySelector('.drinks');
 
function renderizaItens(json) {
    let li = document.createElement('li');
   
    for(let i = 0; i<json.length; i++) {
         console.log(json[i].Nome);
   
            li = document.createElement('li')
            const details = document.createElement('div');
                details.classList.add('details');
            const price = document.createElement('strong');
                price.classList.add('price');

            details.innerHTML += `<h3>${json[i].Name}</h3> <p class="description">${json[i].Description}<p/>`
            price.innerHTML = `R$${json[i].Cost.toFixed(2)}`;
            li.appendChild(details);
            li.appendChild(price);

            if(json[i].isFood === true)  brunch.appendChild(li);
            if(json[i].isDrink === true) drinks.appendChild(li);

            if(json[i].isAvaliable === false) {
                li.classList.add('no-avaliable');
                price.innerHTML = 'out of stock';
            }
        

    }
    
           
}

    