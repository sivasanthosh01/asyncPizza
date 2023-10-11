let name="Robin";
let food="cheese barbeque pizza";
let isPizza=true;

function pizza(ms){

   return new Promise(function(resolve,reject){
    if(isPizza){
        setTimeout(resolve,ms);
    }
    else{
        reject("Pizza Rejected");
    }
})
}
async function order(){
    try{
        await pizza(1000);
        document.write(`${name} order the ${food}<br><br>`);
        document.write(`Your order is Booked<br><br>`);
        await pizza(2000)
        document.write(`Successfully,Your order finished<br><br>`);
        await pizza(4000)
        document.write(`PizzaHub hubs prepares the ${food} and it's ready after a While <br><br>`);
        await pizza(6000)
        document.write(`${name} your ${food} is on the way...`);
    }
    catch(msg){
        console.log(msg);
        document.write(`${msg}`)
    }
}
order()