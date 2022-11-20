Array.prototype.customFind = function (callback){
    let result = [];
    for (let index = 0; index < this.length; index++) {
        const element1 = this[index];
        const higher = callback(element1, index)
        if(higher){
            return this[index]
        }
    }
};


console.log([2,3,15,67,90].customFind(n => n > 15))