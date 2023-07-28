import bcrypt from 'bcrypt';
import BaseModel from './BaseModel';

class UserModel extends BaseModel {
  nick: string;
  email!: string;
  firstName!: string;
  lastName!: string;
  password!: string;
  emailVerified: Date;

  static get virtualAttributes() {
    return ['fullName'];
  }

  fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['email', 'password'],
      properties: {
        id: { type: 'string' },
        nick: { type: 'string', minLength: 1, maxLength: 50 },
        email: { type: 'string', pattern: '^\\w[-._\\w]*\\w@\\w[-._\\w]*\\w\\.\\w{2,4}$' },
        firstName: { type: 'string', minLength: 1, maxLength: 50 },
        lastName: { type: 'string', minLength: 1, maxLength: 50 },
        password: { type: 'string', minLength: 6 }
      }
    };
  }

  async $beforeInsert(context) {
    await super.$beforeInsert(context);

    // Hash the password using bcrypt before inserting the record
    this.password = await bcrypt.hash(this.password, 10);
  }

  async $beforeUpdate(opt, context) {
    await super.$beforeUpdate(opt, context);
    console.log('context', context);
    // Hash the password using bcrypt before updating the record
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }

  async comparePasswords(password: string) {
    return bcrypt.compare(password, this.password);
  }

  $formatJson(json) {
    json = super.$formatJson(json);

    // Omit the password field from the JSON representation
    delete json.password;

    return json;
  }
}

export default UserModel;
