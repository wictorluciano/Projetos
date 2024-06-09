using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ZDZTesteAPI.Model
{
    public class MedicoEspecialidade
    {
        public int MedicoId { get; set; }
        public Medico Medico { get; set; }
        
        public int EspecialidadeId { get; set; }
        public Especialidade Especialidade { get; set; }
    }
}