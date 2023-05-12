fetch('itens.json')
    .then(itens => itens.json())
    .then(json => renderizaItens(json))
    .catch(err => console.error(err));

    const brunch = document.querySelector('.brunch');
    const bebidas = document.querySelector('.drinks');
    const details = document.createElement('div');
    details.classList.add('details');
    const price = document.createElement('strong');
    price.classList.add('price');
   
    function renderizaItens(json) {
        for(itens of json){
           Object.keys(itens).forEach((item) => {
            console.log(item);
           })

        //    const li = document.createElement('li');
        //    const ul = document.createElement('ul')
        //    li.appendChild(details);
        //    li.appendChild(price);
        //    details.innerHTML += `<h3>${itens.Nome}</h3> <p class="description">${itens.Descricao}<p/>`
        //    price.innerHTML += 'R$5.00';
           

        //    if(itens.Disponivel === false) {
        //        li.classList.add('no-avaliable');
        //        price.innerHTML = 'out of stock';
        //    }
        //    brunch.appendChild(li);
           
           


        }
    }