using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BankAccounts.Models
{
  public class Transaction
  {
    [Key]
    public int TransactionId { get; set; }

    [Required(ErrorMessage = "Amount input is needed")]
    [Display(Name = "Amount:")]
    [DataType(DataType.Currency)]
    public double Amount { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    public int UserId { get; set; }
    public User Owner { get; set; }
  }
}