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
    public class MedicoController : ControllerBase
    {
        private readonly ConsultaContext _context;

        public MedicoController(ConsultaContext consultaContext)
        {
            _context = consultaContext;
        }

        [HttpGet("{id}")]
        public IActionResult GetMedicoById(int id)
        {
            var medicoDb = _context.Medicos.Find(id);

            if (medicoDb == null)
                return NotFound();

            return Ok(medicoDb);
        }

        [HttpGet("ListarMedicos")]
        public IActionResult GetAllMedico()
        {
            var medicoDb = _context.Medicos.ToList();

            List<MedicoIdDTO> medicoIdDTO = new List<MedicoIdDTO>();

            foreach (var medico in medicoDb)
            {
                var especialidades = _context.MedicoEspecialidades
                    .Where(x => x.MedicoId == medico.Id)
                    .Select(x => new EspecialidadeDTO 
                    { 
                        Nome = x.Especialidade.Nome 
                    })
                    .ToList();

                medicoIdDTO.Add(new MedicoIdDTO 
                { 
                    Id = medico.Id, 
                    Crm = medico.Crm, 
                    Nome = medico.Nome, 
                    Descricao = medico.Descricao,
                    Especialidades = especialidades
                });
            }

            return Ok(medicoIdDTO);
        }

        [HttpPost]
        public IActionResult Create(MedicoDTO medico)
        {
            var medicoDb = new Medico
            {
                Crm = medico.Crm,
                Nome = medico.Nome,
                Descricao = medico.Descricao
            };

            _context.Medicos.Add(medicoDb);
            _context.SaveChanges();

            return Ok(medicoDb);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, MedicoDTO medico)
        {
            var medicoDb = _context.Medicos.Find(id);

            if(medicoDb == null)
                return NotFound();

            medicoDb.Crm = medico.Crm;
            medicoDb.Nome = medico.Nome;
            medicoDb.Descricao = medico.Descricao;

            _context.Medicos.Update(medicoDb);
            _context.SaveChanges();

            return Ok(medicoDb);
        }

        [HttpDelete("{id}")]
        public IActionResult Remove(int id)
        {
            var medicoDb = _context.Medicos.Find(id);

            if(medicoDb == null)
                return NotFound();
            
            _context.Medicos.Remove(medicoDb);
            _context.SaveChanges();

            return NoContent();
        }

        [HttpPost("AdicionarEspecialidade")]
        public IActionResult CreateEspecialidade(MedicoEspecialidadeDTO especialidade)
        {
            var medicoEspecialidadeDb = new MedicoEspecialidade
            {
                MedicoId = especialidade.MedicoId,
                EspecialidadeId = especialidade.EspecialidadeId
            };

            _context.MedicoEspecialidades.Add(medicoEspecialidadeDb);
            _context.SaveChanges();

            return Ok(medicoEspecialidadeDb);
        }

        [HttpDelete("{medicoId}/DeletarEspecialidade/{especialidadeId}")]
        public IActionResult RemoveEspecialidade(int medicoId, int especialidadeId)
        {
            var medicoEspecialidadeDb = _context.MedicoEspecialidades.Find(medicoId, especialidadeId);

            if(medicoEspecialidadeDb == null)
                return NotFound();

            _context.MedicoEspecialidades.Remove(medicoEspecialidadeDb);
            _context.SaveChanges();
            
            return NoContent();
        }
    }
}