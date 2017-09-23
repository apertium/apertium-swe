###############################################################################
## Makefile for apertium-swe
###############################################################################

RELEASE=0.7
VERSION=0.7.0
LANG1=swe
BASENAME=apertium-$(LANG1)

TARGETS_COMMON = $(LANG1).automorf.bin \
	$(LANG1).autogen.bin $(LANG1).autopgen.bin \
	$(LANG1).automorf.att.gz $(LANG1).autogen.att.gz \
	$(LANG1).rlx.bin

# Use this goal for creating .deps, otherwise make -j2 will give problems:
@ap_include@

###############################################################################
## Swedish transducer
###############################################################################

$(LANG1).autogen.bin: $(BASENAME).$(LANG1).dix .deps/.d
	apertium-validate-dictionary $<
	lt-comp rl $< $@ $(BASENAME).$(LANG1).acx

$(LANG1).automorf.bin: $(BASENAME).$(LANG1).dix
	apertium-validate-dictionary $<
	./test-scandivoc
	lt-comp lr $< $@ $(BASENAME).$(LANG1).acx

$(LANG1).autogen.att.gz: $(LANG1).autogen.bin
	lt-print $< | gzip -9 -c -n > $@

$(LANG1).automorf.att.gz: $(LANG1).automorf.bin
	lt-print $< | gzip -9 -c -n > $@

$(LANG1).autopgen.bin: $(BASENAME).post-$(LANG1).dix
	lt-comp lr $< $@

###############################################################################
## Disambiguation rules
###############################################################################

$(LANG1).rlx.bin: $(BASENAME).$(LANG1).rlx $(CGCOMP)
	$(CGCOMP) $< $@

###############################################################################
## Distribution
###############################################################################
EXTRA_DIST=$(BASENAME).$(LANG1).dix \
		$(BASENAME).$(LANG1).acx \
		$(BASENAME).$(LANG1).rlx \
		$(BASENAME).post-$(LANG1).dix \
		$(LANG1).prob \
		modes.xml

###############################################################################
## Installation stuff
###############################################################################
#
#   apertium_swe_dir: This is where the compiled binaries go
#   apertium_swe_srcdir: This is where the source files go

apertium_swedir=$(prefix)/share/apertium/$(BASENAME)/
apertium_swe_srcdir=$(prefix)/share/apertium/$(BASENAME)/

apertium_swe_DATA=$(TARGETS_COMMON) $(LANG1).prob

pkgconfigdir = $(prefix)/share/pkgconfig
pkgconfig_DATA = $(BASENAME).pc

# Modes are not installed since they're all just "debug modes". All
# modes are created by this goal.
modes/$(LANG1)-morph.mode: modes.xml
	apertium-validate-modes modes.xml
	apertium-gen-modes modes.xml

noinst_DATA=modes/$(LANG1)-morph.mode

install-data-local: install-modes
	test -d $(DESTDIR)$(apertium_swe_srcdir) || mkdir -p $(DESTDIR)$(apertium_swe_srcdir)
	$(INSTALL_DATA) $(BASENAME).$(LANG1).dix $(DESTDIR)$(apertium_swe_srcdir)
	$(INSTALL_DATA) $(BASENAME).$(LANG1).rlx $(DESTDIR)$(apertium_swe_srcdir)
	$(INSTALL_DATA) $(BASENAME).post-$(LANG1).dix $(DESTDIR)$(apertium_swe_srcdir)

CLEANFILES = $(TARGETS_COMMON)
clean-local:
	-rm -rf .deps modes

###############################################################################
## Test
###############################################################################

test: all
	echo 'Pippi var ett mycket märkvärdigt barn' | apertium -d . swe-morph | tee .test-mt
	@echo '^Pippi/pippi<n><ut><sg><ind><nom>/pippi<n><ut><sg><ind><nom>$$ ^var/var<adj>/var<adv>/vara<vblex><past><actv>/var<prn><ut><sg><nom>/var<n><nt><sg><ind><nom>/var<n><nt><sg><ind><nom>$$ ^ett/en<det><ind><nt><sg>/en<num><nt><sg><nom>$$ ^mycket/mycket<adv><pst>/mycken<prn><pst><ind><nt><sg><nom>$$ ^märkvärdigt/märkvärdig<adj><sint><pst><nt><sg><ind><nom>$$ ^barn/barn<n><nt><sg><ind><nom>/barn<n><nt><pl><ind><nom>/barn<n><nt><sg><ind><nom>/barn<n><nt><pl><ind><nom>$$^./.<sent>$$' > .test-ref
	@diff .test-ref .test-mt
	@rm .test-ref .test-mt

