using System;

namespace Assignment
{
    class Program
    {
        static void Main(string[] args)
        {
           int[] arr = {1,14,2,16,10,20};
           int temp;

           // simple sort Descending order
           for(int j=0;j<arr.Length-1;j++){
               for(int i=0;i<arr.Length-1;i++){
                   if(arr[i]<arr[i+1]){
                       temp = arr[i+1];
                       arr[i+1] = arr[i];
                       arr[i] = temp;
                   }
               }
           }

           Console.WriteLine($"Third Largest number is: {arr[2]} ");

        }
        
        

    }
}
