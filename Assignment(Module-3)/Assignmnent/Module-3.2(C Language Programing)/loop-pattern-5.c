#include<stdio.h>
int main()
{
	int x,y, z=1;
	for(x=0;x<5;x++)
	{
		for(y=0;y<=x;y++)
		{
			printf(" %d",z++);
		}
		printf("\n");
	}
}
