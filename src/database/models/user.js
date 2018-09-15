export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    dob: DataTypes.DATE,
    age: DataTypes.INTEGER,
  }, {});
  User.associate = (models) => {
    // associations can be defined here
    User.hasOne(models.Profile, {
      foreignKey: 'userId', as: 'profile', timestamps: false, onDelete: 'CASCADE',
    });
  };
  return User;
};
