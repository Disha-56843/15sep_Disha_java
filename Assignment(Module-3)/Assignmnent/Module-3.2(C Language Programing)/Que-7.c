#include<stdio.h>
int main()
{
	int i,fact,a;
	printf("Enter any intiger:");
	scanf("%d",&a);
	if (a<0)
		printf("\na is negative.",a);
	else
	{
	for(i=1; i<=a; i++)
	{
		fact*=i;
	}
	printf("factorial no. of %d =%d",i-1,fact);
	}
}
