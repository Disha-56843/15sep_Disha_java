#include<stdio.h>
int main()
{
	int i,l=0;
	char str[20];
	printf("\nEnter any string:");
	scanf("%s",&str);
	for (i=0; str[i] != 0; i++)
	{
		l++;
	}

	printf("\nLength of string is:%d",l);
} 
	