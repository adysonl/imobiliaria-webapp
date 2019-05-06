
const AlertService = {
  sucess (message) {
    message = message || 'Operação realizada com sucesso! Continuar botão'
    alert(message)
  }
}

export default AlertService
