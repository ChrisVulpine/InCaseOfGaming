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
      } catch (error) {
          console.error(error);
      }
}

fetchGameDetails();

export default fetchGameDetails;

// below is only for testing


// document.getElementById('search').addEventListener('click', fetchGameDetails);