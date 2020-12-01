using System;
using System.Collections.Generic;

namespace Collections
{
    class Program
    {
        static void Main(string[] args)
        {
            // Create Three Basic Arrays

                // 1. Create an array to hold integer values 0 - 9
                int[] numArray = new int[]{0,1,2,3,4,5,6,7,8,9};
                // 2. Create an array of the names "Tim", "Martin", "Nikki", & "Sara"
                string[] nameArray = new string[] {"Tim", "Martin", "Nikki", "Sara"};
                // 3. Create an array of length 10 that alternates between true and false values, starting with true
                bool[] boolArray = { true, false, true, false, true, false, true, false, true, false};


            // List of Flavors

                // 1. Create a list of ice cream flavors that holds at least 5 different flavors
                List<string> iceCreamFlavors = new List<string>()
                {
                    "Rocky Road",
                    "Neopolitan",
                    "Peanut Butter Fudge",
                    "Mint Chocolate",
                    "Vanilla",
                };
                // 2. Output the length of this list after building it
                Console.WriteLine($"There are {iceCreamFlavors.Count} flavors");
                // 3. Output the third flavor in the list, then remove this value
                Console.WriteLine($"The third ice cream flavor is {iceCreamFlavors[2]}");
                iceCreamFlavors.Remove(iceCreamFlavors[2]);
                Console.WriteLine($"The third ice cream flavor is {iceCreamFlavors[2]}");
                // 4. Output the new length of the list (It should be one less)
                Console.WriteLine($"There are {iceCreamFlavors.Count} flavors");


            // User Info Dictionary
                // 1. Create a dictionary that will store both string keys as well as string values
                Random randFlavor = new Random();
                Dictionary<string, string>user = new Dictionary<string, string>();
                // 2. Add key/value paris to this dictionary where:
                user.Add(nameArray[0], iceCreamFlavors[randFlavor.Next(4)]);
                user.Add(nameArray[1], iceCreamFlavors[randFlavor.Next(4)]);
                user.Add(nameArray[2], iceCreamFlavors[randFlavor.Next(4)]);
                user.Add(nameArray[3], iceCreamFlavors[randFlavor.Next(4)]);
                    // - each key is a name from your names array
                    // - each value is a areandomly select a flavor from your flavors list
                // 3. Loop through the dictionary and print out each user's name and their associated ice cream flavor
                foreach(var entry in user)
                {
                    Console.WriteLine(entry.Key + " " + entry.Value);
                }
        }
    }
}
