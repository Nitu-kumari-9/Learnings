# CSS Notes — Cheat Sheet

# Chapter 11 — CSS Grid

## 🔹 CSS Grid Properties

| Property | Meaning | Example |
|---|---|---|
| `display: grid` | Element ko Grid Container banata hai | `display: grid;` |
| `grid-template-columns` | Columns ki number aur width define karta hai | `grid-template-columns: 1fr 1fr;` |
| `grid-template-rows` | Rows ki height define karta hai | `grid-template-rows: 100px 100px;` |
| `fr` | Available space ka fraction | `grid-template-columns: 1fr 2fr;` |
| `repeat()` | Same size ko repeat karta hai | `repeat(3, 1fr);` |
| `gap` | Rows aur columns dono ke beech space | `gap: 20px;` |
| `row-gap` | Rows ke beech space | `row-gap: 20px;` |
| `column-gap` | Columns ke beech space | `column-gap: 20px;` |
| `justify-items` | Grid items ko horizontal align karta hai | `justify-items: center;` |
| `align-items` | Grid items ko vertical align karta hai | `align-items: center;` |
| `justify-content` | Whole grid ko horizontal align karta hai | `justify-content: center;` |
| `align-content` | Whole grid ko vertical align karta hai | `align-content: center;` |
| `place-items` | `justify-items` + `align-items` | `place-items: center;` |
| `place-content` | `justify-content` + `align-content` | `place-content: center;` |

## 🔹 `display: grid`

**English:** Makes an element a Grid Container.

**Hinglish:** `display: grid` parent element ko Grid Container bana deta hai.

### Code

    .container {
        display: grid;
    }

### Output

    Container
        ↓
    Grid Container

---

## 🔹 `grid-template-columns`

**English:** Defines the number and size of columns.

**Hinglish:** Grid ke columns ki width aur number define karta hai.

### Code

    .container {
        display: grid;
        grid-template-columns: 200px 200px 200px;
    }

### Output

    ┌──────────┬──────────┬──────────┐
    │  Item 1  │  Item 2  │  Item 3  │
    └──────────┴──────────┴──────────┘

---

## 🔹 `grid-template-rows`

**English:** Defines the size of rows.

**Hinglish:** Grid ki rows ki height define karta hai.

### Code

    .container {
        display: grid;
        grid-template-rows: 100px 200px;
    }

### Output

    ┌──────────────────────┐
    │        Row 1         │
    ├──────────────────────┤
    │        Row 2         │
    └──────────────────────┘

---

## 🔹 `fr`

**English:** `fr` means fraction of the available space.

**Hinglish:** `fr` available space ko parts mein divide karta hai.

### Code

    .container {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }

### Output

    ┌──────────┬────────────────────┐
    │   1fr    │        2fr         │
    └──────────┴────────────────────┘

### Remember

    1fr = 1 part
    2fr = 2 parts
    3fr = 3 parts

---

## 🔹 `repeat()`

**English:** Repeats the same column or row size.

**Hinglish:** Same size ko baar-baar likhne ki jagah `repeat()` use kar sakte hain.

### Code

    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

### Same As

    .container {
        grid-template-columns: 1fr 1fr 1fr;
    }

### Output

    ┌──────────┬──────────┬──────────┐
    │ Column 1 │ Column 2 │ Column 3 │
    └──────────┴──────────┴──────────┘

---

## 🔹 `gap`

**English:** Adds space between rows and columns.

**Hinglish:** `gap` rows aur columns dono ke beech spacing deta hai.

### Code

    .container {
        display: grid;
        gap: 20px;
    }

### Output

    ┌────────┐    20px    ┌────────┐
    │ Item 1 │            │ Item 2 │
    └────────┘            └────────┘

---

## 🔹 `row-gap`

**English:** Adds space between rows.

**Hinglish:** `row-gap` sirf rows ke beech space deta hai.

### Code

    .container {
        display: grid;
        row-gap: 20px;
    }

---

## 🔹 `column-gap`

