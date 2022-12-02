class A 
{
   //private : only for single class 
   // public : anywhere 
   // protected : same package + sub class in other packege  
    a=100;
    constructor()
    {
        console.log("A class "+this.a)
    }

}
class B extends A
{

    constructor()
    {
        super();
        console.log("B class "+this.a)
        
    }
}

var b = new B();

// types Script 

    // var let 
    // oops 
    // data types 
    // access modifiers 
    // optional parameters 
    