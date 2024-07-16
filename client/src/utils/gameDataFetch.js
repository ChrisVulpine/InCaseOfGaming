import axios from 'axios';
let searchValue = document.getElementById('q').value;
async function fetchGameDetails(searchValue) {
    
    const options = {
        method: 'GET',
        url: 'https://steam2.p.rapidapi.com/search/${searchValue}/page/1',
        params: {
            query: searchValue,
            limit: '2'
        },
        headers: {
          'x-rapidapi-key': '023fef78bdmsh20edf95ffe57816p1d555ajsn66f4aae9c3ee',
          'x-rapidapi-host': 'steam2.p.rapidapi.com'
        }
      };

      try {
    
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}

fetchGameDetails(searchValue);

export default fetchGameDetails;

// below is only for testing


// document.getElementById('search').addEventListener('click', fetchGameDetails);