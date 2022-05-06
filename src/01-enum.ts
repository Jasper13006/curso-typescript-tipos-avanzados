enum ROLES {
    ADMIN = 'admin',
    SELLER = 'seller',
    customer = 'customer',
}

type User = {
    username: string;
    role: ROLES;
}

const nicoUser: User = {
    username: 'nico',
    role: ROLES.ADMIN,
}