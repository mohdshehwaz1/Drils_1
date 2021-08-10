let inventory = require('./inventory.js')

cars=[]

for(i=0;i<inventory.length;i++){
    if(inventory[i]['car_make']=='Audi' || inventory[i]['car_make']=='BMW')
    {
        cars.push(inventory[i])
    }
}
for(i=0;i<cars.length;i++)
{

    console.log(myJSON = JSON.stringify(cars));
}