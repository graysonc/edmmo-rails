
// todo; these should all be func objects too, otherwise str() of them won't
// work, etc.
Sk.builtin.foo = function foo()
{
    Sk.builtin.pyCheckArgs("foo", arguments, 0, 0);
    alert('Hello World');
}

