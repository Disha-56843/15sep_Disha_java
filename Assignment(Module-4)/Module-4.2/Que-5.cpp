/*Assume a class cricketer is declared. Declare a derived class batsman from cricketer. Data member of batsman. Total runs, 
Average runs and best performance. Member functions input data, calculate average runs, Display data. (Single Inheritance)*/
#include<iostream>
using namespace std;
class cricketer
{
	public:
		int tr //total runs
		float ar//Average runs
		string bp //Best performance
		int batsman()
		{
			cout<<"Enter total runs of batsman:"<<endl;
			cin>>tr;
		}
};
class batsman : public cricketer
{
	public:
		int data()
		{
			cout<<
		}
};
int main()
{
	
}
