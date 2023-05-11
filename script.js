fetch('itens.json')
    .then(itens => itens.json())
    .then(json => renderizaItens(json))
    .catch(err => console.error(err));

    const brunch = document.querySelector('.brunch');
    const details = document.querySelector('.details');
   
    function renderizaItens(json) {
        for(itens of json){
            const li = document.createElement('li');
            li.appendChild(details);
            details.innerHTML = `<h3>${itens.Nome}</h3> <p class="description">${itens.Descricao}<p/>`
            li.innerHTML += `<strong class="price"> R$${itens.Preco.toFixed(2)} </strong>`;

            brunch.appendChild(li);


        }
    }