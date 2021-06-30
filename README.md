# React Date Picker

Forked from https://github.com/Hacker0x01/react-datepicker

Add feature: When user open the years dropdown, auto scroll to selected year

## Installation

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install @whknightz/react-datepicker --save
```

Or via [yarn](https://github.com/yarnpkg/yarn):

```
yarn add @whknightz/react-datepicker
```

```js
import React, { useState } from 'react';
import DatePicker from '@whknightz/react-datepicker';

import '@whknightz/react-datepicker/dist/react-datepicker.css';

const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      yearDropdownItemNumber={40}
      showYearDropdown
      showMonthDropdown
      scrollableYearDropdown
      adjustDateOnChange
    />
  );
};
```

## License

Copyright (c) 2014-2021 HackerOne Inc. and individual contributors. Licensed under MIT license, see [LICENSE](LICENSE) for the full license.
