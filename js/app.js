const carouselContant = document.querySelector('.carousel-contant');
const prevBtn = document.querySelector('.btn-left');
const nextBtn = document.querySelector('.btn-right');
const totalSlider = carouselContant.length;
const index=0;

nextBtn.onclick= ()=>{
    next('next');
}

prevBtn.onclick= ()=>{
    next('prev');
}

function next(direction){
        if (direction=="next") {
            index++;
            if(index==totalSlider){
                index=0;
            }
        }
        else{
            if (index==0) {
                index.totalSlider-1;
            }else{
                index--;
            }
        }

        for ( i = 0; i < carouselContant.length; i++) {
            carouselContant[i].classlist.remove('active');
        }
        carouselContant[index].classlist.add('active');

}