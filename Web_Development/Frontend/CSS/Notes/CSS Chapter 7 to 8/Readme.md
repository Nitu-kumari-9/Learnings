# 📚 CSS Cheat Sheet — Chapter 7 & 8

Simple notes with **English + Hinglish + Examples + Code + Output**.

<br><br>

---

# 📘 Chapter 7 — CSS Units

## What are CSS Units?

**English:** CSS units are used to define the size, width, height, spacing, and other measurements of elements.

**Hinglish:** CSS units ka use kisi element ka **size, width, height aur spacing** set karne ke liye hota hai.

---

## Main CSS Units

```text
px   → Pixel

%    → Percentage

em   → Parent font-size

rem  → Root font-size

vw   → Viewport Width

vh   → Viewport Height
```

---

# 1. px — Pixel ⭐

`px` is a fixed unit.

**Hinglish:** `px` ek fixed size hota hai.

```css
.box {
    width: 300px;
    height: 200px;
}
```

### Output Idea

```text
Width = 300px

┌──────────────────────┐
│                      │
│        BOX           │
│                      │
└──────────────────────┘
```

---

# 2. % — Percentage ⭐

Percentage parent element ke according kaam karta hai.

```html
<div class="parent">
    <div class="child"></div>
</div>
```

```css
.parent {
    width: 500px;
}

.child {
    width: 50%;
}
```

### Easy Diagram

```text
Parent = 500px

┌────────────────────────────────────┐
│                                    │
│   Child = 50%                      │
│   ┌──────────────────┐             │
│   │                  │             │
│   └──────────────────┘             │
│                                    │
└────────────────────────────────────┘


50% of 500px = 250px
```

### Hinglish

**Parent jitna bada ya chhota hoga, `%` wala child bhi uske according change hoga.**

---

# 3. em ⭐

`em` parent element ke font-size ke according kaam karta hai.

```css
.parent {
    font-size: 20px;
}

.child {
    font-size: 2em;
}
```

### Result

```text
Parent font-size = 20px

Child = 2em

2 × 20px = 40px
```

### Easy Formula

```text
1em = Parent font-size

2em = 2 × Parent font-size
```

---

# 4. rem ⭐

`rem` root HTML font-size ke according kaam karta hai.

Usually:

```text
1rem = 16px
```

Example:

```css
h1 {
    font-size: 2rem;
}
```

### Result

```text
Root font-size = 16px

2rem

2 × 16px = 32px
```

### Difference: em vs rem

```text
em
↓

Parent ke according



rem
↓

Root HTML ke according
```

---

# 5. vw — Viewport Width ⭐

`vw` browser screen ki width ke according kaam karta hai.

```css
.box {
    width: 50vw;
}
```

### Example

```text
Screen Width = 1000px

50vw

↓

500px
```

### Easy Meaning

```text
100vw = Full Screen Width

50vw  = Half Screen Width
```

---

# 6. vh — Viewport Height ⭐

`vh` browser screen ki height ke according kaam karta hai.

```css
.box {
    height: 100vh;
}
```

### Easy Meaning

```text
100vh = Full Screen Height

50vh  = Half Screen Height
```

---

# ⭐ px vs % vs em vs rem

```text
px
↓

Fixed size


%
↓

Parent ke according


em
↓

Parent font-size ke according


rem
↓

Root font-size ke according


vw
↓

Screen width ke according


vh
↓

Screen height ke according
```

---

# Complete Example

```html
<div class="container">
    <h1>Hello CSS</h1>
    <p>I am learning CSS units.</p>
</div>
```

```css
.container {
    width: 80%;
    height: 50vh;
    padding: 2rem;
}

h1 {
    font-size: 2rem;
}

p {
    font-size: 1.2em;
}
```

---

# ⚡ Chapter 7 Cheat Sheet

```css
/* Fixed */
width: 300px;

/* Parent ke according */
width: 50%;

/* Parent font-size */
font-size: 2em;

/* Root font-size */
font-size: 2rem;

/* Viewport Width */
width: 50vw;

/* Viewport Height */
height: 100vh;
```

---

# 🏁 Chapter 7 Completed

```text
px  → Fixed

%   → Parent size

em  → Parent font-size

rem → Root font-size

vw  → Screen width

vh  → Screen height
```

