﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ZDZTesteAPI.Context;

#nullable disable

namespace ZDZTesteAPI.Migrations
{
    [DbContext(typeof(ConsultaContext))]
    partial class ConsultaContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("EspecialidadeMedico", b =>
                {
                    b.Property<int>("EspecialidadesId")
                        .HasColumnType("int");

                    b.Property<int>("MedicosId")
                        .HasColumnType("int");

                    b.HasKey("EspecialidadesId", "MedicosId");

                    b.HasIndex("MedicosId");

                    b.ToTable("EspecialidadeMedico");
                });

            modelBuilder.Entity("ZDZTesteAPI.Model.Consulta", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<DateTime>("DataHorario")
                        .HasColumnType("datetime2");

                    b.Property<int>("EspecialidadeId")
                        .HasColumnType("int");

                    b.Property<int>("MedicoId")
                        .HasColumnType("int");

                    b.Property<int>("PacienteId")
                        .HasColumnType("int");

                    b.Property<decimal>("Valor")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("Id");

                    b.HasIndex("EspecialidadeId");

                    b.HasIndex("MedicoId");

                    b.HasIndex("PacienteId");

                    b.ToTable("Consultas");
                });

            modelBuilder.Entity("ZDZTesteAPI.Model.Especialidade", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Especialidades");
                });

            modelBuilder.Entity("ZDZTesteAPI.Model.Medico", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Crm")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Medicos");
                });

            modelBuilder.Entity("ZDZTesteAPI.Model.MedicoEspecialidade", b =>
                {
                    b.Property<int>("MedicoId")
                        .HasColumnType("int");

                    b.Property<int>("EspecialidadeId")
                        .HasColumnType("int");

                    b.HasKey("MedicoId", "EspecialidadeId");

                    b.HasIndex("EspecialidadeId");

                    b.ToTable("MedicoEspecialidade", (string)null);
                });

            modelBuilder.Entity("ZDZTesteAPI.Model.Paciente", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Telefone")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Pacientes");
                });

            modelBuilder.Entity("EspecialidadeMedico", b =>
                {
                    b.HasOne("ZDZTesteAPI.Model.Especialidade", null)
                        .WithMany()
                        .HasForeignKey("EspecialidadesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ZDZTesteAPI.Model.Medico", null)
                        .WithMany()
                        .HasForeignKey("MedicosId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ZDZTesteAPI.Model.Consulta", b =>
                {
                    b.HasOne("ZDZTesteAPI.Model.Especialidade", "Especialidade")
                        .WithMany("Consultas")
                        .HasForeignKey("EspecialidadeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ZDZTesteAPI.Model.Medico", "Medico")
                        .WithMany("Consultas")
                        .HasForeignKey("MedicoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ZDZTesteAPI.Model.Paciente", "Paciente")
                        .WithMany("Consultas")
                        .HasForeignKey("PacienteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Especialidade");

                    b.Navigation("Medico");

                    b.Navigation("Paciente");
                });

            modelBuilder.Entity("ZDZTesteAPI.Model.MedicoEspecialidade", b =>
                {
                    b.HasOne("ZDZTesteAPI.Model.Especialidade", "Especialidade")
                        .WithMany()
                        .HasForeignKey("EspecialidadeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ZDZTesteAPI.Model.Medico", "Medico")
                        .WithMany()
                        .HasForeignKey("MedicoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Especialidade");

                    b.Navigation("Medico");
                });

            modelBuilder.Entity("ZDZTesteAPI.Model.Especialidade", b =>
                {
                    b.Navigation("Consultas");
                });

            modelBuilder.Entity("ZDZTesteAPI.Model.Medico", b =>
                {
                    b.Navigation("Consultas");
                });

            modelBuilder.Entity("ZDZTesteAPI.Model.Paciente", b =>
                {
                    b.Navigation("Consultas");
                });
#pragma warning restore 612, 618
        }
    }
}