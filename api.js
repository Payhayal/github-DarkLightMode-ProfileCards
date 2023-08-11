class Github {
    constructor() {
        this.clientId = 'b233371abb0efbe22633';
        this.clientSecret = '2edcc082d034a4ef915b42de69f1a8301cc87965'
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