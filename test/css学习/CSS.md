### CSS概述

- CSS指层叠样式表（Cascading Style Sheets）
- 样式定义如何显示HTML元素
- 样式通常存储在样式表中
- 为了解决内容与表现分离的问题
- 外部样式表可以极大提高工作效率
- 外部样式表通常存储在CSS文件中
- 多个样式定义可以层叠为一个

### 不同位置定义的Style的优先级

1. 浏览器缺省设置
2. 外部样式表
3. 内部样式表（<head>标签中）
4. 内联样式（HTML元素内部）

### CSS语法

CSS样式构成：选择器+一条或多条声明。

```css
selector {declaration1; declaration2; ...; declarationN}
```

选择器：需要改变样式的HTML元素

声明：`属性:值`， 如果值为若干个单词，则值要用引号包围`p {font-family: "sans serif"}`

> 注：CSS对大小写不敏感

### 颜色的表示

1. 用英文单词

```css
p {color: red}
```

2. 用十六进制颜色值或者CSS缩写

```css
p {color: #ff0000}
p {color: #f00}
```

3. 用RGB值

```css
p {color: rgb(255, 0, 0)}
p {color: rgb(100%, 0%, 0%)}
```

## 选择器

#### 选择器分组

```css
h1, h2, h3, h4, h5, h6 {
  color: green;
}
```

这样h1,h2,h3,h4,h5,h6就共享一套样式了

### 上线文选择器/派生选择器

```css
h1 strong {
  color: red;
}
```

这样在h1标签中的strong元素就会被改变样式

### ID选择器

```css
<p id="title" >红色的</p>
...
#title {
  color: red;
}
```

### 类选择器

```css
<div class="center">居中的文字</div>
...
.center {
  text-aligin: center;
}
```

### 基于元素的类选择器

```css
td.fancy {
  color: #f60;
  background: #666;
}
```

只有属于fancy类的td标签才会被应用于这条样式

### 属性选择器

> 只有在!DOCTYPE时，IE7、IE8才支持。

```css
[title] {
	color: red;
}
匹配带有title属性的元素
[title = w3school] {
  color : red;
}
匹配title属性值为w3school的元素
```

| 选择器                 | 描述                            |
| ------------------- | ----------------------------- |
| [attribute]         | 用于选取带有指定属性的元素                 |
| [attribute=value]   | 用于选取带有指定属性和值的元素               |
| [attribute~=value]  | 用于选取指定值中包含指定值的元素              |
| [attribute\|=value] | 用于选取带有以指定值开头的属性值的元素，该值必须是整个元素 |
| [attribute^=value]  | 匹配属性值以指定值开头的每个元素              |
| [attribute$=value]  | 匹配属性值以指定值结尾的每个元素              |
| [attibute*=value]   | 匹配属性值中包含指定值的每个元素              |

## 创建CSS样式

### 外部样式

```html
<head>
	<link rel="stylesheet" type="text/css" href="mystyle.css"/>
</head>
```

### 内部样式

```html
<head>
	<style type="text/css">
		hr {color: sienna;};
		p {margin-left: 20px};
	</style>
</head>
```

### 内联样式

```html
<p style="color: sienna; margin-left: 20px">This is a paragraph</p>
```

## CSS背景属性

| 属性                    | 描述                        |
| --------------------- | ------------------------- |
| background            | 简写属性，作用是将背景属性设置在一个声明中     |
| background-color      | 设置元素的背景颜色                 |
| background-image      | 把图像设置为背景                  |
| background-position   | 设置背景图像的起始位置               |
| background-repeat     | 设置背景图像是否及如何重复             |
| background-attachment | 背景图像是否固定，或者随着页面其余部分的滚动而滚动 |

### CSS文本属性

| 属性              | 描述           |
| --------------- | ------------ |
| color           | 设置文本颜色       |
| direction       | 设置文本方向       |
| line-height     | 设置行高         |
| letter-spacing  | 设置字符间距       |
| text-align      | 对齐元素中的文本     |
| text-decoration | 向文本添加修饰      |
| text-indent     | 缩进元素文本的      |
| text-shadow     | 设置文本阴影       |
| text-transform  | 控制元素中的字母大小写  |
| unicode-bidi    | 设置文本方向       |
| white-space     | 设置元素中空白的处理方式 |
| word-spacing    | 设置字间距        |

