using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System.Data;

namespace backend.Controllers
{
    // api/empleado
    [Route("api/[controller]")]
    [ApiController]
    public class EmpleadoController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public EmpleadoController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        //CONSULTA DE DATOS
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                           select id, restaurante_id,name,description,image
                           from
                           empleado"; 
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
                        delete from empleado 
                        where id=@EmpleadoId;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@EmpleadoId", id);

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
        public JsonResult Put(Empleado emp)
        {
            string query = @"
                        update empleado set 
                        restaurante_id=@EmpleadoRestauranteId,
                        name =@EmpleadoNombre,
                        description =@EmpleadoDescripcion,
                        image = @EmpleadoImagen,
                        where id =@EmpleadoId;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@EmpleadoId", emp.id);
                    myCommand.Parameters.AddWithValue("@EmpleadoRestauranteId", emp.restaurante_id);
                    myCommand.Parameters.AddWithValue("@EmpleadoNombre", emp.name);
                    myCommand.Parameters.AddWithValue("@EmpleadoDescripcion", emp.description);
                    myCommand.Parameters.AddWithValue("@EmpleadoImagen", emp.image);


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
        public JsonResult Post(Models.Empleado emp)
        {
            string query = @"
                        insert into empleado 
                        (restaurante_id, name,description,image) 
                        values
                         (@EmpleadoRestauranteId,@EmpleadoNombre,@EmpleadoDescripcion,@EmpleadoImagen) ;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@EmpleadoRestauranteId", emp.restaurante_id);
                    myCommand.Parameters.AddWithValue("@EmpleadoNombre", emp.name);
                    myCommand.Parameters.AddWithValue("@EmpleadoDescripcion", emp.description);
                    myCommand.Parameters.AddWithValue("@EmpleadoImagen", emp.image);

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
