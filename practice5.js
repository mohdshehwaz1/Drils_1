let inventory = require('./inventory.js')

old_car=[]
for(i=0;i<inventory.length;i++)
{
    if(inventory[i]['car_year']<2000)
    {
        old_car.push(inventory[i]['car_year']);
    }

}
console.log(old_car.length);