**English:** Adds space between columns.

**Hinglish:** `column-gap` sirf columns ke beech space deta hai.

### Code

    .container {
        display: grid;
        column-gap: 30px;
    }

---

## 🔹 `justify-items`

**English:** Aligns grid items horizontally.

**Hinglish:** Grid ke individual items ko horizontal direction mein align karta hai.

### Code

    .container {
        display: grid;
        justify-items: center;
    }

### Common Values

    justify-items: start;
    justify-items: center;
    justify-items: end;
    justify-items: stretch;

---

## 🔹 `align-items`

**English:** Aligns grid items vertically.

**Hinglish:** Grid ke individual items ko vertical direction mein align karta hai.

### Code

    .container {
        display: grid;
        align-items: center;
    }

### Common Values

    align-items: start;
    align-items: center;
    align-items: end;
    align-items: stretch;

---

## 🔹 `justify-content`

**English:** Aligns the whole grid horizontally.

**Hinglish:** Poore grid ko horizontal direction mein align karta hai.

### Code

    .container {
        display: grid;
        justify-content: center;
    }

### Common Values

    justify-content: start;
    justify-content: center;
    justify-content: end;
    justify-content: space-between;
    justify-content: space-around;
    justify-content: space-evenly;

---

## 🔹 `align-content`

**English:** Aligns the whole grid vertically.

**Hinglish:** Poore grid ko vertical direction mein align karta hai.

### Code

    .container {
        display: grid;
        align-content: center;
    }

### Common Values

    align-content: start;
    align-content: center;
    align-content: end;
    align-content: space-between;
    align-content: space-around;
    align-content: space-evenly;

---

## 🔹 `place-items`

**English:** Shorthand for `justify-items` and `align-items`.

**Hinglish:** Items ki horizontal aur vertical alignment ek saath set karta hai.

### Code

    .container {
        display: grid;
        place-items: center;
    }

### Same As

    .container {
        justify-items: center;
        align-items: center;
    }

---

## 🔹 `place-content`

**English:** Shorthand for `justify-content` and `align-content`.

**Hinglish:** Whole grid ki horizontal aur vertical alignment ek saath set karta hai.

### Code

    .container {
        display: grid;
        place-content: center;
    }

### Same As

    .container {
        justify-content: center;
        align-content: center;
    }

---

## ⭐ Chapter 11 — Grid Quick Revision

    display: grid
            ↓
    Grid Container

    grid-template-columns
            ↓
    Columns

    grid-template-rows
            ↓
    Rows

    fr
            ↓
    Available Space ka Fraction

    repeat()
            ↓
    Same Size Repeat

    gap
            ↓
    Row + Column Gap

    row-gap
            ↓
    Rows ke Beech Space

    column-gap
            ↓
    Columns ke Beech Space

    justify-items
            ↓
    Items → Horizontal

    align-items
            ↓
    Items → Vertical

    justify-content
            ↓
    Whole Grid → Horizontal

    align-content
            ↓
    Whole Grid → Vertical

    place-items
            ↓
    justify-items + align-items

    place-content
            ↓
    justify-content + align-content


# Chapter 12 — Transition & Transform

## 🔹 Transition

| Property | Meaning | Example |
|---|---|---|
| `transition` | Smooth change | `transition: all 0.5s ease;` |
| `transition-property` | Kaunsi property change hogi | `transition-property: width;` |
| `transition-duration` | Change hone ka time | `transition-duration: 1s;` |
| `transition-timing-function` | Change ki speed | `transition-timing-function: ease;` |
| `transition-delay` | Change start hone se pehle delay | `transition-delay: 1s;` |

---

## 🔹 `transition`

**English:** Makes CSS changes smooth.

**Hinglish:** CSS property ke change ko smooth banata hai.

### Code

    .box {
        width: 100px;
        transition: width 0.5s ease;
    }

    .box:hover {
        width: 200px;
    }

