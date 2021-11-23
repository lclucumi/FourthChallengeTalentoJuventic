namespace backend.Models
{
    public class Pedido
    {
        public int id { get; set; }
        public int cliente_id { get; set; }
        public int plato_id { get; set; }
        public DateOnly date_pedido { get; set; }
    }
}
