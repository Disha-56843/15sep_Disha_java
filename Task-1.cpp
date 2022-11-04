#include<stdio.h>
int main()
{
	int age ;
	printf("enter your current age:");
	scanf("%d",&age);
	// Your last year age
	printf("\nLast year age is:%d",--age);
	// Your age in next year
	printf("\nNext year age is:%d,",++age,++age);
}
