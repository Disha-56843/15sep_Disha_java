#include<stdio.h>
int main()
{
	int A[10],odd,even,i;
		printf("\nEnter any 10 no.:");
	for (i=0; i<10;i++)
	{
		scanf("\n%d",&A[i]);
		if (A[i]%2!=0)
			odd++;
		else
			even++;
	}
	printf("\nTotal odd no. is:%d",odd);
}
