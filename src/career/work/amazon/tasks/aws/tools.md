## ninja Sync

```sh
ninja-dev-sync -setup

ninja-dev-sync -add <local workspace path> -add-host <remote hostname> -add-remote <remote workspace path> -setup

ninja-dev-sync -add "$(pwd)" -add-host clouddesk -add-remote /home/$(whoami)/workplace/"${PWD##*/}" -setup

ninja-dev-sync
```