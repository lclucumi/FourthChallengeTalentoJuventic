using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System.Data;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicioController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public ServicioController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        //CONSULTA DE DATOS
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                           select id,name,description,image,price,text
                           from
                           servicio";
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
                        delete from servicio 
                        where id=@ServicioId;
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@ServicioId", id);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    mycon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }

        //ACTUALIZACIÓN
        [HttpPut("{id}")]
        public JsonResult Put(int id, Servicio ser)
        {
            string query = @"
                        update servicio set 
                        name =@ServicioNombre,
                        description =@ServicioDescripcion,
                        image =@ServicioImagen,
                        price =@ServicioPrecio,
                        text =@ServicioTexto,
                        where id =@ServicioId;
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@ServicioId", ser.id);
                    myCommand.Parameters.AddWithValue("@ServicioNombre", ser.name);
                    myCommand.Parameters.AddWithValue("@ServicioDescripcion", ser.description);
                    myCommand.Parameters.AddWithValue("@ServicioImagen", ser.image);
                    myCommand.Parameters.AddWithValue("@ServicioPrecio", ser.price);
                    myCommand.Parameters.AddWithValue("@ServicioTexto", ser.text);

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
        public JsonResult Post(Models.Servicio ser)
        {
            string query = @"
                        insert into servicio 
                        (name,description,image,price,text) 
                        values
                        (@ServicioNombre,@ServicioDescripcion,@ServicioImagen,@ServicioPrecio,@ServicioTexto);
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@ServicioNombre", ser.name);
                    myCommand.Parameters.AddWithValue("@ServicioDescripcion", ser.description);
                    myCommand.Parameters.AddWithValue("@ServicioImagen", ser.image);
                    myCommand.Parameters.AddWithValue("@ServicioPrecio", ser.price);
                    myCommand.Parameters.AddWithValue("@ServicioTexto", ser.text);

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
