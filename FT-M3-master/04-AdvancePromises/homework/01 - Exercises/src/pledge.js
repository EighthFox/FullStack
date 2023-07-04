'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

class $Promise{
    constructor(executor){
        if(typeof executor !='function'){
            throw new TypeError("executor is not a function");
        }

        this._state = 'pending';
        this._value = undefined;
        this._handlerGroups = [];

        const callHandlers = (value) => {
            while(this._handlerGroups.length > 0)  {
                const { successCb, errorCb, downstreamPromise } = 
                  this._handlerGroups.shift();

                if(this._state === 'fulfilled'){
                    // No tengo successHandler
                    if(!successCb) downstreamPromise._internalResolve(value);
                    // Tengo successHandler
                    else{
                        try {
                            const result = successCb(value);
                            // Retorna una promesa
                            if (result instanceof $Promise){
                                result.then(
                                    (value) => downstreamPromise._internalResolve(value),
                                    (err) => downstreamPromise._internalReject(err)
                                );
                            // Retorna un valor
                            } else {
                                downstreamPromise._internalResolve(result);
                            }
                        } catch (error) {
                            // Arroja un error
                            downstreamPromise._internalReject(error);
                        }
                        
                    }
                }

                if(this._state === 'rejected'){
                    // No tengo errorHandler
                    if(!errorCb) downstreamPromise._internalReject(value);
                    // Tengo errorHandler
                    else{
                        try {
                            const result = errorCb(value);
                            // Retorna una promesa
                            if (result instanceof $Promise){
                                result.then(
                                    (value) => downstreamPromise._internalResolve(value),
                                    (err) => downstreamPromise._internalReject(err)
                                );
                            // Retorna un valor
                            } else downstreamPromise._internalResolve(result);
                        } catch (error) {
                            // Arroja un error
                            downstreamPromise._internalReject(error);
                        }
                        
                    }
                }
            }
        };

        this._internalResolve = (data) => {
            if(this._state !== 'pending') return;
            this._state = 'fulfilled';
            this._value = data;
            callHandlers(this._value);
        };
        this._internalReject = (reason) => {
            if(this._state !== 'pending') return;
            this._state = 'rejected';
            this._value = reason;
            callHandlers(this._value);
        };

        const resolve = (data) => { this._internalResolve(data) };
        const reject = (reason) => { this._internalReject(reason) };
    
        executor(resolve,reject);

        this.then = (successHandler, errorHandler) => {
            const downstreamPromise = new $Promise(() => {});
            const handlerGroup = { 
                successCb: typeof successHandler === "function" ? successHandler: false,
                errorCb : typeof errorHandler === "function" ? errorHandler: false,
                downstreamPromise, 
            }
            this._handlerGroups.push( handlerGroup );
            this._state !== 'pending' && callHandlers(this._value);
            return downstreamPromise;
        };

        this.catch = (errorHandler) => {
            return this.then(null, errorHandler);
        };
    }

    static resolve(value) {
        if(value instanceof $Promise) return value;
        const newPromise = new $Promise(() => {});
        newPromise._internalResolve(value);
        return newPromise;
    }
    static all(arr) {
        if(!Array.isArray(arr)) throw TypeError("arr must be arr");
        const newPromise = new $Promise(() => {});
        // const arrValue = arr.map((value) => 
        //     {
        //         if(value instanceof $Promise) return value;
        //         else {
        //             newPromise._internalResolve(value);
        //             return newPromise;
        //         }
        //     })
        newPromise._internalResolve(arr);
        return newPromise;
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