<br><br><br><br><br>

---

<br><br><br><br><br>

# 🚀 NEXT CHAPTER

<br><br><br><br><br>

---

<br><br><br><br><br>


# 📘 Chapter 8 — CSS Display & Visibility

## What is Display?

**English:** The `display` property controls how an HTML element appears and behaves on the webpage.

**Hinglish:** `display` property decide karta hai ki element webpage par **kaise behave karega aur kitni space lega**.

---

# 1. Block

Block elements take the full available width.

```css
div {
    display: block;
}
```

### Example

```text
┌─────────────────────────────┐
│            DIV              │
└─────────────────────────────┘

┌─────────────────────────────┐
│          ANOTHER DIV        │
└─────────────────────────────┘
```

Common block elements:

```text
div
p
h1
section
```

---

# 2. Inline

Inline elements only take the space they need.

```css
span {
    display: inline;
}
```

### Example

```text
Hello [SPAN] World [SPAN]
```

Common inline elements:

```text
span
a
strong
b
```

---

# 3. inline-block ⭐

`inline-block` is a combination of inline and block.

```css
.box {
    display: inline-block;

    width: 100px;
    height: 100px;
}
```

### Easy Meaning

```text
inline
↓

Same line me


+

block
↓

Width / Height de sakte ho
```

### Output

```text
┌─────────┐ ┌─────────┐ ┌─────────┐
│  Box 1  │ │  Box 2  │ │  Box 3  │
└─────────┘ └─────────┘ └─────────┘
```

---

# ⭐ Block vs Inline vs Inline-Block

```text
Block
↓

New line leta hai
Full width leta hai


Inline
↓

Same line me rehta hai
Width / Height properly apply nahi hota


Inline-block
↓

Same line me rehta hai
Width / Height apply hota hai
```

---

# 4. display: none ⭐

Element completely hide ho jata hai.

```css
.box {
    display: none;
}
```

### Important

```text
display: none

↓

Element hide

↓

Uski space bhi remove
```

---

# 5. visibility: hidden ⭐

Element invisible ho jata hai but uski space remain karti hai.

```css
.box {
    visibility: hidden;
}
```

### Diagram

```text
visibility: hidden

┌─────────────┐

     Empty

└─────────────┘

Space remains
```

---

# ⭐ display: none vs visibility: hidden

```text
display: none
↓

Element hide
Space bhi remove


visibility: hidden
↓

Element hide
But space remains
```

---

# 6. opacity

Controls transparency.

```css
.box {
    opacity: 0.5;
}
```

### Values

```text
opacity: 1

↓

Fully visible


opacity: 0.5

↓

Half transparent


opacity: 0

↓

Fully transparent
```

---

# Complete Example

### HTML

```html
<div class="box box1">Block</div>
<div class="box box2">Inline Block</div>
<div class="box box3">Inline Block</div>
```

### CSS

```css
.box {
    padding: 20px;
    border: 2px solid black;
}

.box1 {
    display: block;
}

.box2,
.box3 {
    display: inline-block;
    width: 150px;
}
```

### Output Idea

```text
┌───────────────────────────────┐
│             Block             │
└───────────────────────────────┘


┌──────────────┐ ┌──────────────┐
│ Inline Block │ │ Inline Block │
└──────────────┘ └──────────────┘
```

---

# ⚡ Chapter 8 Cheat Sheet

```css
/* Block */
display: block;

/* Inline */
display: inline;

/* Inline + Block */
display: inline-block;

/* Hide completely */
display: none;

/* Hide but keep space */
visibility: hidden;

/* Transparency */
opacity: 0.5;
```

---

# 🏁 Chapter 8 Completed

```text
display: block

→ New line + full width


display: inline

→ Same line + content width


display: inline-block

→ Same line + width/height allowed


display: none

→ Hide + remove space


visibility: hidden

→ Hide + keep space


opacity

→ Transparency
```

---

# 🎯 Most Important Topics

```text
Chapter 7 ⭐
──────────────
px
%
em
rem
vw
vh


Chapter 8 ⭐
──────────────
display: block
display: inline
display: inline-block
display: none
visibility: hidden
opacity
```
