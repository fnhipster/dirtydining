# Dialog

Description

---

## Usage

```
<Dialog
    title='Hello, Goodbye'
    onOpen={() => alert('I say hello')}
    onClose={() => alert('You say goodbye')}
>
    <Text>Hello, hello...</Text>
</Dialog>
```

## ![](/assets/import.png)

---

## Usage \(without title\)

```
<Dialog
    onOpen={() => alert('I say hello')}
    onClose={() => alert('You say goodbye')}
>
    <Text>Hello, hello...</Text>
</Dialog>
```

![](/assets/import2.png)

---

## Props

| Props | Type | Default | Note |
| :--- | :--- | :--- | :--- |
| title | String |  | You can pass a`DialogTitle`component or pass a`View`for customizing titlebar |
| `width` | `Number` | Your device width | The Width of Dialog, you can use fixed width or use percentage |
| `height` | `Number` | 300 | The Width of Dialog, you can use fixed height or use percentage |



