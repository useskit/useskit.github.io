# Kit JS Guide
> KitJS 主要用于操作DOM元素
## 通过HTML标签获元素
> 当前元素`rootElm`下，选取属于`div`的子元素中所有 `p`的元素

[filename](../../_media/example.js ':include :type=code :fragment=tag')
## 通过元素id获取
> 当前元素`rootElm`下，选取`id`为`p1`的元素

[filename](../../_media/example.js ':include :type=code :fragment=id')
## 通过元素name获取
> 当前元素`rootElm`下，选取`name`为`n1`的元素

[filename](../../_media/example.js ':include :type=code :fragment=name')
## 通过元素class获取
> 当前元素`rootElm`下，选取`class`为`nav`的元素

[filename](../../_media/example.js ':include :type=code :fragment=class')
## 通过元素属性获取
> 当前元素`rootElm`下，选取属性`class`为`nav`的元素

[filename](../../_media/example.js ':include :type=code :fragment=attrib')
## 模糊条件元素获取
> 当前元素`rootElm`下，选取属性`class` 含有`nav`的元素

[filename](../../_media/example.js ':include :type=code :fragment=like')
## 组合条件元素获取1
> 当前元素`rootElm`下，选取所有`p`的元素下，`id`为`p2`的元素

[filename](../../_media/example.js ':include :type=code :fragment=comb1')
## 组合条件元素获取
> 当前元素`rootElm`下，选取所有`p`的元素下，`class`为`nav`的元素

[filename](../../_media/example.js ':include :type=code :fragment=comb2')