//WAP to create simple calculator using class.
#include<iostream>
using namespace std;
int c;
float a,b;
class calculation
{
	public:
		
		
		int getdata()
		{
			cout<<endl<<"\nEnter value of a,b and c:";
			cin>>a>>b>>c;
			
			return 0;
		}


		int addition()
		{
		
			return a + b;
		}
		

		int substraction()
		{
		
		
			return a - c;
		}
		

		int multiplication()
		{
		
			return a * b;
		}
		

		int divission()
		{	
		
			return b / c;
		}
			
};
int main()
{
	calculation c1;
	c1.getdata();
	
	cout<<endl<<"Addition of a and b is:"<<c1.addition();
	cout<<endl<<"Substraction of a and c is:"<<c1.substraction();
	cout<<endl<<"Multiplication of b and a is:"<<c1.multiplication();
	cout<<endl<<"Divission of b and c is:"<<c1.divission();	
	

	return 0;
}
