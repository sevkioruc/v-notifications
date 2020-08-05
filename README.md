# vue-notifications

## Usage

```
npm install --save vue-notifications
```

```js
import notification from 'src/components/notification/index.js';

notification(message, state, position);
```
<br>

| Parameter    | Default         | Type   |
| :---         | :----:          | :----: |
| message      | null            | string | 
| state        | success         | string |
| position     | bottom-right    | string |

<br>

### State values
* <span style="color: #28a745 "> success </span>
* <span style="color: #dc3545"> danger </span>
* <span style="color: #ffc107"> warning </span>

<br>

### Position values
- bottom-right
- bottom-left
- bottom-middle

## Examples

```js
- notification('Hello World');

- notification('Hello World', 'danger');

- notification('Hello World', 'warning', 'bottom-left');
```

