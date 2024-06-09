using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ZDZTesteAPI.Context;
using ZDZTesteAPI.Model;
using ZDZTesteAPI.Model.DTOs;

namespace ZDZTesteAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ConsultaController : ControllerBase
    {
        private readonly ConsultaContext _context;

        public ConsultaController(ConsultaContext consultaContext)
        {
            _context = consultaContext;
        }

        [HttpGet("{id}")]
        public IActionResult GetConsultaById(int id)
        {
            var consultaDb = _context.Consultas.Find(id);

            if(consultaDb == null)
                return NotFound();

            return Ok(consultaDb);
        }

        [HttpGet("ListarConsultas")]
        public IActionResult GetAllConsulta()
        {
            var consultaDb = _context.Consultas
                .Include(x => x.Medico)
                .Include(x => x.Especialidade)
                .Include(x => x.Paciente)
                .ToList();

            List<ConsultaIdDTO> consultaIdDTO = new List<ConsultaIdDTO>();

            foreach (var consulta in consultaDb)
            {
                consultaIdDTO.Add( new ConsultaIdDTO
                {
                    Id = consulta.Id,
                    DataHorario = consulta.DataHorario,
                    Valor = consulta.Valor,
                    
                    Medicos = new List<MedicoDTO>
                    {
                        new MedicoDTO
                        {
                            Crm = consulta.Medico.Crm,
                            Nome = consulta.Medico.Nome,
                            Descricao = consulta.Medico.Descricao,
                        }
                    },
                    Especialidades = new List<EspecialidadeDTO>
                    {
                        new EspecialidadeDTO 
                        {
                            Nome = consulta.Especialidade.Nome  
                        }
                    },
                    Pacientes = new List<PacienteDTO> 
                    {
                        new PacienteDTO
                        {
                            Nome = consulta.Paciente.Nome,
                            Email = consulta.Paciente.Email,
                            Telefone = consulta.Paciente.Telefone
                        }
                    }
                });   
            }

            return Ok(consultaIdDTO);
        }
        
        [HttpPost]
        public IActionResult Create(ConsultaDTO consulta)
        {
            var consultaDb = new Consulta
            {
                    DataHorario = consulta.DataHorario,
                    Valor = consulta.Valor,
                    PacienteId = consulta.PacienteId,
                    MedicoId = consulta.MedicoId,
                    EspecialidadeId = consulta.EspecialidadeId
            };

            _context.Consultas.Add(consultaDb);
            _context.SaveChanges();

            return Ok(consultaDb);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, ConsultaDTO consulta)
        {
            var consultaDb = _context.Consultas.Find(id);

            if (consultaDb == null)
                return NotFound();

            consultaDb.DataHorario = consulta.DataHorario;
            consultaDb.Valor = consulta.Valor;
            consultaDb.PacienteId = consulta.PacienteId;
            consultaDb.MedicoId = consulta.MedicoId;
            consultaDb.EspecialidadeId = consulta.EspecialidadeId;

            _context.Consultas.Update(consultaDb);
            _context.SaveChanges();

            return Ok(consultaDb);
        }

        [HttpDelete("{id}")]
        public IActionResult Remove(int id)
        {
            var consultaDb = _context.Consultas.Find(id);

            if(consultaDb == null)
                return NotFound();

            _context.Consultas.Remove(consultaDb);
            _context.SaveChanges();
            
            return NoContent();
        }
    }
}