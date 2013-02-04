Underscore-Grease
=================

###Making Underscore Chaining More Slick###

In jQuery, chaining is nice and simple:

    $(someElement).css('color', 'red').show();

Underscore however, unlike jQuery, contains a large number of methods that return values.  As a result, Underscore needs to specify when to return the actual result, and when to return the chainable version of it.  As a result of that, Underscore's chaining syntax isn't quite as simple as jQuery's:

     _(foo).chain().without({foo:bar}).compact().value();

This mix-in attempts to solve that problem with an alternative syntax:

    _(foo).without_({foo:bar}).compact();

In other words, this mix-in adds new versions of every method in Underscore (except chain; that would be pointless), and each of those new versions has a "_" at the end of the original method name.  When these "greased" versions of Underscore methods are called, they return an Underscore-wrapped version of whatever result their non-greased version would have returned.

This allows you to chain as many methods as you want, without ever having to invoke either chain or value:

    _(foo).without_({foo:bar}).compact_().flatten_().items();

To use Underscore Grease simply download and add `underscore.grease.js` to your environment (or, for a production environment, use `underscore.grease.min.js` instead).  It's that simple.

Underscore Grease was created by Jeremy Walker with feedback from GitHub user Nami-Doc. It is licensed under the [MIT License](http://opensource.org/licenses/MIT).

For the historical origins of Underscore Grease see [this GitHub issue thread](https://github.com/documentcloud/underscore/issues/933)