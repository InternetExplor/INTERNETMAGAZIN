let btns = document.querySelectorAll('.btn'),
paket = document.querySelector('.paket'),
market = document.querySelector('.market'),
x = document.querySelector('.x')
p = document.querySelector('#p')
count = document.querySelector('.count')
  for(let child of btns){
    count.style.display = ('block')
    child.addEventListener('click', ()=>{
        console.log(child)
        count.innerHTML = parseInt(count.innerHTML) + parseInt(market.childElementCount - 2)
        child.value = 'delete'
        child.style.backgroundColor  = ('red')
        child.parentElement.style.display = ('none')
        cloneParent = child.parentElement.cloneNode(true)
        cloneParent.style.display = ('block')
        paket.appendChild(cloneParent)
        if (market.childElementCount > 0) {
          p.style.display = ('none')
      }
        market.addEventListener('click', ()=>{
          
            paket.style.cssText = ('display:flex; flex-wrap:wrap;')
            x.addEventListener('click', ()=>{
                paket.style.display = ('none')           
            })
        })
    })
     
  }
