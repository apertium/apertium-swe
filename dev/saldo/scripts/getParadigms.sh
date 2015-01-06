
count=0;
for i in `cat swe-words-paradigms.txt | tr ' ' '$' | tr '\t' ';'`; do
	ord=`echo $i | cut -f1 -d';' | tr '$' ' '`;
	ordklass=`echo $i | cut -f2 -d';' | tr '$' ' '`;
	if [[ -s paradigms/$ordklass/$ord".xml" ]] ; then
        :
    else
    	echo "Getting: $ordklass name: $ord"
    	echo "paradigms/$ordklass/$ord"
    	FILE="paradigms/$ordklass/$ord"".xml"
    	wget -q -O - "http://spraakbanken.gu.se/ws/saldo-ws/gen/xml/$ordklass/$ord" > "$FILE";
		count=`expr $count + 1`;
	fi
done
