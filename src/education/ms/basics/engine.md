# Engine

Bevy 是一个基于 ECS 架构的游戏引擎。ECS 是一种架构模式，将程序整体分为若干个部分，或若干层。譬如 MVC 就是 Model（模型）、View（视图）和 Controller（控制器），他们各有分工，分别有相应的职责，最后共同构成了一个完整的程序。

ECS 是 Entity（实体）、Component（组件）和 System（系统）。对游戏开发比较熟悉的读者应该对此非常了解，而如果你不熟悉游戏开发，或许这种架构模式你是第一次听说。

假设我们有一个游戏，

Entity 就是游戏里我们能看到的大部分东西，譬如玩家、NPC、敌人、可交互的场景物品等等，并且每个 Entity 在游戏世界里都是唯一的。

Component 可以理解为数据，譬如玩家的名字、血量、拥有哪些技能、等级、经验值等等。

每个 Entity 都会绑定、或关联一组 Component，如我们刚提到了，一个玩家 Entity，拥有上述这些 Component。在游戏中，我们对 Entity 的操作，实际上都是对 Entity 的 Components 进行的操作，Entity 本身通常只是一个标识。

举一个例子来更形象地解释 Entity 和 Component 之间的关系。关系型数据库或 Excel 用过吧？我们会有一张表（Table），一张表中会有许多数据，而数据都是按照行、列排列的。

通常情况下，每行代表一条数据记录，而列则是代表了这条记录本身真正的数据。Entity 就相当于是一行一行的记录，由于包括 Bevy 在内的许多地方，通常会把 Entity 表示为一个简单的 ID，因此我们可以认为 Entity 就是一个行号，它唯一表示了某一行的记录。而 Component 就是这一行记录里各列的数据。

如有一张玩家表，它的每行都有个行号，然后这张表由名字、血量、等级等列组成，这些就是 Component，也就是这个玩家的数据。

Bevy 中的 Entity 是 Bevy 自己的内部类型，我们能且仅能拿到某个 Entity 的 ID。Component 就可以由开发者自定义了，在 Bevy 中 Component 可以用 struct 或 enum 来表示，只要一个 `struct` 派生了 Bevy prelude 中的 `Component` 特性，它就会被当作是一个 Component：
