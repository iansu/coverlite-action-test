# Coverlite Action

[![Build status](https://github.com/iansu/apollo-schema-check-action/workflows/CI/badge.svg)](https://github.com/iansu/coverlite-action/actions)

A GitHub Action to upload code coverage stats

## Usage

Create a file in your repo named `.github/workflows/coverlite.yml` with the following contents:

```yml
name: Upload Coverage

on:
  pull_request:
    types: [opened, reopened, synchronize]

jobs:
  upload:
    name: upload
    runs-on: ubuntu-latest
    timeout-minutes: 5
    steps:
      - uses: actions/checkout@v2
      - uses: iansu/coverlite-action@v1
```

## Settings

| Name              | Description                               | Default  | Required |
| ----------------- | ----------------------------------------- | -------- | -------- |
| coverageDirectory | The location of your code coverage report | coverage | No       |

## Credits

Made with :tumbler_glass: by [Ian Sutherland](https://iansutherland.ca) ([@iansu](https://twitter.com/iansu)). This project is released under the [MIT](/LICENSE) license.
