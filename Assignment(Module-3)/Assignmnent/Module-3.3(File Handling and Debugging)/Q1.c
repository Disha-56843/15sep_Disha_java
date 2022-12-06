#include<stdio.h>
int main()
{
	int a[5],i,max,min;
	printf("Enter any array:");
	for(i=0; i<5; i++)
	{
		scanf("%d",&a[i]);
	}
	for(i=0; i<=5; i++)
	{
		if(a[i]>max)
		{
			max=a[i];
		}
		else
		{
			min=a[i];
		}
	}
	printf("\nMax no. is:%d",max);
}
	