using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ModuloAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuarioController : ControllerBase
    {
        [HttpGet("ObterDataAtual")]
        public IActionResult GetHours()
        {
            var obj =  new
            {
                Data = DateTime.Now.ToLongDateString(),
                Hora = DateTime.Now.ToShortTimeString()
            };
            
            return Ok(obj);
        }
        [HttpGet("Apresentar")]
        public IActionResult Apresentar(string nome)
        {
            var msg = $"Olá, meu nome é {nome}.";
            return Ok(new { msg });
        }
    }
}