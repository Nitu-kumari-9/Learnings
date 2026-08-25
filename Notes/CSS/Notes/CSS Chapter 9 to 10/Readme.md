# 📚 CSS Cheat Sheet — Chapter 9 & 10

Simple notes with **English + Hinglish + Examples + Code + Output**.

<br><br>

---

# 📘 Chapter 9 — CSS Position

## What is Position?

**English:** The `position` property controls how an element is positioned on a webpage.

**Hinglish:** CSS me `position` ka use element ko webpage par **kahan aur kis tarah position** karna hai, ye control karne ke liye hota hai.

### Main Position Values

```css
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;
```

---

## 1. position: static

`static` is the **default position** of an element.

**Hinglish:** Har element ki default position `static` hoti hai. Element normal HTML flow mein rehta hai.

```css
.box {
    position: static;
}
```

### Output

```text
[ Box 1 ]

[ Box 2 ]

[ Box 3 ]
```

### Important

`top`, `right`, `bottom`, and `left` normally do not affect a `static` element.

---

## 2. position: relative ⭐⭐⭐

**English:** `relative` positions an element relative to its original position.

**Hinglish:** Element apni **original position ko reference** maan kar move hota hai.

```css
.box {
    position: relative;
    left: 30px;
}
```

### Output

```text
Before:

[ Box ]


After:

      [ Box ]
        → 30px
```

**Important:** Element move hota hai, but uski original space reserved rehti hai.

---

## 3. top, right, bottom & left ⭐

These properties are used to move a positioned element.

```css
.box {
    position: relative;

    top: 20px;
    left: 30px;
}
```

### Meaning

```text
top    → Top se offset
right  → Right se offset
bottom → Bottom se offset
left   → Left se offset
```

**Hinglish:** In properties se element ko upar, neeche, left ya right move kar sakte hain.

---

## 4. position: absolute ⭐⭐⭐

**English:** `absolute` removes the element from normal document flow and positions it relative to its nearest positioned ancestor.

**Hinglish:** `absolute` element normal flow se **remove** ho jata hai aur nearest positioned parent ke according position hota hai.

### Common Pattern ⭐

```css
.parent {
    position: relative;
}

.child {
    position: absolute;
    top: 10px;
    right: 10px;
}
```

### Output

```text
┌───────────────────────────────┐
│                    [ Child ]   │
│                               │
│            Parent             │
│                               │
└───────────────────────────────┘
```

### Common Uses

```text
Badge
Icon
Overlay
Dropdown
Image ke upar text
```

---

## 5. position: fixed ⭐⭐⭐

**English:** `fixed` positions an element relative to the viewport.

**Hinglish:** Element ko **screen/viewport ke according fix** kar deta hai. Page scroll karne par bhi element same position par rehta hai.

```css
.chat {
    position: fixed;
    bottom: 20px;
    right: 20px;
}
```

### Output

```text
┌───────────────────────────────┐
│                               │
│       Website Content         │
│                               │
│                    [ Chat ]   │
└───────────────────────────────┘
```

### Common Uses

```text
Chat Button
Floating Button
Fixed Navbar
Back to Top Button
```

---

## 6. position: sticky ⭐⭐⭐

**English:** `sticky` behaves normally until a scroll position is reached, then it sticks.

**Hinglish:** Starting mein element normal position par hota hai. Scroll karne ke baad specified position par **stick** ho jata hai.

```css
.navbar {
    position: sticky;
    top: 0;
}
```

### Output

```text
┌───────────────────────────────┐
│ [ Sticky Navbar ]             │ ← Stick
├───────────────────────────────┤
│ Content                       │
│ Content                       │
│ Content                       │
└───────────────────────────────┘
```

### Important ⭐

Usually:

```css
position: sticky;
top: 0;
```

use kiya jata hai.

---

## 7. z-index ⭐⭐⭐

**English:** `z-index` controls which overlapping element appears on top.

