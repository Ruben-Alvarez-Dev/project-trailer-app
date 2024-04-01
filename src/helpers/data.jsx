export const collections = [
    { id: 1, title: 'Popular', endpoint: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'},
    { id: 2, title: 'Top Rated', endpoint: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'},
    { id: 3, title: 'Upcoming', endpoint: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'},
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

