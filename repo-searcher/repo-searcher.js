import axios from 'axios';

const [ , , date1, date2 ] = process.argv;

const response = await axios.get("https://api.github.com/search/repositories",
    {
        params: {
            q: `created:${date1}..${date2}`,
            sort: "stars",
            order: "desc",
            per_page: 10
        }
    }
);

response.data.items.forEach(repo => {
  console.log(`${repo.full_name} ⭐ ${repo.stargazers_count}`);
});