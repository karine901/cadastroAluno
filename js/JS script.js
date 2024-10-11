
let alunos = [];
 

document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const matricula = document.getElementById("matricula").value;
    const nome = document.getElementById("nome").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const curso = document.getElementById("curso").value;
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
 
    const aluno = {
        matricula: parseInt(matricula),
        nome: nome,
        dataNascimento: dataNascimento,
        curso: curso,
        sexo: sexo
    };
 
    alunos.push(aluno);
    alert("Aluno cadastrado com sucesso!");
    
  
    document.getElementById("cadastroForm").reset();
});
 

function filtrarFeminino() {
    const resultado = alunos.filter(aluno => aluno.sexo === "Feminino");
    mostrarResultados(resultado);
}

function filtrarMasculinoInformatica() {
    const resultado = alunos.filter(aluno => aluno.sexo === "Masculino" && aluno.curso === "Informática");
    mostrarResultados(resultado);
}
 

function filtrarMatriculaSuperior() {
    const resultado = alunos.filter(aluno => aluno.matricula > 100);
    mostrarResultados(resultado);
}
 

function mostrarResultados(resultado) {
    const lista = document.getElementById("resultadoPesquisa");
    lista.innerHTML = ""; 
 
    if (resultado.length === 0) {
        lista.innerHTML = "<li>Nenhum aluno encontrado.</li>";
    } else {
        resultado.forEach(aluno => {
            const item = document.createElement("li");
            item.textContent = `Matrícula: ${aluno.matricula}, Nome: ${aluno.nome}, Curso: ${aluno.curso}, Sexo: ${aluno.sexo}`;
            lista.appendChild(item);
        });
    }
}
 