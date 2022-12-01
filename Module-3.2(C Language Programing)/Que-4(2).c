#include<stdio.h>
int main()
{
	char alp,a,e,i,o,u;
	printf("Enter any alphabet:");
	scanf("%c",&alp);
	switch(alp)
	{
		case 1:
		if((alp==a)||(alp==e)||(alp==i)||(alp==o)||(alp==u))
		{
			printf("\n%c is vowel.",alp);
	 	break;
		}
		case 2:
		else
		{
			printf("\n%c is consonant.",alp);
			break;
		}
		default:
			printf("\nEnter valid choise.");
			break;
	}
} 
