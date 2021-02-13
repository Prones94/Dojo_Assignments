using Microsoft.AspNetCore.Mvc;

namespace ProjectController.Controllers
{
  public class ProjectController : Controller
  {
    [HttpGet("projects")]
    public string Project()
    {
      return "These are my projects";
    }
  }
}