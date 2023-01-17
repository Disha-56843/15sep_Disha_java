#include<iostream>
using namespace std;

class Bank
{

//Declaration of data members
public:
char name[20];
char account_type[20];
int account_number;
int balance;

//member functions of the class Bank
// initialize function to initialize data members

void getdata()
{
	cout<<"\nEnter Account Holders Name:";
	cin>>name;
	cout<<"\nEnter Account type:";
	cin>>account_type;
	cout<<"\nEnter account number:";
	cin>>account_number;
	cout<<"\nEnter balance to deposit:";
	cin>>balance;
}

//deposit() function to deposit amount in account
void deposit()
{
	int bal;
	cout<<endl<<"\n nter the amout to deposit:"<<endl;
	cin>>bal;
	balance+=bal;
	cout<<"\nAmount deposited successfuly\nYour New Balance:"<<balance;
}

//check() function to withdraw amount and check remaining balance

void check()
{
	int bal;
	cout<<"\nYour balance :"<<balance<<"\nEnter amount to withdraw:";
	cin>>bal;
	if(bal<=balance)
	{
	balance-=bal;
	cout<<"\nRemaining Balance:"<<balance;
	}
	else
	{
	cout<<"\nYour balance is not sufficient to withdraw that amount.";
	}
	
}

//display function to display user information
	void display()
	{
	cout<<"\nName :";
	puts(name);
	cout<<"\nBalance :"<<balance;
	}
};

int main()
{
	int i;

//An array of objects of Bank class can be created to handle 10 customers and their data
//as Bank bk[10];
//Then run this array in loop to initialize and access it's data members

	Bank bk;
	bk.getdata();
	cout<<"\n1. Your Information\n2. Deposit\n3. Withdraw\nEnter your choice\n";
	cin>>i;
	if(i==1)
	{
	bk.display();
	}
	else if(i==2)
	{
	bk.deposit();
	}
	else if(i==3)
	{
	bk.check();
	}
	


	return 0;
}
