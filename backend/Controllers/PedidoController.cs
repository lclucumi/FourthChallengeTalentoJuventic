using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System.Data;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PedidoController : ControllerBase
    {
            private readonly IConfiguration _configuration;
            private readonly IWebHostEnvironment _env;
            public PedidoController(IConfiguration configuration, IWebHostEnvironment env)
            {
                _configuration = configuration;
                _env = env;
            }

            //CONSULTA DE DATOS
            [HttpGet]
            public JsonResult Get()
            {
                string query = @"
                           select id,cliente_id,plato_id,date_pedido
                           from
                           pedido";
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
                        delete from pedido
                        where id=@PedidoId;
            ";

                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
                MySqlDataReader myReader;
                using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
                {
                    mycon.Open();
                    using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                    {
                        myCommand.Parameters.AddWithValue("@ComentarioId", id);

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
            public JsonResult Put(Pedido ped)
            {
                string query = @"
                        update pedido set 
                        cliente_id =@PedidoClienteId,
                        plato_id =@PedidoPlatoId,
                        date_pedido =@PedidoFecha,
                        where id =@PedidoId;
            ";

                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
                MySqlDataReader myReader;
                using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
                {
                    mycon.Open();
                    using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                    {
                        myCommand.Parameters.AddWithValue("@PedidoId", ped.id);
                        myCommand.Parameters.AddWithValue("@PedidoClienteId", ped.cliente_id);
                        myCommand.Parameters.AddWithValue("@PedidoPlatoId", ped.plato_id);
                        myCommand.Parameters.AddWithValue("@PedidoFecha", ped.date_pedido);

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
            public JsonResult Post(Models.Pedido ped)
            {
                string query = @"
                        insert into pedido 
                        (cliente_id,plato_id,date_pedido) 
                        values
                         (@PedidoClienteId,@PedidoPlatoId,@PedidoFecha) ;
                        
            ";

                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
                MySqlDataReader myReader;
                using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
                {
                    mycon.Open();
                    using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                    {
                        myCommand.Parameters.AddWithValue("@PedidoClienteId", ped.cliente_id);
                        myCommand.Parameters.AddWithValue("@PedidoPlatoId", ped.plato_id);
                        myCommand.Parameters.AddWithValue("@PedidoFecha", ped.date_pedido);

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
