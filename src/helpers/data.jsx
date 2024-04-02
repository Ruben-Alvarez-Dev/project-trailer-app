export const collections = [
  { id: 1, title: 'Top Rated', endpoint: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'},
  { id: 2, title: 'Upcoming', endpoint: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'},
  { id: 3, title: 'Popular', endpoint: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'},
  { id: 4, title: 'Adventure', endpoint: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&sort_by=vote_count.desc&with_genres=12'},
  { id: 5, title: 'Horror', endpoint: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&sort_by=vote_count.desc&with_genres=27'},
  { id: 6, title: 'Crime', endpoint: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&sort_by=vote_count.desc&with_genres=80'},
  { id: 7, title: 'Musical', endpoint: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&sort_by=vote_count.desc&with_genres=10402'},
  { id: 8, title: 'War', endpoint: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&sort_by=vote_count.desc&with_genres=10752'},

  ];
  
export const initData = async () => {
    
 
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzFmODBiMTk0ZjNmMDJhZmY5ZTE5NzNlMDc4NzBlYiIsInN1YiI6IjY0ZGE3ZDA5YmYzMWYyMDFjY2MwMjI5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9sx4LvoFY_tf3GBe96QtR_0wWw6C80n-SXdDXd123TU'
        }
      };
      
      endpoints.map((endpoint)=> {
        return fetch(endpoint.endpoint, options)
      });
      

      const rawData = await fetch(endpoint, options);
      const response = await rawData.json();

      

      return mappedData;
}
