namespace ZDZTesteAPI.Model.DTOs
{
    public class MedicoIdDTO
    {
        public int Id { get; set; }
        public string Crm { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public List<EspecialidadeDTO> Especialidades { get; set; }
    }
}