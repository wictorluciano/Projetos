using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ZDZTesteAPI.Model
{
    public class Especialidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public List<Medico> Medicos { get; set; }
        public List<Consulta> Consultas { get; set; }
    }
}