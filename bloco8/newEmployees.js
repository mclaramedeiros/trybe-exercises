const newEmployees = (newfunction) => {
    const employees = {
      id1: newfunction('Pedro Guerra'),
      id2: newfunction('Luiza Drumond'),
      id3: newfunction('Carla Paiva'),
    }
    return employees;
  };

  const generatorFunction = (fullName) => {
        const email = fullName.toLowerCase().split(' ').join('_');
        return {fullName, email: `${email}@betrybe.com`};
  }

  console.log(newEmployees(generatorFunction));