namespace backend.Models
{
    public class Plato
    {
        public int id { get; set; }
        public int restaurante_id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string image { get; set; }
        public string ingredient { get; set; }
        public float price { get; set; }
        public int amount { get; set; }
    }
}
