import 'whatwg-fetch';

class HttpService {
    getProducts = () => {
        //1 make the promise call
        var promise = new Promise((resolve, reject) => {
            //2 make the fetch call 
            fetch('http://localhost:3004/product').then(response => {
                //4 resolves content once loaded
                resolve(response.json());
            })
        });
        //3 return a promise that it will get the content
        return promise;

    }
}

export default HttpService;