import axios from "axios"

const options = {
    method: 'GET',
    url: 'https://transloc-api-1-2.p.rapidapi.com/agencies.json',
    params: {
        callback: 'call',
        geo_area: '35.80176,-78.64347|35.78061,-78.68218',
        agencies: '12'
    },
    headers: {
        'x-rapidapi-host': 'transloc-api-1-2.p.rapidapi.com',
        'x-rapidapi-key': 'f513f8bc0bmsh1a8ca52a8881d74p1e45f0jsn77bbb5ef7a5b'
    }
};

export const MainApi = {
    getDateApi: () =>
        axios.request(options)
            .then(
                response => response.data.generated_on
            )
            .catch(function (error) {
                console.error(error);
            })
}

