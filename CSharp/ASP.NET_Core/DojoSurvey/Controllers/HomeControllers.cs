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

    [HttpPost("Create")]
    public IActionResult Create(Survey newSurvey)
    {
      if (ModelState.IsValid)
      {
        return RedirectToAction("result", newSurvey);
      }
      else
      {
        return View("Index");
      }
    }

    [HttpGet("Result")]
    public IActionResult Result(Survey newSurvey)
    {
      return View(newSurvey);
    }
  }
}