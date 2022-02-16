![downloads](https://img.shields.io/npm/dm/magister-api-new)
# Magister Typescript API

# Werkt blijkbaar niet meer !!

Een misschien werkende magister.net api. Dit is een soort mix tussen [Magister-API](https://github.com/idiidk/magister-api) en [magister-scraper](https://github.com/JipFr/magister-scraper/). Maar dan helemal in typescript.

### Install:
npm:
 ```
 npm install magister-api-new
 ```
yarn: 
```
yarn add magister-api-new
```
### Example:

```javascript
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
```
## Credits:
[iidk](https://github.com/idiidk) Voor het maken van magister-api wat ik als basis kon gebruiken

[JipFr](https://github.com/JipFr) Voor het maken van magister-scraper waardoor ik kon authen
