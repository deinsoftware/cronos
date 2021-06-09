# Cronos

[![build](https://github.com/deinsoftware/cronos/actions/workflows/build.yml/badge.svg)](https://github.com/deinsoftware/cronos/actions/workflows/build.yml)
[![deploy](https://github.com/deinsoftware/cronos/actions/workflows/deploy.yml/badge.svg)](https://github.com/deinsoftware/cronos/actions/workflows/deploy.yml)
[![Sonar-reliability](https://sonarcloud.io/api/project_badges/measure?project=dein%3Acronos&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=dein%3Acronos)
[![sonar-security](https://sonarcloud.io/api/project_badges/measure?project=dein%3Acronos&metric=security_rating)](https://sonarcloud.io/dashboard?id=dein%3Acronos)
[![sonar-maintainability](https://sonarcloud.io/api/project_badges/measure?project=dein%3Acronos&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=dein%3Acronos)
[![sonar-coverage](https://sonarcloud.io/api/project_badges/measure?project=dein%3Acronos&metric=coverage)](https://sonarcloud.io/dashboard?id=dein%3Acronos)
[![license](https://img.shields.io/github/license/deinsoftware/colorify)](LICENSE.md)

![Cronos](.github/social/preview.png 'Cronos App')

**Cronos** was created to help people to practice English for free and learn by doing!

## Menu

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Development](#development)
  - [Run](#run)
- [Folder Structure](#folder-structure)
- [About](#about)
  - [Built With](#built-with)
  - [Contributing](#contributing)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [Sponsors](#sponsors)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install?

- [node.js](https://nodejs.org/en/download/) - LTS Version: 14.17.0 (with npm 6.14.13)

### Development

Clone or download project and install dependencies.

```bash
git clone https://github.com/deinsoftware/cronos.git
cd cronos
npm i
```

### Run

If you want to run this project locally in development mode use the command

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

⇧ [Back to menu](#menu)

---

## Folder Structure

```bash
├─ public
└─ src
    ├─ assets
    ├─ components
    │   ├─ layouts
    │   ├─ sections
    │   ├─ shared
    │   └─ ui
    ├─ data
    ├─ utils
    ├─ pages
    └─ index.js
```

| Folder   | Content                                                                           |
| -------- | --------------------------------------------------------------------------------- |
| assets   | Images and file resources                                                         |
| layouts  | Layout components for main pages (eg. LandingLayout, AuthLayout)                  |
| sections | Sections components (eg. Header, Footer)                                          |
| shared   | Shared components that have business logic (eg. Answer, Listen)                   |
| ui       | Smaller components that have no business logic or side effects (eg. Logo, Button) |
| data     | Share CONSTANT (eg. combobox list).                                               |
| utils    | Function helpers (eg. helpers).                                                   |
| pages    | All the pages                                                                     |

A rule of thumb is to create a helper function when you need specific functionalities in more than one place.

⇧ [Back to menu](#menu)

---

## About

### Built With

- [React](https://reactjs.org/) - React. A JavaScript library for building user interfaces
- [VS Code](https://code.visualstudio.com/) - Code editing redefined.
- [VSCode - React Flavored](https://dev.to/equiman/vscode-react-flavored-134h) - Development setup and extensions for React.
- [SonarQube](https://sonarcloud.io/dashboard?id=dein%3Acronos) - Continuous code quality.

### Libraries

- [date-to-words](https://www.npmjs.com/package/date-to-words) - Convert date into its spoken representation.
- [number-to-words](https://www.npmjs.com/package/number-to-words) - Convert numbers into words, ordinal words and ordinal numbers.
- [speak-tts](https://www.npmjs.com/package/speak-tts) - Speech synthesis made easy - Browser based text to speech (TTS
- [time-in-words](https://www.npmjs.com/package/time-in-words)

### Contributing

Please read [CONTRIBUTING](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [Cronos](https://github.com/deinsoftware/cronos/tags) on GitHub.

### Authors

- **Camilo Martinez** [[Equiman](http://stackoverflow.com/story/equiman)]

See also the list of [contributors](https://github.com/deinsoftware/cronos/contributors) who participated in this project.

### Sponsors

If this project helps you, consider buying me a cup of coffee.

[![paypal](https://img.shields.io/badge/-PayPal-gray?style=flat&labelColor=00457C&logo=paypal&logoColor=white&link=https://paypal.me/equiman/3)](https://paypal.me/equiman/3)
[![patreon](https://img.shields.io/badge/-Patreon-gray?style=flat&labelColor=052d49&logo=patreon&logoColor=F96854&link=https://patreon.com/equiman)](https://patreon.com/equiman)
[![buymeacoffe](https://img.shields.io/badge/-Buy%20Me%20A%20Coffee-gray?style=flat&labelColor=FF813F&logo=buy-me-a-coffee&logoColor=white&link=https://buymeacoff.ee/equiman)](https://buymeacoff.ee/equiman)

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

⇧ [Back to menu](#menu)
