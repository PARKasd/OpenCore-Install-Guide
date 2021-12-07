(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{614:function(e,i,r){"use strict";r.r(i);var t=r(27),v=Object(t.a)({},(function(){var e=this,i=e.$createElement,r=e._self._c||i;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"clover-kexts-and-firmware-driver-conversion-kext-efi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#clover-kexts-and-firmware-driver-conversion-kext-efi"}},[e._v("#")]),e._v(" Clover Kexts and Firmware driver conversion(.kext, .efi)")]),e._v(" "),r("p",[e._v("Main thing to note is that you must specify your kexts and firmware drivers in your config.plist, or else they will not load. All kexts that are currently supported on Clover will work on OpenCore, however many have been deprecated with better variants being integrated into OpenCore. Firmware drivers are a bit different as they can in-fact break booting.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#kexts"}},[e._v("Kexts")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#firmware-drivers"}},[e._v("Firmware Drivers")])])]),e._v(" "),r("h2",{attrs:{id:"kexts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kexts"}},[e._v("#")]),e._v(" Kexts")]),e._v(" "),r("p",[e._v("For the most part, all kexts are supported in OpenCore. However there are a few integrated")]),e._v(" "),r("p",[r("strong",[e._v("Integrated Kexts:")])]),e._v(" "),r("ul",[r("li",[e._v("NullCPUPowerManagement.kext\n"),r("ul",[r("li",[e._v("Integrated into "),r("code",[e._v("DummyPowerManagement")]),e._v(" under "),r("code",[e._v("Kernel -> Emulate")])])])]),e._v(" "),r("li",[e._v("BT4LEContinuityFixup.kext\n"),r("ul",[r("li",[e._v("Integrated into "),r("code",[e._v("ExtendBTFeatureFlags")]),e._v(" under "),r("code",[e._v("Kernel -> Quirks")])])])])]),e._v(" "),r("h2",{attrs:{id:"firmware-drivers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#firmware-drivers"}},[e._v("#")]),e._v(" Firmware Drivers")]),e._v(" "),r("p",[r("strong",[e._v("Supported ones:")])]),e._v(" "),r("ul",[r("li",[e._v("AudioDxe.efi(Make sure this is from "),r("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCorePkg"),r("OutboundLink")],1),e._v(" and "),r("strong",[e._v("not")]),e._v(" Goldfish64's or Clover's repo)")]),e._v(" "),r("li",[e._v("CsmVideoDxe.efi(Note that "),r("a",{attrs:{href:"https://github.com/acidanthera/DuetPkg",target:"_blank",rel:"noopener noreferrer"}},[e._v("BiosVideo.efi"),r("OutboundLink")],1),e._v(" may be preferred)")]),e._v(" "),r("li",[e._v("EnhancedFatDxe.efi")]),e._v(" "),r("li",[e._v("ExFatDxeLegacy.efi")]),e._v(" "),r("li",[e._v("ExFatDxe.efi")]),e._v(" "),r("li",[e._v("GrubEXFAT.efi")]),e._v(" "),r("li",[e._v("GrubISO9660.efi")]),e._v(" "),r("li",[e._v("GrubNTFS.efi")]),e._v(" "),r("li",[e._v("GrubUDF.efi")]),e._v(" "),r("li",[e._v("HiiDatabase.efi")]),e._v(" "),r("li",[e._v("HfsPlus.efi")]),e._v(" "),r("li",[e._v("HfsPlusLegacy.efi")]),e._v(" "),r("li",[e._v("NTFS.efi")]),e._v(" "),r("li",[e._v("NvmExpressDxe.efi")]),e._v(" "),r("li",[e._v("OpenRuntime.efi")]),e._v(" "),r("li",[e._v("OpenUsbKbDxe.efi")]),e._v(" "),r("li",[e._v("OsxFatBinaryDrv.efi")]),e._v(" "),r("li",[e._v("Ps2MouseDxe.efi")]),e._v(" "),r("li",[e._v("TbtForcePower.efi")]),e._v(" "),r("li",[e._v("UsbMouseDxe.efi")]),e._v(" "),r("li",[e._v("VBoxExt2.efi")]),e._v(" "),r("li",[e._v("VBoxExt4.efi")]),e._v(" "),r("li",[e._v("VBoxHfs.efi")]),e._v(" "),r("li",[e._v("VBoxIso9600.efi")]),e._v(" "),r("li",[e._v("XhciDxe.efi")])]),e._v(" "),r("p",[r("strong",[e._v("Drivers provided/merged into OpenCore and so are no longer needed:")])]),e._v(" "),r("ul",[r("li",[e._v("APFS.efi")]),e._v(" "),r("li",[e._v("ApfsDriverLoader.efi")]),e._v(" "),r("li",[e._v("AppleEvent.efi")]),e._v(" "),r("li",[e._v("AppleGenericInput.efi")]),e._v(" "),r("li",[e._v("AppleImageCodec.efi")]),e._v(" "),r("li",[e._v("AppleKeyMapAggregator.efi")]),e._v(" "),r("li",[e._v("AppleUiSupport.efi")]),e._v(" "),r("li",[e._v("AppleUITheme.efi")]),e._v(" "),r("li",[e._v("AptioInputFix.efi")]),e._v(" "),r("li",[e._v("AptioMemoryFix.efi")]),e._v(" "),r("li",[e._v("AudioDxe.efi(well kinda, see AudioDxe shipped with "),r("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCorePkg"),r("OutboundLink")],1),e._v(")")]),e._v(" "),r("li",[e._v("BootChimeDxe.efi")]),e._v(" "),r("li",[e._v("DataHubDxe.efi")]),e._v(" "),r("li",[e._v("EmuVariableUEFI.efi")]),e._v(" "),r("li",[e._v("EnglishDxe.efi")]),e._v(" "),r("li",[e._v("FirmwareVolume.efi")]),e._v(" "),r("li",[e._v("HashServiceFix.efi")]),e._v(" "),r("li",[e._v("SMCHelper.efi")]),e._v(" "),r("li",[e._v("OcQuirks.efi")]),e._v(" "),r("li",[e._v("VirtualSMC.efi")])]),e._v(" "),r("p",[r("strong",[e._v("Explicitly unsupported drivers:")])]),e._v(" "),r("ul",[r("li",[e._v("AppleUsbKbDxe.efi(replaced with OpenUsbKbDxe.efi)")]),e._v(" "),r("li",[e._v("FSInject.efi")]),e._v(" "),r("li",[e._v("FwRuntimeServices.efi(replaced with OpenRuntime.efi)")]),e._v(" "),r("li",[e._v("osxaptiofix2drv-free2000.efi")]),e._v(" "),r("li",[e._v("osxaptiofix2drv.efi")]),e._v(" "),r("li",[e._v("osxaptiofix3drv.efi")]),e._v(" "),r("li",[e._v("osxaptiofixdrv.efi")]),e._v(" "),r("li",[e._v("OsxFatBinaryDrv.efi")]),e._v(" "),r("li",[e._v("OsxLowMemFixDrv.efi")]),e._v(" "),r("li",[e._v("UsbKbDxe.efi(replaced with OpenUsbKbDxe.efi)")])]),e._v(" "),r("h3",{attrs:{id:"aptiomemoryfix-note"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aptiomemoryfix-note"}},[e._v("#")]),e._v(" AptioMemoryFix Note")]),e._v(" "),r("p",[e._v("Well before we actually get started on converting the Clover config, we must first talk about converting from AptioMemoryFix. The main thing to note is that it's inside of OpenCore with OpenRuntime being an extension, this means that AptioMemoryFix and that there's also a lot more settings to choose from. Please see the hardware specific sections of the OpenCore guide to know what Booter settings your system may require(HEDT like X99 and X299 should look to the closest CPU like Skylake-X should refer to Skylake guide and "),r("strong",[e._v("read the comments")]),e._v(" as they mention specifics for your system).")])])}),[],!1,null,null,null);i.default=v.exports}}]);