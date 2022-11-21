let pago = document.getElementById('pago') 
let pagoBill = parseInt(pago.value) 


let person = document.getElementById('person')
let personBill = parseInt(person.value)

let btns = document.querySelectorAll('button.btns')

let custom = document.querySelector('.inputValue')
let customBill = parseInt(custom.value)


let infBtns = 0
let personAmount = document.querySelector('p.personAmount')
let total = document.querySelector('p.total')


btns.forEach(e => {
    e.addEventListener('click', event => {

        btns.forEach(e =>{
            e.classList.remove('m')
        })

        e.classList.add('m')

        infBtns = parseInt(event.target.innerText.slice(0, -1))
        console.log(infBtns)      
       
        calculo()

    })
})


pago.addEventListener('input', ()=> {
    pagoBill = parseInt(pago.value)
    calculo()
}) 


person.addEventListener('input', ()=>{
    personBill = (parseInt(person.value))

    if(personBill == 0){
        person.value = 0
    personBill = 0
    }
  
})


custom.addEventListener('input', ()=>{
infBtns  = (parseInt(custom.value)) 
   calculo()
})

let reset = document.querySelector('button.reset')

reset.addEventListener('click', () =>{
    pago.value = 0
    pagoBill = 0
    person.value = 0
    personBill = 0
    custom.value = 0
    customBill= 0
    custom.value = "Custom"
    calculo()
} )
console.log("Clcik reset")

function calculo(){
    personAmount.innerText =  ((pagoBill * infBtns/100) /personBill).toFixed(2)
    total.innerText = ( ((pagoBill * infBtns/100) + pagoBill) /personBill).toFixed(2)
}





