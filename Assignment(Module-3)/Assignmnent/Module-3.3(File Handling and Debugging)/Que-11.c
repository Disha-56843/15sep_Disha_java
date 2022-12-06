#include<stdio.h>
struct number1
{
	int no;
	char name[20];
}str;
union number2
{
	int no;
	char name[20];
}uni;
int main()
{
	printf("\n structure\n");
	printf("\nEnter no:");
	scanf("%d",&str.no);
	printf("\nEnter name:");
	scanf("%s",&str.name);
	printf("\nNo : %d",str.no);
	printf("\nName : %s",str.name);
	
	printf("\n\n Union\n");
	printf("\nEnter no:");
	scanf("%d",&uni.no);
	printf("\nEnter name:");
	scanf("%s",&uni.name);
	printf("\nNo : %d",uni.no);
	printf("\nName : %s",uni.name);
}
