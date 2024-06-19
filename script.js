const form = document.getElementById('form-atividade');
const imgAprov = '<img src="./images/aprovado.png" alt="Emoji festejando">'
const imgreprov = '<img src="./images/reprovado.png" alt="Emoji Decepcionado">'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite a Nota media"))
let linhas  = ''
form.addEventListener('submit',function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    mediafinal();
});

function adicionaLinha(){

    const inputNomeDaAtividade = document.getElementById('nome-atividade')
    const inputNotaDaAtividade = document.getElementById('nota-atividade')
    
    if(atividades.includes(inputNomeDaAtividade.value)){
        alert(`A atividade: ${inputNomeDaAtividade.value}, já foi inserida!`)
    }
    else{
        atividades.push(inputNomeDaAtividade.value)
        notas.push(parseFloat(inputNotaDaAtividade.value))
        let linha = '<tr>'
        linha += `<td>${inputNomeDaAtividade.value}</td>`
        linha += `<td>${inputNotaDaAtividade.value}</td>` 
        linha += `<td>${inputNotaDaAtividade.value >= notaMinima ? imgAprov : imgreprov}</td>` 
        linha += `</tr>` 
        linhas += linha
    }

    inputNomeDaAtividade.value = ''
    inputNotaDaAtividade.value = ''
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas    
    const mediaFinalValor = mediafinal();
    document.getElementById('media-final').innerHTML = mediaFinalValor;
    document.getElementById('media-final-resultado').innerHTML = mediaFinalValor >= notaMinima ? spanAprovado : spanReprovado;
    
}

function mediafinal(){
    let somaDasNotas = 0
    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }
    return somaDasNotas/notas.length
}
