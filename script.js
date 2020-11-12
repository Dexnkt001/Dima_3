let Data  = {
    name:[],
    color:[],
    check:[],
    sel:[],
    radio:[],
    range:[],
    area:[]
},
count  = 0,
str  = '';

window.onload = function (){
    if (JSON.parse(localStorage.getItem('info'))) {
        Data = JSON.parse(localStorage.getItem('info'));
    count = JSON.parse(localStorage.getItem('count'));
    }
}

const updateData = () => {
Data.name.push(document.getElementById('text').value);
Data.color.push(document.getElementById('color').value);
Data.check.push(document.getElementById('check1').value);
Data.sel.push(document.getElementById('sel').value);
   if (document.getElementById('r1').checked === true){
    Data.radio.push('еще приду');
   }else Data.radio.push('больше не приду');
Data.range.push(document.getElementById('range').value);
Data.area.push(document.getElementById('area').value);
console.log(Data);
count++;
}


let setdata = () => {
    for (let i = 0; i < count; i++){
       str = str + '<tr>';
        for (key of Object.values(Data)){
            if(key[i] !== undefined){
                str = str + `<td style = 'width:200px'> ${key[i]}</td>`
            }
    }
    str = str + '</tr>';
    }
}

let ResetData = () => {
    localStorage.setItem('info', null);
    localStorage.setItem('count', null);
    for (key in Data){
        Data[key] = [];
    }
    count = 0;
    str = ``;
}


let newWindow = () => {
    localStorage.setItem('info', JSON.stringify(Data));
    localStorage.setItem('count', JSON.stringify(count));
setdata();
var win=window.open("","hello","width=1300 height=800");
win.document.write(
`<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Opros</title>
        <link rel="stylesheet" href="style.css">
        <link rel="shortcut icon" href="./resourse/logo.png" type="image/png">"
    </head>
    <body class = 'back'>
    <table style='color:white'>
        <caption>
            <tr>
                <th>Имя</th>
                <th>Цвет</th>
                <th>Понравилось ли</th>
                <th>Рекомендация</th>
                <th>Придете ли вы еще</th>
                <th>Ваша оценка</th>
                <th>Ваше мнение</th>
            </tr>
        </caption>
        ${str}
    </table>
    <div class='butS'>
    <button class='btn-btE' id="btnE" type='button'>Exit</button>
    <button class='btn-btP' id="btnP" type='button'>Prev</button>
    </div>
    <script>
    let ExitWindow = () =>{
        window.close();
    },

    PrevWindow = ()=>{
        window.blur();
    }
    document.querySelector('.btn-btE').addEventListener('click',ExitWindow);
    </script>
      </body>
      </html>`
);
}

document.getElementById('rez').addEventListener('click',newWindow);
document.querySelector('.btn-btA').addEventListener('click', updateData);
document.querySelector('.btn-btR').addEventListener('click', ResetData);
