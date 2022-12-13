#include<stdio.h>
int main()
{
	int rem,rev,n;
		printf("enter value of n:");
		scanf("%d",&n);
		while(n!=0)
		{
			rem=n%10;
			rev=rev*10+rem;
			n/=10;
		}
			printf("\nReverse number is:%d",rev);
}
