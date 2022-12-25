// Write a program to demonstrate a Food Billing System
#include<stdio.h>

int pizza = 180;
int Burger = 100;
int Dosa = 120;
int Idli = 50;
int pasta = 170;
int Manchurian = 120;
int d,q,b,num;
int totalcost,c;



int manu()
{
    
  
    printf("\n-----------------Manu----------------");
    printf("\nItem\t\tprize");
    printf("\n1.Pizza\t\t180rs./pcs \n2.Burger\t100rs./pcs \n3.Dosa\t\t120rs./pcs \n4.Idli\t\t50rs./pcs \n5.Pasta\t\t170rs./plate \n6.Manchurian\t120rs./plate ");
    printf("\n\nPlease Enter your choise:");
    scanf("%d",&d);
  
    
   
  switch (d)
  {
    case 1:
    {
        printf("\nYou have selected pizza.");
        printf("\n\nEnter the quantity:");
        scanf("%d",&q);
       
        printf("\nTotal cost for pizza is:%d",pizza*q);
         
            totalcost += pizza*q;
        
        break;
    }

    case 2:
    {
        printf("\nYou have selected Burger.");
        printf("\n\nEnter the quantity:");
        scanf("%d",&q);
         printf("\nTotal cost for Burger is:%d",Burger*q);
         
            totalcost += Burger *q;
         
        break;
    }

    case 3:
    {
        printf("\nYou have selected Dosa.");
        printf("\n\nEnter the quantity:");
        scanf("%d",&q);
         
          printf("\nTotal cost for Dosa is:%d",Dosa*q);
          
           totalcost += Dosa *q;
        
        break;
    }

    case 4:
    {
        printf("\nYou have selected Idli.");
        printf("\n\nEnter the quantity:");
        scanf("%d",&q);
         
         printf("\nTotal cost for Idli is:%d",Idli*q);

           totalcost += Idli *q;
         
        break;
    }

    case 5:
    {
        printf("\nYou have selected Pasta.");
        printf("\n\nEnter the quantity:");
        scanf("%d",&q);
          
         printf("\nTotal cost for Pasta is:%d",pasta*q);
         
           totalcost += pasta *q;
       
        break;
    }

    case 6:
    {
        printf("\nYou have selected Manchurian.");
        printf("\n\nEnter the quantity:");
        scanf("%d",&q);
          
           printf("\nTotal cost for Manchurian is:%d",Manchurian*q);
         
             totalcost += Manchurian *q;
         
        break;
    }

    default:
    {
        printf("\nPlease enter valid choise.");
        break;
    }

  }

    return 0;
}

int main()
{
    
 int i,c=1,a[9];
 for(i=0;i<9;i++)
 a[i]=0;

  manu();

 do
 {
   
    printf("\n\nIf you wish to buy anything more Enter\n1 to Add Item \n2 to Exit\n");
    scanf("%d",&c);
 
  if(c==1)
  {
    manu();
  }
  else
  {
       break;
  }

 } while (c==1);
    
    printf("\n---------------------- FINAL BILL -----------------------\n");
    printf("\n\nTotalbill is :%d\n",totalcost);
    printf("\n----------------------THANK YOU FOR COMING----------------- ");
    printf("\n=====================PLEASE VISIT US NEXT TIME================");

    return 0;
}