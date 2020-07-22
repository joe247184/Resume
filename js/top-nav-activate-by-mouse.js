!function () {
    var view = document.querySelectorAll('#topNavBar>nav>ul>li')
    var controller = {
        view: null,
        addActiveClass: function(){
            this.classList.add('active')
        },
        removeActiveClass: function(element){
            this.classList.remove('active')
        },
        bindEvent: function(){
            var li = this.view
            var li_length = li.length
            for (var i = 0; i < li_length; i++) {
                li[i].onmouseenter = this.addActiveClass
                li[i].onmouseleave = this.removeActiveClass
            }
        },
        init: function(view){
            this.view = view
        }
    }
    controller.init(view)
    controller.bindEvent()




    // // 顶部导航按钮，鼠标进入时添加active类，控制下划线和二级菜单出现，鼠标移出删除active类
    // var li = document.querySelectorAll('#topNavBar nav ul li');
    // var li_length = li.length;
    // for (var i = 0; i < li_length; i++) {
    //     li[i].onmouseenter = function (e) {
    //         e.currentTarget.classList.add('active');
    //     };
    //     li[i].onmouseleave = function (e) {
    //         e.currentTarget.classList.remove('active');
    //     };
    // }
}()