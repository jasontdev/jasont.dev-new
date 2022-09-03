---
layout: blog.liquid
tags: portfolio
title: "jasont.dev"
description: "This website."
image: jasontdev-screenshot.jpg
---

# {{ title }}

## Static site generators

A static website generator applies data/content to templates at build time to generate a website ready to upload and serve. This differes from server-side
rendered pages that generate page page views on the server. While static websites are often faster and provide better SEO, the main advantage of using a
static site generator is that they output can be cheaply hosted on cloud storage services like Amazon S3 and Azure Blob Storage. In comparison, a server
rendering page views will need a compute service like Amazon EC2 at a considerably greater cost.

## Templates and content

jasont.dev is built using the [Eleventy](https://www.11ty.dev/) static site generator. Eleventy generates a static HTML website by filling templates with
content. For jasont.dev, I use the [Liquid language](https://shopify.github.io/liquid/) for templates and [Markdown](https://en.wikipedia.org/wiki/Markdown)
for content. However, 11ty supports a variety of other template languages and content sources.

The Markdown files contain content as well as frontmatter that defines raw data that templates can use. Here's what the typical frontmatter likes like for
a blog entry:

```markdown
---
layout: blog.liquid
tags: blog
date: "2022-03-05"
title: "A quick and easy responsive Flexbox layout"
description: "A quick and easy responsive layout using Flexbox only"
---
```

Here's an example of a template. This is used to produce an index of blog entries based on the Markdown frontmatter:

```liquid
{% raw %}
  <div class="title">Blog</div>
  {%- for blog in collections.blog reversed -%}
    <div class="blog-index-item">
      <div class="blog-index-title">
        <a href="{{ blog.url }}">{{ blog.data.title }}</a>
      </div>
      <div>
        <em>{{ blog.data.date }}</em>
      </div>
      {% if blog.data.description %}
        <div>{{ blog.data.description }}</div>
      {% endif %}
    </div>
  {%- endfor -%}
{% endraw %}
```

This above template will construct a collection (`collections.blog`) from the frontmatter of any Markdown file with
`blog` among the tags. Eleventy can then iterate through `collections.blog` applying frontmatter data to the template. Here
only `for` and `if` are used, but Liquid template syntax supports many more [control-flow tags](https://shopify.github.io/liquid/tags/control-flow/)
and [operators](https://shopify.github.io/liquid/basics/operators/).

Here's resulting blog index rendered by Eleventy:

```html
<div class="blog-index-item">
  <div class="blog-index-title">
    <a href="/blog/quick-and-easy-responsive-layout/">
      A quick and easy responsive Flexbox layout
    </a>
  </div>
  <div>
    <em>2022-03-05</em>
  </div>

  <div>A quick and easy responsive layout using Flexbox only</div>
</div>
```

## Layouts

Another powerful application of templates is the ability to chain and nest templates to reduce
repetition of code. For example, here I use a layout template to provide a consistent style
and structure for all of the pages of the site:

```liquid
{% raw %}
  <body>
    <div class="layout">
      <div>
        {% include 'navbar.liquid' %}
        <div class="content">{{ content }}</div>
      </div>
      <div class="footer">
        {% include 'contact.liquid' %}
      </div>
    </div>
  </body>
{% endraw %}
```
Rather than needed to be replicated in each and every page, the navbar and contact information are
defined once in ```navbar.liquid``` and ```contact.liquid``` respectively, and then automatically
inserted into every page.