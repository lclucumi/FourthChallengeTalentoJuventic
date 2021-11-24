namespace backend.Models
{
    public class Reserva
    {
        public int id { get; set; }
        public int cliente_id { get; set; }
        public int servicio_id { get; set;}
        public DateOnly date_reserva { get; set; }

        public string state { get; set; }
    }
}
