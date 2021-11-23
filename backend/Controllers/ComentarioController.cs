using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System.Data;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComentarioController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public ComentarioController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        //CONSULTA DE DATOS
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                           select id,cliente_id,description
                           from
                           comentario";
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
                        delete from comentario
                        where id=@ComentarioId;
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
        public JsonResult Put(Comentario com)
        {
            string query = @"
                        update comentario set 
                        cliente_id =@ComentarioClienteId,
                        description =@ComentarioComentario,
                        where id =@ComentarioId;
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@ComentarioId", com.id);
                    myCommand.Parameters.AddWithValue("@ComentarioClienteId", com.cliente_id);
                    myCommand.Parameters.AddWithValue("@ComentarioComentario", com.description);


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
        public JsonResult Post(Models.Comentario com)
        {
            string query = @"
                        insert into comentario 
                        (cliente_id,description) 
                        values
                         (@ComentarioClienteId,@ComentarioComentario) ;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@ComentarioClienteId", com.cliente_id);
                    myCommand.Parameters.AddWithValue("@ComentarioComentario", com.description);

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
