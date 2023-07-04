'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:
function $Promise(executor){
    this._state = 'pending';
    this._value;
    this._handlerGroups = [];
    if(typeof(executor)!='function'){
        throw new TypeError("executor is not a function");
    }
    this._callHandlers = (cb) => {
        cb(this._value);
    }

    this._internalResolve = (data) => {
        if(this._state === 'pending')
        {
            this._state = 'fulfilled';
            this._value = data;
            // for(let i = 0; i<this._handlerGroups.length; i++){
            //     this._callHandlers(this._handlerGroups[i].successCb);
            // }
            this._handlerGroups.map((cb) => this._callHandlers(cb.successCb))
        }
    };
    this._internalReject = (reason) => {
        if(this._state === 'pending')
        {        
            this._state = 'rejected';
            this._value = reason;
        }
    };
    
    executor(this._internalResolve,this._internalReject);

    this.then = (s1, e1) => {
        if(typeof(s1)!='function'){
            s1 = false;
        }
        else{
            if(this._state === 'fulfilled'){
                this._callHandlers(s1);
            }
        }
        if(typeof(e1)!='function'){
            e1 = false;
        }
        this._handlerGroups.push( { successCb: s1, errorCb : e1 } );


    }


}



module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
