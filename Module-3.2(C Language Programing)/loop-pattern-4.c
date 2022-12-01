#include<stdio.h>
int main()
{
	int i,j,p,k;
	for(i=0;i<5;i++)
	{
		for(j=0;j<=i;j++)
		{
			printf("*");
		}
		printf("\n");
	}
	for(p=0;p<5;p++)
	{
		for(k=5;k>p;k--)
		{
			printf("*");
		}
		printf("\n");	
	}
}
