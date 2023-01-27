Function.prototype.inherits = function(obj){
    function Surrogate(){};
    Surrogate.prototype = obj.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;

};

