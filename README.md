# Auctioneer Server

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
```

### Queries and Subscrips

Subscrip

```gql
subscription test {
  testSub {
    now
    text
  }
}
```

Query

```gql
query test {
  test {
    now
  }
}
```
