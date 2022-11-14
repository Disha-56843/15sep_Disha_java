#include<stdio.h>
int main()
{
	int days,week,year;
	int expression;
	printf("\n Enter the value of days:");
	scanf("%d",&days);
	printf("\nEnter your choice");
	printf("\nSwapping \n\t 1.week \n\t 2.year");
	scanf("%d",&expression);
	switch(expression)
	{
	case 1:
		printf("\n no of week is:%d",days/7);
		break;
	case 2:
		printf("\n no of year is:%d",days/365);
		break;
	default:
		printf("\n Enter valid choise......");
		break;
	}
}
