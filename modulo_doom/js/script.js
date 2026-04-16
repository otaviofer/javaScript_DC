// ** CRIANDO SLIDER COM VANILLA JS

var lastIndex = 0;

var images = document.querySelectorAll('.container img');

const colors = ["#bf2424", "#c4b99b", "#4a220a", "#3a7326"]

images.forEach((item,index)=>{
    document.querySelectorAll('.bullet-single')[index]
    .addEventListener('click',()=>{
        let lastImage = document.querySelectorAll('.container img')[lastIndex];
        let actualImage = document.querySelectorAll('.container img')[index];

        // resetar bullets e setar nova imagem

        document.querySelectorAll('.bullet-single')[lastIndex]
        .classList.remove('active-bullet');
        document.querySelectorAll('.bullet-single')[index]
        .classList.add('active-bullet');

        lastImage.style.opacity = 0;
        actualImage.style.opacity = 1;

        document.body.style.backgroundColor = colors[index];

        lastIndex = index;
        
    });
});