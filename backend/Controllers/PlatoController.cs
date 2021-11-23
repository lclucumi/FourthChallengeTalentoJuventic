using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System.Data;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlatoController : ControllerBase
    {
            private readonly IConfiguration _configuration;
            private readonly IWebHostEnvironment _env;
            public PlatoController(IConfiguration configuration, IWebHostEnvironment env)
            {
                _configuration = configuration;
                _env = env;
            }

            //CONSULTA DE DATOS
            [HttpGet]
            public JsonResult Get()
            {
                string query = @"
                           select id, restaurante_id,name,description,image,ingredient,price,amount
                           from
                           plato";
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
                        delete from plato 
                        where id=@PlatoId;
                        
            ";

                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
                MySqlDataReader myReader;
                using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
                {
                    mycon.Open();
                    using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                    {
                        myCommand.Parameters.AddWithValue("@PlatoId", id);

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
            public JsonResult Put(Plato plt)
            {
                string query = @"
                        update plato set 
                        restaurante_id=@PlatoRestauranteId,
                        name =@PlatoNombre,
                        description =@PlatoDescripcion,
                        image = @PlatoImagen,
                        ingredient = @PlatoIngrediente,
                        price = @PlatoPrecio,
                        amount = @PlatoCantidad,
                        where id =@PlatoId;
                        
            ";

                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
                MySqlDataReader myReader;
                using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
                {
                    mycon.Open();
                    using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                    {
                        myCommand.Parameters.AddWithValue("@PlatoId", plt.id);
                        myCommand.Parameters.AddWithValue("@PlatoRestauranteId", plt.restaurante_id);
                        myCommand.Parameters.AddWithValue("@PlatoNombre", plt.name);
                        myCommand.Parameters.AddWithValue("@PlatoDescripcion", plt.description);
                        myCommand.Parameters.AddWithValue("@Platomagen", plt.image);
                        myCommand.Parameters.AddWithValue("@PlatoIngrediente", plt.ingredient);
                        myCommand.Parameters.AddWithValue("@PlatoPrecio", plt.price);
                        myCommand.Parameters.AddWithValue("@PlatoCantidad", plt.amount);

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
            public JsonResult Post(Models.Plato plt)
            {
                string query = @"
                        insert into plato 
                        (restaurante_id, name,description,image,ingredient,price,amount) 
                        values
                         (@PlatoRestauranteId,@PlatoNombre,@PlatoDescripcion,@PlatoImagen,@PlatoIngrediente,@PlatoPrecio,@PlatoCantidad);
                        
            ";

                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
                MySqlDataReader myReader;
                using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
                {
                    mycon.Open();
                    using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                    {
                        myCommand.Parameters.AddWithValue("@PlatoRestauranteId", plt.restaurante_id);
                        myCommand.Parameters.AddWithValue("@PlatoNombre", plt.name);
                        myCommand.Parameters.AddWithValue("@PlatoDescripcion", plt.description);
                        myCommand.Parameters.AddWithValue("@PlatoImagen", plt.image);
                        myCommand.Parameters.AddWithValue("@PlatoIngrediente", plt.ingredient);
                        myCommand.Parameters.AddWithValue("@PlatoPrecio", plt.price);
                        myCommand.Parameters.AddWithValue("@PlatoCantidad", plt.amount);

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
