let inventory = require('./inventory.js')

for(i=0;i<inventory.length;i++)
{
    if(inventory[i]['id']==33)
    {
        console.log('Car ' +inventory[i]['id'], 'is a ' +inventory[i]['car_year'],'' +inventory[i]['car_make'],'' + inventory[i]['car_model']);
    }
}
