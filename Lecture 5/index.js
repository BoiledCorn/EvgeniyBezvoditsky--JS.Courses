var Module = (function(){
    return{
        log : function () {
            console.log(arguments);
          },

        debounce : function (func, time){
            var timer = null;
            return function (a) {
                new Promise(resolve => {
                    if (timer) {
                        clearTimeout(timer);
                    }
                    timer = setTimeout(resolve, time, a);
                })
                .then(onResolve => func(onResolve));
            };
        },

        setTimeoutPromise : function(time){
            return new Promise(resolve =>{
                setTimeout(resolve, time);
            });
        },

        XMLHttpRequestPromise : function(url){
            return new Promise(function(resolve, reject){
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url, true);
                xhr.onload = function(){
                    if(this.status == 200){
                        resolve(this.response)
                    }else{
                        reject(console.error("Упс..."));
                    };
                xhr.onerror = function(){
                    reject(new Error("Network Error"));
                };
                xhr.send();
                };
            })
        },
        request : function (url) {
            return new Promise((res, rej) => {
                const delayTime = Math.floor(Math.random() * 10000) + 1;
        
                setTimeout(() => res(url), delayTime);
              });
        },

        urlResolve : function(urls){
            return new Promise(res => {
                var result = [];
                for(var i = 0; i < urls.length; i++){
                    this.request(urls[i])
                    .then(r => result.push(r))
                    .then(r => {
                            if(urls.length == result.length){
                                res(result);
                            }                                              
                    })
                }
            });
            
            
        },
    }
})()

var debounced = Module.debounce(Module.log, 500);
debounced('2');
debounced('1');

Module.setTimeoutPromise(2000).then(() => console.log('1'));

Module.XMLHttpRequestPromise('http://learn.javascript.ru/promise#chto-takoe-promise').then(
response => alert(this.response),
error => alert(reject));

Module.urlResolve(['http://learn.javascript.ru', 'https://gist.github.com', 'https://www.youtube.com']).then(res => console.log(res));