#include<stdio.h>
struct Employee
{
	int no,age;
	char name[20],address[20];
}emp;

int main()
{
	printf("Enter employee no:");
	scanf("%d",&emp.no);

	printf("\nEnter the name of employee:");
	scanf("%s",&emp.name);

	printf("\nEnter the address of employee:");
	scanf("%s",&emp.address);

	printf("\nEnter the age of employee:");
	scanf("%d",&emp.age);

	printf("\nEmployee no:%d",emp.no);
	printf("\nEmployee name:%s",emp.name);
	printf("\nEmployee address:%s",emp.address);
	printf("\nEmployee age:%d",emp.age);
}