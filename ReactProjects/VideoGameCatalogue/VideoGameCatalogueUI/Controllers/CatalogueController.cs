using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VideoGameCatalogueData;

namespace VideoGameCatalogueUI.Controllers
{
    public class CatalogueController : Controller
    {
        public static VideoGameCatalogueContext _db = new VideoGameCatalogueContext();

        [HttpGet]
        public IActionResult GetCatalogue()
        {
            var results = from g in _db.VideoGames
                select new
                {
                    g.Id,
                    g.Title,
                    Platforms = (from p in _db.GamingPlatforms
                        join gp in _db.VideoGamesGamingPlatforms on p.Id equals gp.GamingPlatformId
                        where gp.VideoGameId == g.Id
                        select p.Brand).ToList()
                };

            return Json(new {data = results.ToList()});
        }
    }
}