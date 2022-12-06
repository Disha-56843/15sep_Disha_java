#include<stdio.h>
#include<string.h>
#include<stdlib.h>
int main()
{
	char str[20];
	int k, length;
	printf("Enter any string:");
	scanf("%s",&str);
	length = strlen(str);
	length = length - 1;
	k = 0;

	while(length > k)
	{
		if(str[length] != str[k])
		{
			printf("\n%s is not palindrome" ,str);
			exit (0);
		}
		length--;
		k++;
	}
	printf("\n %s is palindrome",str);

	return 0;

}