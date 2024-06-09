using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ZDZTesteAPI.Model.DTOs
{
    public class ConsultaDTO
    {
        public DateTime DataHorario { get; set; }

        public decimal Valor { get; set; }
        public int PacienteId { get; set; }
        public int MedicoId { get; set; }
        public int EspecialidadeId { get; set; }
    }
}