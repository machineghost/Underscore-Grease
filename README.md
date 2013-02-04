Underscore-Grease
=================

Making Underscore Chaining More Slick
-------------------------------------

In jQuery, chaining is nice and simple:

    $(someElement).css('color', 'red').show();

Underscore however, unlike jQuery, contains a large number of methods that return values.  As a result, Underscore needs to specify when to return the actual result, and when to return the chainable version of it.  As a result of that, Underscore's chaining syntax isn't quite as simple as jQuery's:

     _(foo).chain().without({foo:bar}).compact().value();

This mixing attempts to solve that problem with an alternative syntax:

    _(foo).without_({foo:bar}).compact();

In other words, this mix-in adds new versions of every method in Underscore (except chain; that would be pointless), and each of those new versions has a "_" at the end of the original method name.  When these "greased" versions of Underscore methods are called, they return an Underscore-wrapped version of whatever result their non-greased version would have returned.

This allows you to chain as many methods as you want, without ever having to invoke either chain or value:

    _(foo).without_({foo:bar}).compact_().flatten_().items();

Underscore Grease was created by Jeremy Walker, with feedback from the GitHub user Nami-Doc (in this issue: https://github.com/documentcloud/underscore/issues/933).  It is licensed under the MIT License.