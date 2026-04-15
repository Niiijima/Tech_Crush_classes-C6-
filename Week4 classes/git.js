//Git Commands
//assignment: write a 3-paged report on version control systems, types, advantages and differences between the types(images and commands are allowed).
// to link your github account do the following: git config--global user.name "Your user name" and git config--global user.email"your email address"
//to know if your git was configured (git config--global--list)

//basic git commands:

//create a git repository use git init
//to clone a repository use git clone
//to add changes from your working directory to the staging area use git add
//to record changes in the staging area to the repository use git commit
//to create a new branch use git branch
//to change branches use git branch -M (name of branch)
//this links your repository with your working copy on your laptop git remote add origin
//to view the current state of things use the git status
//to dispay the commit history, commit ID and commit messages and author's information use git log(it is useful for reviewing cahnges and tracking progress)
//master or main are both default branches that github gives you
//to push your code to your git hub use git push
//to fetch changes from your github(remote repo) to  your laptop, allowing you to merge in the local repository(laptop) use git pull
//working directory is the dirctory where you modify files
//staging area is also known as the index, it holds changes that are ready to be committed. files are added here through the use of git add
//the git directed is the repository itself, containing all git internal structures, including the history of all the changes youve made
//untracked files(u) the files are new and not yet tracked by git
//tracked (modified, staged and commited) when the files has been tracked by git
//a branch is an independent line of development that allows developers to isolate theor work from the main codebase, enabling parallel development and experimentation without affecting the primary project. multiple branches can be made and changes made in one branch will not impact others until merged
//main/master branch are the default branch, the one that will be deployed, and is the most stable
//the developed or production branch are the integration branch where feature branches are merged before being merged into the master branch for release
//the feature branch is created by the developer to write the code, fix issues or bugs, you will push and merge them into the development or integration branch and which is further pushed to the main/master branch for deployment and for users to interract with 
//the hierachy is feature branch-> development/developed branch->main/master branch
//use git branch <branch name> to create a branch
//to see the list of all the branches in a repository use git branch
// to also create and immediately switch into a new branch git checkout -b
//git checkout allows you to switch to a different branch, allowing you to work on it
