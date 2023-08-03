# Common Alerting Protocol (CAP) in TypeScript

This library should allow parsing and writing of CAP (Common Alerting Protocol) messages.

## Install

@dec112/cap-ts is publicly available on the npm registry.

```sh
npm install @dec112/cap-ts
```

## Build

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
} from '@dec112/cap-ts/builder';

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

### Using strings to derive corresponding enum values

```typescript
import {
  AlertBuilder,
  Category,
  Certainty,
  FromString,
  InfoBuilder,
  MsgType,
  Scope,
  Severity,
  Status,
  Urgency,
} from '@dec112/cap-ts/builder';

// ############################################
// Of course these examples do not make much sense
// as they use string literals and could therefore
// simply replaced by the enums itself
// However this is handy if the enum string
// is available in a variable and the corresponding
// internal enum value needs to be retreived from it
// ############################################
const info = new InfoBuilder(
  // event
  'Fire in shopping mall',
  FromString.getUrgency('immediate') ?? Urgency.unknown,
  FromString.getSeverity('extreme') ?? Severity.unknown,
  FromString.getCertainty('observed') ?? Certainty.unknown,
  [FromString.getCategory('fire') ?? Category.other],
);

const alert = new AlertBuilder(
  // alert ID
  'ca15f4ac-7ee9-4391-a9da-a75f1c3374dd',
  // sender ID
  'http://shopping.com/sensors/fire/386',
  new Date().toISOString(),
  FromString.getStatus('actual') ?? Status.actual,
  FromString.getMsgType('alert') ?? MsgType.alert,
  FromString.getScope('restricted') ?? Scope.restricted,
);

// add info to alert
alert.info_list = [info];

const xmlString = alert.build().toXML();
```

### Parsing a CAP alert

```typescript
import { CAP_1_2 } from "@dec112/cap-ts";

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