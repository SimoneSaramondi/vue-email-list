const app = new Vue({
    el:'#app',
    data:{
        randomMail: [],
        loading: false,
    },
    mounted(){

        const ajaxMail = [];
        const loopTimes = 10; 

        this.loading = true;

        for(let i = 0; i < 10; i++){

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((risposta) => {
                    setTimeout(() => {
                        ajaxMail.push(risposta.data.response);

                        if(ajaxMail.length === loopTimes){
                            this.randomMail.push(...ajaxMail);
                            this.loading = false
                        }
                    }, Math.ceil(Math.random() * 3000));
            

            });
        }
        
    },
})