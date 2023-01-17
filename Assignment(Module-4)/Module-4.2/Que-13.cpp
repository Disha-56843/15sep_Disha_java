/* Write a program to find the max number from given two numbers using
friend function. */
#include<iostream>
using namespace std;
class Maximum
{
    int a[5],i,Max;
    public:
    friend int data(Maximum &m);
};
int data(Maximum &m)
{
    cout<<"Enter any two value:";
    for(m.i=1;m.i<3;m.i++)
        {
			cin>>m.a[m.i];
		}
		for(m.i=1;m.i<3;m.i++)
		{
			if(m.a[m.i]>m.Max)
			{
				m.Max=m.a[m.i]; 
       
			}
        }
        cout<<endl<<"Maximum number is:"<<m.Max;

        return 0;
}
int main()
{
    Maximum m1;
    data(m1);

    return 0;
}
