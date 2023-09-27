# dolphins

A simple app that consumes [Unsplash](https://unsplash.com/documentation)'s API to display a random photo of a dolphin every two seconds and maintains a history of the last five photos displayed.

## Set Up

**Clone this repo**

```bash
git clone https://github.com/callumnelson/dolphins-template
cd dolphins-template
code .
```

Install the dependencies

```bash
npm i
```

Create a developer account on Unsplash and then create a new [application](https://unsplash.com/oauth/applications), which will provide you with an Access Key. Then copy ```.env.example``` into a new ```.env``` file...

```bash
touch .env
```

...and copy your access key into it.

```bash
VITE_PUBLIC_API_KEY=<YOUR_ACCESS_KEY>
```

**NOTE:** Replace `<YOUR_ACCESS_KEY>`, including the `<` and `>` with your Access Key (NOT your Secret Key) from Unsplash

## Run the App

```bash
npm run dev
```

## Run Tests

```bash
npm run test
```

