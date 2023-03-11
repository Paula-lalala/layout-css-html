// document.getElementById('nombre').setAttribute('value', 'johan');

document.getElementById('saludarBtn')
    .addEventListener('click', function(){
        let nombrePersona= document.getElementById('nombre').value;
        // if(nombrePersona=='' || nombrePersona==null){
        if(!nombrePersona){
            alert('Debe ingresar el nombre')
        }else{
        alert('hola ' + nombrePersona + '!!!')
        }
    });

    