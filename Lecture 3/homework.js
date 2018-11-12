var obj = {undef : undefined, Null : null, nan : NaN,
           False : false, Truse : true, Num : 5,};

var obj2 = {undef : "lol", Null : undefined, nan : NaN,
           False : true, Truse : 5, Num : false,};

var MyModule = (function() { 
    var obj;
    var emptObj;
     return {

        setObj : function(obj){ 
            var obj = this.obj;
        },

        isUndef : function(obj){
            return console.log(obj === undefined);
        },

        isNull : function(obj){
            return console.log(obj === null);
        },

        isNaN : function(obj){
            if(typeof obj == "number")
            return console.log(isNaN(obj));
        },

        isEmpty : function(obj) {
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    return false;
                }
            }
            return true;
        },       

        LikeMap : function(obj){
            
                var emptObj = {};
                for(var key in obj){
                    emptObj[key] = obj[key] + "lol";
                }
            
            return this.emptObj;
        },

        randNumb : function(obj){
            if(typeof obj == "number"){
                obj = Math.round(Math.random()*obj);
            }
            return obj;
        },

        deepEq : function deepEqual(a, b) {
            if (a === b) {
                return true;
            }
         
            if (a == null || typeof(a) != "object" ||
                b == null || typeof(b) != "object")
            {
                return false;
            }
         
            var propertiesInA = 0, propertiesInB = 0;
            for (var property in a) {
                propertiesInA += 1;
            }
            for (var property in b) {
                propertiesInB += 1;
                if (!(property in a) || !deepEqual(a[property], b[property])) {
                    return false;        
                }
            }        
            return propertiesInA == propertiesInB;
        },

        delFalsProp : function(obj){
            var newObj = {};
            if(typeof obj == "object"){
                for(var key in obj){
                    if(obj[key] == false){
                        delete obj[key];
                    }
                }
            }
            return newObj; 
        }
    }   
         
})();


/*
        Для подстановки

MyModule.isUndef(obj["undef"]);
MyModule.isUndef(obj["Null"]);

MyModule.isNull(obj["Null"]);
MyModule.isNull(obj["Num"]);

MyModule.isNaN(obj["nan"]);
MyModule.isNaN(obj["True"]);

var a = MyModule.LikeMap(obj);
console.log(a);

MyModule.randNumb(obj["Num"]);


MyModule.deepEq(obj,obj);
MyModule.deepEq(obj,obj2);

var b = MyModule.delFalsProp(obj);
console.log(b);
*/

