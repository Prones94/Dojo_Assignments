using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BankAccounts.Models
{
  public class User
  {
    [Key]
    public int UserId { get; set; }

    [Required(ErrorMessage ="First name is required")]
    [MinLength(2, ErrorMessage = "Must be at least 2 characters long")]
    [Display(Name = "First Name:")]
    public string FirstName { get; set; }

    [Required(ErrorMessage ="Last name is required")]
    [MinLength(2, ErrorMessage = "Must be at least 2 characters long")]
    [Display(Name = "Last Name:")]
    public string LastName { get; set; }

    [Required(ErrorMessage ="Email is required")]
    [EmailAddress]
    [Display(Name = "Email:")]
    public string Email { get; set; }

    [DataType(DataType.Password)]
    [Required(ErrorMessage ="Password is required")]
    [MinLength(8, ErrorMessage = "Must be at least 8 characters long")]
    public string Password { get; set; }

    [NotMapped]
    [Compare("Password", ErrorMessage ="Passwords do not match")]
    [DataType(DataType.Password)]
    public string ConfirmPassword { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
  }

}