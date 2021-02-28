using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace ChefsNDishes.Models
{
  public class Chef
  {
    [Key]
    public int ChefId { get; set; }

    [Required(ErrorMessage="First Name is required")]
    [Display(Name = "First Name:")]
    public string FirstName { get; set; }

    [Required(ErrorMessage="Last Name is required")]
    [Display(Name = "Last Name:")]
    public string LastName { get; set; }

    [DataType(DataType.Date)]
    [Required(ErrorMessage="DOB is required")]
    [Display(Name = "Date of Birth:")]
    [ProperAge]
    public DateTime DOB { get; set; }

    public List<Dish> DishList { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime Updated { get; set;} = DateTime.Now;
  }
}