const mask = {//vai ficar responsável por formatar , para tal coisa(como dinheiro ,cpf e outros)
  apply(input, func){
    setTimeout(()=>{
      input.value = mask[func](input.value)//vai passar o resultado da função para o input(que queremos formatar)
    },1)
  },
  formatBRL(value){
    value = value.replace(/\D/g, "")
    
    return new Intl.NumberFormat('pt-BR' , {//formatando para R$(reais)
      style:'currency',
      currency:'BRL'
    }).format(value/100)//é divido por 100, pq quando usamos o replace e adicionamos um número
                        //primeita vez vai entrar 1 --> 1,00(vai ser formatado assim)
                        //por causa do replace, na segunda o primeiro numero vai passar pelo replace
                        // vai ficar assim 
                        //1º 1 --> 1,00 --> se transforma 100 por causa do replace mas tem de continuar sendo 1,00
                        // então matematica basica 100 / 100 = 1
  }
}

