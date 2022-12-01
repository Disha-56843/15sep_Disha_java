#include<stdio.h>
int main()
{
	int A[10],even,odd,i;
		printf("\nEnter any 10 no.:");
	for (i=0; i<10;i++)
	{
		scanf("\n%d",&A[i]);
		if (A[i]%2==0)
			even++;
		else
			odd++;
	}
	printf("\nTotal even no. is:%d" ,even);
}
