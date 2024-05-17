using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Calculadora.Services;

namespace CalculadoraTestes
{
    public class ValidacoesStringTests
    {
        private ValidacaoString _validacoes;

        public ValidacoesStringTests()
        {
            _validacoes = new ValidacaoString();
        }

        [Fact]
        public void DeveContarTresCaracteresOla()
        {
            //arrange
            string texto = "ola";
            //act
            int resultado = _validacoes.ContarCaracteres(texto);
            //assert
            Assert.Equal(3, resultado);
        }
    }
}