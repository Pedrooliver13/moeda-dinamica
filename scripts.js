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
    }).format(value/100)
  }
}

