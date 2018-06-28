export function vrCalc (target) {
    let count = 0;
    const number = target.querySelector('.number');
    const kasa = target.querySelector('.kasa__num');
    let kassa = 0
    const data = document.getElementById('date');
        const kol = document.getElementById('kol');
        const kass = document.getElementById('kass');
        const zpq = document.getElementById('zp');
        const kart = document.getElementById('kart');
        

    kasa.innerHTML = kassa;
    number.innerHTML = count;
    function one (){
        count = count + 1;
        kassa = count * 50;
        number.innerHTML = count;
        kasa.innerHTML = kassa;
    }
    function two () {
        count = count + 2;
        kassa = count * 50;
        number.innerHTML = count;
        kasa.innerHTML = kassa;
    }
    function resets () {
        count = 0;
        kassa = 0;
        number.innerHTML = count;
        kasa.innerHTML = kassa;    
    }
    function countZP () {
        let persent = prompt('Какой процент получаем?', 0.05);
        let persentzp = kassa * persent;
        let zp = prompt('Зарплата за день', 200);
        let fuulzp = Number(zp) + Number(persentzp);
        let date = new Date();
        let curMounth = Number(date.getMonth()) + Number(1);
        data.innerHTML = date.getDate()+'.'+curMounth+'.'+date.getFullYear();
        kass.innerHTML =kassa;
        zpq.innerHTML =fuulzp;
        kol.innerHTML =count;
        kart.innerHTML =kassa - fuulzp;
    }
    window.addEventListener('keypress',(event)=>{
        const keyName = event.key;
        if (keyName==1) {
            one();
        }
        else if (keyName==2) {
            two();
        }
        else if (keyName=='r'){
            resets();
        }
        else if (keyName == 'z'){
              countZP();
        }
    });
    
}