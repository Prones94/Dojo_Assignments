using System;
using System.ComponentModel.DataAnnotations;

namespace ChefsNDishes.Models
{
  public class Dish
  {
    [Key]
    public int DishId {get;set;}

    [Required(ErrorMessage = "Dish name is required")]
    [Display(Name="Dish Name")]
    public string DishName { get; set; }

    [Required(ErrorMessage="Calorie count is required")]
    [Range(1,1000, ErrorMessage="Invalid number of calories")]
    [Display(Name="Calories:")]
    public int? Calories { get; set; }

    [Required(ErrorMessage="Tastiness is required")]
    [Range(1,5, ErrorMessage="Invalid value of tastiness")]
    [Display(Name="Tastiness Level:")]
    public int? Tastiness { get; set; }

    [Required(ErrorMessage="Please choose chef")]
    [Display(Name="Chefs:")]
    public int ChefId { get; set; }

    public Chef Creator { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
  }
}