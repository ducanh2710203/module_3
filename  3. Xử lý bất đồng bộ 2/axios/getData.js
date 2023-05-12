const axios = require("axios");
// axios= require("axios")
function getJSONAPI() {
    return new Promise(function (resolve) {
        for (let i = 1; i < 4; i++) {
            axios.get(`http://jsonplaceholder.typicode.com/posts/${i}`)
                .then(function (json) {
                    resolve(json.data);
                });
        }
    })
}
getJSONAPI().then(result => {
    console.log(result);
})