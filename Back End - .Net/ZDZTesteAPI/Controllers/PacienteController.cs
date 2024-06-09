using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ZDZTesteAPI.Context;
using ZDZTesteAPI.Model;
using ZDZTesteAPI.Model.DTOs;

namespace ZDZTesteAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PacienteController : ControllerBase
    {
        private readonly ConsultaContext _context;
        public PacienteController(ConsultaContext consultaContext)
        {
            _context = consultaContext;
        }

        [HttpGet("{id}")]
        public IActionResult GetPacienteById(int id)
        {
            var pacienteDb = _context.Pacientes.Find(id);

            if(pacienteDb == null)
                return NotFound();

            return Ok(pacienteDb);
        }

        [HttpGet("ListarPacientes")]
        public IActionResult GetAllPaciente()
        {
            var pacienteDb = _context.Pacientes.ToList();

            List<PacienteIdDTO> pacienteIdDTO = new List<PacienteIdDTO>();

            foreach (var paciente in pacienteDb)
            {   
                pacienteIdDTO.Add(new PacienteIdDTO
                {
                    Id = paciente.Id,
                    Nome = paciente.Nome,
                    Email = paciente.Email,
                    Telefone = paciente.Telefone,
                    Consultas = new List<ConsultaDTO>()
                });
            }

            return Ok(pacienteIdDTO);
        }

        [HttpPost]
        public IActionResult Create(PacienteDTO paciente)
        {
            var pacienteDb = new Paciente
            {
                Nome = paciente.Nome,
                Email = paciente.Email,
                Telefone = paciente.Telefone,
            };

            _context.Pacientes.Add(pacienteDb);
            _context.SaveChanges();

            return Ok(pacienteDb);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, PacienteDTO paciente)
        {
            var pacienteDb = _context.Pacientes.Find(id);

            if(pacienteDb == null)
                return NotFound();

            pacienteDb.Nome = paciente.Nome;
            pacienteDb.Email = paciente.Email;
            pacienteDb.Telefone = paciente.Telefone;

            _context.Pacientes.Update(pacienteDb);
            _context.SaveChanges();

            return Ok(pacienteDb);
        }

        [HttpDelete("{id}")]
        public IActionResult Remove(int id)
        {
            var pacienteDb = _context.Pacientes.Find(id);

            if(pacienteDb == null)
                return NotFound();

            _context.Pacientes.Remove(pacienteDb);
            _context.SaveChanges();
            
            return NoContent();
        }
    }
}