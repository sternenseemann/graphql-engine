export const schema = {
  data: {
    __schema: {
      queryType: {
        name: 'query_root',
      },
      mutationType: {
        name: 'mutation_root',
      },
      subscriptionType: {
        name: 'subscription_root',
      },
      types: [
        {
          kind: 'SCALAR',
          name: 'Boolean',
          description: null,
          fields: null,
          inputFields: null,
          interfaces: null,
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'SCALAR',
          name: 'Float',
          description: null,
          fields: null,
          inputFields: null,
          interfaces: null,
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'SCALAR',
          name: 'Int',
          description: null,
          fields: null,
          inputFields: null,
          interfaces: null,
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'INPUT_OBJECT',
          name: 'Int_comparison_exp',
          description:
            'Boolean expression to compare columns of type "Int". All fields are combined with logical \'AND\'.',
          fields: null,
          inputFields: [
            {
              name: '_eq',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_gt',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_gte',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_in',
              description: null,
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null,
                  },
                },
              },
              defaultValue: null,
            },
            {
              name: '_is_null',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'Boolean',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_lt',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_lte',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_neq',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_nin',
              description: null,
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null,
                  },
                },
              },
              defaultValue: null,
            },
          ],
          interfaces: null,
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'SCALAR',
          name: 'String',
          description: null,
          fields: null,
          inputFields: null,
          interfaces: null,
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'INPUT_OBJECT',
          name: 'String_comparison_exp',
          description:
            'Boolean expression to compare columns of type "String". All fields are combined with logical \'AND\'.',
          fields: null,
          inputFields: [
            {
              name: '_eq',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_gt',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_gte',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_ilike',
              description:
                'does the column match the given case-insensitive pattern',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_in',
              description: null,
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'SCALAR',
                    name: 'String',
                    ofType: null,
                  },
                },
              },
              defaultValue: null,
            },
            {
              name: '_iregex',
              description:
                'does the column match the given POSIX regular expression, case insensitive',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_is_null',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'Boolean',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_like',
              description: 'does the column match the given pattern',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_lt',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_lte',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_neq',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_nilike',
              description:
                'does the column NOT match the given case-insensitive pattern',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_nin',
              description: null,
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'SCALAR',
                    name: 'String',
                    ofType: null,
                  },
                },
              },
              defaultValue: null,
            },
            {
              name: '_niregex',
              description:
                'does the column NOT match the given POSIX regular expression, case insensitive',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_nlike',
              description: 'does the column NOT match the given pattern',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_nregex',
              description:
                'does the column NOT match the given POSIX regular expression, case sensitive',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_nsimilar',
              description:
                'does the column NOT match the given SQL regular expression',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_regex',
              description:
                'does the column match the given POSIX regular expression, case sensitive',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_similar',
              description:
                'does the column match the given SQL regular expression',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              defaultValue: null,
            },
          ],
          interfaces: null,
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: '__Directive',
          description: null,
          fields: [
            {
              name: 'args',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: '__InputValue',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'description',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'isRepeatable',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'locations',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'name',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: '__EnumValue',
          description: null,
          fields: [
            {
              name: 'deprecationReason',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'description',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'isDeprecated',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'name',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: '__Field',
          description: null,
          fields: [
            {
              name: 'args',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: '__InputValue',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'deprecationReason',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'description',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'isDeprecated',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'name',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'type',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: '__Type',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: '__InputValue',
          description: null,
          fields: [
            {
              name: 'defaultValue',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'description',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'name',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'type',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: '__Type',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: '__Schema',
          description: null,
          fields: [
            {
              name: 'description',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'directives',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: '__Directive',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'mutationType',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: '__Type',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'queryType',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: '__Type',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'subscriptionType',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: '__Type',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'types',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: '__Type',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: '__Type',
          description: null,
          fields: [
            {
              name: 'description',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'enumValues',
              description: null,
              args: [
                {
                  name: 'includeDeprecated',
                  description: null,
                  type: {
                    kind: 'SCALAR',
                    name: 'Boolean',
                    ofType: null,
                  },
                  defaultValue: 'false',
                },
              ],
              type: {
                kind: 'OBJECT',
                name: '__EnumValue',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'fields',
              description: null,
              args: [
                {
                  name: 'includeDeprecated',
                  description: null,
                  type: {
                    kind: 'SCALAR',
                    name: 'Boolean',
                    ofType: null,
                  },
                  defaultValue: 'false',
                },
              ],
              type: {
                kind: 'OBJECT',
                name: '__Field',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'inputFields',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: '__InputValue',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'interfaces',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: '__Type',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'kind',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'ENUM',
                  name: '__TypeKind',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'name',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'ofType',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: '__Type',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'possibleTypes',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: '__Type',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'ENUM',
          name: '__TypeKind',
          description: null,
          fields: null,
          inputFields: null,
          interfaces: null,
          enumValues: [
            {
              name: 'ENUM',
              description: null,
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'INPUT_OBJECT',
              description: null,
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'INTERFACE',
              description: null,
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'LIST',
              description: null,
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'NON_NULL',
              description: null,
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'OBJECT',
              description: null,
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'SCALAR',
              description: null,
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'UNION',
              description: null,
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'mutation_root',
          description: 'mutation root',
          fields: [
            {
              name: 'delete_testUser',
              description: 'delete data from the table: "testUser"',
              args: [
                {
                  name: 'where',
                  description: 'filter the rows which have to be deleted',
                  type: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'testUser_bool_exp',
                      ofType: null,
                    },
                  },
                  defaultValue: null,
                },
              ],
              type: {
                kind: 'OBJECT',
                name: 'testUser_mutation_response',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'delete_testUser_by_pk',
              description: 'delete single row from the table: "testUser"',
              args: [
                {
                  name: 'id',
                  description: null,
                  type: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Int',
                      ofType: null,
                    },
                  },
                  defaultValue: null,
                },
              ],
              type: {
                kind: 'OBJECT',
                name: 'testUser',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'insert_testUser',
              description: 'insert data into the table: "testUser"',
              args: [
                {
                  name: 'objects',
                  description: 'the rows to be inserted',
                  type: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'LIST',
                      name: null,
                      ofType: {
                        kind: 'NON_NULL',
                        name: null,
                        ofType: {
                          kind: 'INPUT_OBJECT',
                          name: 'testUser_insert_input',
                          ofType: null,
                        },
                      },
                    },
                  },
                  defaultValue: null,
                },
                {
                  name: 'on_conflict',
                  description: 'on conflict condition',
                  type: {
                    kind: 'INPUT_OBJECT',
                    name: 'testUser_on_conflict',
                    ofType: null,
                  },
                  defaultValue: null,
                },
              ],
              type: {
                kind: 'OBJECT',
                name: 'testUser_mutation_response',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'insert_testUser_one',
              description: 'insert a single row into the table: "testUser"',
              args: [
                {
                  name: 'object',
                  description: 'the row to be inserted',
                  type: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'testUser_insert_input',
                      ofType: null,
                    },
                  },
                  defaultValue: null,
                },
                {
                  name: 'on_conflict',
                  description: 'on conflict condition',
                  type: {
                    kind: 'INPUT_OBJECT',
                    name: 'testUser_on_conflict',
                    ofType: null,
                  },
                  defaultValue: null,
                },
              ],
              type: {
                kind: 'OBJECT',
                name: 'testUser',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'update_testUser',
              description: 'update data of the table: "testUser"',
              args: [
                {
                  name: '_inc',
                  description:
                    'increments the numeric columns with given value of the filtered values',
                  type: {
                    kind: 'INPUT_OBJECT',
                    name: 'testUser_inc_input',
                    ofType: null,
                  },
                  defaultValue: null,
                },
                {
                  name: '_set',
                  description:
                    'sets the columns of the filtered rows to the given values',
                  type: {
                    kind: 'INPUT_OBJECT',
                    name: 'testUser_set_input',
                    ofType: null,
                  },
                  defaultValue: null,
                },
                {
                  name: 'where',
                  description: 'filter the rows which have to be updated',
                  type: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'testUser_bool_exp',
                      ofType: null,
                    },
                  },
                  defaultValue: null,
                },
              ],
              type: {
                kind: 'OBJECT',
                name: 'testUser_mutation_response',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'update_testUser_by_pk',
              description: 'update single row of the table: "testUser"',
              args: [
                {
                  name: '_inc',
                  description:
                    'increments the numeric columns with given value of the filtered values',
                  type: {
                    kind: 'INPUT_OBJECT',
                    name: 'testUser_inc_input',
                    ofType: null,
                  },
                  defaultValue: null,
                },
                {
                  name: '_set',
                  description:
                    'sets the columns of the filtered rows to the given values',
                  type: {
                    kind: 'INPUT_OBJECT',
                    name: 'testUser_set_input',
                    ofType: null,
                  },
                  defaultValue: null,
                },
                {
                  name: 'pk_columns',
                  description: null,
                  type: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'testUser_pk_columns_input',
                      ofType: null,
                    },
                  },
                  defaultValue: null,
                },
              ],
              type: {
                kind: 'OBJECT',
                name: 'testUser',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'ENUM',
          name: 'order_by',
          description: 'column ordering options',
          fields: null,
          inputFields: null,
          interfaces: null,
          enumValues: [
            {
              name: 'asc',
              description: 'in ascending order, nulls last',
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'asc_nulls_first',
              description: 'in ascending order, nulls first',
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'asc_nulls_last',
              description: 'in ascending order, nulls last',
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'desc',
              description: 'in descending order, nulls first',
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'desc_nulls_first',
              description: 'in descending order, nulls first',
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'desc_nulls_last',
              description: 'in descending order, nulls last',
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'query_root',
          description: null,
          fields: [
            {
              name: 'testUser',
              description: 'fetch data from the table: "testUser"',
              args: [
                {
                  name: 'distinct_on',
                  description: 'distinct select on columns',
                  type: {
                    kind: 'LIST',
                    name: null,
                    ofType: {
                      kind: 'NON_NULL',
                      name: null,
                      ofType: {
                        kind: 'ENUM',
                        name: 'testUser_select_column',
                        ofType: null,
                      },
                    },
                  },
                  defaultValue: null,
                },
                {
                  name: 'limit',
                  description: 'limit the number of rows returned',
                  type: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null,
                  },
                  defaultValue: null,
                },
                {
                  name: 'offset',
                  description: 'skip the first n rows. Use only with order_by',
                  type: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null,
                  },
                  defaultValue: null,
                },
                {
                  name: 'order_by',
                  description: 'sort the rows by one or more columns',
                  type: {
                    kind: 'LIST',
                    name: null,
                    ofType: {
                      kind: 'NON_NULL',
                      name: null,
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'testUser_order_by',
                        ofType: null,
                      },
                    },
                  },
                  defaultValue: null,
                },
                {
                  name: 'where',
                  description: 'filter the rows returned',
                  type: {
                    kind: 'INPUT_OBJECT',
                    name: 'testUser_bool_exp',
                    ofType: null,
                  },
                  defaultValue: null,
                },
              ],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'OBJECT',
                      name: 'testUser',
                      ofType: null,
                    },
                  },
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'testUser_aggregate',
              description: 'fetch aggregated fields from the table: "testUser"',
              args: [
                {
                  name: 'distinct_on',
                  description: 'distinct select on columns',
                  type: {
                    kind: 'LIST',
                    name: null,
                    ofType: {
                      kind: 'NON_NULL',
                      name: null,
                      ofType: {
                        kind: 'ENUM',
                        name: 'testUser_select_column',
                        ofType: null,
                      },
                    },
                  },
                  defaultValue: null,
                },
                {
                  name: 'limit',
                  description: 'limit the number of rows returned',
                  type: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null,
                  },
                  defaultValue: null,
                },
                {
                  name: 'offset',
                  description: 'skip the first n rows. Use only with order_by',
                  type: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null,
                  },
                  defaultValue: null,
                },
                {
                  name: 'order_by',
                  description: 'sort the rows by one or more columns',
                  type: {
                    kind: 'LIST',
                    name: null,
                    ofType: {
                      kind: 'NON_NULL',
                      name: null,
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'testUser_order_by',
                        ofType: null,
                      },
                    },
                  },
                  defaultValue: null,
                },
                {
                  name: 'where',
                  description: 'filter the rows returned',
                  type: {
                    kind: 'INPUT_OBJECT',
                    name: 'testUser_bool_exp',
                    ofType: null,
                  },
                  defaultValue: null,
                },
              ],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: 'testUser_aggregate',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'testUser_by_pk',
              description:
                'fetch data from the table: "testUser" using primary key columns',
              args: [
                {
                  name: 'id',
                  description: null,
                  type: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Int',
                      ofType: null,
                    },
                  },
                  defaultValue: null,
                },
              ],
              type: {
                kind: 'OBJECT',
                name: 'testUser',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'subscription_root',
          description: null,
          fields: [
            {
              name: 'testUser',
              description: 'fetch data from the table: "testUser"',
              args: [
                {
                  name: 'distinct_on',
                  description: 'distinct select on columns',
                  type: {
                    kind: 'LIST',
                    name: null,
                    ofType: {
                      kind: 'NON_NULL',
                      name: null,
                      ofType: {
                        kind: 'ENUM',
                        name: 'testUser_select_column',
                        ofType: null,
                      },
                    },
                  },
                  defaultValue: null,
                },
                {
                  name: 'limit',
                  description: 'limit the number of rows returned',
                  type: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null,
                  },
                  defaultValue: null,
                },
                {
                  name: 'offset',
                  description: 'skip the first n rows. Use only with order_by',
                  type: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null,
                  },
                  defaultValue: null,
                },
                {
                  name: 'order_by',
                  description: 'sort the rows by one or more columns',
                  type: {
                    kind: 'LIST',
                    name: null,
                    ofType: {
                      kind: 'NON_NULL',
                      name: null,
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'testUser_order_by',
                        ofType: null,
                      },
                    },
                  },
                  defaultValue: null,
                },
                {
                  name: 'where',
                  description: 'filter the rows returned',
                  type: {
                    kind: 'INPUT_OBJECT',
                    name: 'testUser_bool_exp',
                    ofType: null,
                  },
                  defaultValue: null,
                },
              ],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'OBJECT',
                      name: 'testUser',
                      ofType: null,
                    },
                  },
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'testUser_aggregate',
              description: 'fetch aggregated fields from the table: "testUser"',
              args: [
                {
                  name: 'distinct_on',
                  description: 'distinct select on columns',
                  type: {
                    kind: 'LIST',
                    name: null,
                    ofType: {
                      kind: 'NON_NULL',
                      name: null,
                      ofType: {
                        kind: 'ENUM',
                        name: 'testUser_select_column',
                        ofType: null,
                      },
                    },
                  },
                  defaultValue: null,
                },
                {
                  name: 'limit',
                  description: 'limit the number of rows returned',
                  type: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null,
                  },
                  defaultValue: null,
                },
                {
                  name: 'offset',
                  description: 'skip the first n rows. Use only with order_by',
                  type: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null,
                  },
                  defaultValue: null,
                },
                {
                  name: 'order_by',
                  description: 'sort the rows by one or more columns',
                  type: {
                    kind: 'LIST',
                    name: null,
                    ofType: {
                      kind: 'NON_NULL',
                      name: null,
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'testUser_order_by',
                        ofType: null,
                      },
                    },
                  },
                  defaultValue: null,
                },
                {
                  name: 'where',
                  description: 'filter the rows returned',
                  type: {
                    kind: 'INPUT_OBJECT',
                    name: 'testUser_bool_exp',
                    ofType: null,
                  },
                  defaultValue: null,
                },
              ],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: 'testUser_aggregate',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'testUser_by_pk',
              description:
                'fetch data from the table: "testUser" using primary key columns',
              args: [
                {
                  name: 'id',
                  description: null,
                  type: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Int',
                      ofType: null,
                    },
                  },
                  defaultValue: null,
                },
              ],
              type: {
                kind: 'OBJECT',
                name: 'testUser',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'testUser',
          description:
            'id table\n\n\ncolumns and relationships of "testUser"\n',
          fields: [
            {
              name: 'age',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'firstname',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'id',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'lastname',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'testUser_aggregate',
          description: 'aggregated selection of "testUser"',
          fields: [
            {
              name: 'aggregate',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: 'testUser_aggregate_fields',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'nodes',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'OBJECT',
                      name: 'testUser',
                      ofType: null,
                    },
                  },
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'testUser_aggregate_fields',
          description: 'aggregate fields of "testUser"',
          fields: [
            {
              name: 'avg',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: 'testUser_avg_fields',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'count',
              description: null,
              args: [
                {
                  name: 'columns',
                  description: null,
                  type: {
                    kind: 'LIST',
                    name: null,
                    ofType: {
                      kind: 'NON_NULL',
                      name: null,
                      ofType: {
                        kind: 'ENUM',
                        name: 'testUser_select_column',
                        ofType: null,
                      },
                    },
                  },
                  defaultValue: null,
                },
                {
                  name: 'distinct',
                  description: null,
                  type: {
                    kind: 'SCALAR',
                    name: 'Boolean',
                    ofType: null,
                  },
                  defaultValue: null,
                },
              ],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'max',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: 'testUser_max_fields',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'min',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: 'testUser_min_fields',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'stddev',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: 'testUser_stddev_fields',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'stddev_pop',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: 'testUser_stddev_pop_fields',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'stddev_samp',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: 'testUser_stddev_samp_fields',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'sum',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: 'testUser_sum_fields',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'var_pop',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: 'testUser_var_pop_fields',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'var_samp',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: 'testUser_var_samp_fields',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'variance',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: 'testUser_variance_fields',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'testUser_avg_fields',
          description: 'aggregate avg on columns',
          fields: [
            {
              name: 'age',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Float',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'id',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Float',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'INPUT_OBJECT',
          name: 'testUser_bool_exp',
          description:
            'Boolean expression to filter rows from the table "testUser". All fields are combined with a logical \'AND\'.',
          fields: null,
          inputFields: [
            {
              name: '_and',
              description: null,
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'testUser_bool_exp',
                    ofType: null,
                  },
                },
              },
              defaultValue: null,
            },
            {
              name: '_not',
              description: null,
              type: {
                kind: 'INPUT_OBJECT',
                name: 'testUser_bool_exp',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: '_or',
              description: null,
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'testUser_bool_exp',
                    ofType: null,
                  },
                },
              },
              defaultValue: null,
            },
            {
              name: 'age',
              description: null,
              type: {
                kind: 'INPUT_OBJECT',
                name: 'Int_comparison_exp',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: 'firstname',
              description: null,
              type: {
                kind: 'INPUT_OBJECT',
                name: 'String_comparison_exp',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: 'id',
              description: null,
              type: {
                kind: 'INPUT_OBJECT',
                name: 'Int_comparison_exp',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: 'lastname',
              description: null,
              type: {
                kind: 'INPUT_OBJECT',
                name: 'String_comparison_exp',
                ofType: null,
              },
              defaultValue: null,
            },
          ],
          interfaces: null,
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'ENUM',
          name: 'testUser_constraint',
          description: 'unique or primary key constraints on table "testUser"',
          fields: null,
          inputFields: null,
          interfaces: null,
          enumValues: [
            {
              name: 'testUser_pkey',
              description: 'unique or primary key constraint',
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          possibleTypes: null,
        },
        {
          kind: 'INPUT_OBJECT',
          name: 'testUser_inc_input',
          description:
            'input type for incrementing numeric columns in table "testUser"',
          fields: null,
          inputFields: [
            {
              name: 'age',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: 'id',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
              defaultValue: null,
            },
          ],
          interfaces: null,
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'INPUT_OBJECT',
          name: 'testUser_insert_input',
          description: 'input type for inserting data into table "testUser"',
          fields: null,
          inputFields: [
            {
              name: 'age',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: 'firstname',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: 'id',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: 'lastname',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              defaultValue: null,
            },
          ],
          interfaces: null,
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'testUser_max_fields',
          description: 'aggregate max on columns',
          fields: [
            {
              name: 'age',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'firstname',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'id',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'lastname',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'testUser_min_fields',
          description: 'aggregate min on columns',
          fields: [
            {
              name: 'age',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'firstname',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'id',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'lastname',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'testUser_mutation_response',
          description: 'response of any mutation on the table "testUser"',
          fields: [
            {
              name: 'affected_rows',
              description: 'number of rows affected by the mutation',
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'returning',
              description: 'data from the rows affected by the mutation',
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'OBJECT',
                      name: 'testUser',
                      ofType: null,
                    },
                  },
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'INPUT_OBJECT',
          name: 'testUser_on_conflict',
          description: 'on conflict condition type for table "testUser"',
          fields: null,
          inputFields: [
            {
              name: 'constraint',
              description: null,
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'ENUM',
                  name: 'testUser_constraint',
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: 'update_columns',
              description: null,
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'ENUM',
                      name: 'testUser_update_column',
                      ofType: null,
                    },
                  },
                },
              },
              defaultValue: '[]',
            },
            {
              name: 'where',
              description: null,
              type: {
                kind: 'INPUT_OBJECT',
                name: 'testUser_bool_exp',
                ofType: null,
              },
              defaultValue: null,
            },
          ],
          interfaces: null,
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'INPUT_OBJECT',
          name: 'testUser_order_by',
          description: 'Ordering options when selecting data from "testUser".',
          fields: null,
          inputFields: [
            {
              name: 'age',
              description: null,
              type: {
                kind: 'ENUM',
                name: 'order_by',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: 'firstname',
              description: null,
              type: {
                kind: 'ENUM',
                name: 'order_by',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: 'id',
              description: null,
              type: {
                kind: 'ENUM',
                name: 'order_by',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: 'lastname',
              description: null,
              type: {
                kind: 'ENUM',
                name: 'order_by',
                ofType: null,
              },
              defaultValue: null,
            },
          ],
          interfaces: null,
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'INPUT_OBJECT',
          name: 'testUser_pk_columns_input',
          description: 'primary key columns input for table: testUser',
          fields: null,
          inputFields: [
            {
              name: 'id',
              description: null,
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
          interfaces: null,
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'ENUM',
          name: 'testUser_select_column',
          description: 'select columns of table "testUser"',
          fields: null,
          inputFields: null,
          interfaces: null,
          enumValues: [
            {
              name: 'age',
              description: 'column name',
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'firstname',
              description: 'column name',
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'id',
              description: 'column name',
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'lastname',
              description: 'column name',
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          possibleTypes: null,
        },
        {
          kind: 'INPUT_OBJECT',
          name: 'testUser_set_input',
          description: 'input type for updating data in table "testUser"',
          fields: null,
          inputFields: [
            {
              name: 'age',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: 'firstname',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: 'id',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: 'lastname',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              defaultValue: null,
            },
          ],
          interfaces: null,
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'testUser_stddev_fields',
          description: 'aggregate stddev on columns',
          fields: [
            {
              name: 'age',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Float',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'id',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Float',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'testUser_stddev_pop_fields',
          description: 'aggregate stddev_pop on columns',
          fields: [
            {
              name: 'age',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Float',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'id',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Float',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'testUser_stddev_samp_fields',
          description: 'aggregate stddev_samp on columns',
          fields: [
            {
              name: 'age',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Float',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'id',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Float',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'testUser_sum_fields',
          description: 'aggregate sum on columns',
          fields: [
            {
              name: 'age',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'id',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'ENUM',
          name: 'testUser_update_column',
          description: 'update columns of table "testUser"',
          fields: null,
          inputFields: null,
          interfaces: null,
          enumValues: [
            {
              name: 'age',
              description: 'column name',
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'firstname',
              description: 'column name',
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'id',
              description: 'column name',
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'lastname',
              description: 'column name',
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'testUser_var_pop_fields',
          description: 'aggregate var_pop on columns',
          fields: [
            {
              name: 'age',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Float',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'id',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Float',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'testUser_var_samp_fields',
          description: 'aggregate var_samp on columns',
          fields: [
            {
              name: 'age',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Float',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'id',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Float',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'testUser_variance_fields',
          description: 'aggregate variance on columns',
          fields: [
            {
              name: 'age',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Float',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: 'id',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Float',
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
      ],
      directives: [
        {
          name: 'include',
          description: 'whether this query should be included',
          locations: ['FIELD', 'FRAGMENT_SPREAD', 'INLINE_FRAGMENT'],
          args: [
            {
              name: 'if',
              description: null,
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
        },
        {
          name: 'skip',
          description: 'whether this query should be skipped',
          locations: ['FIELD', 'FRAGMENT_SPREAD', 'INLINE_FRAGMENT'],
          args: [
            {
              name: 'if',
              description: null,
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
        },
        {
          name: 'cached',
          description:
            'whether this query should be cached (Hasura Cloud only)',
          locations: ['QUERY'],
          args: [
            {
              name: 'ttl',
              description: 'measured in seconds',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null,
                },
              },
              defaultValue: '60',
            },
            {
              name: 'refresh',
              description: 'refresh the cache entry',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null,
                },
              },
              defaultValue: 'false',
            },
          ],
        },
      ],
    },
  },
};
