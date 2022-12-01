#include<stdio.h>
int main()
{
	int x,y,z,w;
	for(x=0;x<=5;x++)
	{
		for(z=5;z>=x;z--)
		{
			printf(" ");
		}
		for(y=1;y<=x;y++)
		{
			printf("*");
		}
		for(w=0;w<=x;w++)
		{
			printf("*");
		}
		printf("\n");
	}
}
