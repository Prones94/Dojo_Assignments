using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FormSubmission.Models
{
  public class User
  {
    [Required(ErrorMessage="First name is needed")]
    [MinLength(3, ErrorMessage="Needs to be at least 3 characters long")]
    [Display(Name="First Name")]
    public string FirstName {get; set;}

    [Required(ErrorMessage="Last name is needed")]
    [MinLength(3, ErrorMessage="Needs to be at least 3 characters long")]
    [Display(Name="Last Name")]
    public string LastName {get;set;}

    [Required(ErrorMessage="Please enter date of birth")]
    [ValidDate]
    [Display(Name="DOB:")]
    public DateTime BirthDate {get;set;}

    [Required(ErrorMessage="Please enter an age")]
    [Range(0,100, ErrorMessage="Must be still alive")]
    [Display(Name="Age")]
    public int? Age {get; set;}

    [Required(ErrorMessage="Please enter an email")]
    [EmailAddress(ErrorMessage="This is not a valid email address")]
    [Display(Name="Email Address")]
    public string Email{get;set;}

    [Required(ErrorMessage="Please enter a password")]
    [MinLength(6, ErrorMessage="Must be at least 6 characters long")]
    [Display(Name="Password")]
    public string Password {get; set;}
  }

  public class ValidDateAttribute : ValidationAttribute
  {
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
      if((DateTime)value > DateTime.Today)
        return new ValidationResult("Please enter a valid date");
      return ValidationResult.Success;
    }
  }
}