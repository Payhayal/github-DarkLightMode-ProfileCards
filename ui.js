class UI {
    constructor() {
        this.profile = document.getElementById('profile');
        this.reposArea = document.getElementById('repos');
        this.alertArea = document.getElementById('alert');
    }
   showProfile(data) {
        this.profile.innerHTML = `
        <div class="row border p-4 my-4">
        <div class="col-md-3">
            <img 
            class="img-fluid rounded shadow" 
            src=${data.avatar_url}
            />
            <a target="_blank" class="btn btn-danger my-4 w-100" href=${data.html_url}>Show Profile</a>
        </div>
        <div class="col-md-9">
            <span class="badge bg-success fs-6 mt-1">Repositories:${data.public_repos}</span>
            <span class="badge bg-danger fs-6 mt-1">Gists:${data.public_gists}</span>
            <span class="badge bg-primary fs-6 mt-1">Followers:${data.followers}</span>
            <span class="badge bg-info fs-6 mt-1">Following:${data.following}</span>

            <ul class="list-group mt-5">
                <li class="list-group-item">About:${data.bio}</li>
                <li class="list-group-item">Company:${data.company}</li>
                <li class="list-group-item">Website:${data.blog}</li>
                <li class="list-group-item">Location:${data.location}</li>
                <li class="list-group-item">Account Creation Date:${new Date(data.created_at).toLocaleDateString()}</li>
            </ul>
        </div>
    </div>
    `
    }
   showRepos(repos) {
    repos.forEach((repo)=> {
        this.reposArea.innerHTML += `
        <div class="border row p-3 mb-4">
        <div class="col-md-6">
        <a target="_blank" href=${repo.html_url}>${repo.name}</a>
        </div>
        <div class="col-md-6">
            <span class="badge bg-primary">Stars:${repo.stargazers_count}</span>
            <span class="badge bg-danger">Watching:${repo.watchers_count}</span>
            <span class="badge bg-success">Forks:${repo.forks_count}</span>
        </div>
    </div>
        `;
        
    });

    }
    showAlert(message, classname) {
        const div = document.createElement('div');
        div.classList.add('alert');
        div.classList.add(classname)

        div.innerText = message;
        this.alertArea.innerHTML = '';
        this.alertArea.appendChild(div);

        setTimeout(() => {
            div.remove();
        },3000);

    }
}

export default UI;