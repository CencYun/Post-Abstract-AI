import{_ as s,o as p,c as a,Q as t}from"./chunks/framework.867ce416.js";const d=JSON.parse('{"title":"通用教程","description":"","frontmatter":{},"headers":[],"relativePath":"theme/custom.md","filePath":"theme/custom.md"}'),l={name:"theme/custom.md"},o=t(`<h1 id="通用教程" tabindex="-1">通用教程 <a class="header-anchor" href="#通用教程" aria-label="Permalink to &quot;通用教程&quot;">​</a></h1><p>这个教程是教你如何让自己的网页适配TianliGPT。</p><h2 id="将代码插入到网页" tabindex="-1">将代码插入到网页 <a class="header-anchor" href="#将代码插入到网页" aria-label="Permalink to &quot;将代码插入到网页&quot;">​</a></h2><p>我们需要将下面的代码插入到网页的任何位置。</p><div class="language-HTML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">HTML</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">link</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">rel</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;stylesheet&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.16/tianli_gpt.css&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> tianliGPT_postSelector </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;#post #article-container&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> tianliGPT_key </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;5Q5mpqRK5DkwT1X9Gi5e&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.16/tianli_gpt.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">link</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">rel</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;stylesheet&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.16/tianli_gpt.css&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> tianliGPT_postSelector </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;#post #article-container&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> tianliGPT_key </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;5Q5mpqRK5DkwT1X9Gi5e&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.16/tianli_gpt.js&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>我们可以观察一下代码，里面有<strong>tianliGPT_postSelector</strong>和<strong>tianliGPT_key</strong>这两个变量，我们需要更改里面的值来适配不同的主题，并且配置更多内容。</p><h2 id="获取tianligpt-postselector" tabindex="-1">获取tianliGPT_postSelector <a class="header-anchor" href="#获取tianligpt-postselector" aria-label="Permalink to &quot;获取tianliGPT_postSelector&quot;">​</a></h2><p>打开你的文章界面，按下<code>F12</code>键，打开开发者工具。</p><p><img src="https://p.zhheo.com/EEdhvU22290881693362742498.png!blogimg" alt=""></p><p>点击选择器按钮。</p><p><img src="https://p.zhheo.com/QzCimX25390881693362773087.png!blogimg" alt=""></p><p>然后鼠标选中到博客的文章。通过滑动鼠标尽可能的让方块涵盖文章中的所有内容。例如：</p><p><img src="https://p.zhheo.com/UEujWb20790881693362787946.png!blogimg" alt=""></p><p>我的鼠标大致在红色的位置。</p><p>然后点击一下。我们可以看到这一行变灰了，说明被选中了。</p><p><img src="https://p.zhheo.com/I1GSxv22890881693362808100.png!blogimg" alt=""></p><p>然后我们鼠标放在灰色部分，来检查选中的部分是否包含整个文章，但是不包含文章外的东西。</p><p>很显然，鼠标放在post行时，出现了下方的按钮被选中的情况。</p><p><img src="https://p.zhheo.com/jdpnEp24090881693362820382.png!blogimg" alt=""></p><p>我们观察一些页面结构，发现post里面有多个结构，我们选择符合我们的要求的div元素。</p><p><img src="https://p.zhheo.com/jCy8He21090881693362850466.png!blogimg" alt=""></p><p>我们发现这一行正好符合我们的要求。</p><ul><li><p>包含了整个文章</p></li><li><p>不包含文章外的内容</p></li></ul><p>我们右键单击，然后复制这一行的选择器：</p><p><img src="https://p.zhheo.com/CjZKlk22290881693362862149.png!blogimg" alt=""></p><p>复制的内容就是我们的 tianliGPT_postSelector。</p><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><h3 id="在不应该出现摘要的界面出现了摘要" tabindex="-1">在不应该出现摘要的界面出现了摘要 <a class="header-anchor" href="#在不应该出现摘要的界面出现了摘要" aria-label="Permalink to &quot;在不应该出现摘要的界面出现了摘要&quot;">​</a></h3><p>你可以再添加一个变量来实现只匹配文章url。这个是通过<code>tianliGPT_postURL</code>来实现。</p><p>你可以添加</p><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> tianliGPT_postURL </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> tianliGPT_postURL </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div><p>其中双引号的内容为匹配的文章地址，支持通配符。例如在张洪Heo博客中，文章的地址通常为：</p><p><a href="https://blog.zhheo.com/p/8eb7249d.html" target="_blank" rel="noreferrer">https://blog.zhheo.com/p/8eb7249d.html</a></p><p><a href="https://blog.zhheo.com/p/463d306b.html" target="_blank" rel="noreferrer">https://blog.zhheo.com/p/463d306b.html</a></p><p>所以我们可以填写通用格式：<code>*/p/*.html</code></p>`,35),n=[o];function e(c,r,i,E,h,y){return p(),a("div",null,n)}const m=s(l,[["render",e]]);export{d as __pageData,m as default};
