#include<stdio.h>
int main()
{
	int i,j,r,c, A[5][5],B[5][5];
	int add[5][5],sub[5][5],Multiplication[5][5];
	printf("Enter no of raw and column:");
	scanf("%d%d",&i,&j);
	printf("\nEnter the value of first matrix:");
	for(r=0;r<i;r++)
	{
		for(c=0;c<j;c++)
		{
			scanf("%d",&A[r][c]);
		}
	}	
	printf("\nEnter the value of second matrix:");
	for(r=0;r<i;r++)
	{
		for(c=0;c<j;c++)
		{
			scanf("%d",&B[r][c]);
		}
	}
	for(r=0;r<i;r++)
	{
		for(c=0;c<j;c++)
		{
			add[r][c]=A[r][c]+B[r][c];
			sub[r][c]=A[r][c]-B[r][c];
			Multiplication[r][c]=A[r][c]*B[r][c];
		}
	}	

	printf("\nAddition of two matrix is:\n");
	for(r=0;r<i;r++)
	{
		for(c=0;c<j;c++)
		{
			printf("\t%d",add[r][c]);
			
		}
		printf("\n");
	}
		
	printf("\nSubstraction of two matrix is:\n");
	for(r=0;r<i;r++)
	{
		for(c=0;c<j;c++)
		{
		
			printf("\t%d",sub[r][c]);
			
		}
		printf("\n");
	}
		
	printf("\nMultiplication of two matrix is:\n");
	for(r=0;r<i;r++)
	{
		for(c=0;c<j;c++)
		{
		
			printf("\t%d",Multiplication[r][c]);
		}
		printf("\n");
	}
			
	
}
