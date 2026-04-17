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
// to also create and immediately switch into a new branch git checkout -b <branch name>    
//git checkout allows you to switch to a different branch, allowing you to work on it
//pull request is a way to submit your changes to the main branch, it is a request for the maintainer of the repository to review and merge your changes into the main branch, it is used in collaborative projects where multiple developers are working on the same codebase, it allows for code review and discussion before merging changes into the main branch, ensuring that only high-quality code is merged and that any potential issues are identified and addressed before they become part of the main codebase.
//merging is the process of integrating changes from one branch into another, it is used to combine the work of multiple developers and to keep the main branch up to date with the latest changes, it can be done through a pull request or directly using git merge command, it is important to resolve any conflicts that may arise during the merging process to ensure that the codebase remains stable and functional.
// merging is necessary to keep the main branch up to date with the latest changes and to ensure that all developers are working with the most recent codebase, it also allows for collaboration and code review, ensuring that only high-quality code is merged into the main branch, it helps to prevent conflicts and issues that may arise from multiple developers working on the same codebase, it also allows for better organization and management of the codebase, making it easier to track changes and identify issues.
// fastforward merge happens when the branch being merged is not different from the target branch
//conflicts happen when there are changes in the same file and same line of code in both branches, git will not know which change to keep and will ask you to resolve the conflict manually by choosing which change to keep or by combining the changes, it is important to resolve conflicts carefully to ensure that the codebase remains stable and functional, it is also important to communicate with other developers to avoid conflicts and to ensure that everyone is aware of the changes being made to the codebase.
// three way merge happens when there are changes in the same file but different lines of code in both branches, git will automatically merge the changes without any conflicts, it is important to review the changes before merging to ensure that they are correct and do not introduce any issues to the codebase, it is also important to communicate with other developers to ensure that everyone is aware of the changes being made to the codebase and to avoid any potential conflicts in the future.
//the three  way merge occurs when the branches have diverged and there are changes in the same file but different lines of code, git will automatically merge the changes without any conflicts, it is important to review the changes before merging to ensure that they are correct and do not introduce any issues to the codebase, it is also important to communicate with other developers to ensure that everyone is aware of the changes being made to the codebase and to avoid any potential conflicts in the future.
//merge commit is a commit that is created when merging two branches, it contains the changes from both branches and serves as a record of the merge, it is important to write a clear and descriptive commit message for the merge commit to provide context and information about the changes being merged, it also helps to keep the commit history organized and easy to understand.
//rebase is a process of moving or combining a sequence of commits to a new base commit, it is used to maintain a cleaner and more linear commit history, it can be used to update a feature branch with the latest changes from the main branch before merging, it can also be used to combine multiple commits into a single commit for better organization and readability, it is important to use rebase carefully and to communicate with other developers to avoid conflicts and to ensure that everyone is aware of the changes being made to the codebase.  
// merge conflict occurs when git is unable to automatically resolve differences between branches during a merge
//to resolve a merge conflict, you need to open the affected file and look for the conflict markers (<<<<<<<, =======, >>>>>>>) that indicate the conflicting changes, you can then choose which changes to keep or combine the changes manually, after resolving the conflict, you need to add the resolved file to the staging area using git add and then commit the changes using git commit, it is important to communicate with other developers to ensure that everyone is aware of the changes being made to the codebase and to avoid any potential conflicts in the future.
// <<<<<< indicates the start of the conflicting changes from the current branch, ======= indicates the separation between the conflicting changes, >>>>>> indicates the end of the conflicting changes from the other branch. it is important to carefully review the conflicting changes and to communicate with other developers to ensure that everyone is aware of the changes being made to the codebase and to avoid any potential conflicts in the future.
// ------ seperates the conflicting changes from the current branch and the other branch, it is important to carefully review the conflicting changes and to communicate with other developers to ensure that everyone is aware of the changes being made to the codebase and to avoid any potential conflicts in the future.
// >>>>>> indicates the end of the conflicting changes from the other branch, it is important to carefully review the conflicting changes and to communicate with other developers to ensure that everyone is aware of the changes being made to the codebase and to avoid any potential conflicts in the future.
//to avoid merge conflicts, it is important to communicate with other developers and to ensure that everyone is aware of the changes being made to the codebase, it is also important to pull the latest changes from the main branch before starting to work on a new feature or bug fix, it is also important to use branches effectively and to keep them up to date with the latest changes from the main branch, it is also important to review and test changes before merging them into the main branch to ensure that they do not introduce any issues or conflicts.
//conflict must be resolved by manually editing the conflicting files and then committin it
// to push to a new branch for the first time use git push --set-upstream origin <branch-name> this will set the upstream branch and allow you to use git push  and git pull without specifying the branch name in the future. after the first time you can simply use git push to push your changes to the remote repository. it is important to communicate with other developers to ensure that everyone is aware of the changes being made to the codebase and to avoid any potential conflicts in the future.
