using System;
using Microsoft.AspNetCore.Mvc;

namespace Time_Display
{
  public class HomeController : Controller
  {
    [HttpGet("")]
    public ViewResult Index()
    {
      DateTime current = DateTime.Now;
      ViewBag.Time = current.ToString("dddd, MMM dd yyyy, hh:mm:ss");
      return View();
    }
    [HttpGet("refresh")]
    public IActionResult Refresh()
    {
      return RedirectToAction("Index");
    }
  }
}