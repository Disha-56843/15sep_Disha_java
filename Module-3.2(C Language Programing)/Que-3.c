#include<stdio.h>
int main()
{
	int no;
	printf("Enter any no to check odd or even:");
	scanf("%d",&no);
	//Ternary oprator to check no. is odd or even.
	(no%2 == 0) ? printf("\nNo. is even.") : printf("\nNo. is odd.");
}
