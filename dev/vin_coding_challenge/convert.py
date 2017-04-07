#!/bin/python
# usage: cat <treebank> | python convert.py <mappings>
import sys

out = ""
mappings = {}

with open(sys.argv[1], 'r') as f:
    # TODO: add regex support
    # dodgy code
    for line in f:
        cols = line.split("\t")
        mappings[cols[1]] = {}
        mappings[cols[1]][cols[0]] = cols[2].rstrip("\n")

for line in sys.stdin:
    cols = line.split("\t")
    
    if not cols[0].isdigit():
        sys.stdout.write(line)
        continue
    
    try:
        cols[3] = mappings[cols[3]][cols[2]]
    except:
        cols[3] = mappings[cols[3]]["0"]

    sys.stdout.write("\t".join(cols))
