//Write a program of Addition, Subtraction, Division, Multiplication using constructor.
#include<iostream>
using namespace std;
class getdata
{
	public:
		int a,b,e;
		 getdata()
		{
			cout<<endl<<"Enter value of a and b :"<<endl;
			cin>>a>>b;
			
		}
};
class add : public getdata
{
	public:
		add()
		{
		e=a+b;
		cout<<endl<<"Addition of a and b is:"<<endl<<e;
		}
};
class sub : public getdata
{
	public:
		sub()
		{
			e=a-b;
			cout<<endl<<"Substraction of b and c is:"<<endl<<e;
		}
};
class mul : public getdata
{
	public:
		mul()
		{
			e=a*b;
			cout<<endl<<"Multiplication of c and d is:"<<endl<<e;
		}
};
class div : public getdata
{
	public:
		div()
		{
			e=a/b;
			cout<<endl<<"Divission of b and d is :"<<endl<<e;
		}
};
int main ()
{
	
	add a1;
	sub s1;
	mul m1;
	div d1;
}
