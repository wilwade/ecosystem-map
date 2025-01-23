#!/bin/bash

CODE=0

for file in ../data/*; do
  if ! pajv -s ../data.schema.yml -d "$file"; then
    CODE=1
  fi
done

exit $CODE
