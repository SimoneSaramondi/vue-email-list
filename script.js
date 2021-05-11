const app = new Vue({
    el:'#app',
    data:{
        randomMail: []
    },
    mounted(){

        const self = this;

        for(let i = 0; i < 10; i++){

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(function (risposta){
            self.randomMail.push(risposta.data.response)

            });
        }
        
    },
})