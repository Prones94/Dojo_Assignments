using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using ChefsNDishes.Models;

namespace ChefsNDishes.Controllers
{
    public class HomeController : Controller
    {
        private MyContext _context;

        public HomeController(MyContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.ChefList = _context.Chefs
                .Include(chef => chef.ChefList)
                .OrderByDescending(chef => chef.CreatedAt)
                .ToList();
            return View();
        }

        [route("DishDisplay")]
        public IActionResult Dishes()
        {
            VewBag.AllDishes = _context.Dishes
                .Include(dish =>dish.Creator)
                .ToList();
            return View();
        }

        [Route("NewChef")]
        public IActionResult NewChef()
        {
            return View();
        }

        [Route("AddChef")]
        public IActionResult AddChef(Chef newChef)
        {
            if(ModelState.IsValid)}
            {
                _context.Add(newChef);
                _context.SaveChanges();
                return RedirectToAction("Index");
            } else
            {
                return View("NewChef");
            }
        }

        [Route("NewDish")]
        public IActionResult NewDish()
        {
            ViewBag.AllChefs = _context.Chefs.ToList();
            return View();
        }

        [Route("AddDish")]
        public IActionResult AddDish(Dish newDish)
        {
            if(ModelState.IsValid)
            {
                _context.Add(newDish);
                _context.SaveChanges();
                return RedirectToAction("DishDisplay");
            }
            else
            {
                ViewBag.AllChefs = _context.Chefs.ToList();
                return View("NewDish");
            }
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
