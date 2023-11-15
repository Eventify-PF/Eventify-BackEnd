const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Users', {
        id: {
          type: DataTypes.UUID,
          defaultValue : DataTypes.UUIDV4,
          primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
            
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        email_verified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        superAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false  
        },
        ban: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
}, {timestamps: false})
}