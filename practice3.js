let inventory = require('./inventory.js')
carmodel=[]
for(i=0;i<inventory.length;i++)
{
    carmodel.push(inventory[i]['car_model'])
}
console.log(carmodel.sort())