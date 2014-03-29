desc "Builds the interpreter from skulpt source and puts the resulting javascript files into app/assets/javascritps/interpreter"
task :build_skulpt do
     #Check if building for test or production API
     testing = ENV['testing']
     if testing
     	puts('Using test API')
     else
	puts('Using production API') 	
     end

     #make temp versions of env.js, builtin.js, and builtindict.js to whcih we will append  our additons
     system('(cd skulpt;mv base/src/env.js env_original)')
     system('(cd skulpt;mv base/src/builtin.js builtin_original)')
     system('(cd skulpt;mv base/src/builtindict.js builtindict_original)')

     #append our additons temporary files
     system('(cd skulpt; cp env_original env.js)')
     system('(cd skulpt; cp builtin_original builtin.js; cp builtindict_original builtindict.js)')
     #append the appropriate path file depending on if using test or production API
     if testing
     	system('(cd skulpt; cat ext/test_paths.js >> env.js)')
     else
	system('(cd skulpt; cat ext/paths.js >> env.js)')
     end
     system('(cd skulpt; cat ext/constants.js >> env.js)')
     system('(cd skulpt; cat ext/env_ext.js >> env.js)')
     system('(cd skulpt; cat ext/builtin_ext.js >> builtin.js)')
     system('(cd skulpt; cat ext/builtindict_ext.js >> builtindict.js)')
     system('(cd skulpt; mv env.js base/src/env.js)')
     system('(cd skulpt; mv builtin.js base/src/builtin.js; mv builtindict.js base/src/builtindict.js)')

     #build
     system('(cd skulpt/base; python m dist)')

     #grab interpreter files and move them to assets 
     system('(cp skulpt/base/dist/skulpt.min.js app/assets/javascripts/interpreter/skulpt.min.js)')
     system('(cp skulpt/base/dist/skulpt-stdlib.js app/assets/javascripts/interpreter/skulpt-stdlib.js)')

     #move original files back into base folder
     system('(cd skulpt/base/src; rm env.js builtin.js builtindict.js)')
     system('(cd skulpt; mv env_original base/src/env.js)')
     system('(cd skulpt; mv builtin_original base/src/builtin.js)')
     system('(cd skulpt; mv builtindict_original base/src/builtindict.js)')

end
