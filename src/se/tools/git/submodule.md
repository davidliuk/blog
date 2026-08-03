# Git Submodule

Submodule 让一个仓库记录另一个仓库的特定 commit。父仓库保存的不是子仓库内容，而是 URL 配置和一个 gitlink 指针。

## Mental Model

```text
parent commit
└── path/to/dependency → child repository commit
```

这意味着：

- 切换父仓库分支不会自动更新子仓库工作区。
- 子仓库可以处于 detached HEAD，这是按固定 commit 检出的正常状态。
- 修改子仓库后，需要先在子仓库提交，再在父仓库提交新的指针。

## Common Workflow

```shell
git submodule update --init --recursive
git submodule status
git submodule foreach --recursive git status --short
```

## Failure Modes

- clone 后忘记初始化，目录看起来为空。
- 子仓库 commit 未推送，其他人无法检出父仓库记录的指针。
- 只提交子仓库修改，忘记更新父仓库 gitlink。
- URL 或权限变化导致 CI 无法拉取。
- 把 submodule 当成普通 vendored directory，忽略双层版本历史。

只有当依赖需要独立版本历史、独立权限或多个仓库共享时，submodule 才值得承担额外工作流成本。
