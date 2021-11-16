

let para = document.getElementsByClassName('paragraphe')
console.log(para)

for (let i = 0; i < para.length; i++ ) {
    if((i + 1)%2 === 0 ){

        continue;
    }
    else if( i === para.length )
    {
        break;
    }
    else{
        para[i].innerHTML = i + 1;
    }
    console.log(i);
}

