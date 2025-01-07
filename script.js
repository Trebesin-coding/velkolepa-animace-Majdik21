let surprise = document.querySelector("#surprise")
let wrapper = document.querySelector('.wrapper')

surprise.addEventListener('dblclick', function(){
    for (let i = 0; i < 1 ; i++ ){
        let muffin = document.createElement('div')
        muffin.classList.add('muffin')
    
        let randnum = Math.floor(Math.random()*1000)
        muffin.style.left = `${randnum}px`
    
        wrapper.append(muffin)
        console.log('let it snow')
    }

})

