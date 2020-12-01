using System;

namespace MultiJaggedArrays
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
                MultiDimensional Arrays
                    - Holds nested arrays
                    - Create the original array and not specify the number of inner arrays but also the size of each inner arrays
                    - Builds out a grid of sorts based on the various indexes
            */

            // Multidimensional arrya declaration
            // Example contains 3 arrays, each with length 2 all initialized to zeroes
            int [,] array2D = new int[3,2];
            // Equivalent to:
            // int[,] array @D = new int[3,2] { {0,0}, {0,0}, {0,0}};

            //  This example has 2 large rows taht contain 3 arrays, and each array is length 4
            int[,,] array3D = new int[2,3,4]
            {
                { {45, 1, 16,17}, {4,47,21,68}, {21,28,32,76}},
                { {11,0, 85, 42}, {9,10, 14, 96}, {66,99,33,12} }
            };
            // Accessing the multidimensional array
            Console.WriteLine(array2D[0,1]);
            Console.WriteLine(array3D[0,1,3]);

            /*
                Jagged Arrays
                    - use jagged arrays to vary lengths of inner arrays
                    - initialized and accessed differently
                    Do not nee dthe unifrom inner array sizes
            */
            // Jagged Array Declaration
            int[][] jaggedArray = new int[3][];
            jaggedArray[0] = new int[5]; // initialize first array length of 5
            jaggedArray[1] = new int[4];
            jaggedArray[2] = new int[2];
            int[][] jaggedArray2 = new int[][] {
                new int[] {1,3,5,7,9},
                new int[] {0,2},
                new int[] {11,22,33,44}
            };
            // Short hand form
            int[][] jaggedArray3 = {
                new int[] {1,3,57,9},
                new int[] {0,2},
                new int[] {11,22,33,44}
            };
            // Mix both jagged and multi-dimensional arrays
            int[][,] jaggedArray4 = new int[3][,]
            {
                new int[,] {{1,3}, {5,7}},
                new int[,] {{0,2}, {4,6}, {8,10}},
                new int[,] { {11,22}, {99,88}, {0,9}}
            };
            // Working through each array in a jagged array
            foreach(int[] innerArr in jaggedArray){
                Console.WriteLine("Inner array length is {0}", innerArr.Length);
            }
            Console.WriteLine(jaggedArray2[0][1]); // Output is 3
            Console.WriteLine(jaggedArray3[2][3]); // Output is 44
        }
    }
}
