using Microsoft.AspNetCore.Mvc;

namespace HomeController.Controllers
{
  public class HomeController : Controller
  {
    [HttpGet("")] // route localhost:5000
    public ViewResult Index()
    {
      return View();
    }

    [HttpGet("projects")] //route localhost:5000/projects
    public ViewResult Projects()
    {
      return View();
    }

    [HttpGet("contact")] //route localhost:5000/contact
    public ViewResult Contact()
    {
      return View();
    }
  }
}