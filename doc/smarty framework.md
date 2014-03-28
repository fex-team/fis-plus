##Pages and Layout Based On Smarty

We provide a framework based on Smarty3/PHP for template, there are alse other back-end solutions coming soon, like java, go, etc. The framework provide some smarty html tag for use so we can efficiently control the loading of static resources. 

####{%html%}

The smarty html tag is used to dynamic control the output of page, usage:

```
{%html%}
  ....
{%/html%}

```

####{%head%}

The smarty head tag is used to dynamic control the output of head, so we can automatic load synchronous static resource.

![head](./images/head.jpg)

####{%body%}

The smarty body tag is used to dynamic control the output of body.

![body](./images/body.jpg)

####{%script%}

The smarty body tag is used to dynamic control the output of script,  so we can automatic concentrate JavaScript files at the bottom of the page.

![script](./images/script.jpg)

####{%require%}

The smarty require tag is used to dynamic control the output of static resources, usage:

![require](./images/require.jpg)

####{%widget%}

The smarty widget tag is used to dynamic control the output of widget static resources and html, usage:

![widget](./images/widget.jpg)

You can find more in [How to Develop With Widgets](./doc/widget.md); 

###layout and page demo

layout.tpl from common subsystem:

```
<!DOCTYPE html>
{%html%}
    {%head%}
    <meta charset="utf-8"/>
        <meta content="{%$description%}" name="description">
        <title>{%$title%}</title>
        {%block name="block_head_static"%}{%/block%}
    {%/head%}
    {%body%}
    {%block name="content"%}{%/block%}
    {%/body%}
{%/html%}
```

index.tpl from ordinary subsystem:

```
{%* extends from common layout.tpl *%}
{%extends file="common/page/layout.tpl"%}
{%block name="block_head_static"%}
    <!--[if lt IE 9]>
        <script src="/lib/js/html5.js"></script>
    <![endif]-->
    {%* registered dependence *%}
    {%require name="home:static/lib/css/bootstrap.css"%}
    {%require name="home:static/lib/css/bootstrap-responsive.css"%}
    {%require name="home:static/lib/js/jquery-1.10.1.js"%}
{%/block%}
{%block name="content"%}
    <div id="wrapper">
        <div id="sidebar">
            {%* load widget *%}
            {%widget name="common:widget/sidebar/sidebar.tpl" data=$docs %}
        </div>
        <div id="container">
        	{%* load widget *%}
            {%widget name="home:widget/slogan/slogan.tpl"%}
            {%foreach $docs as $index=>$doc%}
                {%widget
                    name="home:widget/section/section.tpl"
                    call="section"
                    data=$doc index=$index
                %}
            {%/foreach%}
        </div>
    </div>
    {%require name="home:static/index/index.css"%}
    {%* collect JS fragments via script plugin *%}
    {%script%}
    	var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
		document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F70b541fe48dd916f7163051b0ce5a0e3' type='text/javascript'%3E%3C/script%3E"));
	{%/script%}
{%/block%}
```