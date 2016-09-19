#!/usr/bin/env node
var pixie = require('pixie')
var rc = require('rc')

if (process.stdin.isTTY) {
  console.error('Please pipe data into pixie')
  process.exit(1)
}

var chunks = []
process.stdin.on('data', function (buf) {
  chunks.push(buf)
})

process.stdin.on('end', function () {
  var source = Buffer.concat(chunks)
  main(source)
})

function main (source) {
  var action = process.argv[2]
  var data = rc('pixie')
  var config = data.config || {}

  // Compiling input
  if (action === 'compile') {
    var template = JSON.parse(source)
    var output = pixie.compile(template, data, config)
    return process.stdout.write(output)
  }

  // Parsing input
  if (action === 'parse') {
    var template = pixie.parse(source.toString(), config)
    var output = JSON.stringify(template)
    return process.stdout.write(output)
  }

  // Default to rendering
  var output = pixie.render(source.toString(), data, config)
  return process.stdout.write(output)
}
