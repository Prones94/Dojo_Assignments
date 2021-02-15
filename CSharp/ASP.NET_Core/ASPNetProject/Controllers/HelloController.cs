using Microsoft.AspNetCore.Mvc;

namespace ASPNetProject.Controllers
{
  public class HelloController : Controller // inheriting from the MVC Controller class
  {
    // for each rout this controller is to handle
    [HttpGet] // Type of request => [HttpPost] this goes to localhost:5000
    // localhost:5000/hello
    /*
      [HttpsGet("hello")]
      public String Hello()
      {
        return "Hello"
      }
    */
    // localhost:5000/users/SOME_PARAMETER
    /*
      [HttpGet("users/{parameter})]
      public string HelloUser(<type> parameter)
      {
        return $"Hello {parameter}";
      }
    */
    [Route("")] // associated route string
    // [HttpGet("")]
    public ViewResult Index()
    {
      return View(); // This
    }

    [HttpGet("users/{username}")]
    public string HelloUser(string username)
    {
      return $"Hello {username}";
    }


    /*
    public string Index()
    {
      return "Hello World from HelloController!"; -> This is an action
    }
    */
  }
}