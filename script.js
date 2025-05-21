const scheduleBody = document.getElementById('schedule-body');
const form = document.getElementById('task-form');

// Gera os horários da tabela
const horarios = [
  "07:00", "07:30", "08:00", "08:30",
  "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00"
];

function criarTabela() {
  horarios.forEach((horario, i) => {
    const row = document.createElement('tr');
    const horaTd = document.createElement('td');
    horaTd.textContent = horario;
    row.appendChild(horaTd);

    for (let dia = 1; dia <= 7; dia++) {
      const td = document.createElement('td');
      td.setAttribute('data-dia', dia);
      td.setAttribute('data-hora', horario);
      row.appendChild(td);
    }

    scheduleBody.appendChild(row);
  });
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const dia = document.getElementById('dia').value;
  const hora = document.getElementById('hora').value;
  const descricao = document.getElementById('descricao').value;
  const prioridade = document.getElementById('prioridade').value;

  const cell = document.querySelector(`td[data-dia="${dia}"][data-hora="${hora}"]`);

  if (cell) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.classList.add(prioridade.toLowerCase());
    taskDiv.textContent = descricao;

    if (prioridade === "alta") taskDiv.style.backgroundColor = "#d9534f";
    else if (prioridade === "media") taskDiv.style.backgroundColor = "#f0ad4e";
    else taskDiv.style.backgroundColor = "#5bc0de";

    cell.appendChild(taskDiv);
    form.reset();
  } else {
    alert("Horário inválido!");
  }
});

criarTabela();
