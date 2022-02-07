let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://imgur.com/k5bRmkt.png') {
      myImage.setAttribute('src','https://imgur.com/rtyBVJr.png');
    } else {
      myImage.setAttribute('src','https://imgur.com/k5bRmkt.png');
    }
}


