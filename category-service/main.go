package main

import (
	"category-service/models"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func main() {
	app := fiber.New()
	dsn := "host=postgres user=user password=password dbname=category-db port=5432 sslmode=disable TimeZone=Asia/Shanghai"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if (err) != nil {
		panic(err)
	}
	db.AutoMigrate(models.Category{})
	app.Use(cors.New())
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello World!")
	})

	app.Get("/api/category", func(c *fiber.Ctx) error {
		var category []models.Category
		db.Find(&category)
		return c.JSON(category)
	})

	app.Post("/api/category", func(c *fiber.Ctx) error {
		var category models.Category
		if err := c.BodyParser(&category); err != nil {
			return err
		}
		db.Create(&category)
		return c.JSON(category)
	})
	app.Listen("4444")
}
