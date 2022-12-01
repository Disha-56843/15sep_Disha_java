#include<stdio.h>
int main()
{
	int a,b,i;
	printf("\nEnter any number:");
	for(i=0; i<=10; i++)
	{
		scanf("%d",&a);
		b=b+a;
		printf("\nTotal of number is:%d",b);
	}
}
