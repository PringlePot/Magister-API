import Magister from './auth/magister';

(async () => {
  const session = await Magister.new({
    username: 'username',
    password: 'wachtwoord',
    hostname: 'school.magister.net',
  });

  console.log(
    'Welkom,',
    await session.getProfileInfo().then(value => {
      return value.firstName;
    })
  );
  console.log(
    'laatste 20 cijfers',
    await session
      .getGrades(20, 0)
      .then(value =>
        value.map(
          value1 =>
            '' +
            value1.subject.code +
            ' cijfer: ' +
            value1.value +
            ' voldoende: ' +
            value1.isVoldoende
        )
      )
  );
})();
