using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CRUDelicious.Models;
using Microsoft.EntityFrameworkCore;

namespace CRUDelicious.Controllers
{
    public class HomeController : Controller
    {
        private readonly MyContext _context;

        public HomeController(MyContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public IActionResult Index()
        {   ViewBag.AllDishes = _context.Dishes.OrderBy(dish => dish.CreatedAt).ToList();
            return View();
        }

        [Route("AddDish")]
        public IActionResult AddDish(){
            return View();
        }

        [Route("AddMethod")]
        public IActionResult AddMethod(Dish newDish)
        {
            if(ModelState.IsValid)
            {
                _context.Add(newDish);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            else
            {
                return View("AddDish");
            }
        }

        [Route("ViewDish/{DishId}")]
        public IActionResult ViewDish(int DishId)
        {
            Dish SingleDish = _context.Dishes.FirstOrDefault(dish => dish.DishId == DishId);
            return View(SingleDish);
        }

        [Route("EditDish/{DishId}")]
        public IActionResult EditDish(int DishId)
        {
            Dish SingleDish = _context.Dishes.FirstOrDefault(dish => dish.DishId == DishId);
            return View(SingleDish);
        }

        [Route("EditMethod/{DishId}")]
        public IActionResult    EditMethod(Dish UpdatedDish, int DishId)
        {
            Dish SingleDish = _context.Dishes.FirstOrDefault(dish => dish.DishId == DishId);
            if(ModelState.IsValid)
            {
                SingleDish.Chef = UpdatedDish.Chef;
                SingleDish.Name = UpdatedDish.Name;
                SingleDish.Calories = UpdatedDish.Calories;
                SingleDish.Tastiness = UpdatedDish.Tastiness;
                SingleDish.Description = UpdatedDish.Description;
                SingleDish.UpdatedAt = DateTime.Now;
                _context.SaveChanges();
                return RedirectToAction("ViewDish", UpdatedDish);
            }
            else
            {
                return View("EditDish", UpdatedDish);
            }
        }

        [Route("DeleteMethod/{DishId}")]
        public IActionResult DeleteMethod(int DishId)
        {
            Dish SingleDish = _context.Dishes.FirstOrDefault(dish => dish.DishId == DishId);
            _context.Dishes.Remove(SingleDish);
            _context.SaveChanges();
            return RedirectToAction("Index");
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
