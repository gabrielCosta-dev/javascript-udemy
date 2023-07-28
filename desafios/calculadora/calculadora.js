function calcular(tipo, valor) {
    let res = document.getElementsByTagName('input')[0]
    
    if (tipo === 'acao') {
       
        if (valor === 'c'){
            //Limpar o visor
            res.value = ''
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            res.value += valor
        }

        if (valor === '='){
            res.value = eval(res.value)
        }

    } else if(tipo === 'valor'){
        res.value += valor
    }
}