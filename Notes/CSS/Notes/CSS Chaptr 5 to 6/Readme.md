# 📚 CSS Cheat Sheet — Chapter 5 & 6

Simple notes with **English + Hinglish + Examples + Code + Output**.

---

# 📘 Chapter 5 — CSS Box Model

## What is Box Model?

**English:** Every HTML element is treated like a box.

**Hinglish:** CSS me har HTML element ko ek **box** ki tarah treat kiya jata hai.

```text
┌───────────────────────────────┐
│            Margin             │
│   ┌───────────────────────┐   │
│   │        Border         │   │
│   │   ┌───────────────┐   │   │
│   │   │    Padding    │   │   │
│   │   │   ┌───────┐   │   │   │
│   │   │   │Content│   │   │   │
│   │   │   └───────┘   │   │   │
│   │   └───────────────┘   │   │
│   └───────────────────────┘   │
└───────────────────────────────┘
```

---

## Box Model Parts

```text
Content → Actual content

Padding → Space inside the border

Border  → Line around the element

Margin  → Space outside the element
```

---

# 1. Width

Controls the width of an element.

```css
.box {
    width: 300px;
}
```

**Hinglish:** Element ki horizontal width set karta hai.

---

# 2. Height

Controls the height of an element.

```css
.box {
    height: 200px;
}
```

**Hinglish:** Element ki vertical height set karta hai.

---

# 3. Padding ⭐

Padding creates space **inside the element**.

```css
.box {
    padding: 20px;
}
```

```text
┌───────────────────────┐
│       Padding         │
│   ┌───────────────┐   │
│   │    Content    │   │
│   └───────────────┘   │
└───────────────────────┘
```

### Different Padding Values

```css
/* All sides */
padding: 20px;

/* Top/Bottom  Left/Right */
padding: 10px 20px;

/* Top  Right  Bottom  Left */
padding: 10px 20px 30px 40px;
```

### Easy Trick

```text
1 value → All sides

2 values → Top/Bottom + Left/Right

4 values → Top → Right → Bottom → Left
```

---

# 4. Margin ⭐

Margin creates space **outside the element**.

```css
.box {
    margin: 20px;
}
```

```text
┌───────────────────────────────┐
│            Margin             │
│   ┌───────────────────────┐   │
│   │        Element        │   │
│   └───────────────────────┘   │
└───────────────────────────────┘
```

### Center a Box

```css
.box {
    width: 300px;
    margin: auto;
}
```

**Hinglish:** `margin: auto` element ko horizontally center kar sakta hai.

---

# 5. Border

Border element ke around line banata hai.

```css
.box {
    border: 2px solid black;
}
```

---

# ⭐ Padding vs Margin

```text
Padding
↓
Element ke ANDAR space

┌──────────────────┐
│    Padding       │
│   ┌──────────┐   │
│   │ Content  │   │
│   └──────────┘   │
└──────────────────┘


Margin
↓
Element ke BAHAR space

       Margin
          ↓

┌──────────────┐

    Element

└──────────────┘
```

### One Line Difference

**Padding:** Space inside the element.  
**Margin:** Space outside the element.

**Hinglish:**  
Padding andar space deta hai, Margin bahar space deta hai.

---

# 6. box-sizing ⭐⭐⭐

## Default: `content-box`

Normally CSS uses:

```css
box-sizing: content-box;
```

Example:

```css
.box {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
}
```

Actual width becomes:

```text
Width
200px

Padding
20px + 20px

Border
5px + 5px

Total
250px
```

```text
Without border-box

┌─────────────────────────────────┐
│ Border                          │
│  ┌───────────────────────────┐  │
│  │ Padding                   │  │
│  │   ┌───────────────────┐   │  │
│  │   │ Content = 200px   │   │  │
│  │   └───────────────────┘   │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘

Total size becomes bigger
```

---

## `box-sizing: border-box` ⭐

```css
.box {
    width: 200px;
    padding: 20px;
    border: 5px solid black;

    box-sizing: border-box;
}
```

Now the total width stays:

```text
200px
```

Padding and border are included inside the width.

```text
With border-box

┌───────────────────────────┐
│ Border                    │
│  Padding                  │
│    Content                │
│                           │
└───────────────────────────┘

Total = 200px
```

### Easy Difference

```text
Without border-box
Width + Padding + Border = Bigger size

With border-box
Width already includes Padding + Border
```

### Best Practice ⭐

```css
* {
    box-sizing: border-box;
}
```

---

# 7. min-width & max-width

## `min-width`

Sets the minimum width.

```css
.box {
    min-width: 200px;
}
```

**Hinglish:** Element 200px se chhota nahi hoga.

---

## `max-width`

Sets the maximum width.

```css
.box {
    max-width: 500px;
}
```

**Hinglish:** Element 500px se bada nahi hoga.

---

# Chapter 5 Complete Example

```html
<div class="card">
    <h2>My Profile</h2>
    <p>Hello, I am learning CSS.</p>
</div>
```

```css
.card {
    width: 300px;
    padding: 20px;
    margin: 30px auto;

    border: 2px solid black;
    border-radius: 10px;

    box-sizing: border-box;
}
```

### Output

```text
        ┌──────────────────────┐
        │     My Profile       │
        │                      │
        │ Hello, I am learning │
        │ CSS.                 │
        └──────────────────────┘
```

