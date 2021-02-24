using System;
using System.ComponentModel.DataAnnotations;

namespace CRUDelicious.Models
{
  public class Dish
  {
    [Key]
    public int DishId  { get;set; }

    [Required(ErrorMessage = "Please input a dish name")]
    [Display(Name="Name of Dish:")]
    public string Name { get;set; }

    [Required(ErrorMessage="Please input chefs' name")]
    [Display(Name="Name of chef:")]
    public string Chef { get;set; }

    [Required(ErrorMessage="Choose a tastiness level")]
    [Range(1,5)]
    [Display(Name="Tastiness")]
    public int? Tastiness { get;set; }

    [Required(ErrorMessage="Set calories please")]
    [Range(1,1000)]
    [Display(Name="Calories:")]
    public int? Calories { get;set; }

    [Required(ErrorMessage="Please enter a description of the dish")]
    [Display(Name="Description")]
    public string Description { get;set; }

    public DateTime CreatedAt { get;set; } = DateTime.Now;

    public DateTime UpdatedAt { get;set; } = DateTime.Now;
  }
}