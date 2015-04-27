---
title: Programming Log 196: Kernel and Syscall Summary, Lab Part 1
date: '2013-11-29'
categories: Learning
tags: [Learning, OS]
---

[Compile Kernel Way 1](http://ubuntuforums.org/showthread.php?t=2077199):http://www.cnblogs.com/perseus/articles/2831789.html

`sudo -s

apt-get install git-core kernel-package fakeroot build-essential ncurses-dev

cd /usr/src

wget --continue http://www.kernel.org/pub/linux/kernel/v3.0/linux-3.6.3.tar.bz2

tar jxvf linux-3.6.3.tar.bz2

cd linux-3.6.3

cp /boot/config-`uname -r` ./.config  #Or use 'make menuconfig' or others

make-kpkg clean

fakeroot make-kpkg --initrd --append-to-version=-#YOURNAME# kernel_image kernel_headers

cd /usr/src

ls -al *.deb

dpkg -i *.deb

reboot`

[Compile Kernel Way 2](http://blog.csdn.net/woyantianyi/article/details/8308911):

`make mrproper`

Tip: [Why "Mr.Proper"?](http://blog.csdn.net/ce123_zhouwei/article/details/6922398):

"make mrproper" is a command in the Linux kernel build system, used to "clean up" all files from past builds and restore the build directory to its original clean state. The reason "make mrproper" is used instead of "make mrclean" is because Linus Torvalds, the father of Linux, was familiar with the name "Mr. Proper" as this is the brand widely known in Europe."

same as before until after 'make menuconfig'. If there is an "“ERROR:”__modver_version_show” [drivers/staging/rts5319/rts5319.ko] underfined”", then in the menuconfig, modify "Device drivers -> Staging drivers -> RealtekRTS5139 USB card reader support" to []

`sudo make -j#THREADNUMBER#

sudo make modules_install

sudo make install

sudo reboot`

[Remove Kernel(using deb package)](http://forum.ubuntu.org.cn/viewtopic.php?f=97&t=316707):

`dpkg --get-selections|grep linux

sudo apt-get remove linux-image-#VERSION#-generic

sudo apt-get remove linux-headers-#VERSION#-generic

sudo update-grub`

[Remove Kernel(using `make install`)](http://blog.csdn.net/suogongy/article/details/8196073):

`cd boot

#use rm -rf to delete version

cd /lib/modules

#use rm -rf to delete version

sudo uodate-grub`

-------------------------------Lab Part 1---------------------------------

I add the syscall in `/arch/x86/syscalls/syscall_32.tbl` and use `make-dpkg -j4 ...` on a compiled kernel, it echo the new added syscall has no implement. And I add it in`syscall_64.tbl` and use `make-dpkg` after `make-dpkg clean`, it worked(take me 4 hours). So I guess the issue occurs because either in 32/64, or make can't deal with dependency when multithreading, or now compile new implement of the new syscall for some reason.

In the new kernel, If I use`ps aux` in `my_test1.c`, it will echo `Error, do this: mount -t proc none /proc`. Why**?**

`ps` will call `proc_pid_lookup`, if it can't find it self, it will go wrong?

Fun command in linux: strace

To sum up, I spent **4 hours** on programming today, and totally **668 hours**.