#include<stdio.h>
int factorial(int no)
{
	if ( no < 1)
		return 1;
	return no*factorial(no-1);
}
int main()
{
	printf("\nValue of factorial is:%d",factorial(5));
	return 0;
}
