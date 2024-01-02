const App = {
    data() {
        return {
            message: "Hello Element Plus",
            activeIndex: "1",
            json: {
                article1:{
                    content:"5555"
                },
                article2:{
                    content:"2222"
                },
                article3:{
                    content:"3333"
                }
            },
            content:""
        };
    },
    methods: {
        handleSelect(index) {
            this.activeIndex = index;
        },
        handleOpen(key, keyPath){
            console.log(key, keyPath)
        },
        handleClose(key,keyPath){
            console.log(key, keyPath)
        },
        getArticle(name){
            this.content=fetch("article/"+name+".md")
                .then(response => response.text())
                .then(data => {
                    this.content=markdown.toHTML(data);
                });
        }
    }
};
const app = Vue.createApp(App);
app.use(ElementPlus);
app.mount("#app");