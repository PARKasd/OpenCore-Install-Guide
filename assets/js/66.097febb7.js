(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{611:function(e,o,t){"use strict";t.r(o);var n=t(27),r=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"converting-from-clover-to-opencore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#converting-from-clover-to-opencore"}},[e._v("#")]),e._v(" Converting from Clover to OpenCore")]),e._v(" "),t("p",[e._v("So you see the new fancy OpenCore bootloader and just dying to try it out, well you've come to the right place! Many things in Clover have feature parity with OpenCore but many do not, here we'll be going over what you can bring over and what you cannot.")]),e._v(" "),t("p",[e._v("To get started, we have some resources that will aid you:")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/clover-conversion/Clover-config.html"}},[e._v("Config.plist conversion")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/clover-conversion/clover-efi.html"}},[e._v("Kexts and Firmware driver conversion(.kext, .efi)")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/clover-conversion/Clover-boot-arg.html"}},[e._v("Boot Argument conversion")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/clover-conversion/clover-patch.html"}},[e._v("Common Kernel and Kext patch conversions")])],1)]),e._v(" "),t("h2",{attrs:{id:"cleaning-the-clover-junk-in-macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cleaning-the-clover-junk-in-macos"}},[e._v("#")]),e._v(" Cleaning the Clover Junk in macOS")]),e._v(" "),t("p",[e._v("So to start, Clover would like to give a big F*** You if you're using emulated NVRAM. Why? Well it likely installed some trash that's a pain in the arse to get rid of. You will need to have SIP disabled to clean it up.")]),e._v(" "),t("p",[e._v("Things to check for:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("/Volumes/EFI/EFI/CLOVER/drivers64UEFI/EmuVariableUefi-64.efi")])]),e._v(" "),t("li",[t("code",[e._v("/Volumes/EFI/nvram.plist")])]),e._v(" "),t("li",[t("code",[e._v("/etc/rc.clover.lib")])]),e._v(" "),t("li",[t("code",[e._v("/etc/rc.boot.d/10.save_and_rotate_boot_log.local")])]),e._v(" "),t("li",[t("code",[e._v("/etc/rc.boot.d/20.mount_ESP.local")])]),e._v(" "),t("li",[t("code",[e._v("/etc/rc.boot.d/70.disable_sleep_proxy_client.local.disabled")])]),e._v(" "),t("li",[t("code",[e._v("/etc/rc.shutdown.d/80.save_nvram_plist.local​")])])]),e._v(" "),t("p",[e._v("If folders are empty then delete them as well:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("/etc/rc.boot.d")])]),e._v(" "),t("li",[t("code",[e._v("/etc/rc.shutdown.d​")])])]),e._v(" "),t("p",[e._v("Users of Clover's Preference Pane will also need to remove these:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("/Library/PreferencePanes/Clover.prefPane")])]),e._v(" "),t("li",[t("code",[e._v("/Library/Application\\ Support/clover")])])]),e._v(" "),t("h2",{attrs:{id:"removing-kexts-from-macos-s-l-e-and-l-e"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#removing-kexts-from-macos-s-l-e-and-l-e"}},[e._v("#")]),e._v(" Removing kexts from macOS(S/L/E and L/E)")]),e._v(" "),t("p",[e._v("A common tradition with Clover was to install kexts into macOS, specifically System/Library/Extensions and Library/Extensions. Reasoning being that Clover's kext injection system was known to fail either with OS updates or just spontaneously. Thankfully with OpenCore, a much more robust and stable injection mechanism's been made that is far harder to break. So time to do a bit of spring cleaning.")]),e._v(" "),t("p",[t("strong",[e._v("Note")]),e._v(": OpenCore will fail to inject kexts already in your kernelcache so cleaning this out will also resolve those issues")]),e._v(" "),t("p",[e._v("Now open up terminal and run the following:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo kextcache -i /\n")])])]),t("p",[e._v("This command will yell at you about any kexts that shouldn't be in either S/L/E or L/E.")]),e._v(" "),t("p",[t("strong",[e._v("Remove all hack kexts")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo -s\ntouch /Library/Extensions /System/Library/Extensions​\nkextcache -i /​\n")])])]),t("ul",[t("li",[t("strong",[e._v("Note")]),e._v(", macOS Catalina will need the "),t("code",[e._v("mount -uw /")]),e._v(" command to mount the system drive as Read/Write")])]),e._v(" "),t("h2",{attrs:{id:"cleaning-the-clover-junk-in-your-hardware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cleaning-the-clover-junk-in-your-hardware"}},[e._v("#")]),e._v(" Cleaning the Clover Junk in your hardware")]),e._v(" "),t("p",[e._v("The other thing that Clover may have hidden from you is NVRAM variables, this is bad as OpenCore won't overwrite variables unless explicitly told via the "),t("code",[e._v("Delete")]),e._v(" feature found under "),t("code",[e._v("NVRAM -> Delete")]),e._v(". To fix this, we'll need to clear then via OpenCore's "),t("code",[e._v("ClearNvram")]),e._v(" feature.")]),e._v(" "),t("p",[e._v("In you config.plist:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Misc -> Security -> AllowNvramReset -> True")])])]),e._v(" "),t("p",[e._v("And on your initial boot of OpenCore, select "),t("code",[e._v("Reset NVRAM")]),e._v(" boot option. This will wipe everything and reboot the system when finished.")]),e._v(" "),t("ul",[t("li",[e._v("Note: Thinkpad laptops are known to be semi-bricked after an NVRAM reset in OpenCore, we recommend resetting NVRAM by updating the BIOS on these machines.")])]),e._v(" "),t("h2",{attrs:{id:"optional-avoiding-smbios-injection-into-other-oses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optional-avoiding-smbios-injection-into-other-oses"}},[e._v("#")]),e._v(" Optional: Avoiding SMBIOS injection into other OSes")]),e._v(" "),t("p",[e._v("By default OpenCore will inject SMBIOS data into all OSes, the reason for this is 2 parts:")]),e._v(" "),t("ul",[t("li",[e._v("This allows for proper multiboot support like with "),t("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/multiboot/bootcamp.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("BootCamp"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Avoids edge cases where info is injected several times, commonly seen with Clover")])]),e._v(" "),t("p",[e._v("However, there are quirks in OpenCore that allow for SMBIOS injection to be macOS limited by patching where macOS reads SMBIOS info from. These quirks can break in the future and so we only recommend this option in the event of certain software breaking in other OSes. For best stability, please avoid")]),e._v(" "),t("p",[e._v("To enable macOS-only SMBIOS injection:")]),e._v(" "),t("ul",[t("li",[e._v("Kernel -> Quirks -> CustomSMBIOSGuid -> True")]),e._v(" "),t("li",[e._v("PlatformInfo -> UpdateSMBIOSMode -> Custom")])])])}),[],!1,null,null,null);o.default=r.exports}}]);