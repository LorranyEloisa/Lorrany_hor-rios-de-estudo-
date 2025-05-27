const agendaCorpo = document.getElementById('agenda-corpo');
const form = document.getElementById('form-tarefa');
const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

const horarios = [
  "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00"
];

function salvarTarefas() {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function criarTabela() {
  agendaCorpo.innerHTML = '';
  horarios.forEach(hora => {
    const tr = document.createElement('tr');

    const tdHora = document.createElement('td');
    tdHora.textContent = hora;
    tr.appendChild(tdHora);

    for (let dia = 1; dia <= 7; dia++) {
      const td = document.createElement('td');
      const tarefasDoHorario = tarefas.filter(t => t.dia === dia && t.hora === hora);
      tarefasDoHorario.forEach(tarefa => {
        const div = document.createElement('div');
        div.className = `task ${tarefa.prioridade}`;
        div.textContent = tarefa.descricao;

        const btnDel = document.createElement('button');
        btnDel.textContent = '×';
        btnDel.className = 'delete';
        btnDel.onclick = () => {
          const index = tarefas.indexOf(tarefa);
          tarefas.splice(index, 1);
          salvarTarefas();
          criarTabela();
        };

        div.appendChild(btnDel);
        td.appendChild(div);
      });
      tr.appendChild(td);
    }

    agendaCorpo.appendChild(tr);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const dia = parseInt(document.getElementById('dia').value);
  const hora = document.getElementById('hora').value;
  const descricao = document.getElementById('descricao').value.trim();
  const prioridade = document.getElementById('prioridade').value;

  if (!descricao) return;

  tarefas.push({ dia, hora, descricao, prioridade });
  salvarTarefas();
  criarTabela();
  form.reset();
});

criarTabela();
