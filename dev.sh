#!/bin/bash

pnpm remove @jellypack/types
pnpm i @jellypack/types@file:../jelly-types

rm -rf ./lib/

pnpm run dev