---

# ⚡ Chapter 5 Cheat Sheet

```css
/* Width */
width: 300px;

/* Height */
height: 200px;

/* Padding */
padding: 20px;

/* Margin */
margin: 20px;

/* Center */
margin: auto;

/* Border */
border: 2px solid black;

/* Border Box */
box-sizing: border-box;

/* Minimum Width */
min-width: 200px;

/* Maximum Width */
max-width: 500px;
```

---

# 📘 Chapter 6 — Text & Fonts

## What is Text & Fonts?

**English:** CSS provides properties to control how text looks.

**Hinglish:** CSS ki help se hum text ka size, style, spacing aur appearance change kar sakte hain.

---

# 1. font-family ⭐

Changes the font style.

```css
p {
    font-family: Arial;
}
```

### Multiple Fonts

```css
p {
    font-family: Arial, sans-serif;
}
```

**Hinglish:** Agar Arial available nahi hoga to browser `sans-serif` use karega.

---

# 2. font-size ⭐

Controls text size.

```css
h1 {
    font-size: 30px;
}
```

---

# 3. font-weight

Controls text thickness.

```css
p {
    font-weight: bold;
}
```

### Common Values

```css
font-weight: normal;
font-weight: bold;
font-weight: 100;
font-weight: 400;
font-weight: 700;
```

```text
100 → Thin
400 → Normal
700 → Bold
```

---

# 4. font-style

Changes text style.

```css
p {
    font-style: italic;
}
```

### Values

```css
font-style: normal;
font-style: italic;
```

---

# 5. text-align ⭐

Controls text position.

```css
text-align: left;
text-align: center;
text-align: right;
```

### Example

```css
h1 {
    text-align: center;
}
```

```text
┌──────────────────────────┐
│                          │
│       Hello World        │
│                          │
└──────────────────────────┘
```

---

# 6. text-decoration

Adds or removes text decoration.

```css
text-decoration: underline;
```

### Common Values

```css
text-decoration: none;
text-decoration: underline;
text-decoration: line-through;
```

### Remove Link Underline ⭐

```css
a {
    text-decoration: none;
}
```

---

# 7. text-transform

Changes text letters.

```css
text-transform: uppercase;
```

### Values

```css
text-transform: uppercase;
text-transform: lowercase;
text-transform: capitalize;
```

### Example

```text
hello world

uppercase
↓

HELLO WORLD
```

---

# 8. line-height

Controls space between lines.

```css
p {
    line-height: 1.5;
}
```

```text
Normal

Hello World
Hello World


line-height: 2

Hello World

Hello World
```

---

# 9. letter-spacing

Controls space between letters.

```css
h1 {
    letter-spacing: 5px;
}
```

```text
HELLO

H E L L O
```

---

# 10. word-spacing

Controls space between words.

```css
p {
    word-spacing: 10px;
}
```

```text
Hello World

Hello      World
```

---

# 11. text-shadow ⭐

Adds shadow to text.

```css
h1 {
    text-shadow: 2px 2px 5px gray;
}
```

```text
2px → Horizontal shadow
2px → Vertical shadow
5px → Blur
gray → Shadow color
```

---

# Chapter 6 Complete Example

```html
<div class="content">
    <h1>Welcome to My Website</h1>

    <p>
        I am learning CSS and building beautiful websites.
    </p>
</div>
```

```css
.content {
    text-align: center;
}

h1 {
    font-family: Arial, sans-serif;
    font-size: 32px;
    font-weight: bold;

    text-transform: uppercase;
    letter-spacing: 2px;

    text-shadow: 2px 2px 5px gray;
}

p {
    font-family: Arial, sans-serif;
    font-size: 18px;

    line-height: 1.6;
    word-spacing: 5px;
}
```

---

# ⚡ Chapter 6 Cheat Sheet

```css
/* Font Family */
font-family: Arial, sans-serif;

/* Font Size */
font-size: 20px;

/* Font Weight */
font-weight: bold;

/* Font Style */
font-style: italic;

/* Text Alignment */
text-align: center;

/* Text Decoration */
text-decoration: underline;

/* Text Transform */
text-transform: uppercase;

/* Line Space */
line-height: 1.5;

/* Letter Space */
letter-spacing: 2px;

/* Word Space */
word-spacing: 5px;

/* Text Shadow */
text-shadow: 2px 2px 5px gray;
```

---

# 🏆 Final Quick Revision

## Chapter 5 → Box Model

```text
Content
↓
Padding
↓
Border
↓
Margin
```

```text
Padding → Inside space

Margin → Outside space

border-box → Total size stays controlled
```

---
---
---
---


## Chapter 6 → Text & Fonts

```text
font-family     → Font style

font-size       → Text size

font-weight     → Text thickness

font-style      → Normal / Italic

text-align      → Text position

text-decoration → Underline

text-transform  → Uppercase / Lowercase

line-height     → Space between lines

letter-spacing  → Space between letters

word-spacing    → Space between words

text-shadow     → Shadow on text
```

---

# 🎯 Most Important Topics

```text
Chapter 5 ⭐
Padding
Margin
Box Model
box-sizing: border-box


Chapter 6 ⭐
font-family
font-size
font-weight
text-align
text-decoration
line-height
text-transform
```
