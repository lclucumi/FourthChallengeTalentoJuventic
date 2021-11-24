using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System.Data;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservaController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public ReservaController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        //CONSULTA DE DATOS
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                           select id,cliente_id,servicio_id,date_reserva,state
                           from
                           reserva";
            //Tablas en memoria
            //consulta los datos en la BD y .Net los empaqueta en tabla
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                // Cuando se establece la conexión
                //se hace por cada vez que se consulta
                mycon.Open();
                // Se ejecuta la consulta por medio de comandos
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    mycon.Close();

                }
            }
            return new JsonResult(table);
        }

        //ELIMINACIÓN
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                        delete from reserva
                        where id=@ReservaId;
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@ReservaId", id);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    mycon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }

        //ACTUALIZACIÓN
        [HttpPut]
        public JsonResult Put(Reserva res)
        {
            string query = @"
                        update reserva set 
                        cliente_id =@ReservaClienteId,
                        servicio_id =@ReservaPlatoId,
                        date_reserva =@ReservaFecha,
                        state =@ReservaEstado,
                        where id =@ReservaId;
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@ReservaId", res.id);
                    myCommand.Parameters.AddWithValue("@ReservaClienteId", res.cliente_id);
                    myCommand.Parameters.AddWithValue("@ReservaServicioId", res.servicio_id);
                    myCommand.Parameters.AddWithValue("@ReservaFecha", res.date_reserva);
                    myCommand.Parameters.AddWithValue("@ReservaEstado", res.state);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    mycon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }

        //CREACIÓN
        [HttpPost]
        public JsonResult Post(Models.Reserva res)
        {
            string query = @"
                        insert into reserva 
                        (cliente_id,servicio_id,date_reserva,state) 
                        values
                         (@ReservaClienteId,@ReservaServicioId,@ReservaFecha,@ReservaEstado) ;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@ReservaClienteId", res.cliente_id);
                    myCommand.Parameters.AddWithValue("@ReservaServicioId", res.servicio_id);
                    myCommand.Parameters.AddWithValue("@ReservaFecha", res.date_reserva);
                    myCommand.Parameters.AddWithValue("@ReservaEstado", res.state);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    mycon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }
    }
}
