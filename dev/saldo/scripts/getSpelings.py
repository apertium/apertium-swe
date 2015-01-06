import os

rootDir = "PATH_TO_PARADIGMS_FOLDER" # for example /home/joonas/Desktop/paradigms

output = ""

for subdir, dirs, files in os.walk(rootDir):
	for file in files:
		fileName = os.path.join(subdir, file)
		paradigm = subdir.split("_")
		if paradigm[0] == "PATH_TO_PARADIGMS_FOLDER+POS_PREFIX": # for example /home/joonas/Desktop/paradigms/nn
			root, ext = os.path.splitext(fileName)
			if ext == ".speling":
				with open(fileName, "r") as f:
					output += f.read()

with open("output.dix", "w") as f:
	f.write(output)