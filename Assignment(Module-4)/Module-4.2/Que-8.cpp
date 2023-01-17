/*Write a program to Mathematic operation like Addition, Subtraction, Multiplication, Division Of two 
number using different parameters and Function Overloading*/
#include<iostream>
using namespace std;
class overload
{
    public:
    int mathematic (int a , int b)
    {
       
        cout<<endl<<"Addition of a and b is:"<<a+b;

        return 0;
    }
    int mathematic (int c, double d)
    {
       
        cout<<endl<<"Substraction of c and d is:"<<c - d;

        return 0;
    }
    int mathematic (double b, double c)
    {
       
         cout<<endl<<"Multiplication of b and c is:"<<b * c;

        return 1;
    }
    int mathematic (double a, int d)
    {
      
        cout<<endl<<"Divission of a and d is:"<<a / d;

        return 1;
    }
};
int main()
{
    overload o1;
    o1.mathematic(12, 23);
    o1.mathematic(11,23.5);
    o1.mathematic(23.5,33.2);
    o1.mathematic(22.6,43);

    return 0;
}
