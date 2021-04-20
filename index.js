#!/usr/bin/env node

const GitHub = require('github-api');
const yargs = require('yargs/yargs')

var argv = yargs(process.argv.slice(2))
    .default('format', 'link')
    .default('page', 1)
    .argv

if (!process.env.GH_TOKEN) {
  console.error('Please create a GitHub token with repo permissions and set it as GH_TOKEN environment variable.')
  process.exit(1)
}

if (!argv.q) {
  console.error(`Usage: gh-search -q [query] -page [page] -format [link,csv]
 * q: See https://docs.github.com/en/rest/reference/search#constructing-a-search-query
 * page: defaults to 1
 * format: defaults to link`)
  process.exit(1)
}

const gh = new GitHub({
  token: process.env.GH_TOKEN
})

const search = gh.search()
search.forCode({
  q: argv.q,
  page: argv.page,
  accept: 'application/vnd.github.v3+json',
}, (err, res) => {
  if (err) return console.error(err)
  if (argv.format === 'csv') {
    console.log(printSearchResultsCsv(res))
  } else {
    console.log(printSearchResultsLink(res))
  }
})

const printSearchResultsCsv = (searchResult) => {
  // return JSON.stringify(searchResult, null, 2)  
  return 'repo,file,link\n' + searchResult
    .map(match => {
      return `${match.repository.full_name},${match.name},${match.html_url}`
    })
    .join("\n")
}

const printSearchResultsLink = (searchResult) => searchResult
  .map(match => match.html_url)
  .join("\n")