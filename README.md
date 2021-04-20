# GitHub Search

Search GitHub from the command line.

## Getting Started

Create a GitHub token with repo permissions and set as GH_TOKEN environment variable.

```sh
Usage: gh-search -q [query] -page [page] -format [link,csv]
 * q: See https://docs.github.com/en/rest/reference/search#constructing-a-search-query
 * page: defaults to 1
 * format: defaults to link
```

```sh
gh-search -q 'org:davidjohnmaccallum hello'
https://github.com/davidjohnmaccallum/php-analysis/blob/d98d25e99f7a5a4f479c9da42e73251e5f968a83/test/fsToTree/1/1_1/1_1_1.php
https://github.com/davidjohnmaccallum/scala-rest-api/blob/dda6d831d4339e746b0f329e50f6d04a8b8db297/app/controllers/SimpleController.scala
https://github.com/davidjohnmaccallum/php-analysis/blob/d98d25e99f7a5a4f479c9da42e73251e5f968a83/test/fsToTree/1/1_1/1_1_2.php
https://github.com/davidjohnmaccallum/php-analysis/blob/d98d25e99f7a5a4f479c9da42e73251e5f968a83/test/treeFind.test.js
```