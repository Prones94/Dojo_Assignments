using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using LoginRegistration.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;

namespace LoginRegistration.Controllers
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
            return View();
        }

        [HttpPost("/register")]
        public IActionResult Register(User newUser)
        {
            if(ModelState.IsValid)
            {
                if(_context.Users.Any(user => user.Email == newUser.Email))
                {
                    ModelState.AddModelError("Email", "Email is already registered");
                    return View("Index");
                }
                PasswordHasher<User> Hashed = new PasswordHasher<User>();
                newUser.Password = Hashed.HashPassword(newUser, newUser.Password);

                _context.Users.Add(newUser);
                _context.SaveChanges();
                HttpContext.Session.SetInt32("UserId", newUser.UserId);

                return RedirectToAction("Success");
            }
            else
            {
                return View("Index");
            }
        }

        [HttpGet("login")]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost("/logon")]
        public IActionResult Logon(LoginUser user)
        {
            if(ModelState.IsValid)
            {
                User thisUser = _context.Users.FirstOrDefault(targetUser => targetUser.Email == user.LoginEmail);
                if(thisUser != null)
                {
                    ModelState.AddModelError("LoginEmail", "Invalid email, try again");
                    ModelState.AddModelError("LoginPassword", "Invalid password, try again");
                    return View("Login");
                }
                var Hashed = new PasswordHasher<LoginUser>();
                var result = Hashed.VerifyHashedPassword(user, thisUser.Password, user.LoginPassword);
                if(result==0)
                {
                    ModelState.AddModelError("LoginEmail","Email is invalid");
                    ModelState.AddModelError("LoginPassword", "Password is invalid");
                    return View("Login");
                }
                HttpContext.Session.SetInt32("UserId", thisUser.UserId);
                return RedirectToAction("Success");
            }
            else
            {
                return View("Login");
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
