#!/bin/bash

mkdir -p paradigms
count=0
for i in `cat swe-words-paradigms.txt | tr ' ' '$' | tr '\t' ';'`; do
	ord=`echo $i | cut -f1 -d';' | tr '$' ' ' |sed 's|/|%2F|g'`
	ordklass=`echo $i | cut -f2 -d';' | tr '$' ' '`
        # echo "${ord}"
        # echo "${ordklass}"
        # echo "${count}"
        if ! test -s "paradigms/$ordklass/$ord.xml"; then
            printf "%06d ||| %s ||| %s\n" "$count" "$ord" "$ordklass"
            wget -q "http://spraakbanken.gu.se/ws/saldo-ws/gen/xml/$ordklass/$ord" -O "paradigms/$ordklass/$ord.xml"
        fi
	count=`expr $count + 1`
done

# TODO:
# * paradigms/nl_n_fem/nittiofem.xml and some others have xml, but empty table
# * paradigms/ppa_i_pga/c%2Fo.xml and some others are empty, 404


