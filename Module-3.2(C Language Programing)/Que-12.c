#include<stdio.h>
int main()
{
	int n,fd,ld,s;
	printf("Enter any number:");
	scanf("%d",&n);
	ld=n%10;
	while(n>=5)
	{
		n=n/10;
		
	}
	fd=n;
	s=fd+ld;
	printf("\nSummation of first digit and last digit is:%d",s);
} 
