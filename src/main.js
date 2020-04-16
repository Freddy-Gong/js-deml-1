let content = document.querySelector('#content');
let style = document.querySelector('#style');
let string = `
/*你好，我是一名前端新人。
接下来我给大家做一个八卦。*/
#div1{      
    width: 300px;
    height:300px;
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1)
     50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#div1::before{
    width:150px;
    height:150px;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:#000;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1)
    20%, 
    rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:150px;
    height:150px;
    left:50%;
    bottom:0;
    transform:translateX(-50%);
    border-radius:50%;
    background:#fff;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, 
    rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
}
`;
let n = 0;
let string2 = '';

let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 += '<br>'
        } else if (string[n] === ' ') {
            string2 += '&nbsp'
        } else {
            string2 += string[n]
        }
        content.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        content.scrollTo(0, 99999);
        if (n + 1 < string.length) {
            n = n + 1;
            step();
        } else { };
    }, 50)
}
step()

