(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{477:function(t,a,s){t.exports=s.p+"assets/img/vbox-storage.b08bb16a.png"},645:function(t,a,s){"use strict";s.r(a);var e=s(27),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"virtualbox"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtualbox"}},[t._v("#")]),t._v(" VirtualBox")]),t._v(" "),e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),e("ul",[e("li",[t._v("VirtualBox")]),t._v(" "),e("li",[t._v("A computer running macOS")]),t._v(" "),e("li",[t._v("The desired macOS installation software installed to /Applications")]),t._v(" "),e("li",[t._v("A USB attached hard disk or SSD")])]),t._v(" "),e("h2",{attrs:{id:"converting-installation-media"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#converting-installation-media"}},[t._v("#")]),t._v(" Converting Installation Media")]),t._v(" "),e("p",[t._v("VirtualBox cannot directly use a raw disk image, so we're going to convert it to a "),e("code",[t._v("VDI")]),t._v(".")]),t._v(" "),e("p",[e("code",[t._v("cd")]),t._v(" to the location of the disk image and run the following:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('### Change "Install macOS Big Sur Beta" if the name of the .img file differs')]),t._v("\nVBoxManage convertfromraw "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Install macOS Big Sur Beta.img"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Install macOS Big Sur Beta.vdi"')]),t._v(" --format VDI\n")])])]),e("h2",{attrs:{id:"installing-macos-in-virtualbox"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-macos-in-virtualbox"}},[t._v("#")]),t._v(" Installing macOS in VirtualBox")]),t._v(" "),e("p",[t._v("First, attach the USB disk that is your target for macOS installation, and create a virtual hard disk that references it to use with VirtualBox.  Note: You may need to remove the partitions of the disk before using it.  You will also need to edit the destination device.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("diskutil list\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# locate the external disk that matches, and replace /dev/disk3 below with the device path.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" VBoxManage internalcommands createrawvmdk -filename RawHDD.vmdk -rawdisk /dev/disk3\n")])])]),e("p",[t._v("Next, start VirtualBox as root and create a new macOS virtual machine.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" VirtualBox\n")])])]),e("ul",[e("li",[e("p",[t._v("Name: Big Sur")])]),t._v(" "),e("li",[e("p",[t._v("Type: macOS 64bit")])]),t._v(" "),e("li",[e("p",[t._v("2-4 CPU cores")])]),t._v(" "),e("li",[e("p",[t._v("4-8 GB RAM")])]),t._v(" "),e("li",[e("p",[t._v("Do not create a virtual disk.")])])]),t._v(" "),e("p",[t._v("Attach the disks that you've created in previous steps as shown:")]),t._v(" "),e("p",[e("img",{attrs:{src:s(477),alt:""}})]),t._v(" "),e("p",[t._v("Now, close VirtualBox and add the following properties to the VM to allow it to boot.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" VBoxManage modifyvm "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Big Sur"')]),t._v(" --cpuidset 00000001 000306a9 04100800 7fbae3ff bfebfbff\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" VBoxManage setextradata "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Big Sur"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VBoxInternal/Devices/efi/0/Config/DmiSystemProduct"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iMacPro1,1"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" VBoxManage setextradata "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Big Sur"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VBoxInternal/Devices/efi/0/Config/DmiSystemVersion"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" VBoxManage setextradata "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Big Sur"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VBoxInternal/Devices/efi/0/Config/DmiBoardProduct"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mac-7BA5B2D9E42DDD94"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" VBoxManage setextradata "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Big Sur"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VBoxInternal/Devices/smc/0/Config/DeviceKey"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ourhardworkbythesewordsguardedpleasedontsteal(c)AppleComputerInc"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" VBoxManage setextradata "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Big Sur"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VBoxInternal/Devices/smc/0/Config/GetKeyFromRealSMC"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),e("p",[t._v("Start VirtualBox as root, and start the VM.  The installer should begin to boot.  Complete the installation as you would on any other device.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" VirtualBox\n")])])]),e("p",[t._v("When the installation is complete, and you are at the Welcome screen, send an ACPI shutdown signal to macOS and select shutdown.")]),t._v(" "),e("p",[t._v("Add your prepared EFI to the EFI partition on the USB device, and eject it.")]),t._v(" "),e("p",[t._v("Place the drive back in your hack and boot normally.")])])}),[],!1,null,null,null);a.default=n.exports}}]);