function criarTabela(produtos) {
            document.getElementById("lista").innerHTML = "";
            const table = document.createElement("table");
            table.setAttribute("border", "1");

            const row = document.createElement("tr");
            const td3 = document.createElement("th");
            td3.textContent = 'Nome';
            row.appendChild(td3);
            table.appendChild(row);
        
         }
for (const produto of produtos) {
                const rowDados = document.createElement("tr");
                const tdNome = document.createElement("td");
                tdNome.textContent = produto.nome
                rowDados.appendChild(tdNome)
                table.appendChild(rowDados)
            }
 if (document.getElementById('nome').value == '') {
                alert('Nome inválido');
                return
            }
 const dadosInsert = {
    nome: document.getElementById('nome').value,
 }
 