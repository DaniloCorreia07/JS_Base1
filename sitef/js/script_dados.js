// Função para exibir todas as pessoas cadastradas na tabela HTML.
function displayAllDetails() {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = ""; // Limpa o conteúdo atual da tabela.

    // Loop através do array de pessoas cadastradas e cria as linhas da tabela.
    for (let i = 0; i < peopleList.length; i++) {
        const person = peopleList[i];
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell1.textContent = person.firstName;
        cell2.textContent = person.lastName;
        cell3.textContent = person.language;
    }
}