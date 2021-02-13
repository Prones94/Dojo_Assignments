using Microsoft.AspNetCore.Mvc;

namespace IndexController.Controllers
{
  public class IndexController : Controller
  {
    [HttpGet("")]
    public string Index()
    {
      return "This is my Index!";
    }
  }
}