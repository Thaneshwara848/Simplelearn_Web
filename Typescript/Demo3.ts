class Demo3
{
    constructor(id:any,name:string,age:number,salary:number,desig:string,pan?:string)
    {
        console.log("ID is :"+id);
        console.log("Name is :"+name);
        console.log("Age is  :"+age);
        console.log("Saalry is :"+salary);
        console.log("Designmation is :"+desig)
        console.log("Pan :"+pan)
    }

}

var d3= new Demo3("ABC1234","Rajesh",25,500000,"Dev","XYZ987");
console.log("==========");

var d3= new Demo3("ABC17654","Ramesh",25,500000,"Dev");

