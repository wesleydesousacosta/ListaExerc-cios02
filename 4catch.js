async function ping() { 
    try {
      undefined();
      return 'pong';
    } catch (error) {
      console.log('Erro na função ping:', error);
      throw error;
    }
  }
  
  async function chamar() {
    try {
      const resultado = await ping();
      console.log(resultado);
    } catch (error) {
      console.log('Erro na função chamar:', error);
    }
  }
  
  chamar();  