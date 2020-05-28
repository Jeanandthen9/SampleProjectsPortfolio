using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using VideoGameCatalog.UI.ViewModels;

namespace VideoGameCatalog.UI.Controllers
{
    public class GameController : Controller
    {
        [HttpGet]
        public JsonResult GetAllGames()
        {
            var list = new List<GameViewModel>();

            var game = new GameViewModel
            {
                Id = 1,
                Title = "Left 4 Dead",
                ReleaseDate = "November 17, 2008"
            };

            list.Add(game);

            return Json(list);
        }
    }
}