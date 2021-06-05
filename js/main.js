// =============The url variable is thedefualt API Url============================================
let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=a68b4b3c56b4e5760b0f3f6655e9a135&page=4`;
//================================================================================================

//===============The movieAPI List is used to store JSON Response=================================
let movieAPI = [];
//================================================================================================

// ===================================================getMovies(apiUrl) is a function that takes an API Url to fetch as a prameter
// then returns json response then pass that response to showMovie() function ============================================================
async function getMovies(apiUrl){
    await fetch(apiUrl).then(function(fetchMovieAPI){
        movieAPI = fetchMovieAPI.json();
        return movieAPI;
        
    }).then(function(movieAPI){
        // console.log(movieAPI);
        showMovies(movieAPI)

    }).catch(function(error){
        console.error("Error");
    });
    
    
}

getMovies(url)

// =========================================================================================================================================================

//=======================showMovies(jsonResponse) is a function to loop through the JSON response, extract Movies Info and adding them into HTML=======================
function showMovies(movieAPI){

    let movie = ``
    for(const eachMovie in movieAPI.results){
        let img = movieAPI.results[eachMovie].backdrop_path
        let title = movieAPI.results[eachMovie].original_title
        let date = movieAPI.results[eachMovie].release_date
        let overview = movieAPI.results[eachMovie].overview
        let rate = movieAPI.results[eachMovie].vote_avarage
        movie +=`<div class="col-md-6 col-lg-4 my-3">
                    <div class="movie rounded position-relative movie-box">
                        <div class="box">
                            <img src="https://image.tmdb.org/t/p/w500/${img}" class="img-fluid rounded movie-img">
                            <div class="overlay d-flex align-items-center ">
                                <div class="info p-0">
                            
                                    <h2 mt-2>${title + date}</h2>
                                    <p>${overview}</p>
                                    <p>${rate}</p>
                                    <p>${date}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    }  
        
        document.getElementById("moviesList").innerHTML = movie 
        // console.log(movieAPI.backdrop_path);
    
    
}
// ============================================================================================================================================


//===============searchInAllCatagroies And searchInCurrentCatagory are used to select Search Entries in HTML==============================
let searchInAllCatagroies = document.getElementById('searchInAllCatagroies');
let searchInCurrentCatagory = document.getElementById('searchInCurrentCatagory');
//========================================================================================================================================

//==============Used to get the value of the search entries and query the Movie Database using the Search API Url=========================================
searchInCurrentCatagory.addEventListener('keyup', function(){
    // searchKeyWord is used to Get the value of user input
    searchKeyWord = searchInCurrentCatagory.value;
    //The url is using the searchKeyWord to filter the Movie Database using the search Api Url
    searchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchKeyWord}&api_key=a68b4b3c56b4e5760b0f3f6655e9a135&language=en-US&include_adult=false`
    getMovies(searchUrl);

    //If search Entry is empty return to The Now Playing Catagory
    if (searchKeyWord == ''){
        body = document.getElementById('body')
        body.addEventListener('click', function(){
        
        })
    }
})

searchInAllCatagroies.addEventListener('keyup', function(){
    // searchKeyWord is used to Get the value of user input
    searchKeyWord = searchInAllCatagroies.value;
    //The url is using the searchKeyWord to filter the Movie Database using the search Api Url
    searchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchKeyWord}&api_key=a68b4b3c56b4e5760b0f3f6655e9a135&language=en-US&include_adult=false`
    getMovies(searchUrl);

    //If search Entry is empty return to The Now Playing Catagory
    if (searchKeyWord == ''){
        body = document.getElementById('body')
        body.addEventListener('click', function(){
        keyWord = 'now_playing'
        url = `https://api.themoviedb.org/3/movie/${keyWord}?api_key=a68b4b3c56b4e5760b0f3f6655e9a135&page=4`
        getMovies(url);
        })
    }
})
//==========================================================================================================================================================


//==============================Selecting the navbar list items (Movie Catagories)==========================
let nowPlaying = document.getElementById("nowPlaying");
let popular = document.getElementById("popular");
let topRated = document.getElementById("topRated");
let trending = document.getElementById("trending");
let upcoming = document.getElementById("upcoming");
//=======================================================================================

//================================Adding Event Listeners to navbar list items to filter the Movie DataBase by Catagory=========================
nowPlaying.addEventListener("click", function(){
    keyWord = 'now_playing'
    url = `https://api.themoviedb.org/3/movie/${keyWord}?api_key=a68b4b3c56b4e5760b0f3f6655e9a135&page=4`
    getMovies(url);
})

