export class Contact {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
