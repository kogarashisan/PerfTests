class TypeScriptParent {
    counter: number = 0;
    instance_array: String[] = [];
    instance_string: string;
    constructor (instance_string: string) {
        this.instance_string = instance_string;
    }
    method(prevent_inline) {
        if (this.counter > THRESHOLD)
            this.counter = this.counter / 2;
        else
            this.counter++;

        if (prevent_inline) {
            var i = 0;
            for (i = 0; i < 1; i++) dummy.method();
            for (i = 0; i < 1; i++) dummy.method();
            for (i = 0; i < 1; i++) dummy.method();
            for (i = 0; i < 1; i++) dummy.method();
            for (i = 0; i < 1; i++) dummy.method();
            for (i = 0; i < 1; i++) dummy.method();
            for (i = 0; i < 1; i++) dummy.method();
            for (i = 0; i < 1; i++) dummy.method();
            for (i = 0; i < 1; i++) dummy.method();
            for (i = 0; i < 1; i++) dummy.method();
        }
    }
}

class TypeScriptChildA extends TypeScriptParent {
    member_a: number = 1;
    constructor (instance_string: string) {
        super(instance_string);
    }
    method() {
        this.member_a = -this.member_a;
        super.method(false);
    }
}

class TypeScriptChildB extends TypeScriptParent {
    member_b: number = -1;
    constructor (instance_string: string) {
        super(instance_string);
    }
    method() {
        this.member_b = -this.member_b;
        super.method(false);
    }
}