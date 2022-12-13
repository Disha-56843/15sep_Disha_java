#include<stdio.h>
int main()
{
	float a,b;
	int c,d,expression;
	printf("Enter value of a, b, c and d:");
	scanf("%f%f%d%d",&a,&b,&c,&d);
	printf("\n\t1. Addition \n\t2. Substraction \n\t3. Multiplication \n\t4. Divission \n\t5. Modulo");
	printf("\nEnter your choice:");
	scanf("%d",&expression);
	switch (expression)
	{
		case 1:
			//Addition of a and b, a=a+b
			printf("\nAddition of a and b(Value of a)is:%f",a+=b);
			break;
		case 2:
			//Substraction of a and c, a=a-c
			printf("\nSubstraction of a and c(Value of a)is:%f",a-=c);
			break;
		case 3:
			//Multiplication of a and b, b=b*a
			printf("\nMultiplication of a and b(Value of b) is:%f",b*=a);
			break;
		case 4:
			//Divission of b and c, b=b/c
			printf("\nDivission of b and c(Value of b) is:%f",b/=c);
			break;
		case 5:
			//Modulo of d and c, d=d%c
			printf("\nModulo of d and c(Value of d) is:%f",d%=c);
			break;
		Default:
			printf("\nEnter valid choice.");
			break;
	}
}
