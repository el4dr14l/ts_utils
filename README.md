# @wiriest-lemur/ts_utils

## Description
A collection of useful methods including color validation, contrast calculation, currency formatting, and date/time formatting.

## Installation
```sh
npm install @wiriest-lemur/ts_utils
```

## Usage
```
import { isValidHexColor, fontContrastColor, euroCurrencyFormatNumber, humanReadableDateTime } from '@wiriest-lemur/ts_utils/dist/src';

console.log(isValidHexColor('#00FF00')); // true
console.log(fontContrastColor('#00FF00')); // "#121212"
console.log(euroCurrencyFormatNumber(1234.56)); // "1.234,56 €"
console.log(humanReadableDateTime(new Date(), true)); // "Tue, Dec 03, 2024, 14:30"
```
