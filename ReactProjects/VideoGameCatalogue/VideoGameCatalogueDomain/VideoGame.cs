using System;
using System.Collections.Generic;
using System.Text;

namespace VideoGameCatalogueDomain
{
    public class VideoGame
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public ICollection<VideoGameGamingPlatform> VideoGameGamingPlatforms { get; set; }
    }
}
