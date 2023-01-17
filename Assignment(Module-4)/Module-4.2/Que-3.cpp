//Write a program to find the multiplication values and the cubic values using inline function.
#include<iostream>
using namespace std;
class Multiplication
{
    public:
    inline int mul (int a, int b)
    {
        return a * b ;
    }
};
class Cubic 
{
    public:
    inline int cube ( int a)
    {
        return a*a*a;
    }
};
int main ()
{
    Multiplication m1;
    Cubic c1;
    cout<<"Mutliplication of two values is:"<<m1.mul( 12,23);
    cout<<endl<<"Cube of two value is:"<<c1.cube(10);

    return 0;
}