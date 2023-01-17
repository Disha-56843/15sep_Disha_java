/*Assume that the test results of a batch of students are stored in three different classes. 
Class Students are storing the roll number. Class Test stores the marks obtained in two subjects 
and class result contains the total marks obtained in the test. The class result can inherit the 
details of the marks obtained in the test and roll number of students. (Multilevel Inheritance)*/
#include<iostream>
using namespace std;
class Students
{
    int rn;//Roll no
    public:
    Students()
    {
        cout<<"Enter your roll number:";
        cin>>rn;
    }
};
class Test : public  Students
{
    public:
    int a,b;
    Test()
    {
        cout<<endl<<"Enter the marks of first subject:";
        cin>>a;
        cout<<endl<<"Enter the marks of second subject:";
        cin>>b;
    } 
};
class result : public Test
{
    public:
    int tm;// Total marks
    result()
    {
        cout<<endl<<"Total marks of two subjects is:"<< a + b;
    }
};
int main()
{
    result r1;
}
