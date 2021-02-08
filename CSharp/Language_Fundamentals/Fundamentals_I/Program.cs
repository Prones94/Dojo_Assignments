using System;

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
        }
    }
}
