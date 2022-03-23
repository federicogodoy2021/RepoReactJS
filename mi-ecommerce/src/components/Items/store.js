//Lista de stocks de productos

    const stock = 
        [{id:1, title:"Pelota Adidas",description: "Pelota Adidas N°5 de cuero sintetico", type:"insumo", sport:"futbol",price: "$"+ 5000, stock:2},
        {id:2, title:"Pelota Nike", description: "Pelota Nike N°5 de cuero sintetico", type:"accesorio", sport:"futbol",price: "$"+ 7000, stock:4},
        {id:3, title:"Pelota Reebok", description: "Pelota Reebok N°5 de cuero sintetico", type:"complemento", sport:"futbol",price: "$" + 3500, stock:9}]

    //Pormesa con delay (2 seg)
    export const getItems = new Promise((resolve, reject) => {

            let status = true
        
            if(status){
                setTimeout(() => {
                resolve(stock)
                    
                }, 2000)
            }else{
                reject("Se ha producido un error")
            }
        
        })

    export default stock