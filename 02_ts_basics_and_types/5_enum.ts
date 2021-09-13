enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 90,
  AUTHOR,
}

const personEnum = {
  role: Role.ADMIN,
};

if (personEnum.role === Role.ADMIN) {
  console.log(' is author');
}
