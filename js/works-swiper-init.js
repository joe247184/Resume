!function () {
    var view = document.querySelector('.swiper-container')
    var controller = {
        view: null,
        swiperOptions: {
            loop: true,
            effect: 'cube',
            speed: 1000,
            autoplay: {
                disableOnInteraction: false,
                delay: 3000
            },
            //分页器配置
            pagination: {
                el: '.swiper-pagination',
            },
            //前进后退按钮配置
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        },
        init: function(view){
            this.view = view
            new Swiper(this.view,this.swiperOptions)
        },
    }
    controller.init(view)
}()