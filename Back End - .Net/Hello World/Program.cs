using Hello_World.Models;

Pessoa p1 = new Pessoa(nome: "Wictor", sobrenome: "Luciano");

Pessoa p2 = new Pessoa(nome: "Andreia", sobrenome: "Brocas");

Curso ingles = new Curso();
ingles.Nome = "Inglês";
ingles.Alunos = new List<Pessoa>();

ingles.AdicionarAluno(p1);
ingles.AdicionarAluno(p2);
ingles.ListarAlunos();