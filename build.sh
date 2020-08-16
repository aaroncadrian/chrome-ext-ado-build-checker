#!/bin/bash

# Extension must be built first because it clears dist.
yarn build:extension

# App must be built second since extension clears dist.
yarn build --prod
