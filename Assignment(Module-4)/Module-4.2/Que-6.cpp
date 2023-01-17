/*Create a class person having members name and age. Derive a class student having member percentage.
 Derive another class teacher having member salary. Write necessary member function to initialize, 
 read and write data. Write also Main function (Multiple Inheritance)*/
#include<iostream>
using namespace std;
class student 
{
    int per;
    public:
        student()
        {
        cout<<"Enter the percentage of student:";
        cin>>per;
        cout<<endl<<"percentage of student is:"<<per;
        }
};
class teacher
{
    int salary;
public:
    teacher()
    {
        cout<<"\nEnter teacher's salary:";
        cin>>salary;
        cout<<endl<<"Teacher's salary is:"<<salary;
    }
};
class person : public student , public teacher
{
    string nm;
    int age;
    public:
    person ()
    {
        cout<<endl<<"Enter your name:";
        cin>>nm;
        cout<<endl<<"Enter your age:";
        cin>>age;
        cout<<endl<<"Your name is:"<<nm;
        cout<<endl<<"Your age is:"<<age;
    }
};
int main()
{
    person p1;
    return 0;
}