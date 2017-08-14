# Dialog

A popup-dialog component

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

| Prop | Type | Note |
| :--- | :--- | :--- |
| title | String | Optional. If not passed, the component will ignore the title. |
| onOpen | Function | Optional. Callback will be called after the Dialog opens. |
| onClose | Function | Optional. Call will be called after Dialog closes. |



