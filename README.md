# Common Alerting Protocol (CAP) in TypeScript

This library should allow parsing and writing of CAP (Common Alerting Protocol) messages.

## Install

This package is not published to a publicly available registry yet. \
We'll update this document as soon as it is available.

In the meantime you can just build the package your own.

```sh
# install dependencies
npm install

# build sources
npm run build
```

## Example

### Creating a CAP alert

```typescript
import {
  AlertBuilder,
  Category,
  Certainty,
  InfoBuilder,
  MsgType,
  Scope,
  Severity,
  Status,
  Urgency,
} from 'cap-ts/dist/node/builder';

const info = new InfoBuilder(
  // event
  'Fire in shopping mall',
  Urgency.immediate,
  Severity.extreme,
  Certainty.observed,
  [Category.fire],
);

const alert = new AlertBuilder(
  // alert ID
  'ca15f4ac-7ee9-4391-a9da-a75f1c3374dd',
  // sender ID
  'http://shopping.com/sensors/fire/386',
  new Date().toISOString(),
  Status.actual,
  MsgType.alert,
  Scope.restricted,
);

// add info to alert
alert.info_list = [info];

const xmlString = alert.build().toXML();
```

### Parsing a CAP alert

```typescript
import { CAP_1_2 } from "cap-ts";

try {
  const alert = await CAP_1_2.Alert.fromXML('<?xml version="1.0" ... >')
} catch {
  // parsing went wrong
}
```

## Thank You!

A big thank you to [JonathanWilbur](https://github.com/JonathanWilbur) who initiated this project and to [Philgresh](https://github.com/philgresh) who added valuable tests to this project.

<img align="right" src="https://raw.githubusercontent.com/dec112/cap-ts/master/assets/netidee.jpeg" height="150">This project has received funding from [Netidee Call 17](https://netidee.at).

<br clear="both" />

## License

[MIT License](https://mit-license.org/)