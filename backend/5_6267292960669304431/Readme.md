
# To Run The Project 
* to start the backend first make sure you have installed docker and docker-compose 

* open `docker-compose.dev.yml` file and edit volumes tag and replace the below line
`/home/sree/Documents/Works/vicky-backend/`
 with your project directory . 
 This is where we store the datas from postgresql

* first Open terminal and type :

```js
 npm install
```

* To start docker cd to the project folder :

``` 
 sudo docker-compose -f docker-compose.dev.yml up --build
```


# Database
* connect to postgres database using pgadmin software 

```js
 USER=abcduser
 PASSWORD=abcdpsw
```

* create database by using the sql file provided .
* open thata db file and copy it .
* paste it on sql query and exeecute 
* open db and see if it made the tables . 

# Data format when calling requests
## Contingency table requests
* POST req format 
url : `localhost:4000/contingency/`

body : 

```js
    {
        "budget_fund_scheme": "st2",
        "full_name":"ss2",
        "department":"dp2",
        "mainhead":"mn2",
        "subhead":"sb2",
        "total":1,
        "balance":2,
        "amount":3,
        "to_whom":"whom1",
        "cb_number":"cb1",
        "voucher_numer":"vh_1",
        "description":"desc1"
    }
```

* GET with id 

url :  `localhost:4000/contingency/`

## stock table requests

Same as bleow only change is the url , data format is the same .

url: `localhost:4000/stock/`