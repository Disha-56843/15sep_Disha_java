#include<stdio.h>
int main()
{
	int i,a,b;
	printf("Enter the no. that you want to print table:");
	scanf("%d",&a);
	for(i=1; i<=10; i++)
	{
		b=a*i;
		printf("\n%d*%d=%d",a,i,b);
	}
}
