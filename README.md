## pentareader

pentareader: a [Pentadactyl][pdlink] plugin interfacing Firefox's [reader
view][rview].


### Usage

* `:reader` or `:unreader`: enable/disable reader view, if applicable.
* `:togglereader`, `:tr`: toggle reader view mode.
* The optional `.penta` file adds a keyboard mapping
  <kbd>&lt;Leader&gt;</kbd><kbd>r</kbd> for the `:togglereader` command.
  The <kbd>&lt;Leader&gt;</kbd> key is the back-solidus <kbd>&bsol;</kbd> by
  default, but can be configured in your `.pentadactylrc` file.

### Notes

* Not all pages are amenable to the reader view.  Depending on the structure of
  the document, it may take a long time to render, or fail to render at all.
* After entering the reader view from normal webpage view, it's possible to
  exit by going back in navigation history.


### Installation

Copy the files `pentaread.js` and `pentaread.penta` to your
`~/.pentadactyl/plugins/` directory.  After that you may need to rehash
Pentadactyl (`:rehash`) or restart Firefox.


### Copyright

Copyright (c) 2017, Cong Ma  
All rights reserved.


Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice,
this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice,
this list of conditions and the following disclaimer in the documentation
and/or other materials provided with the distribution.


THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.



[pdlink]: https://github.com/5digits/dactyl/
[rview]: https://support.mozilla.org/t5/Basic-Browsing/Firefox-Reader-View-for-clutter-free-web-pages/ta-p/38466
