import fs from 'fs'

const aRecibos = [
    {id: 1, numero: '00000002', importe : 1000, cliente:'R00001'},
    {id: 2, numero: '00000003', importe : 3000, cliente:'C00002'},
    {id: 3, numero: '00000004', importe : 2000, cliente:'R00002'},
    {id: 4, numero: '00000005', importe : 8000, cliente:'C00001'},
    ]
    

    function timeOut() {
        return new Promise(res => {
            setTimeout(() => {
            res('Resolved')
            }, 7000);
        })
    }

    async function program() {
        console.log("Espere 7 segundos a que inicie el programa");

        await timeOut().then(res=>{
            aRecibos.forEach(element => {
                console.log(`Cliente: ${element.cliente} Importe: ${element.importe}`);
            });
        
            const ordenadosPorImporte = aRecibos.sort((a,b) => {
                return a.importe - b.importe
            })
        
            console.log("Recibos ordenados por importe: \n",ordenadosPorImporte);
        
            const clientesConR = aRecibos.filter(object => {
                return object.cliente.startsWith("R")
            })
        
            console.log("Clientes que empiezan con R: \n", clientesConR);
        
            const array30PorcientoMas = aRecibos.map(obj => {
                obj.importe = obj.importe * 1.3
                return obj
            })
        
            console.log("Copia del array de objetos pero con un importe 30% mas \n",array30PorcientoMas);
        
            fs.writeFileSync('./archivo.txt', 'Este es un archivo \n')
            fs.appendFileSync('./archivo.txt', 'nuevo texto')
    
            console.log('Fin');
        })

    }

    program()

       
    
    
    