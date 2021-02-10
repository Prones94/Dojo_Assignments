using System;

namespace Construction
{
    class Program
    {
        /*
            Object Construction
        */
        static void Main(string[] args)
        {
            // Instantiation of the Vehicle Class
            Vehicle myCar = new Vehicle();
            Console.WriteLine($"This vehicle holds {myCar.NumPassengers} people");
        }

    }

        // Creating a Vehicle Class outside of the main Program class
    public class Vehicle
    {
        /*
            Accessibility of class members is defaulted to private
            Must add the PUBLCI keyword to anything we want to allow access into
        */

        // Unassigned public integer initialized to 0
        public int NumPassengers;

        // Creating the Constructor, use the same name as the class
        // public Vehicle(int val)
        // {
        //     NumPassengers = val;
        // }
        // We can create a constructor class without passing in values and create them within the constructor itself
        public Vehicle() // notice nothing within the parens
        {
            NumPassengers = 3;
        }
    }
}
