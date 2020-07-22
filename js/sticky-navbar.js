!function () {
    var view = document.querySelector('#topNavBar')
    var controller = {
        view: null,
        stickyBar: function () {
            var scrollY = window.scrollY;
            var topNavBar = this.view;
            //  滚动超过80时导航栏添加黏滞效果
            if (scrollY >= 0 && scrollY < 80) {
                topNavBar.classList.remove('scroll');
            } else {
                topNavBar.classList.add('scroll');
            }
        },
        bindEvent:function(){
            window.addEventListener('scroll', this.stickyBar.bind(this))
        },
        init: function(view){
            this.view = view
        }
    }
    controller.init(view)
    controller.bindEvent()




    // window.addEventListener('scroll', stickyBar)

    // function stickyBar() {
    //     var scrollY = window.scrollY;
    //     var topNavBar = document.querySelector('#topNavBar');
    //     //  滚动超过80时导航栏添加黏滞效果
    //     if (scrollY >= 0 && scrollY < 80) {
    //         topNavBar.classList.remove('scroll');
    //     } else {
    //         topNavBar.classList.add('scroll');
    //     }
    // }
}()