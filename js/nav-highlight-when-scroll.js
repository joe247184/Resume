!function () {
    var view = document.querySelectorAll('[data-x]')
    var controller = {
        view: null,
        findNearest: function (tag_with_data_x) {
            var nearest = 0;
            for (let i = 1; i < tag_with_data_x.length; i++) {
                if (Math.abs(tag_with_data_x[i].offsetTop - window.scrollY) < Math.abs(tag_with_data_x[nearest].offsetTop - window.scrollY)) {
                    nearest = i;
                }
            }
            return tag_with_data_x[nearest];
        },
        bindEvent: function () {
            window.addEventListener('scroll', () => {
                var y = window.scrollY;
                var delay = setTimeout(()=> {
                    if (Math.abs(window.scrollY - y) > 30) {
                        clearTimeout(delay);
                        return;
                    }
                    var nearest = this.findNearest(this.view);
                    var id = nearest.getAttribute("id");
                    var a = document.querySelector('a[href=' + '"#' + id + '"]');
                    var li = a.parentNode;
                    var brothers = li.parentNode.childNodes;
                    for (let i = 0; i < brothers.length; i++) {
                        if (brothers[i].classList) {
                            brothers[i].classList.remove('highlight');
                        }
                    }
                    li.classList.add('highlight');
                }, 0);
            })
        },
        init: function(view){
            this.view = view
            this.bindEvent()
            window.scrollTo(0,1)
        }
    }
    controller.init(view)













//     window.addEventListener('scroll', highlightNav)

//     function highlightNav() {
//         var y = window.scrollY;
//         var delay = setTimeout(function () {
//             if (Math.abs(window.scrollY - y) > 30) {
//                 clearTimeout(delay);
//                 return;
//             }
//             var nearest = findNearest();
//             var id = nearest.getAttribute("id");
//             var a = document.querySelector('a[href=' + '"#' + id + '"]');
//             var li = a.parentNode;
//             var brothers = li.parentNode.childNodes;
//             for (let i = 0; i < brothers.length; i++) {
//                 if (brothers[i].classList) {
//                     brothers[i].classList.remove('highlight');
//                 }
//             }
//             li.classList.add('highlight');
//         }, 0);
//     }

//     function findNearest() {
//         var tag_with_data_x = document.querySelectorAll('[data-x]');
//         var nearest = 0;
//         for (let i = 1; i < tag_with_data_x.length; i++) {
//             if (Math.abs(tag_with_data_x[i].offsetTop - window.scrollY) < Math.abs(tag_with_data_x[nearest].offsetTop - window.scrollY)) {
//                 nearest = i;
//             }
//         }
//         return tag_with_data_x[nearest];
//     }
}()