const userModel = require('../models/users');

const modelToDto = (user) => ({
  id: user.id,
  name: user.name,
  username: user.username,
  email: user.email,
  address: {
    street: user.addressStreet,
    suite: user.addressSuite,
    city: user.addressCity,
    zipcode: user.addressZipcode,
    geo: {
      lat: user.addressGeoLat,
      lng: user.addressGeoLng,
    },
  },
  phone: user.phone,
  website: user.website,
  company: {
    name: user.companyName,
    catchPhrase: user.companyCatchPhrase,
    bs: user.companyBs,
  },
});

const dtoToModel = (userDto) => ({
  ...(!!userDto.id ? { id: userDto.id } : {}),
  name: userDto.name,
  username: userDto.username,
  email: userDto.email,
  addressStreet: userDto.address.street,
  addressSuite: userDto.address.suite,
  addressCity: userDto.address.city,
  addressZipcode: userDto.address.zipcode,
  addressGeoLat: userDto.address.geo.lat,
  addressGeoLng: userDto.address.geo.lng,
  phone: userDto.phone,
  website: userDto.website,
  companyName: userDto.company.name,
  companyCatchPhrase: userDto.company.catchPhrase,
  companyBs: userDto.company.bs,
});

const get = async () => {
  const result = await userModel.get();
  return result.map((user) => modelToDto(user));
};

const create = async (user) => {
  return await userModel.create(dtoToModel(user));
};

const update = async (user) => {
  if (!user.id) {
    return 'The id is mandatory';
  }
  return await userModel.update(dtoToModel(user));
};

const remove = async (id) => {
  if (!id) {
    return 'The id is mandatory';
  }
  return await userModel.remove(id);
};

module.exports = {
  get,
  create,
  update,
  remove,
};
