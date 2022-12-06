#include<stdio.h>
int main()
{
	int a,b;
	for(a=0;a<=5;a++)//raw
	{
		for(b=1;b<=a;b++)//column
		{
			printf(" %d",b%2);
		}
		printf("\n");
	}
}
