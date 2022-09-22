
const listaUsuarios = [
    {
        nombre: 'Laura',
        numDocumento: '102530',
        clave: '2456',
        tipoUsuario: 'administrador'
    },
    {
        nombre: 'Camila',
        numDocumento: '102580',
        clave: '1608',
        tipoUsuario: 'cliente'
    }
];

let process = true;

while (process) {
    const documentoIngresado = prompt('Ingrese su documento');
    const claveIngresada = prompt('Ingrese su contraseña');

    const usuarioEncontrado = listaUsuarios.find(element => element.numDocumento === documentoIngresado);

    if (usuarioEncontrado && (usuarioEncontrado.clave === claveIngresada)) {
        console.log(usuarioEncontrado.tipoUsuario);
        if(usuarioEncontrado.tipoUsuario==='administrador' && usuarioEncontrado.clave==='2456'){
            alert('Bienvenido Administrador');
        let cantidad;
        let billete5000=new Object()
        billete5000.cantidad=100;
        billete5000.valor=5000;

        let billete10000=new Object()
        billete10000.cantidad=100;
        billete10000.valor=10000;

        let billete20000=new Object()
        billete20000.cantidad=100;
        billete20000.valor=20000;

        let billete50000=new Object()
        billete50000.cantidad=100;
        billete50000.valor=50000;

        let billete100000=new Object()
        billete100000.cantidad=100;
        billete100000.valor=100000;

        let billete5=Number(prompt('¿Que cantidad de billetes de 5000 desea?'));
        let billete10=Number (prompt('¿Que cantidad de billetes de 10000 desea?'));
        let billete20=Number (prompt('¿Que cantidad de billetes de 20000 desea?'));
        let billete50=Number (prompt('¿Que cantidad de billetes de 50000 desea?'));
        let billete100=Number(prompt('¿Que cantidad de billetes de 100000 desea?'));
        total1=(billete5)*(billete5000.valor);
        total2=(billete10)*(billete10000.valor);
        total3=(billete20)*(billete20000.valor);
        total4=(billete50)*(billete50000.valor);
        total5=(billete100)*(billete100000.valor);
        totalFinal=total1+total2+total3+total4+total5;
        console.log(`Disponible ${total1} pesos colombianos en billetes de 5000`);
        console.log(`Disponible ${total2} pesos colombianos en billetes de 10000`);
        console.log(`Disponible ${total3} pesos colombianos en billetes de 20000`);
        console.log(`Disponible ${total4} pesos colombianos en billetes de 50000`);
        console.log(`Disponible ${total5} pesos colombianos en billetes de 100000`);
        console.log(`El total disponible es de ${totalFinal}`)};
        
    }else{
        console.log('Datos incorrectos'); break;

    }
     }; 
