# v-notifications

Users want to see feedback after their actions. This package can be used to show feedback to users.

## Usage

```
npm install v-notifications
```

```js
import notification from 'v-notifications/index.js';

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
- bottom-center

## Examples

```js
- notification('Hello World');

- notification('Hello World', 'danger');

- notification('Hello World', 'warning', 'bottom-left');
```

## 🔑 License

MIT © [Şevki Oruç](https://github.com/sevkioruc)
