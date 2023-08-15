console.log("hola desde el JS");
function saludo(){
    console.log("Hola desde la funcion saludo")
}
const saludo1= function(){
    console.log("Hola desde la fnc saludo1")
}
const saludo2=()=>{
    console.log("Hola desde la funcion flecha")
}
const formValues=()=>{
    const user_name= document.getElementById('user_name').value;
    const last_name= document.getElementById('last_name').value;
    const email= document.getElementById('email').value;
    console.log(user_name,last_name,email);
}
const formValues2=()=> {
    const array_ids= ["user_name","last_name","email"]
    const array_values=[];
    for (let i=0; i<array_ids.length;i++){
        array_values.push(document.getElementById(array_ids[i]).value);
    }
    console.log(array_values);
}