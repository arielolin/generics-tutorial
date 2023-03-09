interface SomeThing {
  id: string;
  position: number;
  data: any;
}

interface NumberSomeThing {
  id: string;
  position: number;
  data: Number;
}

interface GenericSomeThing<T> {
  id: string;
  position: number;
  data: T;
}
