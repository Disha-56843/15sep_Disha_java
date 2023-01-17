/*Write a program to swap the two numbers using friend function without
using third variable */
#include<iostream>
using namespace std;
class Swap
{
	int a,b;
    public:
    
    friend int data(Swap &s);
    
};
int data (Swap &s)
{
    cout<<"Enter value of a and b:";
    cin>>s.a>>s.b;
    s.a=s.a*s.b;
    s.b=s.a/s.b;
    s.a=s.a/s.b;
    cout<<endl<<"After swapping value a="<<s.a<<endl<<"b="<<s.b<<endl;
    return 0;
}
int main()
{
    Swap a1;
    data(a1);
}
