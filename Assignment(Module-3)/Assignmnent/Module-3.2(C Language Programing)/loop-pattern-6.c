#include<stdio.h>
int main()
{
	int x,y;
	for(x=65;x<70;x++)
	{
		for(y=65;y<=x;y++)
		{
			printf(" %c",y);
		}
		printf("\n");
	}
}
