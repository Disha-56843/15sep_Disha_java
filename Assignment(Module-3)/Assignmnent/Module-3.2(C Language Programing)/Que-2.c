#include<stdio.h>
int main()
{
	int a,y;
	printf("Enter value of a and y:");
	scanf("%d%d",&a,&y);
	printf("\nBefore swapping the value:%d %d",a,y);
	a=a+y;
	y=a-y;
	a=a-y;
	printf("\nAfter swapping the value:%d %d",a,y);
}
