using System;
using Microsoft.AspNetCore.Mvc;
using DojoSurvey.Models;

namespace DojoSurvey.Controllers
{
  public class HomeController : Controller
  {
    [HttpGet("")]
    public ViewResult Index()
    {
      return View();
    }

    [HttpPost("result")]
    public IActionResult Result(Survey newSurvey)
    {
      return View("Result", newSurvey);
    }
  }
}