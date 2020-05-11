﻿using System;
using System.Collections.Generic;
using System.Text;

namespace VideoGameCatalogueDomain
{
    public class VideoGameGamingPlatform
    {
        public int VideoGameId { get; set; }
        public VideoGame VideoGame { get; set; }
        public int GamingPlatformId { get; set; }
        public GamingPlatform GamingPlatform { get; set; }
    }
}
