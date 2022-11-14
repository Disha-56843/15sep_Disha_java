#include<stdio.h>
int main()
{
	float days,week,month,year;
	int expression;
	printf("\n Enter the value of days:");
	scanf("%f",&days);
	printf("\nEnter your choice");
	printf("\nSwapping \n\t 1.week \n\t 2.months \n\t 3.year");
	scanf("%d",&expression);
	switch(expression)
	{
	case 1:
		printf("\n no of week is:%f",days/7);
		break;
	case 2:
		printf("\n no of months is:%f",days/30);
		break;
	case 3:
		printf("\n no of year is:%f",days/365);
		break;
	default:
		printf("\n Enter valid choise......");
		break;
	}
}
