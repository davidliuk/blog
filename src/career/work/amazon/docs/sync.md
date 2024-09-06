Ninja Dev Sync is a tool used to sync a directory between your local machine and a remote machine. It's useful because it allows us to develop locally on a GUI editor like IntelliJ, but build on a more powerful cloud desktop.

How to use it:

- Prereqs: A cloud desktop and an IDE.
- Install ninja-dev-sync on your local machine.
- Create a brazil workspace on your local machine, or use an existing one, and pull the package you're working on into it.
- Have your cloud desktop's hostname handy, and if your cloud desktop's brazil workplace isn't at /workplace, have the path for that handy.
- Run ninja-dev-sync -setup on your local machine and follow the instructions.
- This will create and continuously sync a directory on your cloud desktop, and when you're ready to build or test you can go there to do so.
