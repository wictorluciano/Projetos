using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ZDZTesteAPI.Model;

namespace ZDZTesteAPI.Context
{
    public class ConsultaContext : DbContext
    {
        public ConsultaContext(DbContextOptions<ConsultaContext> options) : base(options) 
        {

        }

        public DbSet<Consulta> Consultas { get; set; }
        public DbSet<Medico> Medicos { get; set; }
        public DbSet<Especialidade> Especialidades { get; set; }
        public DbSet<MedicoEspecialidade> MedicoEspecialidades { get; set; }
        public DbSet<Paciente> Pacientes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<MedicoEspecialidade>()
            .ToTable("MedicoEspecialidade");

            modelBuilder.Entity<MedicoEspecialidade>()
                .HasKey(me => new { me.MedicoId, me.EspecialidadeId });

            modelBuilder.Entity<MedicoEspecialidade>()
                .HasOne(me => me.Medico)
                .WithMany()
                .HasForeignKey(me => me.MedicoId);

            modelBuilder.Entity<MedicoEspecialidade>()
                .HasOne(me => me.Especialidade)
                .WithMany()
                .HasForeignKey(me => me.EspecialidadeId);
        }

    }
}