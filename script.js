let alunos = [];

function cadastrarAluno() {
    let nome = prompt("Digite o nome do aluno:");
    let idade = parseInt(prompt("Digite a idade do aluno:"));
    let nota = parseFloat(prompt("Digite a nota final do aluno:"));

    let aluno = { nome, idade, nota };
    alunos.push(aluno);
    alert("Aluno cadastrado com sucesso!");
}

function listarAlunos() {
    if (alunos.length === 0) {
        alert("Nenhum aluno cadastrado.");
        return;
    }
    console.log("=== Lista de Alunos ===");
    alunos.forEach(aluno => {
        console.log(`Nome: ${aluno.nome}`);
        console.log(`Idade: ${aluno.idade}`);
        console.log(`Nota: ${aluno.nota}`);
        console.log("----------------------");
    });
}

function listarAprovados() {
    let aprovados = alunos.filter(aluno => aluno.nota >= 6);
    if (aprovados.length === 0) {
        alert("Nenhum aluno aprovado.");
        return;
    }
    console.log("=== Alunos Aprovados ===");
    aprovados.forEach(aluno => {
        console.log(`Nome: ${aluno.nome}, Nota: ${aluno.nota}`);
    });
}

function menu() {
    let opcao;
    do {
        opcao = prompt(
            "MENU:\n1. Cadastrar Aluno\n2. Listar Alunos\n3. Ver Aprovados\n4. Sair\nDigite sua opção:"
        );
        switch (opcao) {
            case "1":
                cadastrarAluno();
                break;
            case "2":
                listarAlunos();
                break;
            case "3":
                listarAprovados();
                break;
            case "4":
                alert("Encerrando o programa...");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    } while (opcao !== "4");
}

// Iniciar o programa ao carregar o script
menu();
