# 📚 CSS Cheat Sheet — Chapter 1 to 4

A simple CSS cheat sheet with **English + Hinglish explanations**.

---

# 📘 Chapter 1 — Introduction to CSS

## What is CSS?

**English:** CSS is used to style and design HTML elements.

**Hinglish:** CSS ka use HTML elements ko style aur design karne ke liye hota hai.

---

## CSS Syntax

```css
selector {
    property: value;
}
```

### Example

```css
h1 {
    color: blue;
}
```

```text
h1      → Selector
color   → Property
blue    → Value
```

---

## 1. Inline CSS

CSS directly inside an HTML element.

```html
<h1 style="color: red;">Hello</h1>
```

---

## 2. Internal CSS

CSS inside the `<style>` tag.

```html
<head>
    <style>
        h1 {
            color: blue;
        }
    </style>
</head>
```

---

## 3. External CSS ⭐

CSS written in a separate `.css` file.

### HTML

```html
<link rel="stylesheet" href="style.css">
```

### CSS

```css
h1 {
    color: green;
}
```

---

## ⚡ Chapter 1 Cheat Sheet

```text
Inline CSS   → Inside HTML element
Internal CSS → Inside <style>
External CSS → Separate CSS file ⭐
```

---

# 📘 Chapter 2 — CSS Selectors

## What is a Selector?

**English:** A selector selects HTML elements to apply CSS.

**Hinglish:** Selector HTML elements ko select karta hai jinke upar CSS lagani hoti hai.

---

## 1. Universal Selector

Selects all HTML elements.

```css
* {
    margin: 0;
    padding: 0;
}
```

---

## 2. Element Selector

Selects an HTML element.

```css
p {
    color: blue;
}
```

### Example

```html
<p>Hello World</p>
```

The paragraph color will become blue.

---

## 3. Class Selector ⭐

Uses `.` before the class name.

### HTML

```html
<h1 class="title">Hello</h1>
```

### CSS

```css
.title {
    color: red;
}
```

---

## 4. ID Selector

Uses `#` before the ID name.

### HTML

```html
<h1 id="heading">Hello</h1>
```

### CSS

```css
#heading {
    color: green;
}
```

---

## 5. Group Selector

Apply the same CSS to multiple elements.

```css
h1, p {
    color: blue;
}
```

---

## 6. Descendant Selector

Selects elements inside another element.

```css
.card p {
    color: red;
}
```

### Example

```html
<div class="card">
    <p>Hello</p>
</div>
```

```text
.card
   │
   └── p
```

Only the paragraph inside `.card` will become red.

---

## 7. Pseudo-class ⭐

Changes style based on an element's state.

```css
button:hover {
    background-color: blue;
}
```

**Hinglish:** Mouse button ke upar le jane par button ka background blue ho jayega.

---

## ⚡ Chapter 2 Cheat Sheet

```css
*              /* All elements */

p              /* Element */

.title         /* Class */

#heading       /* ID */

h1, p          /* Group */

.card p        /* Inside card */

button:hover   /* Hover */
```

---

# 📘 Chapter 3 — Colors & Background

## 1. Text Color

Changes the text color.

```css
h1 {
    color: red;
}
```

---

## 2. Background Color

Changes the background color.

```css
.box {
    background-color: blue;
}
```

---

## 3. Background Image

Adds an image as a background.

```css
.hero {
    background-image: url("image.jpg");
}
```

---

## 4. Background Size

Controls the size of the background image.

```css
.hero {
    background-size: cover;
}
```

### Common Values

```text
cover   → Full area cover karta hai
contain → Full image visible rakhta hai
```

---

## 5. Background Position

Controls where the background image is placed.

```css
.hero {
    background-position: center;
}
```

---

## 6. Background Repeat

Controls whether the background image repeats.

```css
.hero {
    background-repeat: no-repeat;
}
```

---

## Complete Example

```css
.hero {
    color: white;
    background-color: black;
    background-image: url("image.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
```

---

## ⚡ Chapter 3 Cheat Sheet

```css
/* Text Color */
color: red;

/* Background Color */
background-color: blue;

/* Background Image */
background-image: url("image.jpg");

/* Image Size */
background-size: cover;

/* Image Position */
background-position: center;

/* Stop Repeat */
background-repeat: no-repeat;
```

---

# 📘 Chapter 4 — Border

## What is Border?

**English:** Border creates a line around an element.

**Hinglish:** Border element ke around ek line banata hai.

---

## 1. Border

```css
.box {
    border: 2px solid black;
}
```

```text
2px   → Width
solid → Style
black → Color
```

---

## 2. Border Width

Controls border thickness.

```css
.box {
    border-width: 5px;
}
```

---

## 3. Border Style

Controls the border style.

```css
.box {
    border-style: solid;
}
```

### Common Styles

```text
solid
dashed
dotted
double
```

---

## 4. Border Color

Changes border color.

```css
.box {
    border-color: red;
}
```

---

## 5. Border Radius ⭐

Makes corners round.

```css
.box {
    border-radius: 10px;
}
```

### Output

```text
Without Radius          With Radius

┌──────────┐            ╭──────────╮
│          │            │          │
│          │            │          │
└──────────┘            ╰──────────╯
```

---

## Create a Circle

```css
.profile {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
```

```text
┌──────────────┐

border-radius: 50%

       ↓

     ●
   Circle
```

---

## Complete Border Example

```css
.card {
    width: 250px;
    border: 2px solid black;
    border-radius: 15px;
}
```

---

## ⚡ Chapter 4 Cheat Sheet

```css
/* Full Border */
border: 2px solid black;

/* Border Width */
border-width: 2px;

/* Border Style */
border-style: solid;

/* Border Color */
border-color: red;

/* Rounded Corners */
border-radius: 10px;

/* Circle */
border-radius: 50%;
```

---

# 🏆 Final Quick Revision

## Chapter 1 → CSS Basics

```text
Inline
Internal
External ⭐
```

## Chapter 2 → Selectors

```text
*
Element
Class
ID
Group
Descendant
:hover ⭐
```

## Chapter 3 → Colors & Background

```text
color
background-color
background-image
background-size
background-position
background-repeat
```

## Chapter 4 → Border

```text
border
border-width
border-style
border-color
border-radius ⭐
```

---

# 🎯 Most Important Things

```text
Chapter 1 → External CSS

Chapter 2 → Class + ID + :hover

Chapter 3 → Colors + Background

Chapter 4 → Border + Border Radius
```
