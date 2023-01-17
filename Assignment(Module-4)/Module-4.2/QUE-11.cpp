// Write a program to calculate the area of circle, rectangle and triangle using Function Overloading.
#include<iostream>
using namespace std;
class Shapes
{
    public:
    int Area(double pi, int r )//pi=3.14, r=radius
    {

        cout<<"\nArea of circle is:"<<pi*r*r;

    }

    int Area(int w, int l)//w=width, l=length
    {

        cout<<"\n\nArea of rectangle is :"<<w*l;

    }

    int Area(int h, double b)//b=Base, h=height

    {

        cout<<"\n\nArea of triangle is:"<<h*b/2;

    }
};

int main()
{
    Shapes s1;
    s1.Area(3.14,4);//pi=3.14, r=4
    s1.Area(5,3);//w=5, l=3
    s1.Area(7,8.2);//h=7, b=8.2
}