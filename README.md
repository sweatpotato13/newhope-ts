<h1 align="center">Welcome to newhope 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/sweatpotato13/newhope-ts" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/sweatpotato13/newhope-ts/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
</p>

> Post-Quantum Cryptography Key Agreement Algorithm

### 🏠 [Homepage](https://github.com/sweatpotato13/newhope-ts)

## Install

```sh
npm i newhope-ts
yarn add newhope-ts
```

## Run tests

```sh
yarn test
```

## Usage

```ts
const newHopeAlice = new NewHope();
newHopeAlice.generateKeyPair();
const sharedRandomness = newHopeAlice.sharedRandomness;

const newHopeBob = new NewHope();
newHopeBob.sharedRandomness = sharedRandomness;
newHopeBob.generateKeyPair();
// newHopeBob.vector = errorDistribution;
const aliceShared = newHopeAlice.generateSharedSecret(
    newHopeBob.publicKey,
    Encoding.MATRIX
);
newHopeBob.vector = newHopeAlice.vector;

const bobShared = newHopeBob.generateSharedSecret(
    newHopeAlice.publicKey,
    Encoding.MATRIX
);

console.log("Alice");
console.log(aliceShared.toString());
console.log("Bob");
console.log(bobShared.toString());
if (aliceShared.toString() === bobShared.toString()) {
    console.log("Success!");
} else {
    console.log("Failed");
}
```

## Author

👤 **CuteWisp <sweatpotato13@gmail.com>**

-   Website: Cutewisp.com
-   Github: [@sweatpotato13](https://github.com/sweatpotato13)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/sweatpotato13/newhope-ts/issues).

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
