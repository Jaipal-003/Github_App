
'use strict';

/**
 * @param {} url API url [requred]
 * @param {} successCallback Success callback  [requred]
 * @param {} errorCallback Erroe callback [optional]
 */


export async function fetchData(url, successCallback, errorCallback) {
    

    const response = await fetch(url);

    if(response.ok){
        const data = await response.json();
        successCallback(data);
    }else {
        const error = await response.json();
        errorCallback && errorCallback(error);
        
    }
}