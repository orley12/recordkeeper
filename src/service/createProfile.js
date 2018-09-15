export default (user, profile) => {
  user.createProfile(profile);

  return user.getProfile();
};
