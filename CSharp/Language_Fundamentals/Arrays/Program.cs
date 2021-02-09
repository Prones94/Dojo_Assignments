using System;

namespace Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            // Multidimension array declaration
            // This example contains 3 arrays -- each of these is length 2 -- all initializeds to zeroes
            int [,] twoDArray = new int[3,2];
            // This is equivalent to:
            //  int [,] array2D = new int[3,2]  {  { 0,0 }, { 0,0 }, { 0,0 } };
            // This example has 2 large rows that each contain 3 arrays -- and each of those arrays is length 4.
            int [,,] threeDArray = new int[2,3,4]
                {
                    { {45,1,16,17},{4,47,21,68},{21,28,32,76} },
                    {  { 11,0,85,42 }, { 9,10,14,96 }, { 66,99,33,12 }  }
                };
            // Accessing the values within the 2D Array
            Console.WriteLine(twoDArray[0,1]); // Should print 0
            Console.WriteLine(threeDArray[1,0,3]); // Should print 42

            // Jagged Array Declaration
            int[] [] jaggedArray = new int[3][];
            jaggedArray[0] = new int[5];
            jaggedArray[1] = new int[4];
            jaggedArray[2] = new int[2];

            int[][] jaggedArray2 = new int[][] {
                new int[] {1,3,5,7,9},
                new int[] {0,2},
                new int[] {11,22,33,44}
            };
            // Short hand
            int[][] jaggedArray3 = {
                new int[] {1,3,5,7,9},
                new int[] {0,2},
                new int[] {11,22,33,44}
            };

            // Mixing jagged and multidimensional arrays together
            int[][,] jaggedArray4 = new int[3][,]
            {
                new int[,] { {1,3}, {5,7} },
                new int[,] { {0,2}, {4,6}, {8,10} },
                new int[,] { {11,22}, {99,88}, {0,9} }
            };
            // Working through each array in a jagged array
            foreach(int[] innerArr in jaggedArray){
                Console.WriteLine("Inner array length is {0}", innerArr.Length);
            }
            // Accessing a jagged array
            Console.WriteLine(jaggedArray2[0][1]); // 3
            Console.WriteLine(jaggedArray3[2][3]); // 44
        }
    }
}
