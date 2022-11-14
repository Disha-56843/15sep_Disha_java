#include<stdio.h>
int main()
{
	int a,b;
	for( a=5; a<10; a--)
	{
		for( b=0; b<=a; b++)
		{
			printf("%d",b);
		}
		printf("\n");
	}
}
