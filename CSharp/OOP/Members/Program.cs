using System;

namespace Members
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }

    class Vehicle
    {
        int MaxNumPassengers; // THIS IS A FIELD -> JUST NEED A TYPE AND A NAME
        string Color; // FIELD
        double MaxSpeed; // FIELD

        static void MakeNoise(string noise) //METHOD
        {
            Console.WriteLine(noise);
        }

        // METHOD OVERLOADING; as long as input parameters are different, compiler will work with it
        static void MakeNoise()
        {
            Console.WriteLine("BEEEEP");
        }

        //PROPERTIES
        // someVehicle.ColorProp (return)=> Color Field
        // someVehicle.ColorProp = "Some Color" reassignment
        string ColorProp
        { // don't need both, just need one
            get
            {
                // return ""  Carn return an emtpy string as long as it matches the Prop
                // return $"This thing is {Color}" Can also return a full string
                return Color; // Can Return a Field
            }
            set // reassignment
            {
                if(value != "Green")
                    Color = value;
            }
        }

        // auto-implemented properties
        /*
            - Creates a "backing field" for the class
            - Known to the compiler but hidden from the source code
        */
        string Name{get;set;}
    }
}
