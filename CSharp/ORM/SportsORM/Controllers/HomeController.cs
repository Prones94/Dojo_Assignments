﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SportsORM.Models;


namespace SportsORM.Controllers
{
    public class HomeController : Controller
    {

        private static Context _context;

        public HomeController(Context DBContext)
        {
            _context = DBContext;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.BaseballLeagues = _context.Leagues
                .Where(l => l.Sport.Contains("Baseball"))
                .ToList();

            return View();
        }

        [HttpGet("level_1")]
        public IActionResult Level1()
        {
            ViewBag.WomensLeagues = _context.Leagues
                .Where(women => women.Name.Contains("Women"))
                .ToList();

            ViewBag.HockeyTeams = _context.Leagues
                .Where(team => team.Sport.Contains("Hockey"))
                .ToList();

            ViewBag.NotTheFootball = _context.Leagues
                .Where(team => team.Sport != "Football")
                .ToList();

            ViewBag.Conferences = _context.Leagues
                .Where(conference => conference.Name.Contains("Conference"))
                .ToList();

            ViewBag.AtlanticTeams = _context.Leagues
                .Where(league => league.Name.Contains("Atlantic"))
                .ToList();

            ViewBag.DallasTeams = _context.Teams
                .Where(team => team.Location == "Dallas")
                .ToList();

            ViewBag.Raptors = _context.Teams
                .Where(team => team.TeamName == "Raptors");

            ViewBag.CityTeams = _context.Teams
                .Where(team => team.Location.Contains("City"));

            ViewBag.StartsWithT = _context.Teams
                .Where(team => team.TeamName.StartsWith("T"));

            ViewBag.Sorted = _context.Teams
                .OrderBy(team => team.Location)
                .ToList();

            ViewBag.Reverse = _context.Teams
                .OrderByDescending(team => team.TeamName)
                .ToList();

            ViewBag.Cooper = _context.Players
                .Where(player => player.LastName == "Cooper")
                .ToList();

            ViewBag.Joshua = _context.Players
                .Where(player => player.FirstName == "Joshua")
                .ToList();

            ViewBag.FilteredName = _context.Players
                .Where(player => player.LastName == "Cooper")
                .Where(player => player.FirstName != "Joshua")
                .ToList();

            ViewBag.MultipleNames = _context.Players
                .Where(player => player.FirstName == "Alexander" || player.FirstName == "Wyatt")
                .ToList();


            return View();
        }

        [HttpGet("level_2")]
        public IActionResult Level2()
        {
            return View();
        }

        [HttpGet("level_3")]
        public IActionResult Level3()
        {
            return View();
        }

    }
}