using System;
using System.Collections;

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
        public static void LoopArray(int[] numbers)
        {
            // Write a function that would iterate through each item of the given integer array and
            foreach(int num in numbers)
            {
                Console.WriteLine(num);
            }
            // print each value to the console.
        }

        public static int FindMax(int[] numbers)
        {
            int max = numbers[0];
            foreach(int num in numbers)
            {
                if(num > max)
                {
                    max = num;
                }
            }
            return max;
        }

        public static void GetAverage(int[] numbers)
        {
            int avg = 0;
            int count = numbers.Length;
            foreach(int num in numbers)
            {
                avg += num;
            }
            Console.WriteLine(avg/count);
            // Write a function that takes an integer array and prints the AVERAGE of the values in the array.
            // For example, with an array [2, 10, 3], your program should write 5 to the console.
        }

        public static int[] OddArray()
        {
            /*
                Create an an array of numbers from 1-255
                Then create a second array holding only the odd numbers
                return second array
            */
        ArrayList oddNums = new ArrayList();
        for(int i = 0; i <= 255; i++)
        {
            if (i % 2 != 0)
            {
                Console.WriteLine(i);
                oddNums.Add(i);
            }
        }
        int[] copy = oddNums.ToArray().Clone() as int[];
        Console.WriteLine(copy);
        return copy;
        }

        public static int GreaterThanY(int[] numbers, int y)
        {
           int count = 0;
           foreach(var num in numbers)
           {
               if(num > y)
               {
                   count++;
               }
           }
           return count;
        }

        public static void SquareArrayValues(int[] numbers)
        {
            int i = 0;
            do
            {
                numbers[i] = numbers[i] * numbers[i];
                Console.WriteLine(numbers[i]);
                i++;
            } while ( i < numbers.Length);
        }

        public static void EliminateNegatives(int[] numbers)
        {
            int i = 0;
            while(i < numbers.Length)
            {
                if (numbers[i] < 0)
                {
                    numbers[i] = 0;
                }
                Console.WriteLine(numbers[i]);
                i++;
            }
        }

        public static void MinMaxAverage(int[] numbers)
        {
            // Given an integer array, say [1, 5, 10, -2], create a function that prints the maximum number in the array,
            // the minimum value in the array, and the average of the values in the array.
            int i, max, min, sum= 0;
            float avg;
            max = numbers[0];
            min = numbers[0];
            for(i = 1; i < numbers.Length; i++) {
                if (numbers[i] > max)
                {
                    max = numbers[i];
                }
                if (numbers[i] < min)
                {
                    min = numbers[i];
                }
                sum += numbers[i];
            }
            avg = (float)sum / (float)numbers.Length;
            Console.WriteLine($"Min: {min} Max: {max} Sum: {sum} Average: {avg}");
        }

        public static void ShiftValues(int[] numbers)
        {
            int i = 1;
            do
            {
                numbers[i-1] = numbers[i];
                i++;
            } while (i < numbers.Length);
            numbers[numbers.Length -1] = 0;
            foreach(var num in numbers)
            {
                Console.WriteLine(num);
            }
        }

        public static object[] NumToString(int[] numbers)
        {
            object[] objects = new object[numbers.Length];
            int i = 0;
           while(i < numbers.Length)
           {
               if (numbers[i] < 0)
               {
                   objects[i] = "Dojo";
               }
               else
               {
                   objects[i]  = numbers[i];
               }
               i++;
           }
           foreach(var item in objects)
           {
               Console.WriteLine(item);
           }
           return objects;
        }

        static void Main(string[] args)
        {
            // PrintNumbers();
            // PrintOdds();
            // PrintSum();
            // LoopArray(new int[] {1,2,3,4,5,6});
            // Console.WriteLine(FindMax(new int[] {1,-2,3,0,5,777}));
            // GetAverage(new int[] {1,2,3,4,5,6});
            // Console.WriteLine(OddArray());
            // Console.WriteLine(GreaterThanY(new int[]{1,3,5,7},3));
            // SquareArrayValues(new int[]{1,5,10,-10});
            // EliminateNegatives(new int[] {1,5,10,-2});
            // MinMaxAverage(new int[] {1,5,10,-2});
            // ShiftValues(new int [] {1,5,10,7,-2});
            // Console.WriteLine(NumToString(new int[]{-1,-3,2}));
        }
    }
}
