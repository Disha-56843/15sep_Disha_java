#include<stdio.h>
int main()
{
	int a,even,odd,i;
		printf("\nEnter any no.:");
	for (i=5; i<=10;i++)
	{
		scanf("\n%d",&a);
			
		if (a%2==0)
		{
			even=even+a;
			printf("\nsum of even no. is:%d" ,even);
		}
		else
			odd++;
	}

	
	
}
