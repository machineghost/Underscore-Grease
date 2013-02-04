/**
 * Underscore Grease
 *
 * https://github.com/machineghost/Underscore-Grease
 *
 * Underscore's chaining syntax is kind of ... heavy:
 *      _(foo).chain().method1().method2().value();
 *
 * This mix-in lightens that syntax to simply be:
 *      _(foo).method1_().method2();
 * replacing .chain() and .value() with a single extra "_" (well, technically
 * one "_" per chained method).
 */
var greaseMixin = _(_).chain().methods().reduce(function(memo, methodName) {
    if (methodName == 'chain') return memo; // No point in making a "chain_"
    memo[methodName + '_'] = function() {
        return _(_[methodName].apply(this, arguments));
    };
    return memo;
}, {}).value();
_.mixin(greaseMixin);