**Hinglish:** Jab do elements overlap karte hain, `z-index` decide karta hai ki **kaunsa element upar dikhega**.

```css
.box1 {
    position: absolute;
    z-index: 1;
}

.box2 {
    position: absolute;
    z-index: 2;
}
```

### Easy Rule

```text
Higher z-index
      ↓
Comes on top
```

---

## 8. Real Example — Badge on Card ⭐⭐⭐

```html
<div class="card">
    <img src="product.jpg" alt="Product">
    <span class="badge">New</span>
</div>
```

```css
.card {
    position: relative;
}

.badge {
    position: absolute;
    top: 10px;
    right: 10px;
}
```

### Output

```text
┌─────────────────────────────┐
│                 [ NEW ]     │
│                             │
│          PRODUCT            │
│                             │
└─────────────────────────────┘
```

**Hinglish:** Parent ko `relative` aur child ko `absolute` dena ek **very common CSS pattern** hai.

---

## ⚡ Chapter 9 Cheat Sheet

```css
/* Default */
position: static;

/* Original position se move */
position: relative;

/* Positioned parent ke according */
position: absolute;

/* Screen ke according fixed */
position: fixed;

/* Scroll ke baad stick */
position: sticky;

/* Overlapping order */
z-index: 10;
```

### Easy Difference

```text
static
↓
Default

relative
↓
Original position se move

absolute
↓
Positioned ancestor ke according

fixed
↓
Viewport / Screen

sticky
↓
Scroll → Stick

z-index
↓
Kaunsa element upar
```

---

# 🏁 Chapter 9 Completed

```text
static   → Default
relative → Original position se move
absolute → Positioned ancestor
fixed    → Viewport
sticky   → Scroll → Stick
z-index  → Stacking order
```

<br><br><br><br><br>

---

<br><br><br><br><br>

# 🚀 NEXT CHAPTER

<br><br><br><br><br>

---

<br><br><br><br><br>

# 📘 Chapter 10 — CSS Flexbox

## What is Flexbox?

**English:** Flexbox is a one-dimensional layout system used to arrange elements in a row or column.

**Hinglish:** Flexbox ka use parent ke andar elements ko **row ya column mein arrange, align aur space** karne ke liye hota hai.

```css
.container {
    display: flex;
}
```

### Output

```text
┌────────────────────────────────────┐
│ [ Box 1 ] [ Box 2 ] [ Box 3 ]     │
└────────────────────────────────────┘
```

---

## 1. Flex Container & Flex Items

```html
<div class="container">
    <div>Box 1</div>
    <div>Box 2</div>
    <div>Box 3</div>
</div>
```

```css
.container {
    display: flex;
}
```

```text
Parent
  ↓
Flex Container

Direct Children
  ↓
Flex Items
```

**Hinglish:** Jis parent par `display: flex` lagate hain, wo **Flex Container** ban jata hai. Uske direct children **Flex Items** hote hain.

---

## 2. Main Axis & Cross Axis ⭐⭐⭐

Default:

```css
flex-direction: row;
```

```text
             Main Axis
────────────────────────────────→

[ 1 ]     [ 2 ]     [ 3 ]

              ↑
              │
         Cross Axis
              │
              ↓
```

### English

- **Main Axis:** Direction in which Flex Items are arranged.
- **Cross Axis:** Direction perpendicular to the Main Axis.

### Hinglish

- **Main Axis:** Jis direction mein boxes arrange ho rahe hain.
- **Cross Axis:** Main Axis ke perpendicular direction.

### ⭐ Golden Rule

```text
justify-content → Main Axis
align-items     → Cross Axis
```

---

## 3. flex-direction ⭐⭐⭐

Controls the direction of Flex Items.

```css
.container {
    display: flex;
    flex-direction: value;
}
```

### Values

```text
row
row-reverse
column
column-reverse
```

### `row`

```css
flex-direction: row;
```

### Output

```text
[ 1 ] [ 2 ] [ 3 ] →
```

Items horizontal direction mein arrange hote hain.

