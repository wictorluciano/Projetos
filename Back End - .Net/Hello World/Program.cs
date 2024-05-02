using Hello_World.Models;
using Newtonsoft.Json;



string caminho = File.ReadAllText("Arquivos/vendas.json");

List<Venda> vendas = JsonConvert.DeserializeObject<List<Venda>>(caminho);

    foreach (var venda in vendas)
    {
        Console.WriteLine($"Id: {venda.Id}, Produto: {venda.Produto}");
    }















// DateTime hoje = DateTime.Now;

// List<Venda> vendas_04_2024 = new List<Venda>();

// Venda venda_01 = new Venda(1, hoje, "Caneta cx", 10.50M);
// Venda venda_02 = new Venda(1, hoje, "Lapis cx", 5.00M);

// vendas_04_2024.Add(venda_01);
// vendas_04_2024.Add(venda_02);

// string serializado = JsonConvert.SerializeObject(vendas_04_2024, Formatting.Indented);

// File.WriteAllText("Arquivos/vendas.json", serializado);

// Console.WriteLine(serializado);






















// Pessoa p1 = new Pessoa(nome: "Wictor", sobrenome: "Luciano");

// Pessoa p2 = new Pessoa(nome: "Andreia", sobrenome: "Brocas");

// Curso ingles = new Curso();
// ingles.Nome = "Inglês";
// ingles.Alunos = new List<Pessoa>();

// ingles.AdicionarAluno(p1);
// ingles.AdicionarAluno(p2);
// ingles.ListarAlunos();