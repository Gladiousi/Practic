const users = [];

function register(login = '', password = '') {
  if (login.length < 4) return 'Login must be at least 4 characters';
  if (password.length < 6) return 'Password must be at least 6 characters';

  const newUser = {
    login,
    password,
  };

  users.push(newUser);
  return `User ${login} registered successfully`;
}

export function authUser(login = '', password = '') {
  if (
    login.length < 4 ||
    password.length < 6 ||
    login.length > 20 ||
    password.length > 20
  )
    return "Invalid login or password length";

  if (login === 'Kirill') return 'Kirill has been banned';

  const user = users.find(
    (user) => user.login === login && user.password === password,
  );
  if (user) return 'Success auth';
  return 'Unauthorized';
}

register('Kirill', '123321123');
register('Danya', '4783382');
register('ValidUser', 'ValidPassword');
register('ValidUser', 'Password123');
register('ValidUser123', 'ValidPassword');
register('ValidUser', 'Pass!@#$');