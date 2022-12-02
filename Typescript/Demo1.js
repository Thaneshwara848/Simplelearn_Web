var Demo = /** @class */ (function () {
    function Demo() {
        console.log("HI Constrcuor ");
    }
    Demo.prototype.xyz = function () {
        console.log("Hi Methdo...!");
    };
    return Demo;
}());
var d = new Demo();
d.xyz();
