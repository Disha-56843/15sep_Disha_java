// Write a program to demonstrate a Food Billing System
#include<stdio.h>

//Price for the item.
int pizza = 180;
int Burger = 100;
int Dosa = 120;
int Idli = 50;
int pasta = 170;
int Manchurian = 120;
//Selection of food
int food_item;
//Food quantity
int Quantity;
//Addition of every selected food cost.
int totalcost;
char c;



int manu()
{
 //Display the food items available .  
  
    printf("\n-----------------Manu----------------");
    printf("\nItem\t\tprize");
    printf("\n1.Pizza\t\t180rs./pcs");
    printf("\n2.Burger\t100rs./pcs");
    printf("\n3.Dosa\t\t120rs./pcs");
    printf("\n4.Idli\t\t50rs./pcs");
    printf("\n5.Pasta\t\t170rs./plate");
    printf("\n6.Manchurian\t120rs./plate");

    printf("\n\nWhat do you want to order:");
    scanf("%d",&food_item);
  
}   
int choice() 
{
  //  User can choose any of the item displayed
   
  switch (food_item)
  {
    case 1:
    {
        printf("\nYou have selected pizza.");
        printf("\n\nEnter the quantity:");
        scanf("%d",&Quantity);
       
        printf("\nTotal cost for pizza is:%d",pizza*Quantity);
         
            totalcost += pizza*Quantity;
        
        break;
    }

    case 2:
    {
        printf("\nYou have selected Burger.");
        printf("\n\nEnter the quantity:");
        scanf("%d",&Quantity);
         printf("\nTotal cost for Burger is:%d",Burger*Quantity);
         
            totalcost += Burger *Quantity;
         
        break;
    }

    case 3:
    {
        printf("\nYou have selected Dosa.");
        printf("\n\nEnter the quantity:");
        scanf("%d",&Quantity);
         
          printf("\nTotal cost for Dosa is:%d",Dosa*Quantity);
          
           totalcost += Dosa *Quantity;
        
        break;
    }

    case 4:
    {
        printf("\nYou have selected Idli.");
        printf("\n\nEnter the quantity:");
        scanf("%d",&Quantity);
         
         printf("\nTotal cost for Idli is:%d",Idli*Quantity);

           totalcost += Idli *Quantity;
         
        break;
    }

    case 5:
    {
        printf("\nYou have selected Pasta.");
        printf("\n\nEnter the quantity:");
        scanf("%d",&Quantity);
          
         printf("\nTotal cost for Pasta is:%d",pasta*Quantity);
         
           totalcost += pasta *Quantity;
       
        break;
    }

    case 6:
    {
        printf("\nYou have selected Manchurian.");
        printf("\n\nEnter the quantity:");
        scanf("%d",&Quantity);
          
           printf("\nTotal cost for Manchurian is:%d",Manchurian*Quantity);
         
             totalcost += Manchurian *Quantity;
         
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
  //
  manu();
  choice();

 do
 {
  //  Choise given if user wanna select more. 
    printf("\n\nDo you want to place more order?(for yes press 1 for no press any other number.): \n");
    scanf("%d",&c);
 
  if(c==1)
  {
    manu();
    choice();
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