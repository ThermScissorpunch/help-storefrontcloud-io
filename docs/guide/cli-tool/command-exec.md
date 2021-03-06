# Execute remote command

The Storefront Cloud CLI tool allows you to execute remote commands within the selected PODs:

```bash
node scripts/cli.js exec --pod=front -- ps
node scripts/cli.js exec --pod=api -- ps
```

**Note:** You may also use the exact POD name by using the switches presented above. If no switch is used, then the default POD (selected by `cli.js pod`) and the default Namespace (selected by `cli.js namespace`) are used.

<img src="/doc/exec-command.png"/>

You may run the interactive commands as well:

```bash
node scripts/cli.js exec --pod=api -- yarn pm2 monit
```

**Note:** You can switch the namespace and/or POD name ad-hoc by using the `--ns=` and `--pod=` switches.
