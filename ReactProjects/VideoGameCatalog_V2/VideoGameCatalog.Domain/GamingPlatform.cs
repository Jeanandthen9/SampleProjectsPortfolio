using System;
using System.Collections.Generic;
using System.Text;

namespace VideoGameCatalog.Domain
{
    public class GamingPlatform
    {
        public int Id { get; set; }
        public string Brand { get; set; }
        public ICollection<VideoGameGamingPlatform> VideoGameGamingPlatforms { get; set; }
    }
}
