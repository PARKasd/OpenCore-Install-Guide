(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{559:function(e,t,o){e.exports=o.p+"assets/img/python-path.29d651bd.png"},672:function(e,t,o){"use strict";o.r(t);var r=o(27),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"miscellaneous-issues"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#miscellaneous-issues"}},[e._v("#")]),e._v(" Miscellaneous Issues")]),e._v(" "),r("p",[e._v("Miscellaneous issues not revolving around macOS itself such as multibooting.")]),e._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#can-t-run-acpidump-efi"}},[e._v("Can't run acpidump.efi")])]),r("li",[r("a",{attrs:{href:"#fixing-ssdttime-could-not-locate-or-download-iasl"}},[e._v("Fixing SSDTTime: Could not locate or download iasl!")])]),r("li",[r("a",{attrs:{href:"#fix-python-python-is-not-installed-or-not-found-on-path"}},[e._v("Fix Python: Python is not installed or not found on PATH")])]),r("li",[r("a",{attrs:{href:"#windows-startup-disk-can-t-see-apfs-drives"}},[e._v("Windows Startup Disk can't see APFS drives")])]),r("li",[r("a",{attrs:{href:"#incorrect-resolution-with-opencore"}},[e._v("Incorrect resolution with OpenCore")])]),r("li",[r("a",{attrs:{href:"#can-t-find-windows-bootcamp-drive-in-picker"}},[e._v("Can't find Windows/BootCamp drive in picker")])]),r("li",[r("a",{attrs:{href:"#selecting-startup-disk-doesn-t-apply-correctly"}},[e._v("Selecting Startup Disk doesn't apply correctly")])]),r("li",[r("a",{attrs:{href:"#booting-windows-results-in-bluescreen-or-linux-crashes"}},[e._v("Booting Windows results in BlueScreen or Linux crashes")])]),r("li",[r("a",{attrs:{href:"#booting-windows-error-ocb-startimage-failed-already-started"}},[e._v("Booting Windows error: OCB: StartImage failed - Already started")])]),r("li",[r("a",{attrs:{href:"#iasl-warning-only-x-unresolved"}},[e._v("iASL warning, only X unresolved")])]),r("li",[r("a",{attrs:{href:"#time-inconsistency-between-macos-and-windows"}},[e._v("Time inconsistency between macOS and Windows")])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"can-t-run-acpidump-efi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#can-t-run-acpidump-efi"}},[e._v("#")]),e._v(" Can't run "),r("code",[e._v("acpidump.efi")])]),e._v(" "),r("p",[e._v("Call upon OpenCore shell:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("shell> fs0: //replace with proper drive\n\nfs0:\\> dir //to verify this is the right directory\n\n  Directory of fs0:\\\n\n   01/01/01 3:30p  EFI\nfs0:\\> cd EFI\\OC\\Tools //note that its with forward slashes\n\nfs0:\\EFI\\OC\\Tools> acpidump.efi -b -n DSDT -z\n")])])]),r("h2",{attrs:{id:"fixing-ssdttime-could-not-locate-or-download-iasl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fixing-ssdttime-could-not-locate-or-download-iasl"}},[e._v("#")]),e._v(" Fixing SSDTTime: "),r("code",[e._v("Could not locate or download iasl!")])]),e._v(" "),r("p",[e._v("This is usually due to an outdated version of Python, try either updating Python or add iasl to the scripts folder for SSDTTime:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://bitbucket.org/RehabMan/acpica/downloads/iasl.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("iasl macOS version"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://acpica.org/downloads/binary-tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("iasl Windows version"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://amdosx.kellynet.nl/iasl.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("iasl Linux version"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"fix-python-python-is-not-installed-or-not-found-on-path"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fix-python-python-is-not-installed-or-not-found-on-path"}},[e._v("#")]),e._v(" Fix Python: "),r("code",[e._v("Python is not installed or not found on PATH")])]),e._v(" "),r("p",[e._v("Easy fix, download and install the latest python:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.python.org/downloads/macos",target:"_blank",rel:"noopener noreferrer"}},[e._v("macOS link"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.python.org/downloads/windows/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows link"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.python.org/downloads/source/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linux link"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("Make sure "),r("code",[e._v("Add Python to PATH")])]),e._v(" "),r("p",[r("img",{attrs:{src:o(559),alt:""}})]),e._v(" "),r("h2",{attrs:{id:"windows-startup-disk-can-t-see-apfs-drives"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-startup-disk-can-t-see-apfs-drives"}},[e._v("#")]),e._v(" Windows Startup Disk can't see APFS drives")]),e._v(" "),r("ul",[r("li",[e._v("Outdated BootCamp drivers(generally ver 6.0 will come with brigadier, BootCamp Utility in macOS provides newer version like ver 6.1). CorpNewt has also forked brigadier fixing these issues as well: "),r("a",{attrs:{href:"https://github.com/corpnewt/brigadier",target:"_blank",rel:"noopener noreferrer"}},[e._v("CorpNewt's brigadier"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"incorrect-resolution-with-opencore"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#incorrect-resolution-with-opencore"}},[e._v("#")]),e._v(" Incorrect resolution with OpenCore")]),e._v(" "),r("ul",[r("li",[e._v("Follow "),r("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/cosmetic/verbose.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fixing Resolution and Verbose"),r("OutboundLink")],1),e._v(" for correct setup, set "),r("code",[e._v("UIScale")]),e._v(" to "),r("code",[e._v("02")]),e._v(" for HiDPI")]),e._v(" "),r("li",[e._v("Users also have noticed that setting "),r("code",[e._v("ConsoleMode")]),e._v(" to Max will sometimes fail, leaving it empty can help")])]),e._v(" "),r("h2",{attrs:{id:"can-t-find-windows-bootcamp-drive-in-picker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#can-t-find-windows-bootcamp-drive-in-picker"}},[e._v("#")]),e._v(" Can't find Windows/BootCamp drive in picker")]),e._v(" "),r("p",[e._v("So with OpenCore, we have to note that legacy Windows installs are not supported, only UEFI. Most installs now are UEFI based but those made by BootCamp Assistant are legacy based, so you'll have to find other means to make an installer(Google's your friend). This also means MasterBootRecord/Hybrid partitions are also broken so you'll need to format the drive you want to install onto with DiskUtility. See the "),r("a",{attrs:{href:"https://dortania.github.io/OpenCore-Multiboot/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Multiboot Guide"),r("OutboundLink")],1),e._v(" on best practices")]),e._v(" "),r("p",[e._v("Now to get onto troubleshooting:")]),e._v(" "),r("ul",[r("li",[e._v("Make sure "),r("code",[e._v("Misc -> Security -> ScanPolicy")]),e._v(" is set to "),r("code",[e._v("0")]),e._v(" to show all drives")]),e._v(" "),r("li",[e._v("Enable "),r("code",[e._v("Misc -> Boot -> Hideself")]),e._v(" when Windows bootloader is located on the same drive")])]),e._v(" "),r("h2",{attrs:{id:"selecting-startup-disk-doesn-t-apply-correctly"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#selecting-startup-disk-doesn-t-apply-correctly"}},[e._v("#")]),e._v(" Selecting Startup Disk doesn't apply correctly")]),e._v(" "),r("p",[e._v("If you're having issues with Startup Disk correctly applying your new boot entry, this is most likely caused by a missing "),r("code",[e._v("DevicePathsSupported")]),e._v(" in your I/O Registry. To resolve this, ensure you are using "),r("code",[e._v("PlatformInfo -> Automatic -> True")])]),e._v(" "),r("p",[e._v("Example of missing "),r("code",[e._v("DevicePathsSupported")]),e._v(":")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/acidanthera/bugtracker/issues/664#issuecomment-663873846",target:"_blank",rel:"noopener noreferrer"}},[e._v("Default DevicePath match failure due to different PciRoot #664"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"booting-windows-results-in-bluescreen-or-linux-crashes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#booting-windows-results-in-bluescreen-or-linux-crashes"}},[e._v("#")]),e._v(" Booting Windows results in BlueScreen or Linux crashes")]),e._v(" "),r("p",[e._v("This is due to alignment issues, make sure "),r("code",[e._v("SyncRuntimePermissions")]),e._v(" is enabled on firmwares supporting MATs. Check your logs whether your firmware supports Memory Attribute Tables(generally seen on 2018 firmwares and newer)")]),e._v(" "),r("p",[e._v("Common Windows error code:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("0xc000000d")])])]),e._v(" "),r("h2",{attrs:{id:"booting-windows-error-ocb-startimage-failed-already-started"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#booting-windows-error-ocb-startimage-failed-already-started"}},[e._v("#")]),e._v(" Booting Windows error: "),r("code",[e._v("OCB: StartImage failed - Already started")])]),e._v(" "),r("p",[e._v("This is due to OpenCore getting confused when trying to boot Windows and accidentally thinking it's booting OpenCore. This can be avoided by either move Windows to it's own drive "),r("em",[e._v("or")]),e._v(" adding a custom drive path under BlessOverride. See "),r("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/Configuration.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configuration.pdf"),r("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),r("h2",{attrs:{id:"iasl-warning-only-x-unresolved"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#iasl-warning-only-x-unresolved"}},[e._v("#")]),e._v(" iASL warning, only X unresolved")]),e._v(" "),r("p",[e._v("If you try to decompile your DSDT and get an error similar to this:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("iASL Warning: There were 19 external control methods found during disassembly, but only 0 were resolved (19 unresolved)\n")])])]),r("p",[e._v("This happens when one ACPI table requires the rest for proper referencing, it does not accept the creation of DSDTs as we're only using it for creating a select few SSDTs. For those who are worried, you can run the following:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("iasl * [insert all ACPI files here]\n")])])]),r("h2",{attrs:{id:"time-inconsistency-between-macos-and-windows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#time-inconsistency-between-macos-and-windows"}},[e._v("#")]),e._v(" Time inconsistency between macOS and Windows")]),e._v(" "),r("p",[e._v("This is due to macOS using Universal Time while Windows relies on Greenwich time, so you'll need to force one OS to a different way of measuring time. We highly recommend modifying Windows instead as it's far less destructive and painful:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/multiboot/bootcamp.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install Bootcamp utilities"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://superuser.com/q/494432",target:"_blank",rel:"noopener noreferrer"}},[e._v("Modify Windows' registry"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);