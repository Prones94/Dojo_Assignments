using System;

namespace Human
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
    class Human{
        public string Name;
        public int Strength;
        public int Intelligence;
        public int Dexterity;

        int health;
        public int Health
        {
            get { return Health; }
        }
        public Human(string name)
        {
            Name = name;
            Strength = 3;
            Intelligence = 3;
            Dexterity = 3;
            health = 100;
        }

        public Human(string name, int str, int Int, int dex, int hp)
        {
            Name = name;
            Strength = str;
            Intelligence = Int;
            Dexterity = dex;
            health = hp;
        }

        public int Attack(Human target)
        {
            int damage  = 5 * this.Strength;
            target.health -= damage;
            return target.health;
        }
    }
}