### `row-reverse`

```css
flex-direction: row-reverse;
```

### Output

```text
← [ 3 ] [ 2 ] [ 1 ]
```

### `column`

```css
flex-direction: column;
```

### Output

```text
[ 1 ]
  ↓
[ 2 ]
  ↓
[ 3 ]
```

Items vertical direction mein arrange hote hain.

### `column-reverse`

```css
flex-direction: column-reverse;
```

### Output

```text
[ 3 ]
  ↑
[ 2 ]
  ↑
[ 1 ]
```

### Easy Memory

```text
row            → Horizontal
column         → Vertical
reverse        → Direction ulta
```

---

## 4. justify-content ⭐⭐⭐

**English:** Aligns Flex Items along the Main Axis.

**Hinglish:** Main Axis par boxes ko **align aur distribute** karne ke liye use hota hai.

```css
.container {
    display: flex;
    justify-content: value;
}
```

### Important Values

```text
flex-start
flex-end
center
space-between
space-around
space-evenly
```

### `flex-start`

```css
justify-content: flex-start;
```

```text
┌────────────────────────────────────┐
│ [1] [2] [3]                        │
└────────────────────────────────────┘
```

Items starting point par.

### `flex-end`

```css
justify-content: flex-end;
```

```text
┌────────────────────────────────────┐
│                        [1] [2] [3] │
└────────────────────────────────────┘
```

Items ending point par.

### `center`

```css
justify-content: center;
```

```text
┌────────────────────────────────────┐
│           [1] [2] [3]              │
└────────────────────────────────────┘
```

Items center mein.

### `space-between`

```css
justify-content: space-between;
```

```text
┌────────────────────────────────────┐
│ [1]          [2]          [3]      │
└────────────────────────────────────┘
```

**Hinglish:** First item start par, last item end par, aur remaining space items ke beech distribute hota hai.

### `space-around`

```css
justify-content: space-around;
```

```text
┌────────────────────────────────────┐
│   [1]       [2]       [3]          │
└────────────────────────────────────┘
```

Har item ke around space.

### `space-evenly`

```css
justify-content: space-evenly;
```

```text
┌────────────────────────────────────┐
│   [1]       [2]       [3]          │
└────────────────────────────────────┘
```

Items aur container edges ke beech equal spacing.

---

## 5. align-items ⭐⭐⭐

**English:** Aligns Flex Items along the Cross Axis.

**Hinglish:** Cross Axis par items ko align karta hai.

```css
.container {
    display: flex;
    align-items: value;
}
```

### Important Values

```text
stretch
flex-start
flex-end
center
baseline
```

### `flex-start`

```css
align-items: flex-start;
```

```text
┌────────────────────────────────────┐
│ [1] [2] [3]                        │
│                                    │
│                                    │
└────────────────────────────────────┘
```

### `center`

```css
align-items: center;
```

```text
┌────────────────────────────────────┐
│                                    │
│        [1] [2] [3]                 │
│                                    │
└────────────────────────────────────┘
```

### `flex-end`

```css
align-items: flex-end;
```

```text
┌────────────────────────────────────┐
│                                    │
│                                    │
│ [1] [2] [3]                        │
└────────────────────────────────────┘
```

### `stretch`

Default value.

**English:** Items can stretch across the Cross Axis when their cross-size is `auto`.

**Hinglish:** Agar item ki cross-size fixed nahi hai, to available cross-axis space ko fill kar sakta hai.

### `baseline`

Items ke text baseline ke according align karta hai.

```text
Big Text     Normal     Small
───────      ──────     ─────
```

---

## 6. gap ⭐⭐⭐

**English:** Creates space between Flex Items.

**Hinglish:** Flex items ke beech distance dene ke liye `gap` use hota hai.

```css
.container {
    display: flex;
    gap: 20px;
}
```

### Output

```text
[ 1 ] ← 20px → [ 2 ] ← 20px → [ 3 ]
```

---

## 7. flex-wrap ⭐⭐

