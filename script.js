fetch('itens.json')
    .then(itens => itens.json())
    .then(json => renderizaItens(json))
    .catch(err => console.error(err));

    function renderizaItens(json) {
        for(itens of json){
            console.log(itens.Nome);
        }
    }