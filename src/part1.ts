const makeArraySpecific = (element: number) => [element];
const makeArrayGeneric = <T>(element: T): [T] => [element];
