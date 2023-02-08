class Address {
    street: any;
    suite: any;
    city: any;
    zipcode: any;
}
class Company {
    name: any;
    catchPhrase: any;
    bs: any;
}

class UserDetails {
    name: any;
    username: any;
    email: any;
    address: Address = new Address;
    phone: any;
    company: Company = new Company;
}

