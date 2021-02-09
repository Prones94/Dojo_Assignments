using System;

namespace Basic_13
{
    class Program
    {
        public static void PrintNumbers()
        {
            // Print all integers from 1 to 255
            for(int i = 1; i <= 255; i++)
            {
                Console.WriteLine(i);
            }
        }
        public static void PrintOdds()
        {
            // Print all of the odd integers from 1 to 255
            int i = 1;
            while(i <=255)
            {
                Console.WriteLine(i);
                i += 2;
            }
        }

        public static void PrintSum()
        {
            /*
                Print all of the number from 0 to 255
                but this time, also print the sum as you go
            */
            int sum = 0, i = 0;
            while(i <= 10)
            {
                sum += i;
                Console.WriteLine($"New number: {i} Sum: {sum}");
                i++;
            }
        }

        public static int FindMax(int[] numbers)
        {
            /*
                write a function that takes an integer array and prints and returns the maximum value in the array
                Your program should also work with a given array that has all negative numbers
            */
        }

        static void Main(string[] args)
        {
            // PrintNumbers();
            // PrintOdds();
            PrintSum();
        }
    }
}
