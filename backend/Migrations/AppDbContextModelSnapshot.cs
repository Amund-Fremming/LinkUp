﻿// <auto-generated />
using System;
using Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace backend.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Models.Event", b =>
                {
                    b.Property<int>("EventID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("EventID"));

                    b.Property<DateTime>("EventDateTimeEnd")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTime>("EventDateTimeStart")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("EventDescription")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("EventName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("FrontImage")
                        .HasColumnType("text");

                    b.Property<string>("InviteURL")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("LocationID")
                        .HasColumnType("integer");

                    b.Property<string>("MaxCapacity")
                        .HasColumnType("text");

                    b.Property<string>("MinCapacity")
                        .HasColumnType("text");

                    b.Property<int>("Visibility")
                        .HasColumnType("integer");

                    b.HasKey("EventID");

                    b.HasIndex("LocationID")
                        .IsUnique();

                    b.ToTable("Events");
                });

            modelBuilder.Entity("Models.EventRelation", b =>
                {
                    b.Property<int>("EventRelationID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("EventRelationID"));

                    b.Property<int>("EventID")
                        .HasColumnType("integer");

                    b.Property<int>("EventRelationParticipation")
                        .HasColumnType("integer");

                    b.Property<int>("EventRole")
                        .HasColumnType("integer");

                    b.Property<string>("UserID")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("EventRelationID");

                    b.HasIndex("EventID");

                    b.HasIndex("UserID");

                    b.ToTable("EventRelations");
                });

            modelBuilder.Entity("Models.Location", b =>
                {
                    b.Property<int>("LocationID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("LocationID"));

                    b.Property<string>("Address")
                        .HasColumnType("text");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Country")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Postalcode")
                        .HasColumnType("text");

                    b.HasKey("LocationID");

                    b.ToTable("Locations");
                });

            modelBuilder.Entity("Models.User", b =>
                {
                    b.Property<string>("UserID")
                        .HasColumnType("text");

                    b.Property<DateTime?>("DateBorn")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int?>("EventBails")
                        .HasColumnType("integer");

                    b.Property<int?>("EventsCreated")
                        .HasColumnType("integer");

                    b.Property<int?>("EventsJoined")
                        .HasColumnType("integer");

                    b.Property<string>("Firstname")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Gender")
                        .HasColumnType("text");

                    b.Property<string>("Lastname")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Password")
                        .HasColumnType("text");

                    b.Property<string>("Phone")
                        .HasColumnType("text");

                    b.Property<string>("ProfileImage")
                        .HasColumnType("text");

                    b.Property<int?>("RelationshipStatus")
                        .HasColumnType("integer");

                    b.Property<int>("Role")
                        .HasColumnType("integer");

                    b.Property<string>("Salt")
                        .HasColumnType("text");

                    b.HasKey("UserID");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Models.UserRelation", b =>
                {
                    b.Property<int>("UserRelationID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("UserRelationID"));

                    b.Property<int>("Type")
                        .HasColumnType("integer");

                    b.Property<string>("User_first_ID")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("User_second_ID")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("UserRelationID");

                    b.HasIndex("User_first_ID");

                    b.HasIndex("User_second_ID");

                    b.ToTable("UserRelations");
                });

            modelBuilder.Entity("Models.Event", b =>
                {
                    b.HasOne("Models.Location", "Location")
                        .WithOne()
                        .HasForeignKey("Models.Event", "LocationID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Location");
                });

            modelBuilder.Entity("Models.EventRelation", b =>
                {
                    b.HasOne("Models.Event", "Event")
                        .WithMany("EventRelations")
                        .HasForeignKey("EventID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Models.User", "User")
                        .WithMany("EventRelations")
                        .HasForeignKey("UserID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Event");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Models.UserRelation", b =>
                {
                    b.HasOne("Models.User", "User_first")
                        .WithMany("UserRelationsAsFirst")
                        .HasForeignKey("User_first_ID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Models.User", "User_second")
                        .WithMany("UserRelationsAsSecond")
                        .HasForeignKey("User_second_ID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User_first");

                    b.Navigation("User_second");
                });

            modelBuilder.Entity("Models.Event", b =>
                {
                    b.Navigation("EventRelations");
                });

            modelBuilder.Entity("Models.User", b =>
                {
                    b.Navigation("EventRelations");

                    b.Navigation("UserRelationsAsFirst");

                    b.Navigation("UserRelationsAsSecond");
                });
#pragma warning restore 612, 618
        }
    }
}
