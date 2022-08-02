const UpdateItem = (endpoint) => {
    console.log("clicked");
    var name = document.getElementById("cakenamein").value;
    var price= document.getElementById("pricein").value;
    var status= document.getElementById("numin").value;
    // console.log(name);
    // console.log(price);
    // console.log(status);
    
    var obj ={
      pname:name,
      price:price,
      status:status
        };

    console.log(JSON.stringify(obj));
      patchdata("http://localhost:4000/"+endpoint, obj)
       .then((data) => {
     console.log(data); // JSON data parsed by `data.json()` call
      });
location.reload()
};


const GetData = async (elementID, endpoint) =>{
    var dataBack = [];
    await fetch("http://localhost:4000/"+endpoint)
          .then((response) => response.json())
          .then((data) => dataBack=data);
   
   var cakedata=dataBack[0];
   console.log(cakedata)
   var data = `<tr><br><br>
   <td>1</td><br>
   <td>100</td>

   <td>${cakedata.pname}</td>
   <td>${cakedata.price}</td>
   <td>${cakedata.status}</td>

  </tr>`;
 
   document.getElementById(elementID).innerHTML=data;
  }
  
 
 //QUERY CALLS 
 // Example POST method implementation:
 async function patchdata(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
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
   