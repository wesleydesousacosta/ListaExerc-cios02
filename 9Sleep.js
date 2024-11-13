function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function blink() {
    let blueBall = document.querySelector('div#blueBall');
  
    blueBall.style.background = '#028E8E';
    await sleep(300);
    
    blueBall.style.background = '#1dfcfc';
    await sleep(300);
  
    blueBall.style.background = '#cdfefe';
    await sleep(300);
  
    blueBall.style.background = '#028e8e';
    await sleep(300);
  }
  