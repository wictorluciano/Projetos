using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ZDZTesteAPI.Model
{
    public class Consulta
    {
        public int Id { get; set; }
        public DateTime DataHorario { get; set; }

        public decimal Valor { get; set; }
        // public List<Medico> Medicos { get; set; }
        // public List<Especialidade> Especialidades { get; set; }
        // public List<Paciente> Pacientes { get; set; }
        public int MedicoId { get; set; }
        public Medico Medico { get; set; }
        public int EspecialidadeId { get; set; }
        public Especialidade Especialidade { get; set; }
        public int PacienteId { get; set; }
        public Paciente Paciente { get; set; }
    }
}