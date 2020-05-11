using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using VideoGameCatalogueDomain;

namespace VideoGameCatalogueData
{
    public class VideoGameCatalogueContext : DbContext
    {
        public DbSet<VideoGame> VideoGames { get; set; }
        public DbSet<GamingPlatform> GamingPlatforms { get; set; }
        public DbSet<VideoGameGamingPlatform> VideoGamesGamingPlatforms { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder oB)
        {
            var connectionString = "Data Source = (localdb)\\ProjectsV13; Initial Catalog = VideoGameCatalogue_Db_Dev";
            oB.UseSqlServer(connectionString);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<VideoGameGamingPlatform>()
                .HasKey(vp => new { vp.GamingPlatformId, vp.VideoGameId });
            modelBuilder.Entity<VideoGameGamingPlatform>()
                .HasOne(vp => vp.VideoGame)
                .WithMany(v => v.VideoGameGamingPlatforms)
                .HasForeignKey(vp => vp.VideoGameId);
            modelBuilder.Entity<VideoGameGamingPlatform>()
                .HasOne(vp => vp.GamingPlatform)
                .WithMany(p => p.VideoGameGamingPlatforms)
                .HasForeignKey(vp => vp.GamingPlatformId);
        }
    }
}
