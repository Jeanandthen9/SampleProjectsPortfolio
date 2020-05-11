using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using VideoGameCatalogueData;
using VideoGameCatalogueDomain;

namespace VideoGameCatalogueUI
{
    public class Program
    {
        public static VideoGameCatalogueContext context = new VideoGameCatalogueContext();
        public static void Main(string[] args)
        {
            context.Database.EnsureCreated();
            context.SaveChanges();
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
