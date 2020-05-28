using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using VideoGameCatalog.Data;
using VideoGameCatalog.UI.ViewModels;

namespace VideoGameCatalog.UI.Controllers
{
    public class GameController : Controller
    {
        public static DatabaseContext _db = new DatabaseContext();

        [HttpGet]
        public JsonResult GetAllGames()
        {
            var results = (from g in _db.VideoGames
                          select new GameViewModel()
                          {
                              Id = g.Id,
                              Title = g.Title,
                              ReleaseDate = g.ReleaseDate,
                              Platforms = (from p in _db.GamingPlatforms
                                           join gp in _db.VideoGamesGamingPlatforms on p.Id equals gp.GamingPlatformId
                                           where gp.VideoGameId == g.Id
                                           select new PlatformViewModel()
                                           {
                                               Id = p.Id,
                                               Brand = p.Brand
                                           }).ToList()
                          }).ToList();

            return Json(results);
        }
    }
}