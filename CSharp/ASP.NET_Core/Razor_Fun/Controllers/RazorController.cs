using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace RazorController.Controllers
{
  public class Razor : Controller
  {
    [HttpGet("")]
    public ViewResult Index()
    {
      return View();
    }
  }
}