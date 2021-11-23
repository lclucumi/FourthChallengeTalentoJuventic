using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System.Data;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public ClienteController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        //CONSULTA DE DATOS
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                           select id,name,description,username,password
                           from
                           cliente";
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
                        delete from cliente 
                        where id=@ClienteId;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@ClienteId", id);

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
        public JsonResult Put(Cliente cli)
        {
            string query = @"
                        update cliente set 
                        name =@ClienteNombre,
                        description =@ClienteDescripcion,
                        username =@ClienteUsuario,
                        password =@ClienteContrasena,
                        where id =@ClienteId;
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@ClienteId", cli.id);
                    myCommand.Parameters.AddWithValue("@ClienteNombre", cli.name);
                    myCommand.Parameters.AddWithValue("@ClienteDescripcion", cli.description);
                    myCommand.Parameters.AddWithValue("@ClienteUsuario", cli.username);
                    myCommand.Parameters.AddWithValue("@ClienteContrasena", cli.password);

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
        public JsonResult Post(Models.Cliente cli)
        {
            string query = @"
                        insert into cliente 
                        (name,description,username,password) 
                        values
                        (@ClienteNombre,@ClienteDescripcion,@ClienteUsuario,@ClienteContrasena);
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@ClienteNombre", cli.name);
                    myCommand.Parameters.AddWithValue("@ClienteDescripcion", cli.description);
                    myCommand.Parameters.AddWithValue("@ClienteUsuario", cli.username);
                    myCommand.Parameters.AddWithValue("@ClienteContrasena", cli.password);

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
