using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hello_World.Models
{
    public class Pessoa
    {
        public Pessoa()
        {

        }
        public Pessoa(string nome, string sobrenome)
        {
            Nome = nome;
            Sobrenome = sobrenome;
        }

        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public int Idade { get; set; }
        public string NomeCompleto => $"{Nome} {Sobrenome}";

        public void Apresentar()
        {
            Console.WriteLine($"Olá, meu nome é {NomeCompleto} e tenho {Idade} anos.");
        }
    }
}