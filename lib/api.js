#!/usr/bin/env node
'use strict'

const program = require('commander')
const request = require('request')
const chalk = require('chalk')

program
	.version('0.1.0')
	.usage('[options] <keywords>')
	.option('-a, --all [name]', 'get all public user info')
	.option('-u, --user [name]', 'get user name')
	.option('-m, --machines [name]', 'get user machines')
	.option('-t, --total_xp [name]', 'get user total xp')
	.option('-n, --new_xp [name]', 'get user xp gained in last 24 hours')
	.option('-l, --languages [name]', 'get user languages')
	.parse(process.argv)

let keywords = program.args
let url = 'https://codestats.net/api/users/'+keywords

if(program.all) {
	url = url + program.all
	request.get(url, function (err, res, body) {
		if(err) console.log(chalk.red('error: ' + err))

		body = JSON.parse(body)
		console.log(body)
	})
} else if(program.user) {
	url = url + program.user
	request.get(url, function (err, res, body) {
		if(err) console.log(chalk.red('error: ' + err))

		body = JSON.parse(body)
		console.log('Username: ' + body.user)
	})
} else if(program.machines) {
	url = url + program.machines
	request.get(url, function (err, res, body) {
		if(err) console.log(chalk.red('error: ' + err))

		body = JSON.parse(body)
		console.log('Machines: ',  body.machines)
	})
} else if(program.total_xp) {
	url = url + program.total_xp
	request.get(url, function (err, res, body) {
		if (err) console.log(chalk.red('error: ' + err))

		body = JSON.parse(body)
		console.log('Total XP: ' + body.total_xp)
	})
} else if(program.new_xp) {
	url = url + program.new_xp
	request.get(url, function (err, res, body) {
		if (err) console.log(chalk.red('error: ' + err))

		body = JSON.parse(body)
		console.log('New XP: ' + body.new_xp)
	})
} else if(program.languages) {
	url = url + program.languages
	request.get(url, function (err, res, body) {
		if (err) console.log(chalk.red('error: ' + err))

		body = JSON.parse(body)
		console.log('Languages: ', body.languages)
	})
} else {
	program.help()
}