# Auctioneer Server
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```
You need download and install the [BankID test ssl certificate](https://www.bankid.com/assets/bankid/rp/FPTestcert2_20150818_102329.pfx) in the root of the project, together with the `bankid.cer` file mentioned in section 8 of the [BankID relying party guidelines](https://www.bankid.com/assets/bankid/rp/bankid-relying-party-guidelines-v3.2.2.pdf). For further information, you can check the [bankid module](src/bankid/bankid.module.ts)

## Running the app

```bash
# development
$ npm run start

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
