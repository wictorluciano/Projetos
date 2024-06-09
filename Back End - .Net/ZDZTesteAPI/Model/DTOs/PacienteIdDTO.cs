namespace ZDZTesteAPI.Model.DTOs
{
    public class PacienteIdDTO
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; } 
        public List<ConsultaDTO> Consultas { get; set; }    

    }
}