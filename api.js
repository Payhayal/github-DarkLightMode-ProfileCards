class Github {
    constructor() {
        this.clientId = 'api number';
        this.clientSecret = 'api secret number'
        this.perPage = 15;
        this.sort = 'asc';

    
    }
   async getUser(username) {
    const profileRes = await fetch (
        `https://api.github.com/users/${username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
        );

        const repoRes = await fetch (
            `https://api.github.com/users/${username}/repos?per_page=${this.perPage}&sort=${this.sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`
        
        );
   
    const profile = await profileRes.json();
    const repos = await repoRes.json();

    return {
      profile,
      repos,
    };     

    }
}

export default Github;
