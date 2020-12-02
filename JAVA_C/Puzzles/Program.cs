using System;
using System.Collections.Generic;

namespace Puzzles
{
    class Program
    {
        // public static int[] RandomArray()
        // {
        //     int[] random = new int[10];
        //     Random rand = new Random();
        //     for (int val = 0; val < 10;  val++)
        //     {
        //         random[val] = rand.Next(5,25);
        //     }
        //     return random;
        // }
        // public static void MinMax(int[] numbers)
        // {
        //     int max = numbers[0];
        //     int min = numbers[0];
        //     int sum = 0;
        //     for (int i =0; i < numbers.Length; i++)
        //     {
        //         if (numbers[i] > max )
        //         {
        //             max = numbers[i];
        //         }
        //         if (numbers[i] < min)
        //         {
        //             min = numbers[i];
        //         }
        //         sum += numbers[i];
        //     }
        //     Console.WriteLine($"Max: {max} Min: {min} Sum: {sum}");
        // }

        // public static string TossCoin()
        // {
        //     Console.WriteLine("Tossing a Coin!");
        //     int randomNum = new int();
        //     string face = new string ("");
        //     Random rand = new Random();
        //     for (int val = 0; val < 2; val++)
        //     {
        //         randomNum = rand.Next(0,2);
        //         if (randomNum == 0)
        //         {
        //             face = "Heads";
        //             Console.WriteLine(face);
        //         }
        //         if (randomNum == 1)
        //         {
        //             face = "Tails";
        //             Console.WriteLine(face);
        //         }
        //     }
        //     return face;
        // }

        // public static double TossMultipleCoins(int num)
        // {
        //     Console.WriteLine("Tossing a Coin!");
        //     int randomNum = new int();
        //     double coin = new double();
        //     Random rand = new Random();
        //     for (int val = 0; val < num; val++)
        //     {
        //         randomNum = rand.Next(0,2);
        //         if (randomNum == 0)
        //         {
        //             coin += 0;
        //             Console.WriteLine("Tails");
        //         }
        //         if(randomNum == 1)
        //         {
        //             coin += 1;
        //             Console.WriteLine("Heads");
        //         }
        //     }
        //     coin = coin/num;
        //     return coin;
        // }

        public static List<string> Names(List<string> name)
        {
            List<string> NameList = new List<string>();
            List<string> names = new List<string>();
            string rstrings = new string("");
            Random rand = new Random();
            int place = name.Count;
            for (int val = 0; val < place; val++)
            {
                rstrings = (name[rand.Next(0, (name.Count))]);
                NameList.Add(rstrings);
                NameList.Remove(rstrings);
                Console.WriteLine(NameList[val]);
                if (rstrings.Length > 5)
                {
                    names.Add(rstrings);
                }
            }
            return names;
        }
        static void Main(string[] args)
        {
            // int[] numbers = RandomArray();
            // MinMax(numbers);
            // Console.WriteLine(TossCoin());
            // Console.WriteLine(TossMultipleCoins(10));
            List<string> names = new List<string>();
            names.Add("Todd");
            names.Add("Tiffany");
            names.Add("Chalie");
            names.Add("Geneva");
            names.Add("Sydney");
            Names(names);

        }
    }
}
