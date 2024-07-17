import axios from 'axios';

async function fetchGameDetails(searchValue) {

    if (!searchValue) {
        console.error('Please enter a search value');
        return;
    }
    
    const options = {
      url: `https://games-details.p.rapidapi.com/search/${encodeURIComponent(searchValue)}`,
      params: {
        limit: '10'
      },
      headers: {
        'x-rapidapi-key': '023fef78bdmsh20edf95ffe57816p1d555ajsn66f4aae9c3ee',
        'x-rapidapi-host': 'games-details.p.rapidapi.com'
      }
    };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Request data:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error message:', error.message);
    }
    console.error('Error config:', error.config);
  }
}
fetchGameDetails('yourSearchQuery');

export default fetchGameDetails;

// below is only for testing


// document.getElementById('search').addEventListener('click', fetchGameDetails);