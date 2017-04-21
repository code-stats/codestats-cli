# codestats-cli
A command utility for viewing your stats from [Code::Stats](https://codestats.net/)

## What is Code::Stats?
Code::Stats A free stats tracking service for programmers. Deveoped by [Nicd](https://github.com/Nicd), it is available as a plugin for major IDEs/Editors such as Atom, Sublime, VSCode and Webstorm.

## Installation
This command line utility can be installed via `npm`:

```shell
npm install codestats-cli --global
```

## API
After installation, it is accessible via `codestats` command from your favorite terminal with following options:

```shell
$ codestats

  Usage: codestats [options] <keywords>

  Options:

    -h, --help              output usage information
    -V, --version           output the version number
    -a, --all [name]        get all public user info
    -u, --user [name]       get user name
    -m, --machines [name]   get user machines
    -t, --total_xp [name]   get user total xp
    -n, --new_xp [name]     get user xp gained in last 24 hours
    -l, --languages [name]  get user languages
```

