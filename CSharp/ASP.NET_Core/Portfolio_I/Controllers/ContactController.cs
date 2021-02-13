using Microsoft.AspNetCore.Mvc;

namespace ContactController.Controllers
{
  public class ContactController : Controller
  {
    [HttpGet("contact")]
    public string Contact()
    {
      return "This is my Contact!";
    }
  }
}