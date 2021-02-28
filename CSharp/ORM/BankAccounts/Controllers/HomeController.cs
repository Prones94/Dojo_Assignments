using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using BankAccounts.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace BankAccounts.Controllers
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

        [HttpGet("login")]
        public IActionResult Login()
        {
            return View("Login");
        }

        [HttpPost("Register")]
        public IActionResult Register(User user)
        {
            if(ModelState.IsValid)
            {
                if(_context.Users.Any(targetUser => targetUser.Email == user.Email))
                {
                    ModelState.AddModelError("Email", "Email is already in use");
                    return RedirectToAction("Index");
                }
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                user.Password = Hasher.HashPassword(user, user.Password);
                _context.Add(user);
                _context.SaveChanges();
                _HttpContext.Session.SetInt32("UserId", user.UserId);
                return RedirectToAction("Bank", new { id = user.UserId});
            }
            return View("Index");
        }

        [HttpPost("LoginUser")]
        public IActionResult LoginUser(LoginUser user)
        {
            if(ModelState.IsValid)
            {
                var userInDB = _context.Users.FirstOrDefault(u => u.Email == user.LoginEmail);
                if(userInDB == null)
                {
                    ModelState.AddModelError("Email", "Invalid Email/Password");
                    return View("Login");
                }
                else
                {
                    HttpContext.Session.setInt32("UserId", userInDb.UserId);
                }
            }
            return View("Login");
        }

        [HttpGet("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }

        [HttpGet("transaction/{id}")]
        public IActionResult Transaction(int id)
        {
            int? UserId = HttpContext.Session.GetInt32("UserId");
            if(UserId == null)
            {
                return RedirectToAction("Index");
            }
            AccountUser LoggedUser = new AccountUser();
            LoggedUser.LoggedInUser = _context.Users
                .FirstOrDefault(LoggedInUser =>LoggedInUser.UserId == (int)UserId);
            LoggedUser.Transactions = _context.Transactions
                .Include(transaction => transaction.UserId == id)
                .ToList();
            return View("Bank", LoggedUser);
        }

        [HttpPost("transaction/{id}")]
        public IActionResult CreateTransaction(int id, AccountUser ReceivedAmount)
        {
            int? UserId = HttpContext.Session.GetInt32("UserId");
            if(UserId == null)
            {
                return RedirectToAction("Index");
            }
            if(ModelState.IsValid)
            {
                List<Transaction> AllTransactions = _context.Transactions
                    .Include(transaction => transaction.Owner)
                    .Where(transaction => transaction.UserId == id)
                    .ToList();
                double Balance = 0;
                foreach(Transaction money in AllTransactions)
                {
                    Balance += money.Amount;
                }
                if (ReceivedAmount.Form.Amount < 0 && ReceivedAmount.Form.Amount * -1 > Balance)
                {
                    ModelState.AddModelError("You don't have enough money");
                    return Transaction(id);
                }
                Received Amount.Form.UserId = (int)UserId;
                _context.Transactions.Add(ReceivedAmount.Form);
                _context.SaveChanges();
            }
            return RedirectToAction("Transaction")
        }
    }
}
