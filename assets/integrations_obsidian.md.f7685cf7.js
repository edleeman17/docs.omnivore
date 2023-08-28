import{_ as t,c as l,a as e,b as n,t as s,d as i,o}from"./app.dcf7fcca.js";const b=JSON.parse('{"title":"Sync all your reading to Obsidian","description":"","frontmatter":{"title":"Sync all your reading to Obsidian","editLink":true},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Customizing which data is synced from Omnivore to Obsidian","slug":"customizing-which-data-is-synced-from-omnivore-to-obsidian","link":"#customizing-which-data-is-synced-from-omnivore-to-obsidian","children":[]},{"level":2,"title":"Controlling the layout of the data imported to Obsidian","slug":"controlling-the-layout-of-the-data-imported-to-obsidian","link":"#controlling-the-layout-of-the-data-imported-to-obsidian","children":[{"level":3,"title":"Mustache template language","slug":"mustache-template-language","link":"#mustache-template-language","children":[]},{"level":3,"title":"Variables available in the article template","slug":"variables-available-in-the-template","link":"#variables-available-in-the-template","children":[]},{"level":3,"title":"Importing the Full Article Content","slug":"importing-the-full-article-content","link":"#importing-the-full-article-content","children":[]},{"level":3,"title":"Function map in the article template","slug":"function-map-in-the-article-template","link":"#function-map-in-the-article-template","children":[]},{"level":3,"title":"Front Matter","slug":"front-matter","link":"#front-matter","children":[]},{"level":3,"title":"Front Matter Template","slug":"front-matter-template","link":"#front-matter-template","children":[]}]},{"level":2,"title":"Sync all the articles into a single note","slug":"sync-all-the-articles-into-a-single-note","link":"#sync-all-the-articles-into-a-single-note","children":[]},{"level":2,"title":"Scheduled Sync","slug":"scheduled-sync","link":"#scheduled-sync","children":[]}],"relativePath":"integrations/obsidian.md","lastUpdated":1686143759000}'),r={name:"integrations/obsidian.md"},p={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=i(`<p>Omninove integrates with Obsidian via the <a href="https://github.com/omnivore-app/obsidian-omnivore" target="_blank" rel="noreferrer">obsidian-omnivore</a> plugin. The plugin allows for customizing the data synced from Omnivore to Obsidian and controlling the layout of the data.</p><nav class="table-of-contents"><ul><li><a href="#features">Features</a></li><li><a href="#installation">Installation</a></li><li><a href="#customizing-which-data-is-synced-from-omnivore-to-obsidian">Customizing which data is synced from Omnivore to Obsidian</a></li><li><a href="#controlling-the-layout-of-the-data-imported-to-obsidian">Controlling the layout of the data imported to Obsidian</a><ul><li><a href="#mustache-template-language">Mustache template language</a></li><li><a href="#variables-available-in-the-template">Variables available in the article template</a></li><li><a href="#importing-the-full-article-content">Importing the Full Article Content</a></li><li><a href="#function-map-in-the-article-template">Function map in the article template</a></li><li><a href="#front-matter">Front Matter</a></li><li><a href="#front-matter-template">Front Matter Template</a></li></ul></li><li><a href="#sync-all-the-articles-into-a-single-note">Sync all the articles into a single note</a></li><li><a href="#scheduled-sync">Scheduled Sync</a></li></ul></nav><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h2><ul><li>Import your highlights and saved article</li><li>Create graphs based on Omnivore data</li><li>Filter imported data using Omnivores <a href="https://omnivore.app/help/search" target="_blank" rel="noreferrer">advanced search syntax</a></li><li>Custom templates for imported data</li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><ol><li>Install and enable the plugin from the Community Plugins section of Obsidian or <a href="https://github.com/omnivore-app/obsidian-omnivore" target="_blank" rel="noreferrer">build it from source</a> and load the unpacked plugin.</li><li>Sign up for an <a href="https://omnivore.app" target="_blank" rel="noreferrer">Omnivore account</a>.</li><li>Go to <a href="https://omnivore.app/settings/api" target="_blank" rel="noreferrer">Omnivore</a> and create an API key.</li><li>Open the Omnivore plugin settings in Obsidian and add your API key.</li><li>Run Omnivore sync by opening the command palette (Ctrl + P or CMD + P). Type Omnivore and select the option <strong>Omnivore: Sync</strong>.</li></ol><h2 id="customizing-which-data-is-synced-from-omnivore-to-obsidian" tabindex="-1">Customizing which data is synced from Omnivore to Obsidian <a class="header-anchor" href="#customizing-which-data-is-synced-from-omnivore-to-obsidian" aria-hidden="true">#</a></h2><p><a href="./images/obsidian-sync-filter.png">Obsidian Sync Filter</a></p><p>The Omnivore Obsidian plugin offers three options for which data is imported:</p><ul><li>Import all my articles: This will import every article you save to Omnivore and the labels (tags), highlights, and notes you have added to the article.</li><li>Import just highlights: This will import every article you have saved that has highlights</li><li>Advanced: This allows you to define a search filter to import. For example, import just Newsletters by using <code>label:Newsletter</code>.</li></ul><h2 id="controlling-the-layout-of-the-data-imported-to-obsidian" tabindex="-1">Controlling the layout of the data imported to Obsidian <a class="header-anchor" href="#controlling-the-layout-of-the-data-imported-to-obsidian" aria-hidden="true">#</a></h2><p>The Omnivore Obsidian plugin uses the <a href="https://mustache.github.io/" target="_blank" rel="noreferrer">mustache</a> template language to define how imported data is saved to Obsidian. The plugin settings allow you to define the template for a article layout. The default templates will be used if you do not define your own.</p><h3 id="mustache-template-language" tabindex="-1">Mustache template language <a class="header-anchor" href="#mustache-template-language" aria-hidden="true">#</a></h3><p>Mustache is a simple and logic-less templating language that allows you to create templates that are easy to read and maintain. Mustache templates consist of tags, which are placeholders that are replaced with actual values when the template is rendered.</p><p>There are several types of Mustache tags, including:</p><div><ul><li><code>{{ variable }}</code>: Renders the value of a variable.</li><li><code>{{# section }}</code> ... <code>{{/ section }}</code>: Renders a section of the template if the value of the section is true, such as an array or an object.</li><li><code>{{^ inverted section }}</code> ... <code>{{/ inverted section }}</code>: Renders a section of the template if the value of the section is false.</li><li><code>{{! comment }}</code>: Adds a comment to the template, which is ignored when the template is rendered.</li></ul><p>In addition to the basic Mustache tags, there are also several built-in Mustache functions that you can use in your templates, such as:</p><ul><li><code>{{# list }}</code> ... <code>{{/ list }}</code>: Renders a section of the template for each item in a list.</li><li><code>{{^ emptyList }}</code> ... <code>{{/ emptyList }}</code>: Renders a section of the template if a list is not empty.</li><li><code>{{&amp; variable }}</code> or <code>{{{ variable }}}</code>: Renders the value of a variable without escaping HTML characters.</li><li><code>{{&gt; partial }}</code>: Renders a partial template, which is a reusable template that can be included in other templates.</li></ul></div><h3 id="variables-available-in-the-template" tabindex="-1">Variables available in the article template <a class="header-anchor" href="#variables-available-in-the-template" aria-hidden="true">#</a></h3><ul><li>id: The id of the article. This will be used as the id of the file in frontmatter</li><li>title: The title of the article</li><li>omnivoreUrl: The URL of the article in Omnivore</li><li>siteName: The name of the site the article was saved from</li><li>originalUrl: The URL of the original article</li><li>author: The author of the article</li><li>dateSaved: The date the article was saved to Omnivore in your perferrred date format</li><li>description: The description of the article</li><li>content: The content of the article in Markdown format</li><li>labels: A list of labels attached to the page <ul><li>name: The name of the label, for example <code>Newsletter</code></li></ul></li><li>note: The note attached to the article</li><li>type: The type of page, for example <code>ARTICLE</code> or <code>FILE</code></li><li>datePublished: The date the article was published in your perferrred date format</li><li>dateRead: The date the article was read in your perferrred date format</li><li>dateArchived: The date the article was archived in your perferrred date format</li><li>fileAttachment: The file attachment attached to the article</li><li>state: The state of the article, for example <code>READING</code> or <code>COMPLETED</code></li><li>wordsCount: The number of words in the article</li><li>readLength: The length of time it took to read the article in minutes</li><li>highlights: A list of highlights attached to the article <ul><li>text: The text of the highlight</li><li>highlightUrl: The URL of the highlight in Omnivore</li><li>labels: A list of labels attached to the highlight <ul><li>name: The name of the label, for example <code>Newsletter</code></li></ul></li><li>note: The note attached to the highlight</li><li>dateHighlighted: The date the highlight was created in your perferrred date format</li><li>highlightID: The uuid of the highlight</li></ul></li></ul><p>Default template:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># {{{title}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">#Omnivore</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[Read on Omnivore]({{{omnivoreUrl}}})</span></span>
<span class="line"><span style="color:#A6ACCD;">[Read Original]({{{originalUrl}}})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{{#highlights.length}}</span></span>
<span class="line"><span style="color:#A6ACCD;">## Highlights</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{{#highlights}}</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; {{{text}}} [⤴️]({{{highlightUrl}}}) {{#labels}} #{{name}} {{/labels}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{#note}}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{{{note}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{/note}}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{{/highlights}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{/highlights.length}}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="importing-the-full-article-content" tabindex="-1">Importing the Full Article Content <a class="header-anchor" href="#importing-the-full-article-content" aria-hidden="true">#</a></h3><div class="warning custom-block"><p class="custom-block-title">Full content import does not work for PDFs</p></div><p>The content of articles is converted to Markdown before import, this means we need them to avoid HTML escaping when being inserted into Obsidian. To do this, use the triple Mustache syntax. Any highlights that you have created in Omnivore will be rendered as Markdown highlights. So to import the full article content:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{{{ content }}}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>For example:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;">id: {{{id}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">title: &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  {{{title}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{#author}}</span></span>
<span class="line"><span style="color:#A6ACCD;">author: &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  {{{author}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{/author}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{#labels.length}}</span></span>
<span class="line"><span style="color:#A6ACCD;">tags:</span></span>
<span class="line"><span style="color:#A6ACCD;">{{#labels}} - {{{name}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{/labels}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{/labels.length}}</span></span>
<span class="line"><span style="color:#A6ACCD;">date_saved: {{{dateSaved}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{#datePublished}}</span></span>
<span class="line"><span style="color:#A6ACCD;">date_published: {{{datePublished}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{/datePublished}}</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># {{{title}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">#Omnivore</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[Read on Omnivore]({{{omnivoreUrl}}})</span></span>
<span class="line"><span style="color:#A6ACCD;">[Read Original]({{{originalUrl}}})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{{{ content }}}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="function-map-in-the-article-template" tabindex="-1">Function map in the article template <a class="header-anchor" href="#function-map-in-the-article-template" aria-hidden="true">#</a></h3><ul><li>lowerCase: Converts a string to lowercase</li><li>upperCase: Converts a string to uppercase</li><li>upperCaseFirst: Converts the first character of a string to uppercase</li></ul><p>Example of using a function in a template to convert the state of an article to lowerCase:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">state:: [[{{#lowerCase}}{{state}}{{/lowerCase}}]]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="front-matter" tabindex="-1">Front Matter <a class="header-anchor" href="#front-matter" aria-hidden="true">#</a></h3><p><a href="https://help.obsidian.md/Editing+and+formatting/Metadata" target="_blank" rel="noreferrer">While most of the text in a note is meant to be read by a human, metadata is text that&#39;s meant to be easily readable by a program, for example a community plugin or Obsidian itself.</a> The front matter includes the metadata at the top of the note in YAML format. You can enter the metadata separated by comma and you can also use custom aliases in the format of <code>metadata::alias</code>. For example, <code>date_saved::date</code> will generate <code>date: 2023-05-30</code> in the front matter.</p><p>The available metadata are in snake case:</p><ul><li>title</li><li>author</li><li>tags</li><li>date_saved</li><li>date_published</li><li>omnivore_url</li><li>site_name</li><li>original_url</li><li>description</li><li>note</li><li>type</li><li>date_read</li><li>words_count</li><li>read_length</li><li>state</li><li>date_archived</li></ul><p>The default metadata are <code>title, author, tags, date_saved, date_published</code>.</p><p>Please note that <code>id</code> will always be included in the front matter for the purpose of deduplication.</p><h3 id="front-matter-template" tabindex="-1">Front Matter Template <a class="header-anchor" href="#front-matter-template" aria-hidden="true">#</a></h3><p>The front matter template is used to override the front matter of the file. It will only be used when it is set. If it is not set, the front matter will be generated automatically based on the metadata defined in &quot;Front Matter&quot; section under basic settings.</p><p>The available variables are the same as the <a href="#variables-available-in-the-template">variables in the article template</a>.</p><p>A sample front matter template:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">id: {{{id}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">title: &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  {{{title}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{#author}}</span></span>
<span class="line"><span style="color:#A6ACCD;">author: &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  {{{author}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{/author}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{#labels.length}}</span></span>
<span class="line"><span style="color:#A6ACCD;">tags:</span></span>
<span class="line"><span style="color:#A6ACCD;">{{#labels}} - {{{name}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{/labels}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{/labels.length}}</span></span>
<span class="line"><span style="color:#A6ACCD;">date_saved: {{{dateSaved}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{#datePublished}}</span></span>
<span class="line"><span style="color:#A6ACCD;">date_published: {{{datePublished}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{/datePublished}}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="sync-all-the-articles-into-a-single-note" tabindex="-1">Sync all the articles into a single note <a class="header-anchor" href="#sync-all-the-articles-into-a-single-note" aria-hidden="true">#</a></h2><p>By default, Omnivore will sync articles into separate pages in Obsidian. If you would like to sync all your articles into a single note, you can turn on the option <strong>Is Single File</strong> and use a fixed <strong>Filename</strong> in the plugin settings.</p><h2 id="scheduled-sync" tabindex="-1">Scheduled Sync <a class="header-anchor" href="#scheduled-sync" aria-hidden="true">#</a></h2><p>By default, Omnivore does not automatically sync your data. You can enable scheduled sync by entering a number of minutes in the <strong>Frequency</strong> setting. For example, if you enter <code>60</code>, Omnivore will sync your data every hour and you can always turn it off by entering <code>0</code>.</p>`,45);function d(a,u,m,g,f,y){return o(),l("div",null,[e("h1",p,[n(s(a.$frontmatter.title)+" ",1),c]),h])}const A=t(r,[["render",d]]);export{b as __pageData,A as default};