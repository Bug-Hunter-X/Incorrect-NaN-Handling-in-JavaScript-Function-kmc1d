# Incorrect NaN Handling in JavaScript Function

This repository demonstrates a common JavaScript bug involving the incorrect handling of NaN (Not a Number) values in a function. The function `foo` is designed to handle null, negative, and positive numbers. However, it fails to correctly handle NaN inputs, simply returning NaN without any error or special indication. This is problematic as it can lead to unexpected behavior and harder debugging.

## Bug Description
The `foo` function does not explicitly check for `isNaN(x)` before performing operations on `x`, leading to the propagation of NaN without appropriate handling.

## Solution
The solution involves explicitly checking for `isNaN(x)` and implementing an appropriate error handling mechanism, such as throwing an error or returning a specific sentinel value to indicate the unexpected input.