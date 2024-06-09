using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ZDZTesteAPI.Model.DTOs
{
    public class ConsultaIdDTO
    {
        public int Id { get; set; }
        public DateTime DataHorario { get; set; }

        public decimal Valor { get; set; }
        public List<MedicoDTO> Medicos { get; set; }
        public List<EspecialidadeDTO> Especialidades { get; set; }
        public List<PacienteDTO> Pacientes { get; set; }
    }
}