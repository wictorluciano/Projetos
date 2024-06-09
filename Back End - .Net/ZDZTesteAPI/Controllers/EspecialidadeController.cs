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
    public class EspecialidadeController : ControllerBase
    {
        private readonly ConsultaContext _context;
        public EspecialidadeController(ConsultaContext consultaContext)
        {
            _context = consultaContext;
        }

        [HttpGet("{id}")]
        public IActionResult GetEspecialidadeById(int id)
        {
            var especialidadeDb = _context.Especialidades.Find(id);

            if (especialidadeDb == null)
                return NotFound();

            return Ok(especialidadeDb);
        }
        
        [HttpGet("ListarEspecialidades")]
        public IActionResult GetAllEspecialidade()
        {
            var especialidadeDb = _context.Especialidades.ToList();

            List<EspecialidadeIdDTO> especialidadeIdDTO = new List<EspecialidadeIdDTO>();

            foreach (var especialidade in especialidadeDb)
            {
                especialidadeIdDTO.Add(new EspecialidadeIdDTO 
                { 
                    Id = especialidade.Id, 
                    Nome = especialidade.Nome 
                });
            }

            return Ok(especialidadeIdDTO);
        }

        [HttpPost]
        public IActionResult Create(EspecialidadeDTO especialidade)
        {
            var especialidadeDb = new Especialidade
            {
                Nome = especialidade.Nome
            };

            _context.Especialidades.Add(especialidadeDb);
            _context.SaveChanges();
            
            return Ok(especialidadeDb);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, EspecialidadeDTO especialidade)
        {
            var especialidadeDb = _context.Especialidades.Find(id);

            if(especialidadeDb == null)
                return NotFound();
            
            especialidadeDb.Nome = especialidade.Nome;

            _context.Especialidades.Update(especialidadeDb);
            _context.SaveChanges();

            return Ok(especialidadeDb);
        }

        [HttpDelete("{id}")]
        public IActionResult Remove(int id)
        {
            var especialidadeDb = _context.Especialidades.Find(id);

            if(especialidadeDb == null)
                return NotFound();

            _context.Especialidades.Remove(especialidadeDb);
            _context.SaveChanges();
            
            return NoContent();
        }   
    }
}