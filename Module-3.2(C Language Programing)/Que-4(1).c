#include<stdio.h>
int main()
{
	int day;
	printf("Enter day of week (1 to 7) :");
	scanf("%d",&day);
	switch(day)
	{
		case 1:
			printf("\nToday is Monday",day);
			break;
		
		case 2:
			printf("\nToday is Tuesday",day);
			break;
			
		case 3:
			printf("\nToday is Wednesday",day);
			break;
		
		case 4:
			printf("\nToday is Thursday",day);
			break;
		
		case 5:
			printf("\nToday is Friday",day);
			break;
			
		case 6:
			printf("\nToday is Saturday",day);
			break;
			
		case 7:
			printf("\nToday is Sunday",day);
			break;
			
		default:
			printf("\nEnter valid choise ");
			break;
	}
}
