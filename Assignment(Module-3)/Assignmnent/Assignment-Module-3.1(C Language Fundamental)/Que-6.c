#include<stdio.h>
int main()
{
	float d,y;
	printf("Enter no of days:");
	scanf("%f",&d);
	y=d/365;
	printf("\nNo. of years after swapping days into year is:%f",y);
	printf("\nEnter no of years:");
	scanf("%f",&y);
	d=y*365;
	printf("\nNo. of days after swapping year into days is:%f",d);
}
