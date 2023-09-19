# Getting Started with Openglobus and React

[Openglobus](https://github.com/openglobus/openglobus/) is a library to display interactive 3D maps.

This project is a demo on how to use Openglobus maps in a React project.

Steps to repro:
- Create an empty React app: `npx create-react-app my-openglobus-react-app --template typescript`
- Change target version in `tsconfig.json` to be ESNext (or at least es6).
- Add Openglobus: `npm install @openglobus/og --save`
- `npm start`


## For openglobus devs

To develop with both project:
- in your openglobus project: `npm link`
- in your react project: `npm link @openglobus/og`
- in your openglobus project `npx tsc --build tsconfig.json --declaration --watch` to continually build the ts files into js/d.ts files.

This way, the `node_modules/@openglobus/og/` is your openglobus project in your react project.