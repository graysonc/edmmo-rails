Sk.builtins['go'] = Sk.builtin.goFunction;
Sk.builtins['pickup'] = Sk.builtin.pickupFunction;
Sk.builtins['drop'] = Sk.builtin.dropFunction;
//for some reason "use" as a builtin was not working
Sk.builtins['useItem'] = Sk.builtin.useFunction;
Sk.builtins['status'] = Sk.builtin.statusFunction;
Sk.builtins['inspect'] = Sk.builtin.inspectFunction;
Sk.builtins['characters'] = Sk.builtin.charactersFunction;
Sk.builtins['tiles'] = Sk.builtin.tilesFunction;
Sk.builtins['dig'] = Sk.builtin.digFunction;
goog.exportSymbol("Sk.builtins", Sk.builtins);
