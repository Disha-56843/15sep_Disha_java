#include<stdio.h>
int i,j,no,x,y,z,a[20];
int getdata()
{

	printf("Enter any two value for raw and column:");
	scanf("%d",&no);
	return 0;
}
int matrix()
{


	printf("\nEnter the value of first matrix:");
	for(i = 0; i < no; i++)
	{
			scanf("%d",&a[i]);
	}

	return 0;
}
int Ascending()
{


	for(i = 0; i < no; i++)
	{
		for(j = i +1; j < no; j++)
		{
			if (a[i] > a[j])
			{
				x = a[i];
				a[i] = a[j];
				a[j] = x;
			}
		}
	}

	for(i = 0; i < no; i++)
	{
		printf("%d",a[i]);
	}

}
int Descending()
{


	for(i = 0; i < no; i++)
	{
		for(j = i+1; j < no; j++)
		{
			if (a[i] < a[j])
			{
				x = a[i];
				a[i] = a[j];
				a[j] = x;
			}
		}
	}

	for(i = 0; i < no; i++)
	{
		printf("%d",a[i]);
	}
	return 0;
}
int main()
{
	getdata();
	matrix();


	printf(" \n\t1.Ascending order. \n\t2.Descending order.");
	printf("\nEnter your choice:");
	scanf("%d",&y);
		switch(y)
		{
			case 1:
				printf("\nElement of array in ascending order:%d",Ascending());
				break;
			case 2:
				printf("\nElement of array in descending order:%d",Descending());
				break;
			default:
				printf("\nEnter valid choise");
				break;
		}
	return 0;
}