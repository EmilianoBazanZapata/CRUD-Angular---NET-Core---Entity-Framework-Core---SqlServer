using Microsoft.EntityFrameworkCore.Migrations;

namespace BackEnd.Migrations
{
    public partial class inicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TrajetaCredito",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Titular = table.Column<string>(type: "varchar(100)", nullable: false),
                    NumeroTarjeta = table.Column<string>(type: "varchar(16)", nullable: false),
                    FechaExpiracion = table.Column<string>(type: "varchar(5)", nullable: false),
                    Cvv = table.Column<string>(type: "varchar(3)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TrajetaCredito", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TrajetaCredito");
        }
    }
}
