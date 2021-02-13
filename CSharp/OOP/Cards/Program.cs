using System;
using System.Collections.Generic

namespace Cards
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
        public class Card
        {
            public string StringVal;
            public string Suit;
            public int Val;

            public Card(string strVal, string suit, int val)
            {
                StringVal = strVal;
                Suit = suit;
                Val = val;
            }
        }
        public class Deck
        {
            public List<Card> cards = new List<Card>(52);
            public Card deal()
            {
                Card topCard = cards[0];
                cards.Remove(topCard);
                return topCard;
            }
            public void reset()
            {
                cards = new List<Card>(52);

            }
            public void shuffle()
            {
                Random randomCard = new Random();
                int idx = 0;
                do
                {
                    Card temp = cards[idx];
                    Card newIdx = cards[randomCard.Next(0, cards.Count)];
                    cards[idx] = newIdx;
                    newIdx = temp;
                    idx++;
                } while(idx < cards.Count);
            }
        }
        public class Player
        {
            public string Name;
            List<Card> Hand;
            public Player(string name)
            {
                Name = name;
                Hand = new List<Card>();
            }

            public Card draw(int ) 
        }
    }
}
