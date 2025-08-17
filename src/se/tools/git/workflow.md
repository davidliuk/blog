# Workflow

分支开发

```sh
git checkout -b xxx
git branch
git commit -m "discription"
git commit --amend --no-edit
```



```sh
git status origin
git stash
git fetch
git reset --hard origin/master
git stash pop
git log
git rebase origin/master
git reset--soft origin/master #该指令head指针指向最新的origin/master,保持index和working copy!中数据不变，也就是抛弃自己分支中的cot,但是工作区里的代码不会被修改，这样的操作可以抛弃之前无用的 commit操作，然后重新提交一次commit,整合之前的所有commit操作
```

