const alhamdulillahButtonIncrement = document.getElementById('alhamdulillah-increment-btn');
const alhamdulillahButtonDecrement = document.getElementById('alhamdulilah-decrement-btn');
const alhamdulillahText = document.getElementById('alhamdulillah-count');

const subhanallahButtonIncrement = document.getElementById('subhanallah-increment-btn');
const subhanallahButtonDecrement = document.getElementById('subhanallah-decrement-btn');
const subhanallahText = document.getElementById('subhanallah-count');

const allahuakbarButtonDecrement = document.getElementById('allahuakbar-decrement-btn');
const allahuakbarText = document.getElementById('allahuakbar-count');
const allahuakbarButtonIncrement = document.getElementById('allahuakbar-increment-btn');

let alhamdulillahInitialValue = 0;
let subhanallahInitialValue = 0;
let allahuakbarInitialValue = 0;

alhamdulillahButtonIncrement.addEventListener('click',function(){
    if(alhamdulillahInitialValue === 33){
        return alert('Alhamdulillah Completed please complete another one.');
    }
    alhamdulillahInitialValue++;
    alhamdulillahText.innerHTML = alhamdulillahInitialValue;
});
alhamdulillahButtonDecrement.addEventListener('click',function(){
    if(alhamdulillahInitialValue === 0){
        return alert('Sorry! Can not take negative value.');
    }
    alhamdulillahInitialValue--;
    alhamdulillahText.innerHTML = alhamdulillahInitialValue;
});

subhanallahButtonIncrement.addEventListener('click',function(){
    if(subhanallahInitialValue === 33){
        return alert('Subhanallah Completed please complete another one.');
    }
    subhanallahInitialValue++;
    subhanallahText.innerHTML = subhanallahInitialValue;
});
subhanallahButtonDecrement.addEventListener('click',function(){
    if(subhanallahInitialValue === 0){
        return alert('Sorry! Can not take negative value.');
    }
    subhanallahInitialValue--;
    subhanallahText.innerHTML = subhanallahInitialValue;
});

allahuakbarButtonIncrement.addEventListener('click',function(){
    if(allahuakbarInitialValue === 33){
        return alert('allahuakbar Completed please complete another one.');
    }
    allahuakbarInitialValue++;
    allahuakbarText.innerHTML = allahuakbarInitialValue;
});
allahuakbarButtonDecrement.addEventListener('click',function(){
    if(allahuakbarInitialValue === 0){
        return alert('Sorry! Can not take negative value.');
    }
    allahuakbarInitialValue--;
    allahuakbarText.innerHTML = allahuakbarInitialValue;
});

document.getElementById('reset-btn').addEventListener('click',function(){
    alhamdulillahInitialValue = 0;
    subhanallahInitialValue = 0;
    allahuakbarInitialValue = 0;
    allahuakbarText.innerHTML = 0;
    subhanallahText.innerHTML = 0;
    alhamdulillahText.innerHTML = 0;

})
