export default (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    userId: DataTypes.INTEGER,
    hairColor: DataTypes.STRING,
    height: DataTypes.STRING,
    weight: DataTypes.STRING,
  }, {});
  Profile.associate = (models) => {
    // associations can be defined here
    Profile.belongsTo(models.User, { foreignKey: 'userId', as: 'profile' });
  };
  return Profile;
};
