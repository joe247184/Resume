!function () {
    var view = document.querySelector('#topNavBar')
    var controller = {
        view: null,
        aTags: null,
        initAnimation: function(){
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToTarget: function(coords,t){
            var tween = new TWEEN.Tween(coords.from);
            tween
                .to(coords.to, t)
                .easing(TWEEN.Easing.Quartic.InOut)
                .onUpdate(function () {console.log(t,coords.from.y)
                    window.scrollTo(0, coords.from.y);
                })
                .start();
        },
        bindEvent: function (aTags) {
            for (var i = 0; i <aTags.length; i++) {
                aTags[i].onclick = e => {
                    e.preventDefault();
                    var targetId = e.target.getAttribute('href');
                    var target = document.querySelector(targetId);
                    var targetY = target.offsetTop - 91;
                    var currentY = window.scrollY;

                    var coords = {
                        from: {y: currentY},
                        to: {y: targetY}
                    }
                    var t = Math.abs((targetY - currentY) / 100 * 200); //每100px滑动200ms
                    if (t > 500) {
                        t = 500;
                    }
                    
                    this.scrollToTarget(coords,t)
                }
            }
        },
        init: function(view){
            this.view = view
            this.aTags = view.querySelectorAll('nav>ul>li>a')
            this.initAnimation()
            this.bindEvent(this.aTags)
        }
    }
    controller.init(view)
}()