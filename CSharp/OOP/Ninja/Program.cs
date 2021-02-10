using System;
using System.Collections.Generic;

namespace Ninja
{
    class Program
    {
        static void Main(string[] args)
        {
            var Ian = new Ninja();
            var newBuffet = new Buffet();
            while(!Ian.isFull)
            {
                Ian.Eat(newBuffet.Serve());
            }
            Console.WriteLine();
            Console.WriteLine($"Ian ate these foods:");
            foreach (var food in Ian.FoodHistory)
            {
                Console.WriteLine($"{food.Name} with {food.Calories} calories");
            }
        }
    }

    public class Food
    {
        public string Name;

        public int Calories;

        public bool IsSpicy;

        public bool IsSweet;

        public Food(string name, int cal, bool spicy, bool sweet)
        {
            Name = name;
            Calories = cal;
            IsSpicy = spicy;
            IsSweet = sweet;
        }
    }

    class Buffet
    {
        public List<Food> Menu;

        //constructor
        public Buffet()
        {
            Menu =
                new List<Food>()
                {
                    new Food("Eggs", 50, false, false),
                    new Food("Waffles", 100, false, true),
                    new Food("Curry", 200, true, false),
                    new Food("Cheeseburger", 500, false, false),
                    new Food("Lettuce", 10, false, false),
                    new Food("Chips", 175, false, false),
                    new Food("Chocolate", 80, false, true)
                };
        }

        public Food Serve()
        {
            Random chooseItem = new Random();
            int idx = chooseItem.Next(Menu.Count);
            return Menu[idx];
        }
    }

    class Ninja
    {
        private int calorieIntake;
        public List<Food> FoodHistory;
        // Ninja Constructor -> calorieIntake, FoodHistory
        public Ninja()
        {
            calorieIntake = 0;
            FoodHistory = new List<Food>();
        }
        // public class "getter"
        public bool isFull{get;set;}
        public void Eat(Food item)
        {
            if(calorieIntake < 1200)
            {
                calorieIntake += item.Calories;
                FoodHistory.Add(item);
                Console.WriteLine($"Name: {item.Name} Sweet: {item.IsSweet} Spicy: {item.IsSpicy}");
            }
            else
            {
                Console.WriteLine("WARNING! Ninja is Full.");
                isFull = !isFull;
            }
        }
    }
}
