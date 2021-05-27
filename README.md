# Easy Parking

Repository containing a complete implementation of an "Easy Parking" web application built with:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [SCSS](https://sass-lang.com/) - Professional grade CSS extension language.
- [Blueprint](https://blueprintjs.com/) - A React-based UI toolkit for the web.
- [TypeScript](https://www.typescriptlang.org/) - JavaScript but with static type definitions.

## Demo

A demo for this project [can be found here](https://parking-38145.web.app/).

## UML Class Diagram

A UML Class Diagram for this project [can be found here](https://github.com/andrewjrhill/parking/raw/master/uml-class-diagram.png).

## Platform Goals

As part of an unparalleled user experience, this platforms short term goals include:

- Users should be able to see parking availability by floor and for the whole parking lot.
- Users should be able to easily add and modify a parking spot.

In addition; the platform adheres to the following constraints:

- A given parking garage can have one or more floors with parking spaces.
- Parking spots can be one of many different types including Compact, Large, Handicapped, Motorcycle and Bicycle.
- Parking spots follow a per-hour fee model of NOK 50 for the first hour, NOK 30 for the second and third hours, and NOK 10 for all the remaining hours.

## Getting Started

1. Install local dependencies:

    ```BASH
    cd parking && yarn install
    ```

2. Start the local development server:

    ```BASH
    yarn run start
    ```
