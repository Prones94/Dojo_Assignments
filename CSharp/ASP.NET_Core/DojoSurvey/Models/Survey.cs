using System;
using System.ComponentModel.DataAnnotations;

namespace DojoSurvey.Models
{
  public class Survey
  {
    [Required(ErrorMessage="Name is required")]
    [MinLength(2, ErrorMessage="Name must be at least 2 characters")]
    [Display(Name="Full Name:")]
    public string Name { get; set; }

    [Required(ErrorMessage="Please choose a location:")]
    [Display(Name="Location:")]
    public string Location { get; set; }

    [Required(ErrorMessage="Please choose a language:")]
    [Display(Name="Favorite Language:")]
    public string Language { get; set; }

    [MinLength(20, ErrorMessage="Must be 20 characters or more if leaving a comment")]
    [Display(Name="Comment (optional):")]
    public string Comment { get; set; }
  }
}