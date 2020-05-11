using System;
using System.Collections.Generic;
using System.Text;

namespace VideoGameCatalogueDomain
{
    public class GamingPlatform
    {
        public int Id { get; set; }
        public string Brand { get; set; }
        public ICollection<VideoGameGamingPlatform> VideoGameGamingPlatforms { get; set; }
    }
}
