using System;
using System.Collections.Generic;

namespace Collections
{
    class Program
    {
        static void Main(string[] args)
        {
            // Three Basic Arrays
            // 1. Create an array to hold integer values 0 - 9
                int[] nums = new int[]{0,1,2,3,4,5,6,7,8,9};
                // 2. Create an array of the names "Tim", "Martin", "Nikki", & "Sara"
                string[] names = new string[] {"Tim", "Martin", "Nikki", "Sara"};
                // 3. Create an array of length 10 that alternates between true and false values, starting with true
                bool[] boolArray = { true, false, true, false, true, false, true, false, true, false};

            // List of Flavors
            // 1. Create a list of ice cream flavors that holds at least 5 different flavors
            List<string> flavors = new List<string>()
            {
                "Chocolate",
                "Neopolitan",
                "Mint Chip",
                "Vanilla",
                "Pistachio",
            };
            // 2. Output the length of this list after building it
            Console.WriteLine(flavors.Count);
            // 3. Output the third flavor in the list, then remove this value
            Console.WriteLine(flavors[2]);
            flavors.RemoveAt(2);
            // 4. Output the new length of the list( should be one less)
            Console.WriteLine(flavors.Count);

            // User Info Dictionary
            // 1. Create a dictionary that will store both string keys as well as string values
            Dictionary<string,string> users = new Dictionary<string, string>();
            /* 2. Add key/value pairs to this dictionary where:
                    each key is a name from your names array
                    each value is a randomly selected flavor from your flavors list
            */
            Random flavor = new Random();
            int flavorLength = flavors.Count;
            users.Add(names[0], flavors[flavor.Next(0,flavorLength)] );
            users.Add(names[1], flavors[flavor.Next(0,flavorLength)] );
            users.Add(names[2], flavors[flavor.Next(0,flavorLength)] );
            users.Add(names[3], flavors[flavor.Next(0,flavorLength)] );
            // 3. Loop through the dictionary and print out each user's name and their associated ice cream flavor
            foreach(var entry in users)
            {
                Console.WriteLine($"{entry.Key} {entry.Value}");
            }
        }

    }
}
