#!/bin/bash

for i in data/*; do pajv -s data.schema.yml -d "$i"; done
