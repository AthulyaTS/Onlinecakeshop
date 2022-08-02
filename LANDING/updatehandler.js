const UpdateItem = (endpoint, price,status) => {
    console.log("clicked");
    
    var obj ={
      pname:"BLACKFOREST",
      price:"750",
      status:"available"
        };

    console.log(JSON.stringify(obj));
    //  postData("http://localhost:4000/"+endpoint, obj)
    // .then((data) => {
    // console.log(data); // JSON data parsed by `data.json()` call
    // });

};


const GetData = async (elementID, endpoint) =>{
    var dataBack = [];
    await fetch("http://localhost:4000/"+endpoint)
          .then((response) => response.json())
          .then((data) => dataBack=data);
    var data = ``;
  
  }
  
 
 //QUERY CALLS 
 // Example POST method implementation:
 async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  //QUERY CALLS 
   