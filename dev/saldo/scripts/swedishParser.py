import xml.etree.ElementTree as ET
import os

TAGS = {"nn": "n", "av": "adj", "vb": "vblex", "pm": "np", "ab": "adv", "in": "ij", "pp": "pr", "nl": "num", "pn": "prn", "sn": "", "kn": "", "al": "", "ie": "", "mxc": "", "sxc": "", "abh": "", "avh": "", "nnh": "", "nnm": "n", "avm": "", "ava": "", "vbm": "vblex", "vba": "", "pmm": "np", "pma": "np", "abm": "adv", "aba": "adv", "pnm": "np", "inm": "ij", "ppm": "", "ppa": "", "nim": "", "nlm": "", "knm": "", "snm": "", "kna": "", "ssm": "", "aa": "", "tm": "", "ac": "", "en": "", "ae": "", "eh": "", "ag": "", "af": "", "oc": "", "am": "", "ci": "compound", "ec": "", "ap": "", "konj": "konj", "num": "num", "imper": "impf", "aw": "", "ind": "indic", "inf": "inf", "es": "", "er": "", "lf": "", "lg": "", "poss": "pos", "tz": "", "cm": "compound", "la": "", "pret_part": "pp", "sms": "compound", "ack": "acc", "gen": "gen", "pc": "", "pa": "", "aktiv": "actv", "ls": "", "lp": "", "no_masc": "", "s-form": "pasv", "pret": "past", "ph": "", "tb": "", "pl": "pl", "nom": "nom", "komp": "comp", "pres_part": "pprs", "wc": "", "wb": "", "wa": "", "wn": "", "wm": "", "sup": "supn", "c": "compound", "pos": "", "wp": "", "invar": "", "ord": "ord", "super": "sup", "sg": "sg", "p2": "p2", "p3": "p3", "om": "", "p1": "p1", "masc": "m", "f": "f", "og": "", "h": "", "oe": "", "m": "m", "oa": "", "n": "nt", "p": "pl", "u": "ut", "pres": "pres", "w": "nt.pl", "v": "un", "indef": "ind", "os": "", "def": "def", "op": ""}

def converTags(tagString):
	tags = tagString.split(" ")
	newTags = []
	for tag in tags:
		for tagOrg, tagNew in TAGS.items():
			if tag == tagOrg:
				if tagNew != "":
					newTags.append(tagNew)
					break
	return newTags

def convertFile(fileName):
	rootName, ext = os.path.splitext(fileName)

	if ext == ".speling":
		return

	tree = ET.parse(fileName)
	root = tree.getroot()


	fileOutput = ""

	for entry in root.iter("w"):

		output = ""

		for form in entry.iter("gf"):
			if form.text is not None:
				output += form.text
			else:
				print("===== WARNING ======")
				print("This file got something wrong:", fileName)
			output += "; "

		for form in entry.iter("form"):
			if form.text is not None:
				output += form.text
			output += "; "

		for form in entry.iter("msd"):
			if form.text is not None:
				tags = converTags(form.text)
				output += ".".join(tags) + "; "

		for form in entry.iter("pos"):
			if form.text is not None:
				tags = converTags(form.text)
				output += ".".join(tags)

		for form in entry.iter("is"):
			if form.text is not None:
				tags = converTags(form.text)
				output += "." + ".".join(tags)

		if output.find("compound") == -1:
			fileOutput += output + "\n"

	newFilePath = rootName + ".speling"
	with open(newFilePath, "w") as newFile:
		newFile.write(fileOutput)

	print("Created", rootName + ".speling")

def main():
	rootDir = "PATH_TO_PARADIGMS_FOLDER"
	for subdir, dirs, files in os.walk(rootDir):
		for file in files:
			fileName = os.path.join(subdir, file)
			convertFile(fileName)

main()