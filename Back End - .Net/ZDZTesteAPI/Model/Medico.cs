using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ZDZTesteAPI.Model
{
    public class Medico
    {
        public int Id { get; set; }
        public string Crm { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public List<Consulta> Consultas { get; set ;}
        public List<Especialidade> Especialidades { get; set ;}
    }
}