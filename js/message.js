!function () {
    var view = document.querySelector('#messageBoard')

    var model = {
        init: function () {
            var APP_ID = 'y7Ge6wrX6Vtup9Uc1LpLxqgk-gzGzoHsz'
            var APP_KEY = 'vXW41Fyshia9WlnMUTf2WeEg'

            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        fetch: function(){
            let query = new AV.Query('Message')
            return query.find()
        },
        save: function(name,content){
            let Message = AV.Object.extend('Message')
            let message = new Message()
            return message.save({
                name: name,
                content: content
            })
        }
    }

    var controller = {
        view: null,
        model: null,
        messageList: null,
        messageForm: null,
        appendList:function(name,content){
            let li = document.createElement('li')
            let span = document.createElement('span')
            let p = document.createElement('p')
            span.innerText = name+':'
            p.innerText = content
            li.appendChild(span)
            li.appendChild(p)
            this.messageList.appendChild(li)
        },
        loadMessage: function(){
            this.model.fetch().then((sheet)=>{
                sheet.forEach((object)=>{console.log(object)
                    this.appendList(object.attributes.name,object.attributes.content)
                })
            })
        },
        saveMessage: function(){
            let form = this.view.querySelector('#postMessage');console.log(form)
            let name = form.querySelector('input[name="name"]').value
            let content = form.querySelector('textarea[name="content"]').value
            this.model.save(name,content).then((object)=>{console.log(object)
                this.appendList(object.attributes.name,object.attributes.content)
                form.querySelector('textarea[name="content"]').value = ''
                form.classList.remove('posting')
            })
            form.classList.add('posting')

        },
        bindEvent: function(){
            this.messageForm.addEventListener('submit',(e)=>{
                e.preventDefault()
                this.saveMessage()
            })
        },
        init: function(view,model){
            this.view = view
            this.model = model
            this.messageList = this.view.querySelector('#messageList')
            this.messageForm = this.view.querySelector('#postMessage')
            this.model.init()
            this.loadMessage()
            this.bindEvent()
        }
    }
    controller.init(view,model)
}()