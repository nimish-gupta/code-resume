<p align="center">
    <img src="https://nimish-gupta.github.io/code-resume/" width="200">
</p>

# code-resume

## Demo

https://nimish-gupta.github.io/code-resume/

## Features

- **Offline-first**

- **Theme support Dark & Light mode**

- **Export PDF**

- **Easy Customization**

- **Responsive for all devices**

## Preview

**Iphone-**

<p align="center">
    <img aligh="left" src="https://nimish-gupta.github.io/code-resume/preview/iphone-dark.png" alt="iphone-dark"/>
    <img aligh="right" src="https://nimish-gupta.github.io/code-resume/preview/iphone-light.png" alt="iphone-dark"/>
</p>

**Ipad-**

<p align="center">
    <img src="https://nimish-gupta.github.io/code-resume/preview/ipad-dark.png" alt="ipad-dark"/>
</p>
<p align="center">
    <img src="https://nimish-gupta.github.io/code-resume/preview/ipad-light.png" alt="ipad-light"/>
 </p>

**PWA-**

<p align="center">
    <img aligh="left" src="https://nimish-gupta.github.io/code-resume/preview/pwa-app.png" alt="pwa-preview"/>
</p>


## Quick start

**Clone This repo using:**

<pre>git clone --depth=1 https://github.com/nimish-gupta/code-resume.git <YOUR_PROJECT_NAME></pre>

Move to the appropriate directory: cd <YOUR_PROJECT_NAME>.

**Install:**

<pre>yarn install</pre>

**Run:**

<pre>yarn start-dev</pre>

**Build:**

<pre>yarn build</pre>

## Customization

For Adding your resume details:-

<pre>cd data</pre>

Then open **index.js** & change details

**Title**

```
export const Title = 'Nimish Gupta ~ Portfolio';
```

**Resume Details**

```
export const Resume = {
    intoduction: `{
        Add your intoduction
    }`,

    experience: `{
        Add your experience
    }`,

    skills: `{
        Add your skills
    }`

}
```

**Social Links**

```
    resume: '/resume.pdf',
    twitter: 'https://twitter.com/nimishrocks2',
    github: 'https://github.com/nimish-gupta'
```

## License

This project is licensed under the [MIT](LICENSE) license.
