using System;
using System.ComponentModel.DataAnnotations;

namespace LoginRegistration.Models
{
    public class LoginUser
    {
        [Required(ErrorMessage = "Please enter an email")]
        [EmailAddress(ErrorMessage = "Email address is invalid")]
        [Display(Name = "Email Address:")]
        public string LoginEmail { get; set; }

        [Required(ErrorMessage = "Please enter a password")]
        [DataType(DataType.Password)]
        [Display(Name = "Password:")]
        public string LoginPassword { get; set; }
    }
}
