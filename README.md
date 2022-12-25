# react-magic-tab

A React 18 component that allows you displaying an extra content in the expandable area.

## Pages

- [demo](https://codesandbox.io/s/react-magic-tab-bekhgk?file=/src/App.js)
- [npm](https://www.npmjs.com/package/react-magic-tab)
- [github](https://github.com/dsocha/react-magic-tab)

## Install

```bash
yarn add react-magic-tab
```

```bash
npm install --save react-magic-tab
```

## Usage

```jsx
import { MagicTab } from 'react-magic-tab';

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <MagicTab
        mainContent={
          <>
            <h1>Magic Tab</h1>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
          </>
        }
        sideContent={
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
        }
        label='Click here'
        defaultExpanded={true}
        position='right'
      />
    </div>
  );
}

export default App;
```

## Properties

- **defaultExpanded**

  - Set true if you want the tab to be expanded by default

- **label**

  - The text you want to display on the tab

- **position**

  - Determines where the tab have to be displayed: 'top', 'right', 'bottom', 'left'.

- **offset**

  - Set this property if you want to move the tab button a bit, i.e. '50px'

- **sideContent**

  - Provide a content for the side panel.

- **sideContentSize**

  - Determines a size of expaned side content, i.e. '140px'

- **sideContentOverflow**

  - You can decide what to do if the side content is to large: 'auto', 'hidden'

- **sideContentBackgroundColor**

  - The background color of the side content

- **sideContentForegroundColor**

  - The foreground color of the side content

- **sideContentPadding**

  - Paddings of the side content

- **mainContent**

  - Provide a content for the main panel.

- **mainContentOverflow**

  - You can decide what to do if the main content is to large: 'auto', 'hidden'

- **mainContentBackgroundColor**

  - The background color of the main content

- **mainContentForegroundColor**

  - The foreground color of the main content

- **mainContentPadding**

  - Paddings of the main content

- **borderColor**

  - The color of the border

- **onExpanded**
  - Need to handle an event when the side content is being expanded or collapsed?

MIT © [dsocha](https://github.com/dsocha)
