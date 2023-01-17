// Write a program of to swap the two values using templates.
#include<iostream>
using namespace std;
template <class t>
t Swap(t a,t b)
{
   int c;
    c = a;
    a = b;
    b = c;
    
    return 0;
}
int main()
{
    cout<<"\nAfter swapping value:-";
	cout<<Swap<int>(12,22);
}