popular.addEventListener("click", function(){
    keyWord = 'popular'
    url = `https://api.themoviedb.org/3/movie/${keyWord}?api_key=a68b4b3c56b4e5760b0f3f6655e9a135&page=4`
    getMovies(url);
})

topRated.addEventListener("click", function(){
    let keyWord = 'top_rated';
    url = `https://api.themoviedb.org/3/movie/${keyWord}?api_key=a68b4b3c56b4e5760b0f3f6655e9a135&page=4`
    getMovies(url);

})

trending.addEventListener("click", function(){
    let keyWord = 'now_playing';
    url = `https://api.themoviedb.org/3/movie/${keyWord}?api_key=a68b4b3c56b4e5760b0f3f6655e9a135&page=4`
    getMovies(url);
})

upcoming.addEventListener("click", function(){
    let keyWord = 'upcoming';
    url = `https://api.themoviedb.org/3/movie/${keyWord}?api_key=a68b4b3c56b4e5760b0f3f6655e9a135&page=4`
    getMovies(url);
})
//========================================================================================================================================


//=====================Selecting the Toggle Icon=========================
let toggler = document.getElementById("dash");
//=======================================================================

// =================================NavigationBar Toggling=================================
$("#toggle").click(function(){

    let left = $('.side-navbar').css('left');
    if (left == '-240px'){
        $('.side-navbar').animate({ left: "0px" }, 600);
        $('.right-side-navbar').animate({ left: "240px" }, 600);
        toggler.classList.remove('fa-align-justify')
        toggler.classList.add('fa-times')



    }
    else{
        $('.side-navbar').animate({ left: "-240px" }, 600);
        $('.right-side-navbar').animate({ left: "0px" }, 600);
        toggler.classList.add('fa-align-justify')
        toggler.classList.remove('fa-times')
    }
    
    
})

// ==========================================================================================

//===============================Getting Form Info from the user========================================================
let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userPhone = document.getElementById("phone");
let userAge = document.getElementById("age");
let userPassword = document.getElementById("password");
let userRepassword = document.getElementById("repassword");
//=======================================================================================================================

//===============================Getting Form Alerts=====================================================================
let nameAlert = document.getElementById('nameAlert');
let emailAlert = document.getElementById('emailAlert');
let phoneAlert = document.getElementById('phoneAlert');
let ageAlert = document.getElementById('ageAlert');
let passwordAlert = document.getElementById('passAlert');
let rePasswordAlert = document.getElementById('repassAlert');
//=======================================================================================================================

//======================Form Validation==================================
userName.addEventListener('keyup', function(){
    let namePattern = /^[a-zA-Z ]{2,30}$/
    let nameValue = userName.value;
    let isValid = namePattern.test(nameValue);
    if (isValid){
        nameAlert.style.display = 'none';
    }else{
        nameAlert.style.display = 'block';
    }
    
})

userEmail.addEventListener('keyup', function(){
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let emailValue = userEmail.value;
    let isValid = emailPattern.test(emailValue);
    if (isValid){
        emailAlert.style.display = 'none';
    }else{
        emailAlert.style.display = 'block';
    }
    
})

userPhone.addEventListener('keyup', function(){
    let phonePattern = /(?:[0-9]●?){6,14}[0-9]/
    let phoneValue = userPhone.value;
    let isValid = phonePattern.test(phoneValue);
    if (isValid){
        phoneAlert.style.display = 'none';
    }else{
        phoneAlert.style.display = 'block';
    }
    
})

userAge.addEventListener('keyup', function(){
    let agePattern = /^(0?[1-9]|[1-9][0-9])$/
    let ageValue = userAge.value;
    let isValid = agePattern.test(ageValue);
    if (isValid){
        ageAlert.style.display = 'none';
    }else{
        ageAlert.style.display = 'block';
    }
    
})

userPassword.addEventListener('keyup', function(){
    let passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
    let passwordValue = userPassword.value;
    let isValid = passwordPattern.test(passwordValue);
    if (isValid){
        passwordAlert.style.display = 'none';
    }else{
        passwordAlert.style.display = 'block';
    }

})

userRepassword.addEventListener('keyup', function(){
    let passwordValue = userPassword.value;
    let rePasswordValue = userRepassword.value;
    if (rePasswordValue === passwordValue){
        rePasswordAlert.style.display = 'none';
    }else{
        rePasswordAlert.style.display = 'block';
    }

})










