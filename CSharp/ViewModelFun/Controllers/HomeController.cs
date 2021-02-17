using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ViewModelFun.Models;

namespace ViewModelFun.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            string message = "This is a message from HomeController.cs. Enjoy";
            return View((object)message);
        }

        [HttpGet("numbers")]
        public IActionResult Numbers()
        {
            int[] numbers = new int[]
            {
                1,2,3,4,5,6,7,8
            };
            return View(numbers);
        }

        [HttpGet("users")]
        public IActionResult Users()
        {
            List<User> Users = new List<User>()
            {
                new User{FirstName = "Ian", LastName = "Rones"},
                new User{FirstName = "Sarah", LastName = "Goldstein"},
                new User{FirstName = "Jerry", LastName = "Lewis"},
                new User{FirstName = "Rene", LastName = "Ricky"},
                new User{FirstName = "Barbara", LastName = "Streisand"},
                new User{FirstName = "Lewis", LastName = "Clark"},
            };
            return View(Users);
        }
        [HttpGet("user")]
        public IActionResult Person()
        {
            User newUser = new User()
            {
                FirstName = "Moose",
                LastName = "Phillips"
            };
            return View(newUser);
        }
    }
}
