const baseUrl = "https://gamestop20211031161551.azurewebsites.net/api/souls/" // the Rest controller // https://jeff0167.github.io/gameStopWebHost/  my web page :)

const app = Vue.createApp({
    data() {
        return {
            games: [],
            selectedGames: [],
            currentGameId: "null",
            currentGameTitle: "",
            currentGameObject: {id: 0, name: "", description: "", amountOfSouls: 0, image: 0},
            message: "",
            
        }
    },
    async created(){
        this.GetAll();
    },
    methods: {
        async GetAll() { 
           this.Get();
        },
        async GetById(){
            this.Get();
        },
        async GetAllByTitle(){
            try {
                const response = await axios.get(baseUrl + "Name/" + this.currentGameTitle)
                this.selectedGames = await response.data
            } catch (ex) {
                alert(ex.message) 
            }
        },

        async Get(){
            if(this.currentGameId == "null"){
                try {
                    const response = await axios.get(baseUrl)
                    this.games = await response.data
                } catch (ex) {
                    alert(ex.message) 
                }
            }
            else{
                try {
                    const response = await axios.get(baseUrl + this.currentGameId)
                    this.currentGameObject = await response.data
                } catch (ex) {
                    alert(ex.message) 
                }
            }
        }
    }
})