import './nav.js'
import '../css/lista-tarefa.css'

/************************************* adidionar  ELEMENTO**************************************************** */



const inputNovaTarefa = document.querySelector('#input-nova-tarefa')
const btnAdicionar = document.querySelector('#btn-adicionar')
const listaTarefas = document.querySelector ('#lista-tarefas')

btnAdicionar.addEventListener('click', function(){
    let descricaoTarefa = inputNovaTarefa.value
    const li = document.createElement('li')
li.className = 'tarefa'
li.innerHTML = `
<div>${descricaoTarefa}} </div>
<button class="btn-excluir">Excluir</button>
`
listaTarefas.appendChild(li)

})

