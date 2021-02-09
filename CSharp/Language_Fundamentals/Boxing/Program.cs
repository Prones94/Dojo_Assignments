using System;
using System.Collections.Generic;

namespace Boxing
{
    class Program
    {
        static void Main(string[] args)
        {
            // Create an empty List of type object
            List<object> objects = new List<object>()
            { // Add the following values to the list: 7, 28, -1, true, "chair"
                7,
                28
                -1,
                true,
                "chair"
            };
            // Loop through the list and print all values
            int sum = 0;
            foreach(var item in objects)
            {
                if (item is int)
                {
                    sum += (int)item;
                    Console.WriteLine(item);
                }
                if (item is bool)
                {
                    Console.WriteLine(item);
                }
                if (item is string)
                {
                    Console.WriteLine(item);
                }
            }
            // Add all values that are int type together and output the sum
            Console.WriteLine(sum);
        }
    }
}
