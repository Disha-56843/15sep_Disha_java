#include<stdio.h>
int main()
{
	int p,r,t,ans;
	printf("Enter value of principal, interest rate and time:");
	scanf("%d%d%d",&p,&r,&t);
	ans=p*r*t/100;
	printf("\nYour simple interest is:%d",ans);
}
