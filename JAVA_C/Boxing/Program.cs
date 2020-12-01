using System;
using System.Collections.Generic;

namespace Boxing
{
    class Program
    {
        static void Main(string[] args)
        {
            List<object> box = new List<object>();
            box.Add(7);
            box.Add(28);
            box.Add(-1);
            box.Add(true);
            box.Add("chair");
            int sum = 0;
            foreach(object val in box)
            {
                if (val is int)
                {
                    sum += (int)val;
                }
            }
            Console.WriteLine($"sum is {sum}");
            foreach(object val in box)
            {
                Console.WriteLine(val);
            }
        }
    }
}
