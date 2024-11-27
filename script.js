document.body.addEventListener('mousemove', (event) => {
    const sparkle1 = document.createElement('div');
    sparkle1.className = 'sparkle1';
    sparkle1.style.left = `${event.clientX}px`;
    sparkle1.style.top = `${event.clientY}px`;
  
    document.body.appendChild(sparkle1);
  
    setTimeout(() => {
      sparkle1.remove();
    }, 500);
  });
  
document.body.addEventListener('mousemove', (event) => {
    const sparkle2 = document.createElement('div');
    sparkle2.className = 'sparkle2';
    sparkle2.style.left = `${event.clientX}px`;
    sparkle2.style.top = `${event.clientY}px`;
  
    document.body.appendChild(sparkle2);
  
    setTimeout(() => {
        sparkle2.remove();
    }, 500);
  });
document.body.addEventListener('mousemove', (event) => {
    const sparkle3 = document.createElement('div');
    sparkle3.className = 'sparkle3';
    sparkle3.style.left = `${event.clientX}px`;
    sparkle3.style.top = `${event.clientY}px`;
  
    document.body.appendChild(sparkle3);
  
    setTimeout(() => {
        sparkle3.remove();
    }, 500);
  });
document.body.addEventListener('mousemove', (event) => {
    const sparkle4 = document.createElement('div');
    sparkle4.className = 'sparkle4';
    sparkle4.style.left = `${event.clientX}px`;
    sparkle4.style.top = `${event.clientY}px`;
  
    document.body.appendChild(sparkle4);
  
    setTimeout(() => {
        sparkle4.remove();
    }, 500);
  });
  