### 字体属性

| 属性           | 描述                      |
| ------------ | ----------------------- |
| font         | 简写属性。把所有针对字体的属性设置在一个声明中 |
| font-family  | 设置字体系列                  |
| font-size    | 设置字体的尺寸                 |
| font-style   | 设置字体风格                  |
| font-variant | 以小型大写字母或者正常字体显示文本       |
| font-weight  | 设置字体的                   |

### 链接样式

- a:link - 普通的、未被访问的链接
- a:visited - 用户已访问的链接
- a:hover - 鼠标指针位于链接的上方时
- a:active - 链接被点击时

### 列表样式

| 属性                  | 描述                   |
| ------------------- | -------------------- |
| list-style          | 简写属性。将所有列表属性设置在一个声明中 |
| list-style-image    | 将图像设置为列表项标志          |
| list-style-position | 设置列表中列表项标志的位置        |
| list-style-style    | 设置列表项标志的类型           |

### 表格属性

| 属性              | 描述                |
| --------------- | ----------------- |
| border-collapse | 设置是否把表格边框合并为单一的边框 |
| border-spacing  | 设置分隔单元格边框的距离      |
| caption-side    | 设置表格标题的位置         |
| empty-cells     | 设置是否显示表格中的空单元格    |
| table-layout    | 设置显示单元行和列的算法      |

### 轮廓样式

| 属性            | 描述              |
| ------------- | --------------- |
| outline       | 在一个声明中设置所有的轮廓属性 |
| outline-color | 设置轮廓的颜色         |
| outline-style | 设置轮廓的样式         |
| outline-width | 设置轮廓的宽度         |

## CSS盒模型

​	盒模型由实际内容、内边距、边框、外边界组成。内容应用于内容、内边距和边框组成的区域。外边距默认是透明的。

​	内边距、边框、外边距默认都是0px,但是各浏览器都会有自己的设定，所以有时候需要覆盖浏览器默认边距样式。消除浏览器默认的内边距和外边距

```css
* {
  margin: 0px;
  padding: 0px;
}
```

​	CSS中width和height指的是元素内容的宽和高，增加内边距、边框和外边距会影响元素框的总尺寸。

#### CSS padding属性

padding属性接受长度值或百分比，不接受负值。

```css
h1 {padding: 10px;}
```

按照上、右、下、左的顺序赋值

```css
h1 {padding: 10px 0.25em 2ex 20%;}
```

可以单独赋值

- padding-top
- padding-right
- padding-left
- padding-bottom

#### CSS border属性

| 属性                  | 描述                            |
| ------------------- | ----------------------------- |
| border              | 简写属性。用于把针对四个边的属性设置在一个声明中      |
| border-style        | 用于设置元素所有边框的样式，或者单独的为各个边设置边框样式 |
| border-width        | 简写属性，用于为元素的所有边框设置宽度           |
| border-top-width    | 上边框宽度                         |
| border-right-width  | 右边框宽度                         |
| border-bottom-width | 下边框宽度                         |
| border-left-width   | 左边框宽度                         |
| border-top-style    | 上边框样式                         |
| border-right-style  | 右边框样式                         |
| border-bottom-style | 下边框样式                         |
| border-left-style   | 左边框样式                         |
| border-color        | 简写属性。用于设置元素所有边框的颜色            |
| border-top-color    | 设置上边框的颜色                      |
| border-right-color  | 设置右边框的颜色                      |
| border-bottom-color | 设置下边框的颜色                      |
| border-left-color   | 设置左边框的颜色                      |
| border-top          | 简写属性。设置上边框的所有样式               |
| border-right        | 简写属性。设置右边框的所有样式               |
| border-bottom       | 简写属性。设置下边框的所有样式               |
| border-left         | 简写属性。设置左边框的所有样式               |

 #### CSS border属性

| 属性            | 描述                    |
| ------------- | --------------------- |
| margin        | 简写属性。将所有外边距属性设置在一个声明中 |
| margin-top    | 上外边距                  |
| margin-right  | 右外边距                  |
| margin-bottom | 下外边距                  |
| margin-left   | 左外边距                  |

#### 注意外边距重合问题

http://www.w3school.com.cn/css/css_margin_collapsing.asp