### Output

    Normal

    ┌──────────┐
    │   Box    │
    └──────────┘
       100px

          ↓ Hover

    Smooth Transition

          ↓

    ┌────────────────────┐
    │        Box         │
    └────────────────────┘
            200px

---

## 🔹 `transition-property`

**English:** Defines which property should transition.

**Hinglish:** Kaunsi CSS property smoothly change hogi, ye define karta hai.

### Code

    .box {
        transition-property: width;
    }

---

## 🔹 `transition-duration`

**English:** Defines how long the transition takes.

**Hinglish:** Transition complete hone mein kitna time lagega, ye define karta hai.

### Code

    .box {
        transition-duration: 1s;
    }

---

## 🔹 `transition-timing-function`

**English:** Controls the speed behavior of the transition.

**Hinglish:** Transition kis speed se start, middle aur end hoga, ye control karta hai.

### Code

    .box {
        transition-timing-function: ease;
    }

### Timing Functions

    ease;
    linear;
    ease-in;
    ease-out;
    ease-in-out;

---

## 🔹 `transition-delay`

**English:** Defines the delay before the transition starts.

**Hinglish:** Transition start hone se pehle kitna wait karega, ye define karta hai.

### Code

    .box {
        transition-delay: 1s;
    }

---

## 🔹 Transition Shorthand

### Syntax

    transition: property duration timing-function delay;

### Example

    .box {
        transition: width 1s ease 0s;
    }

### Longhand

    .box {
        transition-property: width;
        transition-duration: 1s;
        transition-timing-function: ease;
        transition-delay: 0s;
    }


# 🔄 Transform

| Property / Function | Meaning | Example |
|---|---|---|
| `transform` | Element ko transform karta hai | `transform: rotate(45deg);` |
| `translate()` | X + Y direction mein move karta hai | `translate(50px, 20px);` |
| `translateX()` | Horizontal direction mein move | `translateX(50px);` |
| `translateY()` | Vertical direction mein move | `translateY(50px);` |
| `scale()` | Element ka size change karta hai | `scale(1.5);` |
| `rotate()` | Element ko rotate karta hai | `rotate(45deg);` |
| `skew()` | Element ko tilt karta hai | `skew(20deg);` |
| `transform-origin` | Transformation ka reference point | `transform-origin: center;` |

---

## 🔹 `transform`

**English:** Changes an element's position, size, or angle.

**Hinglish:** Element ko move, resize, rotate ya tilt karne ke liye use hota hai.

### Code

    .box {
        transform: rotate(45deg);
    }

---

## 🔹 `translate()`

**English:** Moves an element in X and Y directions.

**Hinglish:** Element ko horizontal aur vertical dono direction mein move karta hai.

### Code

    .box {
        transform: translate(50px, 20px);
    }

### Remember

    50px → X direction
    20px ↓ Y direction

---

## 🔹 `translateX()`

**English:** Moves an element horizontally.

**Hinglish:** Element ko left/right direction mein move karta hai.

### Code

    .box {
        transform: translateX(50px);
    }

---

## 🔹 `translateY()`

**English:** Moves an element vertically.

**Hinglish:** Element ko up/down direction mein move karta hai.

### Code

    .box {
        transform: translateY(50px);
    }

---

## 🔹 `scale()`

**English:** Changes the size of an element.

**Hinglish:** Element ko bada ya chhota karta hai.

### Code

    .box {
        transform: scale(1.5);
    }

### Values

    scale(1)   → Normal Size
    scale(1.5) → 1.5x Bigger
    scale(2)   → 2x Bigger
    scale(0.5) → Half Size

---

## 🔹 `rotate()`

**English:** Rotates an element.

**Hinglish:** Element ko specified angle par rotate karta hai.

### Code

    .box {
        transform: rotate(45deg);
    }

---

## 🔹 `skew()`

**English:** Tilts an element.

**Hinglish:** Element ko slant ya tilt karta hai.

### Code

    .box {
        transform: skew(20deg);
    }

---

## 🔹 `transform-origin`

**English:** Defines the point from which transformation happens.

