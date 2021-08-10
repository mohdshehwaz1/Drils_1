let inventory = require('./inventory.js')
year_car=[]
for(i=0;i<inventory.length;i++)
{
    year_car.push(inventory[i]['car_year']);
}
console.log(year_car)

