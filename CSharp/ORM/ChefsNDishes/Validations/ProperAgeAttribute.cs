using System
using System.ComponentModel.DataAnnotations;

namespace ChefsNDishes.Models
{
  public class ProperAgeAttribute : ValidationAttribute
  {
    private DateTime DOB;

    public string GetErrorMessage() => "Chef must be at least 18 years old"

    protected override ValidationResult IsValid(object value, ValidationContext validationcontext)
    {
      if(value is DateTime)
      {
        if((DateTime)value > DateTime.Now.AddYears(-18))
        {
          return new ValidationResult(GetErrorMessage());
        }
        return ValidationResult.Success;
      }
      return new ValidationResult("Invalid Date");
    }
  }
}