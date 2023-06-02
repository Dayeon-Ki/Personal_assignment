function popular_movie() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzlkNjAwYzRkMGY2YTk5YmYxNDA3YjEwYTlmNjRlZiIsInN1YiI6IjY0NzViNzQ0Njc0M2ZhMDBhOTlmMmM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.szhSS71pUMB3baZvs6FKvxTHwzENT9bV13PlOt08KPo'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(data => {
            // 1. 데이터.결과를 무비스 변수에 담는다.
            // 2. 무비스 변수를 포문이나 다른 메서드로 돌린다
            // 3. 루프안에서 영화 이름만 콘솔로 출력한다.
            const movies = data.results;
            // movies = [
            //     {title:"The Godfather", description:"df"},
            //     {title:"dfdfd", description:"df"},
            //     {title:"ab", description:"df"},
            //     {title:"ab", description:"df"},
            //     ...
            // ]
            // console.log(movies)
            // 4. 무비스 개수만큰 루프를 돌면서 제목을 찍어주고 싶습니다. 무비스.렝스
            // for example (movies.length === 20)
            const moviecontainer = "movie-container";         

            for(let i=0; i < movies.length; i++){               
                // console.log(movies[i].title)
                document.getElementById(moviecontainer).innerHTML += `     
                 <div class="movie-card" id="238">
                    <img src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}" alt="The Godfather">
                    <h3 class="movie-title"> ${movies[i].title}</h3>
                    <p> ${movies[i].overview}</p>
                    <p>Rating: ${movies[i].vote_average}</p>
                 </div>                  
                `
            }
            // console.log(movies[0].title) // god fa~~
            // console.log(movies[1].title) // 234234234
            // console.log(movies[2].title) // sdfdsfsdf
             
            // 5. movie-container 요소를 선택 한 후 
            // 6. 그 밑에 <div class="movie-content">영화제목</div> 이렇게 넣어준다.
            // 루프를 돌면서 영화개수만큼 돌아가야한다.
              
            // document.getElementById(moviecontainer).innerHTML += `<h1>${movies[0].title}</h1>`
         
            // console.log(document.getElementById("movie-container"))

           
        })
        .catch(err => console.error(err));
}

popular_movie()
