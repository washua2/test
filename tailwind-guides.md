## 以下为 tailwind 自定义预设样式值，如设置媒体查询各尺寸默认值，颜色，字体等

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}

更多主题设置参考 https://tailwindcss.com/docs/theme
```

## 自定义任意值

```
<div class="top-[117px] lg:top-[344px]">
  <!-- ... -->
</div>

<div class="bg-[#bada55] text-[22px] before:content-['Festivus']">
  <!-- ... -->
</div>

It’s even possible to use the theme function to reference the design tokens in your tailwind.config.js file:
<div class="grid grid-cols-[fit-content(theme(spacing.32))]">
  <!-- ... -->
</div>

以下为css变量使用法
<div class="bg-[--my-color]">
  <!-- ... -->
</div>

使用方括号表示法来编写完全任意的 CSS
<div class="[text-align:center] hover:[mask-type:alpha]">
  <!-- ... -->
</div>

结合css变量完全自定义
<div class="[--scroll-offset:56px] lg:[--scroll-offset:44px]">
  <!-- ... -->
</div>

使用下划线做空格转换
<div class="grid grid-cols-[1fr_500px_2fr]">
  <!-- ... -->
</div>

不转换空格的情形
<div class="bg-[url('/what_a_rush.png')]">
  <!-- ... -->
</div>

<div class="before:content-['hello\_world']">
  <!-- ... -->
</div>

JSX中，使用String.row时 反斜杠不被视为转义字符
<div className={String.raw`before:content-['hello\_world']`}>
  <!-- ... -->
</div>

处理歧义 根据传入的值来生成字体颜色 or 字体大小
<!-- Will generate a font-size utility -->
<div class="text-[22px]">...</div>

<!-- Will generate a color utility -->
<div class="text-[#bada55]">...</div>

如使用变量，歧义不可避免则参照以下处理方式
<div class="text-[var(--my-var)]">...</div>

<!-- Will generate a font-size utility -->
<div class="text-[length:var(--my-var)]">...</div>

<!-- Will generate a color utility -->
<div class="text-[color:var(--my-var)]">...</div>
```

## 添加基本样式

```
方式1
<!doctype html>
<html lang="en" class="text-gray-900 bg-gray-100 font-serif">
  <!-- ... -->
</html>

方式2
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-2xl;
  }
  h2 {
    @apply text-xl;
  }
  /* ... */
}
```

## 添加组件样式

```
方式1
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .card {
    background-color: theme('colors.white');
    border-radius: theme('borderRadius.lg');
    padding: theme('spacing.6');
    box-shadow: theme('boxShadow.xl');
  }
  /* ... */
}

方式2 组件样式card 可被 rounded-none 样式覆盖
<!-- Will look like a card, but with square corners -->
<div class="card rounded-none">
  <!-- ... -->
</div>
```

## 添加自定义类 Add any of your own custom utility classes to Tailwind’s utilities layer:

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .content-auto {
    content-visibility: auto;
  }
}

可以跟随修饰符使用以上自定义类
<div class="lg:dark:content-auto">
  <!-- ... -->
</div>
```

## 使用 Tailwind 的插件系统而不是使用 CSS 文件向项目添加自定义样式

```
onst plugin = require('tailwindcss/plugin')

module.exports = {
  // ...
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        'h1': {
          fontSize: theme('fontSize.2xl'),
        },
        'h2': {
          fontSize: theme('fontSize.xl'),
        },
      })
      addComponents({
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.xl'),
        }
      })
      addUtilities({
        '.content-auto': {
          contentVisibility: 'auto',
        }
      })
    })
  ]
}
```
