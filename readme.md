# awomPT <br />

### Page transition library of animations for websites developed in PHP.<br /><br />

Include css file in the head:

```
https://unpkg.com/awompt@1.1.1/minified/awompt-min.css
```

<br />

Include js file at the bottom of the body:

```
https://unpkg.com/awompt@1.1.1/minifed/awompt-min.js
```

<br />

> [!IMPORTANT]
> You will specify here the color of the animation in the div element.

> [!WARNING]
> If you are using an animation type that doesn't use color (like zoom), specify the color of the body to prevent problems on page change.

Include this HTML element at the top of the body:

```
<div class="awompt" style="background-color: #000000"></div>
```

<br />

To prevent animation on click of a link, add this class in the HTML element `<a>`:

```
<a href="..." class="no_awompt">
```

<br />

Under js script create the object:

```
new awomPT('slide', {
    col: 6,
    duration: 0.5
});
```

<br />

The available configuration options are:

Animation type:

-   `slide`
-   `fade`
-   `zoom`
-   `zoomAndSlideUp`
-   `slideUp`
-   `line`

Options:

-   `col` | type: `number` | default: `6`<br />
    Number of cols of animation. (available for slide configuration)

-   `gapDelay` | type: `number` | default: `0.02`<br />
    Delay between cols. (available for slide configuration)

-   `duration` | type: `number` | default: `0.5`<br />
    Duration time of animation.

-   `delay` | type: `number` | default: `0`<br />
    Delay of the animation.

-   `ease` | type: `string` | default: `linear`<br />
    Animation timing function of the page transition.

-   `easeClosing` | type: `string` | default: `false`<br />
    Animation timing function of the page transition while closing the current page.
