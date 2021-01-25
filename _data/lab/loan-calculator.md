---
title: "Loan calculator"
date: "2020-03-16T05:35:07.322Z"
externalLink: "https://github.com/tjankowski/loans-calculator"
category: "Concept"
---

During the recruitment process to one of the new financial startups I have been asked to create short loan form. Based on the amount of money to loan and time period, user should receive basic calculations like monthly rate. I started with quick ideation phase. I didn't want to create typical form with two input fields and sliders even if that was the best UX option. I wanted to try something else. I had two ideas both mostly based on the mobile first approach. First idea was to create two step wizard with vertical slider for whole height of the view and background color and height representing current value. The second idea was to create UI inspired by physical calculator with digits buttons.

<div class="grid">
<div class="grid__half">
<div class="placeholder">Vertical slider</div>
</div>
<div class="grid__half">
<div class="placeholder">Calculator</div>
</div>
</div>

I decided to go with the second idea because of the time constraints. I had only some time during the weekend to code it and I didn't want to spend much time on implementing vertical slider. Maybe next time.

The idea is simple, calculator allows to calculate loan basen on two parameters, amount of money and time. User enter both values using buttons and switch between them using tabs.

<div class="placeholder">Design</div>

Designed in Figma, build using React & styled-components.

You can find source code coded in React on [Github](https://lnkd.in/e-VMtY5) and full demo deployed on [Netlify](https://zealous-liskov-7aee97.netlify.app/).

<iframe
    title="Loan calculator"
    class="lab__demo lab__demo_transparent"
    src="https://zealous-liskov-7aee97.netlify.app/">
</iframe>
