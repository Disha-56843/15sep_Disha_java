#include<stdio.h>
int main()
{
	int a,b;
	//T1 = term 1, T2=term 2
	int T1=0,T2=1;
	// next term = T3, T3 is total of T1 and T2  
	int T3=T1+T2;
	printf("Enter the number of terms:");
	scanf("%d",&a);
	printf("Fibonacci series is:");
	for (b=1; b<=a; b++)

	{
		printf("\t%d",T3);
		T1=T2;
		T2=T3;
		T3=T1+T2;
	}
}
