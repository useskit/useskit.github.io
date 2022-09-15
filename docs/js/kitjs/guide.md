# Kit JS Guide
?> KitJS 主要用于操作DOM元素



## 常用操作符

| 操作符 |  名称            | 备注          |
|----------------|----------------|---------------|
|   #   |   `id`      |`#p1` 等介于 `id='p1'`   |
|   $   |   `name`    |`$p1` 等价于 `name='p1'` |
|   .   |   `class`   |`.menu` 等价于 `class='menu'` |
|   @   |   `属性`     |`@id=p1` 等价于 `id='p1'` |
|   %   |   `模糊匹配`    |`%class=menu` 等价于 `class='menu'`或`class=menu nav` |
|   /   |   `路径`    |`div/p` 等价于 `div`元素下所有的`p`元素 |
|   >   |   `子元素`   |`#>div1` 等价于 `id`为`div1`元素内所有的`子元素` |
|   >>   |   `子、孙元素`   |`#>>div1` 等价于 `id`为`div1`元素内所有的`子元素`、`孙元素` |
|   <   |   `父元素`   |`#<div1` 等价于 `id`为`div1`元素的`父元素`|
|   <<   |   `父、祖父元素`   |`#<<div1` 等价于 `id`为`div1`元素的`父元素`、`祖父元素`|
|   =<   |   `同级(前)元素`  |`#=<div1` 等价于 比`id`为`div1`元素`先`创建的`同级元素`|
|   =<   |   `同级(后)元素`   |`#=>div1` 等价于 比`id`为`div1`元素`后`创建的`同级元素`|

!> `操作符`之间不可以存在`空格`

!> `>` `>>` `<` `<<` `=<` `=>` 需要与 `#` 组合使用，`/` 不可以用在操作符`首位`，但可与其它操作符`组合`使用

?> 几个合法，但无用的例子: `div/p%class=nav#id3` `#root>>%class=nav$submenu#sub1` 



## 基本示例

### 通过HTML标签获元素
> 当前元素`rootElm`下，选取属于`div`的子元素中所有 `p`的元素

[filename](../../_media/example.js ':include :type=code :fragment=tag')
### `#` 用`id`获取元素
> 当前元素`rootElm`下，选取`id`为`p1`的元素

[filename](../../_media/example.js ':include :type=code :fragment=id')
### `$` 用`name`获取元素
> 当前元素`rootElm`下，选取`name`为`n1`的元素

[filename](../../_media/example.js ':include :type=code :fragment=name')
### `.` 用`class`获取元素
> 当前元素`rootElm`下，选取`class`为`nav`的元素

[filename](../../_media/example.js ':include :type=code :fragment=class')
### `@` 用`属性`获取元素
> 当前元素`rootElm`下，选取属性`class`为`nav`的元素

[filename](../../_media/example.js ':include :type=code :fragment=attrib')
### `%` 模糊匹配`属性`获取元素
> 当前元素`rootElm`下，选取属性`class` 含有`nav`的元素

[filename](../../_media/example.js ':include :type=code :fragment=like')
### 组合条件元素获取
> 当前元素`rootElm`下，选取所有`p`的元素下，`id`为`p2`的元素

[filename](../../_media/example.js ':include :type=code :fragment=comb1')

> 当前元素`rootElm`下，选取所有`p`的元素下，`class`为`nav`的元素

[filename](../../_media/example.js ':include :type=code :fragment=comb2')

?> 文档更新时间: {docsify-updated}