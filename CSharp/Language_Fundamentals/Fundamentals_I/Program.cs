using System;
using System.Collections.Generic;

namespace Fundamnetals_I
{
    class Program
    {
        static void Main(string[] args)
        {
            // Variable Declaration
            int number = 40;
            Console.WriteLine(number);
            string name = "Ian";
            Console.WriteLine(name);
            double weight = 150.4;
            Console.WriteLine(weight);
            char letter = 'a';
            Console.WriteLine(letter);
            bool isHungry = true;
            Console.WriteLine(isHungry);
            int num = 5;
            Random rand = new Random();

            // Conditionals
            if (!isHungry)
            {
                Console.WriteLine($"{name} is not hungry");
            }
            if (number > 30 && weight < 180)
            {
                Console.WriteLine("You are at a healthy weight");
            }
            else if (weight > 180)
            {
                Console.WriteLine("You should start working on a diet");
            }
            else
            {
                Console.WriteLine($"{letter}");
            }

            // Loops
            for (int i = 0; i <= num; i++)
            {
                Console.WriteLine(i);
                Console.WriteLine(rand.Next(1,10));
                // Console.WriteLIne(rand.NextDouble());
            }

            while (num >= 0)
            {
                Console.WriteLine(num);
                num--;
            }

            // Arrays
            // Declaring an array of length 5, intialized by default to all zeroes
            int[] numArray = new int[5];
            // Declaring an array with [re-poluated values
            // For arrays initialized this weay, the length is determined by the size of the given data
            int[] numArray2 = {1,2,3,4,5};
            // Can declare an array without initialization, but must use the "new" operator once to define the array's values
            int[] array3;
            array3 = new int[] {1,3,4,5,7};
            int[] arrayOfInts = {1,2,4,6};
            Console.WriteLine(arrayOfInts[0]);
            arrayOfInts[2] = 5;
            Console.WriteLine(arrayOfInts[2]);
            string[] myCars = new string[] {"Mazda", "Ford", "Dodge","Nissan"};
            // regular for loop
            for (int idx = 0; idx < myCars.Length; idx++)
            {
                Console.WriteLine($"I own a {myCars[idx]}");
            }
            // Using foreach
            foreach(string car in myCars)
            {
                Console.WriteLine($"I sold a {car}");
            }

            // Using Generic Lists
            // Initializing an empty list using List
            List<string> bikes = new List<string>();
            // Use the Add function, which is similar to push
            bikes.Add("Kawasaki");
            bikes.Add("Triumph");
            bikes.Add("BMW");
            bikes.Add("Moto Guzzi");
            bikes.Add("Harley Davidson");
            bikes.Add("Suzuki");
            // Access the generic list values same as normal array
            Console.WriteLine(bikes[2]);
            Console.WriteLine($"We have {bikes.Count} motorcycles");
            // Loop through the generic list
            for (var idx = 0; idx < bikes.Count; idx++)
            {
                Console.WriteLine("-" + bikes[idx]);
            }

            // Insert a new item at a specific index
            bikes.Insert(2, "Yamaha");
            // Removal from List
            bikes.Remove("Suzuki");
            foreach(string bike in bikes)
            {
                Console.WriteLine("-"+bike);
            }

            // Dictionaries
            Dictionary<string,string> profile = new Dictionary<string,string>();
            //Almost all the methods that exists with Lists are the same with Dictionaries
            profile.Add("Name", "Speros");
            profile.Add("Language", "PHP");
            profile.Add("Location", "Greece");
            Console.WriteLine("Instructor Profile");
            Console.WriteLine("Name - " + profile["Name"]);
            Console.WriteLine("From - " + profile["Location"]);
            Console.WriteLine("Favorite Language - " + profile["Language"]);
            // iterate through the dictionary
            foreach(KeyValuePair<string,string> entry in profile)
            {
                Console.WriteLine(entry.Key + " - " + entry.Value);
            }
            Console.WriteLine("Using type inference with the variable VAR");
            //Using type inference with the variable VAR
            foreach(var entry in profile)
            {
                Console.WriteLine(entry.Key + " - " + entry.Value);
            }

        }
    }
}
