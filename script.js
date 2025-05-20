function adicionarEstudo() {
    const disciplina = document.getElementById("disciplina").value;
    const dia = document.getElementById("dia").value;
    const hora = document.getElementById("hora").value;
    const prioridade = document.getElementById("prioridade").value;

    if (!disciplina || !dia || !hora) {
        alert("Preencha todos os campos.");
        return;
    }

    const tabela = document.getElementById("tabelaEstudos").querySelector("tbody");
    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${disciplina}</td>
        <td>${dia}</td>
        <td>${hora}</td>
        <td class="${prioridade}">${prioridade.charAt(0).toUpperCase() + prioridade.slice(1)}</td>
    `;

    tabela.appendChild(linha);

    document.getElementById("disciplina").value = "";
    document.getElementById("dia").value = "";
    document.getElementById("hora").value = "";
    document.getElementById("prioridade").value = "low";
}
