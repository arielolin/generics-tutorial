const makeFullNameSpecific = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => firstName + " " + lastName;

const makeFullNameGeneric = <
  T extends {
    firstName: string;
    lastName: string;
  }
>(
  obj: T
) => ({ ...obj, fullName: obj.firstName + " " + obj.lastName + " " });

makeFullNameSpecific({ firstName: "Gill", lastName: "Itzhaky" });
makeFullNameGeneric({ firstName: "Gill", lastName: "Itzhaky", age: 22 });
