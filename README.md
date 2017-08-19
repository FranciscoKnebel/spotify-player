# Spotify Player

![Spotify Wrapper Player Screenshot](example/screenshots/title.png)

[![Build Status](https://travis-ci.org/FranciscoKnebel/spotify-player.svg?branch=master)](https://travis-ci.org/FranciscoKnebel/spotify-player) [![Coverage Status](https://coveralls.io/repos/github/FranciscoKnebel/spotify-player/badge.svg?branch=master)](https://coveralls.io/github/FranciscoKnebel/spotify-player?branch=master)
[![Issues](https://img.shields.io/github/issues-raw/FranciscoKnebel/spotify-player.svg?style=flat-square)](https://github.com/FranciscoKnebel/spotify-player/issues)

> This application uses the [spotify-wrapper-api](https://github.com/FranciscoKnebel/spotify-wrapper-api) library to get album data from Spotify.

## Browser Support

This Application relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## How to Run

1. Create your Spotify Web API access token at [Spotify](https://developer.spotify.com/web-api/).
1. Clone the repository.
3. Add your token on [src/spotify.js](src/spotify.js). This token has a short life, so you will need to renew it.
4. Install the dependencies with `npm install`.
5. Run the application with `npm start`.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/FranciscoKnebel/spotify-wrapper-api/tags).

## Authors

| ![Francisco Knebel](https://gravatar.com/avatar/441e3faab920a73e7ca59f65fdaf0b82?s=150)|
|:---------------------:|
|  [Francisco Knebel](https://github.com/FranciscoKnebel/)   |

See also the list of [contributors](https://github.com/FranciscoKnebel/spotify-wrapper-api/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
