using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Passcode.Models;
using Microsoft.AspNetCore.Http;

namespace Passcode.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            Random r = new Random();
            var AllChars="AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890!@#$%^&*()";
            string NewPassword = "";
            if(HttpContext.Session.GetInt32("Counter") == null)
            {
                HttpContext.Session.SetInt32("Counter", 0);
            }
            ViewBag.Count = HttpContext.Session.GetInt32("Counter");
            int? Count = HttpContext.Session.GetInt32("Counter");
            for (int i = 0; i <= 14; i++)
            {
                NewPassword += AllChars[r.Next(72)];
            }
            HttpContext.Session.SetString("Password", NewPassword);
            ViewBag.Passcode = HttpContext.Session.GetString("Password");
            if(Count >= 0)
            {
                HttpContext.Session.SetInt32("Counter", (int)Count + 1);
                ViewBag.Count = HttpContext.Session.GetInt32("Counter");
            }
            return View();
        }

        [Route("Home/generate")]
        public IActionResult Generate()
        {
            Random r = new Random();
            var AllChars="AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890!@#$%^&*()";
            string NewPassword = "";
            for (int i = 0;i <= 14; i++)
            {
                NewPassword += AllChars[r.Next(72)];
            }
            HttpContext.Session.SetString("Password", NewPassword);
            ViewBag.Passcode = HttpContext.Session.GetString("Password");
            return RedirectToAction("Index");
        }


        [Route("Home/reset")]
        public IActionResult Reset()
        {
            HttpContext.Session.SetInt32("Counter", 0);
            return RedirectToAction("Index");
        }

    }
}
