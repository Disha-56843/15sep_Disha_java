#include<stdio.h>

int main()
{


	printf("Enter any string:");

	reverse();
	return 0;
}
int reverse()
{
	char str;
	scanf("%c",&str);	
	if(str != '\n')
	{
		reverse();
		printf("%c",str);
	}
	return 0;
}