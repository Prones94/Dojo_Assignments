using System;

namespace Fundamentals
{
    class Program
    {
        static void Main(string[] args)
        {
            // for(int i = 0; i <= 255;i++)
            // {
            //     Console.WriteLine(i);
            // }
            // for (int i = 1;i <= 100;i++)
            // {
            //     if (i % 3 == 0 && i % 5 ==0)
            //     {
            //         Console.WriteLine("FizzBuzz");
            //     }
            //     if (i % 3 == 0)
            //     {
            //         Console.WriteLine("Fizz");
            //     }
            //     else if (i % 5 == 0)
            //     {
            //         Console.WriteLine("Buzz");
            //     }
            // }
            int i = 0;
            int end = 100;
            while(i < end)
            {
                if (i % 3 == 0 && i % 5 ==0)
                {
                    Console.WriteLine("FizzBuzz");
                }
                if (i % 3 == 0)
                {
                    Console.WriteLine("Fizz");
                }
                else if (i % 5 == 0)
                {
                    Console.WriteLine("Buzz");
                }
                i += 1;
            }
        }
    }
}
