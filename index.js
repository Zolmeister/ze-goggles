#!/usr/bin/env node
'use strict'

var program = require('commander')
var fs = require('fs')
var _ = require('lodash')
var url = require('url')

program
  .version('0.0.1')
  .option('-i, --input [file]', 'flare docfile')
  .option('-o, --output [file]', 'output file')
  .parse(process.argv)

var docs = JSON.parse(fs.readFileSync(program.input))
var titles = _.uniq(_.pluck(docs, 'title'))

var markdown = _.map(titles, function (title) {
  return '#' + title + '\n' + _.map(_.filter(docs, function (doc) {
    return doc.title === title
  }), function (doc) {
    if (typeof doc.res.body === 'string') {
      doc.res.body = JSON.parse(doc.res.body)
    }
    return [
      '### ' + doc.description,
    '##### ' + doc.req.method + ' ' + url.parse(doc.req.uri).pathname,
      '```js',
      '// req',
      JSON.stringify(doc.req.json, null, 4),
      '```',
      '```js',
      '// res',
      JSON.stringify(doc.res.body, null, 4),
      '```'
    ].join('\n')
  }).join('\n')
}).join('\n')

fs.writeFileSync(program.output, markdown)
