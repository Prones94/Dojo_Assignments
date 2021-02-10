using System;
using System.Collections.Generic;

namespace Puzzles
{
    class Program
    {
        static void Main(string[] args)
        {
            // PrintThis(RandomArray());
            // TossCoin();
            // TossMultipleCoins(5);
        }
        static void PrintThis(int[] arr)
        {
            int i = 0;
            for(; i < arr.Length; i++)
            {
                Console.WriteLine(arr[i]);
            }
        }
        static void PrintThat(List<string> arr)
        {
            foreach(var item in arr)
            {
                Console.WriteLine(item);
            }
        }
        public static List<string>Names()
        {
            List<string> names = new List<string>()
            {
                "Todd",
                "Tiffany",
                "Charlie",
                "Geneva",
                "Sydney"
            };
            Random rand = new Random();
            int i = 0;
            while(i < names.Count)
            {
                string name = names[i];
                int idx = rand.Next(i, names.Count);
                names[idx] = name;
                i++;
            }
            PrintThat(names);
            List<string> longName = new List<string>();
            foreach(string name in names)
            {
                if(name.Length >= 5)
                    longName.Add(name);
                else
                {
                    Console.WriteLine(name);
                }
            }
            return longName;
        }

        public static string TossCoin()
        {
            Console.WriteLine("Tossing a Coin!");
            Random rand = new Random();
            int num;
            string result;
            num = rand.Next(1,3);
            if(num == 1)
            {
                Console.WriteLine("Heads");
                result = "1";
            }
            else{
                Console.WriteLine("Tails");
                result = "2";
            }
            return result;
        }

        static double TossMultipleCoins(int num)
        {
            int i = 0;
            double ratio = 0, rate= 0;
            int win = 0, loss = 0;
            do
            {
                string result = TossCoin();
                if (result == "1")
                {
                    win += 1;
                }
                else
                {
                    loss += 1;
                }
                i++;
            } while (i < num);
            ratio = win / loss;
            rate = (win/num) * 100;
            Console.WriteLine($"Win/Loss ratio: {win}/ {loss}. Win rate is {rate}%");
            return ratio;
        }

        public static int[] RandomArray()
        {
            // Create and return an integer array
            // Add 10 random integers between 5 - 25 to the integer array
            // Print the max, min, and sum of the array
            Random rand = new Random();
            int[] array = new int[10];
            int i=0, max, min, num = 0, sum = 0;
            max = array[0];
            min = array[0];
            while(i < array.Length)
            {
                num = rand.Next(5,26);
                array[i] = num;
                i++;
            }
            foreach(int number in array)
            {
                if (number > max)
                {
                    max = num;
                }
                else if(number< min)
                {
                    min = number;
                }
                sum += number;
            }
            Console.WriteLine($"Max: {max} Min: {min} Sum: {sum}");
            return array;
        }


    }
}
