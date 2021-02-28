using System.Collections.Generic;

namespace BankAccounts.Models
{
  public class AccountUser
  {
    public User LoggedInUser { get; set; }
    public List<Transaction> Transactions { get; set; }
    public Transaction Form { get; set; }
  }
}
