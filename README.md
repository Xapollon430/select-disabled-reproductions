# Select disabled after opening

Minimal reproductions against published library versions. Each directory is independent.

Run `npm install`, then `npm run dev` in a demo directory. Open the local URL.

1. Click **Disable in 3 seconds**.
2. Open the select before the timer ends.
3. Wait for **Disabled: true**, then click Orange. In Vaadin, press ArrowDown followed by Enter.

The value or selection callback still changes while the control is disabled.

Official library styles are imported. Base Web includes Styletron and its theme provider; Ionic calls `initialize` before registering its custom elements. Melt UI is headless and has basic demo styling.

Selection and popup state are internal for Blueprint, Reach, tree select, Typeahead, Gestalt, Melt, Vaadin, and Ionic. Base Web and Cloudscape use their controlled selection APIs. Every popup is managed by the library. These demos do not pass an open-state prop or force interaction with disabled controls.

These reproductions and accompanying fixes were prepared with AI assistance and verified in Chromium.

## Videos

### vaadin

https://github.com/user-attachments/assets/53bca5ae-5702-44cb-a407-78186ece2ea8

### typeahead

https://github.com/user-attachments/assets/6cd20f2d-2e0c-4435-b9f6-ff0b66855206

### tree

https://github.com/user-attachments/assets/ec549a1b-6b7f-40d9-8e0a-73009b75c9f5

### reach

https://github.com/user-attachments/assets/3ad18226-8514-4ac5-8d2f-f6d74f7da4dc

### melt

https://github.com/user-attachments/assets/cb23720f-5f97-4987-9ae5-aae9bd07f17a

### ionic

https://github.com/user-attachments/assets/a6691452-3f2d-465a-badc-645afe946800

### gestalt

https://github.com/user-attachments/assets/202c73c0-22df-4886-bab5-f76c79f19356

### cloudscape

https://github.com/user-attachments/assets/d08be1e5-846f-4384-8c9e-b85950836028

### blueprint

https://github.com/user-attachments/assets/82c797f1-1f13-4a86-9fe5-892e00c2630d

### baseweb

https://github.com/user-attachments/assets/229537d7-07f4-4389-8600-8feffb974359

