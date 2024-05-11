export{}

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

type FunctionType = Exclude<SomeTypes, string | number>
type Non = Exclude<SomeTypes, DebugType>;

type anotherFun = Exclude<SomeTypes, boolean>;

type test = Extract<SomeTypes, boolean>;
type test2 = Extract<SomeTypes, string | number>;

type Nullable = string | number | null | undefined;

type test3 = NonNullable<Nullable>