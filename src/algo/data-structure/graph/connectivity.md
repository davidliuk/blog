# Connectivity

连通性

Connected Component 连通分量

- 路径

无向图：

- 连通：
- 连通图
- 连通分量

有向图：

- 弱连通：有向图的底图（无向图）是连通图，则是弱连通图。
- 半连通：任意结点对中，至少从一个到另一个是可达的。
- 强连通：任意对中都互相可达。
- 强连通图
- 强连通分量
- 点双连通

### Tarjan

`Tarjan` 算法是 `Robert Tarjan` （罗伯特·塔扬）发明的，只通过一次深度优先搜索就能计算出有向图的强连通分量，而 `Kosaraju` 算法需要做两次 `DFS` 加上计算图的反向图。

`Tarjan` 算法是基于对图深度优先搜索的算法，每个强连通分量为搜索树中的一棵子树。搜索时把当前搜索树中未处理的节点加入一个堆栈，回溯时可以判断栈顶到栈中的节点是否为一个强连通分量。定义两个重要数组：

- `dfn(v)` 为顶点 `v` 被搜索的次序号
- `low(v)` 为顶点 `v` 被搜索的次序号，或者**`v` 的子树能够追溯到的最早的栈中顶点的次序号**

```java
public class TarjanSCC {

    private boolean[] marked;
    private int[] dfn;
    private int[] low;               // low[v] = low number of v
    private int pre;                 // preorder number counter
    private Stack<Integer> stack;
    private boolean[] onStack;
    private int count;

    public TarjanSCC(Digraph G) {
        marked = new boolean[G.V()];
        stack = new Stack<>();
        low = new int[G.V()];
        dfn = new int[G.V()];
        onStack = new boolean[G.V()];
        
        // 深度优先搜索
        for (int v = 0; v < G.V(); v++) {
            if (!marked[v]) tarjan(G, v);
        }
    }
    
    private void tarjan(Digraph G, int v){
        marked[v] = true;
        // 记录顶点被访问的次序号
        dfn[v] = low[v] = pre++;
        stack.push(v);
        onStack[v] = true;
        for (int w : G.adj(v)){
            if (!marked[w]) {
                // 递归深度优先搜索
                tarjan(G, w);
                if (low[v] > low[w])
                    low[v] = low[w];
            } else if (onStack[w] && low[v] > dfn[w]){
                low[v] = dfn[w];
            }
        }

        // 顶点 v 满足强连通分量条件
        // 栈中顶点 v 之上的所有顶点都在同一个强连通分量中
        // 栈中顶点出栈，直到顶点 v 出栈
        if (dfn[v] == low[v]){
            int w;
            do {
                w = stack.pop();
                onStack[w] = false;
                id[w] = count;
            } while (w != v);
            count++;
        }
    }
}
```

《算法 4》的作者将 `low[]` 数组做了简化：`low[v]=min{low[v], low[u]}` ，也没有使用 `dfn[]` 数组。这样得出的 `low[]` 结果：同一个强连通分量中所有顶点的 `low[]` 值相同。本文参考的是 `wiki: Tarjan Algorithms` 的伪代码，网上大部分实现都是基于这份伪代码。

https://blog.csdn.net/csyifanZhang/article/details/105370924

```c++
#define MAX 10005
#define ll long long

vector<ll> g[MAX];
ll color[MAX], vis[MAX], stack[MAX], dfn[MAX], low[MAX], cnt[MAX];
//deep:节点编号 top：栈顶  sum：强连通分量数目
ll deep, top, sum, res = 0;

void tanjan(ll v) {
	dfn[v] = ++deep;
	low[v] = deep;   //(1)初始化dfn数组，同时将low设置为相同值
	vis[v] = 1;
	stack[++top] = v;//(2)入栈，作为栈顶元素，同时更新vis数组

	for (unsigned i = 0; i < g[v].size(); i++) {
        //(3)遍历所有可能到达的点
		ll id = g[v][i];
		if (!dfn[id]) {
            //如果这个点从没访问过，则先放问它，再用它更新low[v]的值
			tanjan(id);
			low[v] = min(low[v], low[id]); 
            //他的儿子如果能连到更小的祖先节点，显然他也可以
		} else if (vis[id]) {
            //不在栈中的点，没有访问，或不能到达id，所以只需要判断栈中的
            low[v] = min(low[v], low[id]);
		}
	}

	if (low[v] == dfn[v]) {
        //(4)自己和子节点形成了强连通分量，或者只有自己孤身一人
		color[v] = ++sum;
		vis[v] = 0;
		while (stack[top] != v) {//将从v开始所有的点取出
			color[stack[top]] = sum;//给予同一颜色
			vis[stack[top--]] = 0;//出栈要顺便修改vis
		}
		top--;
	}
}
```

