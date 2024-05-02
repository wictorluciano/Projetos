using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hello_World.Models
{
    public class Venda
    {
        //Constructor
        public Venda(int id, DateTime dataVenda, string produto, decimal preco)
        {
            Id = id;
            DataVenda = dataVenda;
            Produto = produto;
            Preco = preco;
        }

        public int Id { get; set; }
        public DateTime DataVenda { get; set; }
        public string Produto { get; set; }
        public decimal Preco { get; set; }
    }
}