**English:** Allows Flex Items to move to the next line when there is not enough space.

**Hinglish:** Container mein space kam ho toh items ko next line mein bhejta hai.

```css
.container {
    display: flex;
    flex-wrap: wrap;
}
```

### Values

```text
nowrap
wrap
wrap-reverse
```

### `nowrap`

```text
[1] [2] [3] [4] [5] [6] ...
```

Items ek line mein rehne ki koshish karte hain.

### `wrap`

```text
[1] [2] [3] [4]
[5] [6] [7] [8]
```

Space kam hone par next line.

### `wrap-reverse`

```text
[5] [6] [7] [8]
[1] [2] [3] [4]
```

Reverse wrapping direction.

---

## 8. align-self ⭐⭐

**English:** Aligns one specific Flex Item.

**Hinglish:** `align-items` sabhi items ko control karta hai, lekin `align-self` ek **specific item** ko control karta hai.

```css
.container {
    display: flex;
    align-items: center;
}

.box2 {
    align-self: flex-start;
}
```

### Easy Difference

```text
align-items
     ↓
All Flex Items


align-self
     ↓
One Flex Item
```

### Values

```text
auto
flex-start
flex-end
center
stretch
baseline
```

---

## 9. Center an Element with Flexbox ⭐⭐⭐

One of the most common uses of Flexbox.

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### Output

```text
┌────────────────────────────────────┐
│                                    │
│                                    │
│             [ BOX ]                │
│                                    │
│                                    │
└────────────────────────────────────┘
```

**Hinglish:** `justify-content: center` Main Axis par center karta hai aur `align-items: center` Cross Axis par center karta hai.

---

## 10. Complete Flexbox Example ⭐⭐⭐

### HTML

```html
<div class="container">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
</div>
```

### CSS

```css
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}

.box {
    width: 80px;
    height: 80px;
}
```

### Output

```text
┌────────────────────────────────────┐
│                                    │
│       [ 1 ]  [ 2 ]  [ 3 ]         │
│                                    │
└────────────────────────────────────┘
```

### What Happened?

```text
display: flex
→ Flexbox activated

flex-direction: row
→ Items row mein

justify-content: center
→ Main Axis ke center mein

align-items: center
→ Cross Axis ke center mein

gap: 20px
→ Items ke beech 20px space

flex-wrap: wrap
→ Space kam hone par next line
```

---

## ⚡ Chapter 10 Cheat Sheet

```css
/* Activate Flexbox */
display: flex;

/* Direction */
flex-direction: row;

/* Main Axis */
justify-content: center;

/* Cross Axis */
align-items: center;

/* Space between items */
gap: 20px;

/* Allow next line */
flex-wrap: wrap;

/* One specific item */
align-self: center;
```

---

# 🏁 Chapter 10 Completed

```text
display: flex
      ↓
Flex Container
      ↓
flex-direction
      ↓
Main Axis + Cross Axis
      ↓
justify-content → Main Axis
align-items     → Cross Axis
gap             → Space
flex-wrap       → Next Line
align-self      → One Item
```

---

# 🎯 Most Important Topics

```text
Chapter 9 ⭐
──────────────
position: relative
position: absolute
position: fixed
position: sticky
top / right / bottom / left
z-index


Chapter 10 ⭐
──────────────
display: flex
flex-direction
justify-content
align-items
gap
flex-wrap
align-self
Main Axis / Cross Axis
```

## 🔥 Golden Rules

```text
POSITION
relative + absolute
→ Very common combination


FLEXBOX
justify-content
→ Main Axis

align-items
→ Cross Axis


flex-direction: row
→ Main Axis = Horizontal

flex-direction: column
→ Main Axis = Vertical
```

# 🏆 Chapter 9 & 10 Completed

```text
Chapter 9
CSS Position
     ↓
Control element placement


Chapter 10
CSS Flexbox
     ↓
Create flexible layouts
     ↓
Arrange + Align + Space items
```