**Hinglish:** Transformation kis point ko reference maan kar hogi, ye define karta hai.

### Code

    .box {
        transform-origin: top left;
        transform: rotate(45deg);
    }

### Common Values

    center;
    top;
    bottom;
    left;
    right;
    top left;
    top right;
    bottom left;
    bottom right;

---

## 🔹 Transform Examples

    /* Move X + Y */
    .box {
        transform: translate(50px, 20px);
    }

    /* Move horizontally */
    .box {
        transform: translateX(50px);
    }

    /* Move vertically */
    .box {
        transform: translateY(50px);
    }

    /* Increase / decrease size */
    .box {
        transform: scale(1.5);
    }

    /* Rotate */
    .box {
        transform: rotate(45deg);
    }

    /* Tilt */
    .box {
        transform: skew(20deg);
    }

    /* Transformation starting point */
    .box {
        transform-origin: top left;
    }

---

## 🔹 Multiple Transform

    .box {
        transform: translateX(50px) scale(1.2) rotate(10deg);
    }

**Remember:** Multiple transform functions ko ek hi `transform` property mein use kar sakte hain.


# 🧱 CSS Shorthand Cheat Sheet

## 🔹 Transition Shorthand

### Longhand

    .box {
        transition-property: width;
        transition-duration: 1s;
        transition-timing-function: ease;
        transition-delay: 0s;
    }

### Shorthand

    .box {
        transition: width 1s ease 0s;
    }

### Syntax

    transition: property duration timing-function delay;


# ⚡ Chapter 12 Quick Revision

    transition
            ↓
    Smooth Change

    transition-property
            ↓
    Which Property?

    transition-duration
            ↓
    How Long?

    transition-timing-function
            ↓
    How Fast?

    transition-delay
            ↓
    When to Start?


    transform
            ↓
    Transform Element

    translate()
            ↓
    Move X + Y

    translateX()
            ↓
    Move Horizontal

    translateY()
            ↓
    Move Vertical

    scale()
            ↓
    Change Size

    rotate()
            ↓
    Rotate

    skew()
            ↓
    Tilt

    transform-origin
            ↓
    Transformation Reference Point


# 🧠 Easy Memory Trick

    GRID
     ↓
    Layout
     ↓
    Rows + Columns

    TRANSFORM
     ↓
    Element Change
     ↓
    Move + Resize + Rotate + Tilt

    TRANSITION
     ↓
    Smooth Change
     ↓
    Duration + Speed + Delay


# ⭐ Most Important Syntax

    /* ============================= */
    /* CSS GRID */
    /* ============================= */

    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 100px 100px;
        gap: 20px;
        place-items: center;
    }


    /* ============================= */
    /* TRANSITION */
    /* ============================= */

    .box {
        transition: all 0.5s ease;
    }


    /* ============================= */
    /* TRANSFORM */
    /* ============================= */

    .box:hover {
        transform: translateX(20px) scale(1.1) rotate(5deg);
    }


    /* ============================= */
    /* BORDER SHORTHAND */
    /* ============================= */

    .box {
        border: 2px solid black;
    }


    /* ============================= */
    /* PADDING SHORTHAND */
    /* ============================= */

    .box {
        padding: 10px 20px;
    }


    /* ============================= */
    /* MARGIN SHORTHAND */
    /* ============================= */

    .box {
        margin: 10px 20px;
    }


    /* ============================= */
    /* TRANSITION SHORTHAND */
    /* ============================= */

    .box {
        transition: transform 0.5s ease 0s;
    }


# 🚀 Final Revision

    CSS GRID
        ↓
    Page Layout
        ↓
    Rows + Columns


    TRANSFORM
        ↓
    Element Change
        ↓
    Move + Scale + Rotate + Skew


    TRANSITION
        ↓
    Smooth Change
        ↓
    Duration + Speed + Delay


    SHORTHAND
        ↓
    Short CSS Syntax
        ↓
    border
    padding
    margin
    transition
