// Write a program of to sort the array using templates.
#include<iostream>
using namespace std;
template <typename T>
class array
{
public:

   T i,j,no,x,a[20];
   array (T no, T a[20])
   {
        this->no=no;
        this->a[20]=a[20];
   }
   T asending()
   {
    for(i=0; i<no; i++ )
    {
        for(j=i+1; j<no; j++)
        {
            if(a[i]>a[j])
            {
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
        }
    }
    return a[i];
   }
   T decending()
   {
    for(i=0; i<no; i++)
    {
        for(j=i+1; j<no; j++)
        {
            if(a[i]<a[j])
            {
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
        }
    }
    return a[i];
   }

};
int main()
{
    int i,j,no,a[20];
    cout<<"Enter the value of no:";
    cin>>no;
    cout<<endl<<"Enter element of array:";
    cin>>a[20]; 
    array <int> a1(no,a);
    cout<<endl<<a1.asending();
    array <int> a2(no,a);
    cout<<endl<<a2.decending();

    return 0 ;
}
