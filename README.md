Better Standalone Image
=======================

An userscript to make standalone image display better.

Features
--------

* Style standalone image page. Make it center and background transparent.
* Support SVG (Currently Greasemonkey-only).
* No configuration. Please edit the source if you prefer a different color.
* Work on CSP restricted sites.

Screenshots
-----------

### Firefox

Before:
![http://i.imgur.com/UbKVXiy.png](https://i.imgur.com/UbKVXiy.png)
After:
![http://i.imgur.com/UFRgQuI.png](https://i.imgur.com/UFRgQuI.png)

### Chrome

Before:
![http://i.imgur.com/iAEWADT.png](https://i.imgur.com/iAEWADT.png)
After:
![http://i.imgur.com/Ff1PPqF.png](https://i.imgur.com/Ff1PPqF.png)


Compatibility
-------------

* Firefox + Greasemonkey 3
* Chrome + Tampermonkey
	- Tampermonkey doesn't execute userscripts on SVG images.
	
Install
-------

[GreasyFork](https://greasyfork.org/en/scripts/31865-better-standalone-image)

Similar scripts
---------------

* [Standalon Image Background and Transparency](https://greasyfork.org/zh-TW/scripts/63-standalone-image-background-and-transparency)
* [Center Image](https://greasyfork.org/zh-TW/scripts/110-center-image)
* [Advanced Image Viewer](https://greasyfork.org/zh-TW/scripts/27738-advanced-image-viewer)

Known Issues
------------

* Vertical centering doesn't work well with SVG. Some parts might be cropped if the image is larger than windows.

Changelog
---------

* 0.1.0 (Jul 29, 2017)
	- First release
