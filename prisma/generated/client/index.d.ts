
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Named_dialog
 * 
 */
export type Named_dialog = $Result.DefaultSelection<Prisma.$Named_dialogPayload>
/**
 * Model Dialog
 * 
 */
export type Dialog = $Result.DefaultSelection<Prisma.$DialogPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.named_dialog`: Exposes CRUD operations for the **Named_dialog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Named_dialogs
    * const named_dialogs = await prisma.named_dialog.findMany()
    * ```
    */
  get named_dialog(): Prisma.Named_dialogDelegate<ExtArgs>;

  /**
   * `prisma.dialog`: Exposes CRUD operations for the **Dialog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dialogs
    * const dialogs = await prisma.dialog.findMany()
    * ```
    */
  get dialog(): Prisma.DialogDelegate<ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Named_dialog: 'Named_dialog',
    Dialog: 'Dialog',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'named_dialog' | 'dialog' | 'message'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Named_dialog: {
        payload: Prisma.$Named_dialogPayload<ExtArgs>
        fields: Prisma.Named_dialogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Named_dialogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Named_dialogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Named_dialogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Named_dialogPayload>
          }
          findFirst: {
            args: Prisma.Named_dialogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Named_dialogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Named_dialogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Named_dialogPayload>
          }
          findMany: {
            args: Prisma.Named_dialogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Named_dialogPayload>[]
          }
          create: {
            args: Prisma.Named_dialogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Named_dialogPayload>
          }
          createMany: {
            args: Prisma.Named_dialogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Named_dialogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Named_dialogPayload>
          }
          update: {
            args: Prisma.Named_dialogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Named_dialogPayload>
          }
          deleteMany: {
            args: Prisma.Named_dialogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Named_dialogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Named_dialogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Named_dialogPayload>
          }
          aggregate: {
            args: Prisma.Named_dialogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNamed_dialog>
          }
          groupBy: {
            args: Prisma.Named_dialogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Named_dialogGroupByOutputType>[]
          }
          count: {
            args: Prisma.Named_dialogCountArgs<ExtArgs>,
            result: $Utils.Optional<Named_dialogCountAggregateOutputType> | number
          }
        }
      }
      Dialog: {
        payload: Prisma.$DialogPayload<ExtArgs>
        fields: Prisma.DialogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DialogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DialogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DialogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DialogPayload>
          }
          findFirst: {
            args: Prisma.DialogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DialogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DialogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DialogPayload>
          }
          findMany: {
            args: Prisma.DialogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DialogPayload>[]
          }
          create: {
            args: Prisma.DialogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DialogPayload>
          }
          createMany: {
            args: Prisma.DialogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DialogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DialogPayload>
          }
          update: {
            args: Prisma.DialogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DialogPayload>
          }
          deleteMany: {
            args: Prisma.DialogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DialogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DialogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DialogPayload>
          }
          aggregate: {
            args: Prisma.DialogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDialog>
          }
          groupBy: {
            args: Prisma.DialogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DialogGroupByOutputType>[]
          }
          count: {
            args: Prisma.DialogCountArgs<ExtArgs>,
            result: $Utils.Optional<DialogCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>,
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    dialogs: number
    Message: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dialogs?: boolean | UserCountOutputTypeCountDialogsArgs
    Message?: boolean | UserCountOutputTypeCountMessageArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDialogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Named_dialogWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }



  /**
   * Count Type DialogCountOutputType
   */

  export type DialogCountOutputType = {
    users_id: number
    messages: number
    named_dialogs: number
  }

  export type DialogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_id?: boolean | DialogCountOutputTypeCountUsers_idArgs
    messages?: boolean | DialogCountOutputTypeCountMessagesArgs
    named_dialogs?: boolean | DialogCountOutputTypeCountNamed_dialogsArgs
  }

  // Custom InputTypes

  /**
   * DialogCountOutputType without action
   */
  export type DialogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DialogCountOutputType
     */
    select?: DialogCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DialogCountOutputType without action
   */
  export type DialogCountOutputTypeCountUsers_idArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * DialogCountOutputType without action
   */
  export type DialogCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * DialogCountOutputType without action
   */
  export type DialogCountOutputTypeCountNamed_dialogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Named_dialogWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    dialogId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    dialogId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    pictureUrl: string | null
    dialogId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    pictureUrl: string | null
    dialogId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    username: number
    password: number
    createdAt: number
    pictureUrl: number
    dialogId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    dialogId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    dialogId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    pictureUrl?: true
    dialogId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    pictureUrl?: true
    dialogId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    pictureUrl?: true
    dialogId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string | null
    email: string
    username: string
    password: string
    createdAt: Date
    pictureUrl: string
    dialogId: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    pictureUrl?: boolean
    dialogId?: boolean
    dialogs?: boolean | User$dialogsArgs<ExtArgs>
    Message?: boolean | User$MessageArgs<ExtArgs>
    Dialog?: boolean | User$DialogArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    pictureUrl?: boolean
    dialogId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dialogs?: boolean | User$dialogsArgs<ExtArgs>
    Message?: boolean | User$MessageArgs<ExtArgs>
    Dialog?: boolean | User$DialogArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      dialogs: Prisma.$Named_dialogPayload<ExtArgs>[]
      Message: Prisma.$MessagePayload<ExtArgs>[]
      Dialog: Prisma.$DialogPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
      username: string
      password: string
      createdAt: Date
      pictureUrl: string
      dialogId: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    dialogs<T extends User$dialogsArgs<ExtArgs> = {}>(args?: Subset<T, User$dialogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Named_dialogPayload<ExtArgs>, T, 'findMany'> | Null>;

    Message<T extends User$MessageArgs<ExtArgs> = {}>(args?: Subset<T, User$MessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    Dialog<T extends User$DialogArgs<ExtArgs> = {}>(args?: Subset<T, User$DialogArgs<ExtArgs>>): Prisma__DialogClient<$Result.GetResult<Prisma.$DialogPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly pictureUrl: FieldRef<"User", 'String'>
    readonly dialogId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.dialogs
   */
  export type User$dialogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Named_dialog
     */
    select?: Named_dialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Named_dialogInclude<ExtArgs> | null
    where?: Named_dialogWhereInput
    orderBy?: Named_dialogOrderByWithRelationInput | Named_dialogOrderByWithRelationInput[]
    cursor?: Named_dialogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Named_dialogScalarFieldEnum | Named_dialogScalarFieldEnum[]
  }


  /**
   * User.Message
   */
  export type User$MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * User.Dialog
   */
  export type User$DialogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialog
     */
    select?: DialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DialogInclude<ExtArgs> | null
    where?: DialogWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Named_dialog
   */

  export type AggregateNamed_dialog = {
    _count: Named_dialogCountAggregateOutputType | null
    _avg: Named_dialogAvgAggregateOutputType | null
    _sum: Named_dialogSumAggregateOutputType | null
    _min: Named_dialogMinAggregateOutputType | null
    _max: Named_dialogMaxAggregateOutputType | null
  }

  export type Named_dialogAvgAggregateOutputType = {
    id: number | null
    dialogId: number | null
    userId: number | null
  }

  export type Named_dialogSumAggregateOutputType = {
    id: number | null
    dialogId: number | null
    userId: number | null
  }

  export type Named_dialogMinAggregateOutputType = {
    id: number | null
    name: string | null
    dialogId: number | null
    userId: number | null
  }

  export type Named_dialogMaxAggregateOutputType = {
    id: number | null
    name: string | null
    dialogId: number | null
    userId: number | null
  }

  export type Named_dialogCountAggregateOutputType = {
    id: number
    name: number
    dialogId: number
    userId: number
    _all: number
  }


  export type Named_dialogAvgAggregateInputType = {
    id?: true
    dialogId?: true
    userId?: true
  }

  export type Named_dialogSumAggregateInputType = {
    id?: true
    dialogId?: true
    userId?: true
  }

  export type Named_dialogMinAggregateInputType = {
    id?: true
    name?: true
    dialogId?: true
    userId?: true
  }

  export type Named_dialogMaxAggregateInputType = {
    id?: true
    name?: true
    dialogId?: true
    userId?: true
  }

  export type Named_dialogCountAggregateInputType = {
    id?: true
    name?: true
    dialogId?: true
    userId?: true
    _all?: true
  }

  export type Named_dialogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Named_dialog to aggregate.
     */
    where?: Named_dialogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Named_dialogs to fetch.
     */
    orderBy?: Named_dialogOrderByWithRelationInput | Named_dialogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Named_dialogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Named_dialogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Named_dialogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Named_dialogs
    **/
    _count?: true | Named_dialogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Named_dialogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Named_dialogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Named_dialogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Named_dialogMaxAggregateInputType
  }

  export type GetNamed_dialogAggregateType<T extends Named_dialogAggregateArgs> = {
        [P in keyof T & keyof AggregateNamed_dialog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNamed_dialog[P]>
      : GetScalarType<T[P], AggregateNamed_dialog[P]>
  }




  export type Named_dialogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Named_dialogWhereInput
    orderBy?: Named_dialogOrderByWithAggregationInput | Named_dialogOrderByWithAggregationInput[]
    by: Named_dialogScalarFieldEnum[] | Named_dialogScalarFieldEnum
    having?: Named_dialogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Named_dialogCountAggregateInputType | true
    _avg?: Named_dialogAvgAggregateInputType
    _sum?: Named_dialogSumAggregateInputType
    _min?: Named_dialogMinAggregateInputType
    _max?: Named_dialogMaxAggregateInputType
  }

  export type Named_dialogGroupByOutputType = {
    id: number
    name: string
    dialogId: number
    userId: number | null
    _count: Named_dialogCountAggregateOutputType | null
    _avg: Named_dialogAvgAggregateOutputType | null
    _sum: Named_dialogSumAggregateOutputType | null
    _min: Named_dialogMinAggregateOutputType | null
    _max: Named_dialogMaxAggregateOutputType | null
  }

  type GetNamed_dialogGroupByPayload<T extends Named_dialogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Named_dialogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Named_dialogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Named_dialogGroupByOutputType[P]>
            : GetScalarType<T[P], Named_dialogGroupByOutputType[P]>
        }
      >
    >


  export type Named_dialogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dialogId?: boolean
    userId?: boolean
    dialog?: boolean | DialogDefaultArgs<ExtArgs>
    User?: boolean | Named_dialog$UserArgs<ExtArgs>
  }, ExtArgs["result"]["named_dialog"]>

  export type Named_dialogSelectScalar = {
    id?: boolean
    name?: boolean
    dialogId?: boolean
    userId?: boolean
  }

  export type Named_dialogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dialog?: boolean | DialogDefaultArgs<ExtArgs>
    User?: boolean | Named_dialog$UserArgs<ExtArgs>
  }


  export type $Named_dialogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Named_dialog"
    objects: {
      dialog: Prisma.$DialogPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      dialogId: number
      userId: number | null
    }, ExtArgs["result"]["named_dialog"]>
    composites: {}
  }


  type Named_dialogGetPayload<S extends boolean | null | undefined | Named_dialogDefaultArgs> = $Result.GetResult<Prisma.$Named_dialogPayload, S>

  type Named_dialogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Named_dialogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Named_dialogCountAggregateInputType | true
    }

  export interface Named_dialogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Named_dialog'], meta: { name: 'Named_dialog' } }
    /**
     * Find zero or one Named_dialog that matches the filter.
     * @param {Named_dialogFindUniqueArgs} args - Arguments to find a Named_dialog
     * @example
     * // Get one Named_dialog
     * const named_dialog = await prisma.named_dialog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Named_dialogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Named_dialogFindUniqueArgs<ExtArgs>>
    ): Prisma__Named_dialogClient<$Result.GetResult<Prisma.$Named_dialogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Named_dialog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Named_dialogFindUniqueOrThrowArgs} args - Arguments to find a Named_dialog
     * @example
     * // Get one Named_dialog
     * const named_dialog = await prisma.named_dialog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Named_dialogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Named_dialogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Named_dialogClient<$Result.GetResult<Prisma.$Named_dialogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Named_dialog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Named_dialogFindFirstArgs} args - Arguments to find a Named_dialog
     * @example
     * // Get one Named_dialog
     * const named_dialog = await prisma.named_dialog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Named_dialogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Named_dialogFindFirstArgs<ExtArgs>>
    ): Prisma__Named_dialogClient<$Result.GetResult<Prisma.$Named_dialogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Named_dialog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Named_dialogFindFirstOrThrowArgs} args - Arguments to find a Named_dialog
     * @example
     * // Get one Named_dialog
     * const named_dialog = await prisma.named_dialog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Named_dialogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Named_dialogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Named_dialogClient<$Result.GetResult<Prisma.$Named_dialogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Named_dialogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Named_dialogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Named_dialogs
     * const named_dialogs = await prisma.named_dialog.findMany()
     * 
     * // Get first 10 Named_dialogs
     * const named_dialogs = await prisma.named_dialog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const named_dialogWithIdOnly = await prisma.named_dialog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Named_dialogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Named_dialogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Named_dialogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Named_dialog.
     * @param {Named_dialogCreateArgs} args - Arguments to create a Named_dialog.
     * @example
     * // Create one Named_dialog
     * const Named_dialog = await prisma.named_dialog.create({
     *   data: {
     *     // ... data to create a Named_dialog
     *   }
     * })
     * 
    **/
    create<T extends Named_dialogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Named_dialogCreateArgs<ExtArgs>>
    ): Prisma__Named_dialogClient<$Result.GetResult<Prisma.$Named_dialogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Named_dialogs.
     *     @param {Named_dialogCreateManyArgs} args - Arguments to create many Named_dialogs.
     *     @example
     *     // Create many Named_dialogs
     *     const named_dialog = await prisma.named_dialog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Named_dialogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Named_dialogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Named_dialog.
     * @param {Named_dialogDeleteArgs} args - Arguments to delete one Named_dialog.
     * @example
     * // Delete one Named_dialog
     * const Named_dialog = await prisma.named_dialog.delete({
     *   where: {
     *     // ... filter to delete one Named_dialog
     *   }
     * })
     * 
    **/
    delete<T extends Named_dialogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Named_dialogDeleteArgs<ExtArgs>>
    ): Prisma__Named_dialogClient<$Result.GetResult<Prisma.$Named_dialogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Named_dialog.
     * @param {Named_dialogUpdateArgs} args - Arguments to update one Named_dialog.
     * @example
     * // Update one Named_dialog
     * const named_dialog = await prisma.named_dialog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Named_dialogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Named_dialogUpdateArgs<ExtArgs>>
    ): Prisma__Named_dialogClient<$Result.GetResult<Prisma.$Named_dialogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Named_dialogs.
     * @param {Named_dialogDeleteManyArgs} args - Arguments to filter Named_dialogs to delete.
     * @example
     * // Delete a few Named_dialogs
     * const { count } = await prisma.named_dialog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Named_dialogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Named_dialogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Named_dialogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Named_dialogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Named_dialogs
     * const named_dialog = await prisma.named_dialog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Named_dialogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Named_dialogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Named_dialog.
     * @param {Named_dialogUpsertArgs} args - Arguments to update or create a Named_dialog.
     * @example
     * // Update or create a Named_dialog
     * const named_dialog = await prisma.named_dialog.upsert({
     *   create: {
     *     // ... data to create a Named_dialog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Named_dialog we want to update
     *   }
     * })
    **/
    upsert<T extends Named_dialogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Named_dialogUpsertArgs<ExtArgs>>
    ): Prisma__Named_dialogClient<$Result.GetResult<Prisma.$Named_dialogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Named_dialogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Named_dialogCountArgs} args - Arguments to filter Named_dialogs to count.
     * @example
     * // Count the number of Named_dialogs
     * const count = await prisma.named_dialog.count({
     *   where: {
     *     // ... the filter for the Named_dialogs we want to count
     *   }
     * })
    **/
    count<T extends Named_dialogCountArgs>(
      args?: Subset<T, Named_dialogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Named_dialogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Named_dialog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Named_dialogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Named_dialogAggregateArgs>(args: Subset<T, Named_dialogAggregateArgs>): Prisma.PrismaPromise<GetNamed_dialogAggregateType<T>>

    /**
     * Group by Named_dialog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Named_dialogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Named_dialogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Named_dialogGroupByArgs['orderBy'] }
        : { orderBy?: Named_dialogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Named_dialogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNamed_dialogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Named_dialog model
   */
  readonly fields: Named_dialogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Named_dialog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Named_dialogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    dialog<T extends DialogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DialogDefaultArgs<ExtArgs>>): Prisma__DialogClient<$Result.GetResult<Prisma.$DialogPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    User<T extends Named_dialog$UserArgs<ExtArgs> = {}>(args?: Subset<T, Named_dialog$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Named_dialog model
   */ 
  interface Named_dialogFieldRefs {
    readonly id: FieldRef<"Named_dialog", 'Int'>
    readonly name: FieldRef<"Named_dialog", 'String'>
    readonly dialogId: FieldRef<"Named_dialog", 'Int'>
    readonly userId: FieldRef<"Named_dialog", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Named_dialog findUnique
   */
  export type Named_dialogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Named_dialog
     */
    select?: Named_dialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Named_dialogInclude<ExtArgs> | null
    /**
     * Filter, which Named_dialog to fetch.
     */
    where: Named_dialogWhereUniqueInput
  }


  /**
   * Named_dialog findUniqueOrThrow
   */
  export type Named_dialogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Named_dialog
     */
    select?: Named_dialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Named_dialogInclude<ExtArgs> | null
    /**
     * Filter, which Named_dialog to fetch.
     */
    where: Named_dialogWhereUniqueInput
  }


  /**
   * Named_dialog findFirst
   */
  export type Named_dialogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Named_dialog
     */
    select?: Named_dialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Named_dialogInclude<ExtArgs> | null
    /**
     * Filter, which Named_dialog to fetch.
     */
    where?: Named_dialogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Named_dialogs to fetch.
     */
    orderBy?: Named_dialogOrderByWithRelationInput | Named_dialogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Named_dialogs.
     */
    cursor?: Named_dialogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Named_dialogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Named_dialogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Named_dialogs.
     */
    distinct?: Named_dialogScalarFieldEnum | Named_dialogScalarFieldEnum[]
  }


  /**
   * Named_dialog findFirstOrThrow
   */
  export type Named_dialogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Named_dialog
     */
    select?: Named_dialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Named_dialogInclude<ExtArgs> | null
    /**
     * Filter, which Named_dialog to fetch.
     */
    where?: Named_dialogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Named_dialogs to fetch.
     */
    orderBy?: Named_dialogOrderByWithRelationInput | Named_dialogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Named_dialogs.
     */
    cursor?: Named_dialogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Named_dialogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Named_dialogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Named_dialogs.
     */
    distinct?: Named_dialogScalarFieldEnum | Named_dialogScalarFieldEnum[]
  }


  /**
   * Named_dialog findMany
   */
  export type Named_dialogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Named_dialog
     */
    select?: Named_dialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Named_dialogInclude<ExtArgs> | null
    /**
     * Filter, which Named_dialogs to fetch.
     */
    where?: Named_dialogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Named_dialogs to fetch.
     */
    orderBy?: Named_dialogOrderByWithRelationInput | Named_dialogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Named_dialogs.
     */
    cursor?: Named_dialogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Named_dialogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Named_dialogs.
     */
    skip?: number
    distinct?: Named_dialogScalarFieldEnum | Named_dialogScalarFieldEnum[]
  }


  /**
   * Named_dialog create
   */
  export type Named_dialogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Named_dialog
     */
    select?: Named_dialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Named_dialogInclude<ExtArgs> | null
    /**
     * The data needed to create a Named_dialog.
     */
    data: XOR<Named_dialogCreateInput, Named_dialogUncheckedCreateInput>
  }


  /**
   * Named_dialog createMany
   */
  export type Named_dialogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Named_dialogs.
     */
    data: Named_dialogCreateManyInput | Named_dialogCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Named_dialog update
   */
  export type Named_dialogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Named_dialog
     */
    select?: Named_dialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Named_dialogInclude<ExtArgs> | null
    /**
     * The data needed to update a Named_dialog.
     */
    data: XOR<Named_dialogUpdateInput, Named_dialogUncheckedUpdateInput>
    /**
     * Choose, which Named_dialog to update.
     */
    where: Named_dialogWhereUniqueInput
  }


  /**
   * Named_dialog updateMany
   */
  export type Named_dialogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Named_dialogs.
     */
    data: XOR<Named_dialogUpdateManyMutationInput, Named_dialogUncheckedUpdateManyInput>
    /**
     * Filter which Named_dialogs to update
     */
    where?: Named_dialogWhereInput
  }


  /**
   * Named_dialog upsert
   */
  export type Named_dialogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Named_dialog
     */
    select?: Named_dialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Named_dialogInclude<ExtArgs> | null
    /**
     * The filter to search for the Named_dialog to update in case it exists.
     */
    where: Named_dialogWhereUniqueInput
    /**
     * In case the Named_dialog found by the `where` argument doesn't exist, create a new Named_dialog with this data.
     */
    create: XOR<Named_dialogCreateInput, Named_dialogUncheckedCreateInput>
    /**
     * In case the Named_dialog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Named_dialogUpdateInput, Named_dialogUncheckedUpdateInput>
  }


  /**
   * Named_dialog delete
   */
  export type Named_dialogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Named_dialog
     */
    select?: Named_dialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Named_dialogInclude<ExtArgs> | null
    /**
     * Filter which Named_dialog to delete.
     */
    where: Named_dialogWhereUniqueInput
  }


  /**
   * Named_dialog deleteMany
   */
  export type Named_dialogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Named_dialogs to delete
     */
    where?: Named_dialogWhereInput
  }


  /**
   * Named_dialog.User
   */
  export type Named_dialog$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Named_dialog without action
   */
  export type Named_dialogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Named_dialog
     */
    select?: Named_dialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Named_dialogInclude<ExtArgs> | null
  }



  /**
   * Model Dialog
   */

  export type AggregateDialog = {
    _count: DialogCountAggregateOutputType | null
    _avg: DialogAvgAggregateOutputType | null
    _sum: DialogSumAggregateOutputType | null
    _min: DialogMinAggregateOutputType | null
    _max: DialogMaxAggregateOutputType | null
  }

  export type DialogAvgAggregateOutputType = {
    id: number | null
  }

  export type DialogSumAggregateOutputType = {
    id: number | null
  }

  export type DialogMinAggregateOutputType = {
    id: number | null
    pictureUrl: string | null
    lastMessage: string | null
    sentTime: Date | null
  }

  export type DialogMaxAggregateOutputType = {
    id: number | null
    pictureUrl: string | null
    lastMessage: string | null
    sentTime: Date | null
  }

  export type DialogCountAggregateOutputType = {
    id: number
    pictureUrl: number
    lastMessage: number
    sentTime: number
    _all: number
  }


  export type DialogAvgAggregateInputType = {
    id?: true
  }

  export type DialogSumAggregateInputType = {
    id?: true
  }

  export type DialogMinAggregateInputType = {
    id?: true
    pictureUrl?: true
    lastMessage?: true
    sentTime?: true
  }

  export type DialogMaxAggregateInputType = {
    id?: true
    pictureUrl?: true
    lastMessage?: true
    sentTime?: true
  }

  export type DialogCountAggregateInputType = {
    id?: true
    pictureUrl?: true
    lastMessage?: true
    sentTime?: true
    _all?: true
  }

  export type DialogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dialog to aggregate.
     */
    where?: DialogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dialogs to fetch.
     */
    orderBy?: DialogOrderByWithRelationInput | DialogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DialogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dialogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dialogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dialogs
    **/
    _count?: true | DialogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DialogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DialogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DialogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DialogMaxAggregateInputType
  }

  export type GetDialogAggregateType<T extends DialogAggregateArgs> = {
        [P in keyof T & keyof AggregateDialog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDialog[P]>
      : GetScalarType<T[P], AggregateDialog[P]>
  }




  export type DialogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DialogWhereInput
    orderBy?: DialogOrderByWithAggregationInput | DialogOrderByWithAggregationInput[]
    by: DialogScalarFieldEnum[] | DialogScalarFieldEnum
    having?: DialogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DialogCountAggregateInputType | true
    _avg?: DialogAvgAggregateInputType
    _sum?: DialogSumAggregateInputType
    _min?: DialogMinAggregateInputType
    _max?: DialogMaxAggregateInputType
  }

  export type DialogGroupByOutputType = {
    id: number
    pictureUrl: string | null
    lastMessage: string | null
    sentTime: Date | null
    _count: DialogCountAggregateOutputType | null
    _avg: DialogAvgAggregateOutputType | null
    _sum: DialogSumAggregateOutputType | null
    _min: DialogMinAggregateOutputType | null
    _max: DialogMaxAggregateOutputType | null
  }

  type GetDialogGroupByPayload<T extends DialogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DialogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DialogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DialogGroupByOutputType[P]>
            : GetScalarType<T[P], DialogGroupByOutputType[P]>
        }
      >
    >


  export type DialogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pictureUrl?: boolean
    lastMessage?: boolean
    sentTime?: boolean
    users_id?: boolean | Dialog$users_idArgs<ExtArgs>
    messages?: boolean | Dialog$messagesArgs<ExtArgs>
    named_dialogs?: boolean | Dialog$named_dialogsArgs<ExtArgs>
    _count?: boolean | DialogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dialog"]>

  export type DialogSelectScalar = {
    id?: boolean
    pictureUrl?: boolean
    lastMessage?: boolean
    sentTime?: boolean
  }

  export type DialogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_id?: boolean | Dialog$users_idArgs<ExtArgs>
    messages?: boolean | Dialog$messagesArgs<ExtArgs>
    named_dialogs?: boolean | Dialog$named_dialogsArgs<ExtArgs>
    _count?: boolean | DialogCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DialogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dialog"
    objects: {
      users_id: Prisma.$UserPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      named_dialogs: Prisma.$Named_dialogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pictureUrl: string | null
      lastMessage: string | null
      sentTime: Date | null
    }, ExtArgs["result"]["dialog"]>
    composites: {}
  }


  type DialogGetPayload<S extends boolean | null | undefined | DialogDefaultArgs> = $Result.GetResult<Prisma.$DialogPayload, S>

  type DialogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DialogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DialogCountAggregateInputType | true
    }

  export interface DialogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dialog'], meta: { name: 'Dialog' } }
    /**
     * Find zero or one Dialog that matches the filter.
     * @param {DialogFindUniqueArgs} args - Arguments to find a Dialog
     * @example
     * // Get one Dialog
     * const dialog = await prisma.dialog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DialogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DialogFindUniqueArgs<ExtArgs>>
    ): Prisma__DialogClient<$Result.GetResult<Prisma.$DialogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Dialog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DialogFindUniqueOrThrowArgs} args - Arguments to find a Dialog
     * @example
     * // Get one Dialog
     * const dialog = await prisma.dialog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DialogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DialogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DialogClient<$Result.GetResult<Prisma.$DialogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Dialog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DialogFindFirstArgs} args - Arguments to find a Dialog
     * @example
     * // Get one Dialog
     * const dialog = await prisma.dialog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DialogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DialogFindFirstArgs<ExtArgs>>
    ): Prisma__DialogClient<$Result.GetResult<Prisma.$DialogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Dialog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DialogFindFirstOrThrowArgs} args - Arguments to find a Dialog
     * @example
     * // Get one Dialog
     * const dialog = await prisma.dialog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DialogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DialogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DialogClient<$Result.GetResult<Prisma.$DialogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Dialogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DialogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dialogs
     * const dialogs = await prisma.dialog.findMany()
     * 
     * // Get first 10 Dialogs
     * const dialogs = await prisma.dialog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dialogWithIdOnly = await prisma.dialog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DialogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DialogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DialogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Dialog.
     * @param {DialogCreateArgs} args - Arguments to create a Dialog.
     * @example
     * // Create one Dialog
     * const Dialog = await prisma.dialog.create({
     *   data: {
     *     // ... data to create a Dialog
     *   }
     * })
     * 
    **/
    create<T extends DialogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DialogCreateArgs<ExtArgs>>
    ): Prisma__DialogClient<$Result.GetResult<Prisma.$DialogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Dialogs.
     *     @param {DialogCreateManyArgs} args - Arguments to create many Dialogs.
     *     @example
     *     // Create many Dialogs
     *     const dialog = await prisma.dialog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DialogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DialogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dialog.
     * @param {DialogDeleteArgs} args - Arguments to delete one Dialog.
     * @example
     * // Delete one Dialog
     * const Dialog = await prisma.dialog.delete({
     *   where: {
     *     // ... filter to delete one Dialog
     *   }
     * })
     * 
    **/
    delete<T extends DialogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DialogDeleteArgs<ExtArgs>>
    ): Prisma__DialogClient<$Result.GetResult<Prisma.$DialogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Dialog.
     * @param {DialogUpdateArgs} args - Arguments to update one Dialog.
     * @example
     * // Update one Dialog
     * const dialog = await prisma.dialog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DialogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DialogUpdateArgs<ExtArgs>>
    ): Prisma__DialogClient<$Result.GetResult<Prisma.$DialogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Dialogs.
     * @param {DialogDeleteManyArgs} args - Arguments to filter Dialogs to delete.
     * @example
     * // Delete a few Dialogs
     * const { count } = await prisma.dialog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DialogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DialogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dialogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DialogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dialogs
     * const dialog = await prisma.dialog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DialogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DialogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dialog.
     * @param {DialogUpsertArgs} args - Arguments to update or create a Dialog.
     * @example
     * // Update or create a Dialog
     * const dialog = await prisma.dialog.upsert({
     *   create: {
     *     // ... data to create a Dialog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dialog we want to update
     *   }
     * })
    **/
    upsert<T extends DialogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DialogUpsertArgs<ExtArgs>>
    ): Prisma__DialogClient<$Result.GetResult<Prisma.$DialogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Dialogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DialogCountArgs} args - Arguments to filter Dialogs to count.
     * @example
     * // Count the number of Dialogs
     * const count = await prisma.dialog.count({
     *   where: {
     *     // ... the filter for the Dialogs we want to count
     *   }
     * })
    **/
    count<T extends DialogCountArgs>(
      args?: Subset<T, DialogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DialogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dialog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DialogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DialogAggregateArgs>(args: Subset<T, DialogAggregateArgs>): Prisma.PrismaPromise<GetDialogAggregateType<T>>

    /**
     * Group by Dialog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DialogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DialogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DialogGroupByArgs['orderBy'] }
        : { orderBy?: DialogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DialogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDialogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dialog model
   */
  readonly fields: DialogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dialog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DialogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users_id<T extends Dialog$users_idArgs<ExtArgs> = {}>(args?: Subset<T, Dialog$users_idArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    messages<T extends Dialog$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Dialog$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    named_dialogs<T extends Dialog$named_dialogsArgs<ExtArgs> = {}>(args?: Subset<T, Dialog$named_dialogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Named_dialogPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Dialog model
   */ 
  interface DialogFieldRefs {
    readonly id: FieldRef<"Dialog", 'Int'>
    readonly pictureUrl: FieldRef<"Dialog", 'String'>
    readonly lastMessage: FieldRef<"Dialog", 'String'>
    readonly sentTime: FieldRef<"Dialog", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Dialog findUnique
   */
  export type DialogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialog
     */
    select?: DialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DialogInclude<ExtArgs> | null
    /**
     * Filter, which Dialog to fetch.
     */
    where: DialogWhereUniqueInput
  }


  /**
   * Dialog findUniqueOrThrow
   */
  export type DialogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialog
     */
    select?: DialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DialogInclude<ExtArgs> | null
    /**
     * Filter, which Dialog to fetch.
     */
    where: DialogWhereUniqueInput
  }


  /**
   * Dialog findFirst
   */
  export type DialogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialog
     */
    select?: DialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DialogInclude<ExtArgs> | null
    /**
     * Filter, which Dialog to fetch.
     */
    where?: DialogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dialogs to fetch.
     */
    orderBy?: DialogOrderByWithRelationInput | DialogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dialogs.
     */
    cursor?: DialogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dialogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dialogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dialogs.
     */
    distinct?: DialogScalarFieldEnum | DialogScalarFieldEnum[]
  }


  /**
   * Dialog findFirstOrThrow
   */
  export type DialogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialog
     */
    select?: DialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DialogInclude<ExtArgs> | null
    /**
     * Filter, which Dialog to fetch.
     */
    where?: DialogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dialogs to fetch.
     */
    orderBy?: DialogOrderByWithRelationInput | DialogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dialogs.
     */
    cursor?: DialogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dialogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dialogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dialogs.
     */
    distinct?: DialogScalarFieldEnum | DialogScalarFieldEnum[]
  }


  /**
   * Dialog findMany
   */
  export type DialogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialog
     */
    select?: DialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DialogInclude<ExtArgs> | null
    /**
     * Filter, which Dialogs to fetch.
     */
    where?: DialogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dialogs to fetch.
     */
    orderBy?: DialogOrderByWithRelationInput | DialogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dialogs.
     */
    cursor?: DialogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dialogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dialogs.
     */
    skip?: number
    distinct?: DialogScalarFieldEnum | DialogScalarFieldEnum[]
  }


  /**
   * Dialog create
   */
  export type DialogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialog
     */
    select?: DialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DialogInclude<ExtArgs> | null
    /**
     * The data needed to create a Dialog.
     */
    data?: XOR<DialogCreateInput, DialogUncheckedCreateInput>
  }


  /**
   * Dialog createMany
   */
  export type DialogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dialogs.
     */
    data: DialogCreateManyInput | DialogCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Dialog update
   */
  export type DialogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialog
     */
    select?: DialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DialogInclude<ExtArgs> | null
    /**
     * The data needed to update a Dialog.
     */
    data: XOR<DialogUpdateInput, DialogUncheckedUpdateInput>
    /**
     * Choose, which Dialog to update.
     */
    where: DialogWhereUniqueInput
  }


  /**
   * Dialog updateMany
   */
  export type DialogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dialogs.
     */
    data: XOR<DialogUpdateManyMutationInput, DialogUncheckedUpdateManyInput>
    /**
     * Filter which Dialogs to update
     */
    where?: DialogWhereInput
  }


  /**
   * Dialog upsert
   */
  export type DialogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialog
     */
    select?: DialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DialogInclude<ExtArgs> | null
    /**
     * The filter to search for the Dialog to update in case it exists.
     */
    where: DialogWhereUniqueInput
    /**
     * In case the Dialog found by the `where` argument doesn't exist, create a new Dialog with this data.
     */
    create: XOR<DialogCreateInput, DialogUncheckedCreateInput>
    /**
     * In case the Dialog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DialogUpdateInput, DialogUncheckedUpdateInput>
  }


  /**
   * Dialog delete
   */
  export type DialogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialog
     */
    select?: DialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DialogInclude<ExtArgs> | null
    /**
     * Filter which Dialog to delete.
     */
    where: DialogWhereUniqueInput
  }


  /**
   * Dialog deleteMany
   */
  export type DialogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dialogs to delete
     */
    where?: DialogWhereInput
  }


  /**
   * Dialog.users_id
   */
  export type Dialog$users_idArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Dialog.messages
   */
  export type Dialog$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Dialog.named_dialogs
   */
  export type Dialog$named_dialogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Named_dialog
     */
    select?: Named_dialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Named_dialogInclude<ExtArgs> | null
    where?: Named_dialogWhereInput
    orderBy?: Named_dialogOrderByWithRelationInput | Named_dialogOrderByWithRelationInput[]
    cursor?: Named_dialogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Named_dialogScalarFieldEnum | Named_dialogScalarFieldEnum[]
  }


  /**
   * Dialog without action
   */
  export type DialogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dialog
     */
    select?: DialogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DialogInclude<ExtArgs> | null
  }



  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    dialogId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    dialogId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    text: string | null
    createdAt: Date | null
    senderId: number | null
    dialogId: number | null
    isRead: boolean | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    text: string | null
    createdAt: Date | null
    senderId: number | null
    dialogId: number | null
    isRead: boolean | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    text: number
    createdAt: number
    senderId: number
    dialogId: number
    isRead: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    senderId?: true
    dialogId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    senderId?: true
    dialogId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    senderId?: true
    dialogId?: true
    isRead?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    senderId?: true
    dialogId?: true
    isRead?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    senderId?: true
    dialogId?: true
    isRead?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    text: string
    createdAt: Date
    senderId: number
    dialogId: number
    isRead: boolean
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    createdAt?: boolean
    senderId?: boolean
    dialogId?: boolean
    isRead?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    Dialog?: boolean | DialogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    text?: boolean
    createdAt?: boolean
    senderId?: boolean
    dialogId?: boolean
    isRead?: boolean
  }

  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    Dialog?: boolean | DialogDefaultArgs<ExtArgs>
  }


  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      Dialog: Prisma.$DialogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      createdAt: Date
      senderId: number
      dialogId: number
      isRead: boolean
    }, ExtArgs["result"]["message"]>
    composites: {}
  }


  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Message that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
    **/
    create<T extends MessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageCreateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Messages.
     *     @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     *     @example
     *     // Create many Messages
     *     const message = await prisma.message.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
    **/
    delete<T extends MessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
    **/
    upsert<T extends MessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Dialog<T extends DialogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DialogDefaultArgs<ExtArgs>>): Prisma__DialogClient<$Result.GetResult<Prisma.$DialogPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Message model
   */ 
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly text: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly senderId: FieldRef<"Message", 'Int'>
    readonly dialogId: FieldRef<"Message", 'Int'>
    readonly isRead: FieldRef<"Message", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }


  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }


  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }


  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }


  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    pictureUrl: 'pictureUrl',
    dialogId: 'dialogId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Named_dialogScalarFieldEnum: {
    id: 'id',
    name: 'name',
    dialogId: 'dialogId',
    userId: 'userId'
  };

  export type Named_dialogScalarFieldEnum = (typeof Named_dialogScalarFieldEnum)[keyof typeof Named_dialogScalarFieldEnum]


  export const DialogScalarFieldEnum: {
    id: 'id',
    pictureUrl: 'pictureUrl',
    lastMessage: 'lastMessage',
    sentTime: 'sentTime'
  };

  export type DialogScalarFieldEnum = (typeof DialogScalarFieldEnum)[keyof typeof DialogScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    text: 'text',
    createdAt: 'createdAt',
    senderId: 'senderId',
    dialogId: 'dialogId',
    isRead: 'isRead'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    pictureUrl?: StringFilter<"User"> | string
    dialogId?: IntNullableFilter<"User"> | number | null
    dialogs?: Named_dialogListRelationFilter
    Message?: MessageListRelationFilter
    Dialog?: XOR<DialogNullableRelationFilter, DialogWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    pictureUrl?: SortOrder
    dialogId?: SortOrderInput | SortOrder
    dialogs?: Named_dialogOrderByRelationAggregateInput
    Message?: MessageOrderByRelationAggregateInput
    Dialog?: DialogOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    pictureUrl?: StringFilter<"User"> | string
    dialogId?: IntNullableFilter<"User"> | number | null
    dialogs?: Named_dialogListRelationFilter
    Message?: MessageListRelationFilter
    Dialog?: XOR<DialogNullableRelationFilter, DialogWhereInput> | null
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    pictureUrl?: SortOrder
    dialogId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    pictureUrl?: StringWithAggregatesFilter<"User"> | string
    dialogId?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type Named_dialogWhereInput = {
    AND?: Named_dialogWhereInput | Named_dialogWhereInput[]
    OR?: Named_dialogWhereInput[]
    NOT?: Named_dialogWhereInput | Named_dialogWhereInput[]
    id?: IntFilter<"Named_dialog"> | number
    name?: StringFilter<"Named_dialog"> | string
    dialogId?: IntFilter<"Named_dialog"> | number
    userId?: IntNullableFilter<"Named_dialog"> | number | null
    dialog?: XOR<DialogRelationFilter, DialogWhereInput>
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type Named_dialogOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    dialogId?: SortOrder
    userId?: SortOrderInput | SortOrder
    dialog?: DialogOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type Named_dialogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Named_dialogWhereInput | Named_dialogWhereInput[]
    OR?: Named_dialogWhereInput[]
    NOT?: Named_dialogWhereInput | Named_dialogWhereInput[]
    name?: StringFilter<"Named_dialog"> | string
    dialogId?: IntFilter<"Named_dialog"> | number
    userId?: IntNullableFilter<"Named_dialog"> | number | null
    dialog?: XOR<DialogRelationFilter, DialogWhereInput>
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type Named_dialogOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    dialogId?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: Named_dialogCountOrderByAggregateInput
    _avg?: Named_dialogAvgOrderByAggregateInput
    _max?: Named_dialogMaxOrderByAggregateInput
    _min?: Named_dialogMinOrderByAggregateInput
    _sum?: Named_dialogSumOrderByAggregateInput
  }

  export type Named_dialogScalarWhereWithAggregatesInput = {
    AND?: Named_dialogScalarWhereWithAggregatesInput | Named_dialogScalarWhereWithAggregatesInput[]
    OR?: Named_dialogScalarWhereWithAggregatesInput[]
    NOT?: Named_dialogScalarWhereWithAggregatesInput | Named_dialogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Named_dialog"> | number
    name?: StringWithAggregatesFilter<"Named_dialog"> | string
    dialogId?: IntWithAggregatesFilter<"Named_dialog"> | number
    userId?: IntNullableWithAggregatesFilter<"Named_dialog"> | number | null
  }

  export type DialogWhereInput = {
    AND?: DialogWhereInput | DialogWhereInput[]
    OR?: DialogWhereInput[]
    NOT?: DialogWhereInput | DialogWhereInput[]
    id?: IntFilter<"Dialog"> | number
    pictureUrl?: StringNullableFilter<"Dialog"> | string | null
    lastMessage?: StringNullableFilter<"Dialog"> | string | null
    sentTime?: DateTimeNullableFilter<"Dialog"> | Date | string | null
    users_id?: UserListRelationFilter
    messages?: MessageListRelationFilter
    named_dialogs?: Named_dialogListRelationFilter
  }

  export type DialogOrderByWithRelationInput = {
    id?: SortOrder
    pictureUrl?: SortOrderInput | SortOrder
    lastMessage?: SortOrderInput | SortOrder
    sentTime?: SortOrderInput | SortOrder
    users_id?: UserOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    named_dialogs?: Named_dialogOrderByRelationAggregateInput
  }

  export type DialogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DialogWhereInput | DialogWhereInput[]
    OR?: DialogWhereInput[]
    NOT?: DialogWhereInput | DialogWhereInput[]
    pictureUrl?: StringNullableFilter<"Dialog"> | string | null
    lastMessage?: StringNullableFilter<"Dialog"> | string | null
    sentTime?: DateTimeNullableFilter<"Dialog"> | Date | string | null
    users_id?: UserListRelationFilter
    messages?: MessageListRelationFilter
    named_dialogs?: Named_dialogListRelationFilter
  }, "id">

  export type DialogOrderByWithAggregationInput = {
    id?: SortOrder
    pictureUrl?: SortOrderInput | SortOrder
    lastMessage?: SortOrderInput | SortOrder
    sentTime?: SortOrderInput | SortOrder
    _count?: DialogCountOrderByAggregateInput
    _avg?: DialogAvgOrderByAggregateInput
    _max?: DialogMaxOrderByAggregateInput
    _min?: DialogMinOrderByAggregateInput
    _sum?: DialogSumOrderByAggregateInput
  }

  export type DialogScalarWhereWithAggregatesInput = {
    AND?: DialogScalarWhereWithAggregatesInput | DialogScalarWhereWithAggregatesInput[]
    OR?: DialogScalarWhereWithAggregatesInput[]
    NOT?: DialogScalarWhereWithAggregatesInput | DialogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dialog"> | number
    pictureUrl?: StringNullableWithAggregatesFilter<"Dialog"> | string | null
    lastMessage?: StringNullableWithAggregatesFilter<"Dialog"> | string | null
    sentTime?: DateTimeNullableWithAggregatesFilter<"Dialog"> | Date | string | null
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    text?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    senderId?: IntFilter<"Message"> | number
    dialogId?: IntFilter<"Message"> | number
    isRead?: BoolFilter<"Message"> | boolean
    sender?: XOR<UserRelationFilter, UserWhereInput>
    Dialog?: XOR<DialogRelationFilter, DialogWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    dialogId?: SortOrder
    isRead?: SortOrder
    sender?: UserOrderByWithRelationInput
    Dialog?: DialogOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    text?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    senderId?: IntFilter<"Message"> | number
    dialogId?: IntFilter<"Message"> | number
    isRead?: BoolFilter<"Message"> | boolean
    sender?: XOR<UserRelationFilter, UserWhereInput>
    Dialog?: XOR<DialogRelationFilter, DialogWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    dialogId?: SortOrder
    isRead?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    text?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    senderId?: IntWithAggregatesFilter<"Message"> | number
    dialogId?: IntWithAggregatesFilter<"Message"> | number
    isRead?: BoolWithAggregatesFilter<"Message"> | boolean
  }

  export type UserCreateInput = {
    name?: string | null
    email: string
    username: string
    password: string
    createdAt?: Date | string
    pictureUrl: string
    dialogs?: Named_dialogCreateNestedManyWithoutUserInput
    Message?: MessageCreateNestedManyWithoutSenderInput
    Dialog?: DialogCreateNestedOneWithoutUsers_idInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    username: string
    password: string
    createdAt?: Date | string
    pictureUrl: string
    dialogId?: number | null
    dialogs?: Named_dialogUncheckedCreateNestedManyWithoutUserInput
    Message?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictureUrl?: StringFieldUpdateOperationsInput | string
    dialogs?: Named_dialogUpdateManyWithoutUserNestedInput
    Message?: MessageUpdateManyWithoutSenderNestedInput
    Dialog?: DialogUpdateOneWithoutUsers_idNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictureUrl?: StringFieldUpdateOperationsInput | string
    dialogId?: NullableIntFieldUpdateOperationsInput | number | null
    dialogs?: Named_dialogUncheckedUpdateManyWithoutUserNestedInput
    Message?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name?: string | null
    email: string
    username: string
    password: string
    createdAt?: Date | string
    pictureUrl: string
    dialogId?: number | null
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictureUrl?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictureUrl?: StringFieldUpdateOperationsInput | string
    dialogId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Named_dialogCreateInput = {
    name: string
    dialog: DialogCreateNestedOneWithoutNamed_dialogsInput
    User?: UserCreateNestedOneWithoutDialogsInput
  }

  export type Named_dialogUncheckedCreateInput = {
    id?: number
    name: string
    dialogId: number
    userId?: number | null
  }

  export type Named_dialogUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    dialog?: DialogUpdateOneRequiredWithoutNamed_dialogsNestedInput
    User?: UserUpdateOneWithoutDialogsNestedInput
  }

  export type Named_dialogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dialogId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Named_dialogCreateManyInput = {
    id?: number
    name: string
    dialogId: number
    userId?: number | null
  }

  export type Named_dialogUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Named_dialogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dialogId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DialogCreateInput = {
    pictureUrl?: string | null
    lastMessage?: string | null
    sentTime?: Date | string | null
    users_id?: UserCreateNestedManyWithoutDialogInput
    messages?: MessageCreateNestedManyWithoutDialogInput
    named_dialogs?: Named_dialogCreateNestedManyWithoutDialogInput
  }

  export type DialogUncheckedCreateInput = {
    id?: number
    pictureUrl?: string | null
    lastMessage?: string | null
    sentTime?: Date | string | null
    users_id?: UserUncheckedCreateNestedManyWithoutDialogInput
    messages?: MessageUncheckedCreateNestedManyWithoutDialogInput
    named_dialogs?: Named_dialogUncheckedCreateNestedManyWithoutDialogInput
  }

  export type DialogUpdateInput = {
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_id?: UserUpdateManyWithoutDialogNestedInput
    messages?: MessageUpdateManyWithoutDialogNestedInput
    named_dialogs?: Named_dialogUpdateManyWithoutDialogNestedInput
  }

  export type DialogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_id?: UserUncheckedUpdateManyWithoutDialogNestedInput
    messages?: MessageUncheckedUpdateManyWithoutDialogNestedInput
    named_dialogs?: Named_dialogUncheckedUpdateManyWithoutDialogNestedInput
  }

  export type DialogCreateManyInput = {
    id?: number
    pictureUrl?: string | null
    lastMessage?: string | null
    sentTime?: Date | string | null
  }

  export type DialogUpdateManyMutationInput = {
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DialogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageCreateInput = {
    text: string
    createdAt?: Date | string
    isRead?: boolean
    sender: UserCreateNestedOneWithoutMessageInput
    Dialog: DialogCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    text: string
    createdAt?: Date | string
    senderId: number
    dialogId: number
    isRead?: boolean
  }

  export type MessageUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: UserUpdateOneRequiredWithoutMessageNestedInput
    Dialog?: DialogUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    dialogId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageCreateManyInput = {
    id?: number
    text: string
    createdAt?: Date | string
    senderId: number
    dialogId: number
    isRead?: boolean
  }

  export type MessageUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    dialogId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Named_dialogListRelationFilter = {
    every?: Named_dialogWhereInput
    some?: Named_dialogWhereInput
    none?: Named_dialogWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type DialogNullableRelationFilter = {
    is?: DialogWhereInput | null
    isNot?: DialogWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Named_dialogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    pictureUrl?: SortOrder
    dialogId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    dialogId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    pictureUrl?: SortOrder
    dialogId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    pictureUrl?: SortOrder
    dialogId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    dialogId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DialogRelationFilter = {
    is?: DialogWhereInput
    isNot?: DialogWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type Named_dialogCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dialogId?: SortOrder
    userId?: SortOrder
  }

  export type Named_dialogAvgOrderByAggregateInput = {
    id?: SortOrder
    dialogId?: SortOrder
    userId?: SortOrder
  }

  export type Named_dialogMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dialogId?: SortOrder
    userId?: SortOrder
  }

  export type Named_dialogMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dialogId?: SortOrder
    userId?: SortOrder
  }

  export type Named_dialogSumOrderByAggregateInput = {
    id?: SortOrder
    dialogId?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DialogCountOrderByAggregateInput = {
    id?: SortOrder
    pictureUrl?: SortOrder
    lastMessage?: SortOrder
    sentTime?: SortOrder
  }

  export type DialogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DialogMaxOrderByAggregateInput = {
    id?: SortOrder
    pictureUrl?: SortOrder
    lastMessage?: SortOrder
    sentTime?: SortOrder
  }

  export type DialogMinOrderByAggregateInput = {
    id?: SortOrder
    pictureUrl?: SortOrder
    lastMessage?: SortOrder
    sentTime?: SortOrder
  }

  export type DialogSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    dialogId?: SortOrder
    isRead?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    dialogId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    dialogId?: SortOrder
    isRead?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    dialogId?: SortOrder
    isRead?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    dialogId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Named_dialogCreateNestedManyWithoutUserInput = {
    create?: XOR<Named_dialogCreateWithoutUserInput, Named_dialogUncheckedCreateWithoutUserInput> | Named_dialogCreateWithoutUserInput[] | Named_dialogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Named_dialogCreateOrConnectWithoutUserInput | Named_dialogCreateOrConnectWithoutUserInput[]
    createMany?: Named_dialogCreateManyUserInputEnvelope
    connect?: Named_dialogWhereUniqueInput | Named_dialogWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type DialogCreateNestedOneWithoutUsers_idInput = {
    create?: XOR<DialogCreateWithoutUsers_idInput, DialogUncheckedCreateWithoutUsers_idInput>
    connectOrCreate?: DialogCreateOrConnectWithoutUsers_idInput
    connect?: DialogWhereUniqueInput
  }

  export type Named_dialogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Named_dialogCreateWithoutUserInput, Named_dialogUncheckedCreateWithoutUserInput> | Named_dialogCreateWithoutUserInput[] | Named_dialogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Named_dialogCreateOrConnectWithoutUserInput | Named_dialogCreateOrConnectWithoutUserInput[]
    createMany?: Named_dialogCreateManyUserInputEnvelope
    connect?: Named_dialogWhereUniqueInput | Named_dialogWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Named_dialogUpdateManyWithoutUserNestedInput = {
    create?: XOR<Named_dialogCreateWithoutUserInput, Named_dialogUncheckedCreateWithoutUserInput> | Named_dialogCreateWithoutUserInput[] | Named_dialogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Named_dialogCreateOrConnectWithoutUserInput | Named_dialogCreateOrConnectWithoutUserInput[]
    upsert?: Named_dialogUpsertWithWhereUniqueWithoutUserInput | Named_dialogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Named_dialogCreateManyUserInputEnvelope
    set?: Named_dialogWhereUniqueInput | Named_dialogWhereUniqueInput[]
    disconnect?: Named_dialogWhereUniqueInput | Named_dialogWhereUniqueInput[]
    delete?: Named_dialogWhereUniqueInput | Named_dialogWhereUniqueInput[]
    connect?: Named_dialogWhereUniqueInput | Named_dialogWhereUniqueInput[]
    update?: Named_dialogUpdateWithWhereUniqueWithoutUserInput | Named_dialogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Named_dialogUpdateManyWithWhereWithoutUserInput | Named_dialogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Named_dialogScalarWhereInput | Named_dialogScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type DialogUpdateOneWithoutUsers_idNestedInput = {
    create?: XOR<DialogCreateWithoutUsers_idInput, DialogUncheckedCreateWithoutUsers_idInput>
    connectOrCreate?: DialogCreateOrConnectWithoutUsers_idInput
    upsert?: DialogUpsertWithoutUsers_idInput
    disconnect?: DialogWhereInput | boolean
    delete?: DialogWhereInput | boolean
    connect?: DialogWhereUniqueInput
    update?: XOR<XOR<DialogUpdateToOneWithWhereWithoutUsers_idInput, DialogUpdateWithoutUsers_idInput>, DialogUncheckedUpdateWithoutUsers_idInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Named_dialogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Named_dialogCreateWithoutUserInput, Named_dialogUncheckedCreateWithoutUserInput> | Named_dialogCreateWithoutUserInput[] | Named_dialogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Named_dialogCreateOrConnectWithoutUserInput | Named_dialogCreateOrConnectWithoutUserInput[]
    upsert?: Named_dialogUpsertWithWhereUniqueWithoutUserInput | Named_dialogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Named_dialogCreateManyUserInputEnvelope
    set?: Named_dialogWhereUniqueInput | Named_dialogWhereUniqueInput[]
    disconnect?: Named_dialogWhereUniqueInput | Named_dialogWhereUniqueInput[]
    delete?: Named_dialogWhereUniqueInput | Named_dialogWhereUniqueInput[]
    connect?: Named_dialogWhereUniqueInput | Named_dialogWhereUniqueInput[]
    update?: Named_dialogUpdateWithWhereUniqueWithoutUserInput | Named_dialogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Named_dialogUpdateManyWithWhereWithoutUserInput | Named_dialogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Named_dialogScalarWhereInput | Named_dialogScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type DialogCreateNestedOneWithoutNamed_dialogsInput = {
    create?: XOR<DialogCreateWithoutNamed_dialogsInput, DialogUncheckedCreateWithoutNamed_dialogsInput>
    connectOrCreate?: DialogCreateOrConnectWithoutNamed_dialogsInput
    connect?: DialogWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDialogsInput = {
    create?: XOR<UserCreateWithoutDialogsInput, UserUncheckedCreateWithoutDialogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDialogsInput
    connect?: UserWhereUniqueInput
  }

  export type DialogUpdateOneRequiredWithoutNamed_dialogsNestedInput = {
    create?: XOR<DialogCreateWithoutNamed_dialogsInput, DialogUncheckedCreateWithoutNamed_dialogsInput>
    connectOrCreate?: DialogCreateOrConnectWithoutNamed_dialogsInput
    upsert?: DialogUpsertWithoutNamed_dialogsInput
    connect?: DialogWhereUniqueInput
    update?: XOR<XOR<DialogUpdateToOneWithWhereWithoutNamed_dialogsInput, DialogUpdateWithoutNamed_dialogsInput>, DialogUncheckedUpdateWithoutNamed_dialogsInput>
  }

  export type UserUpdateOneWithoutDialogsNestedInput = {
    create?: XOR<UserCreateWithoutDialogsInput, UserUncheckedCreateWithoutDialogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDialogsInput
    upsert?: UserUpsertWithoutDialogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDialogsInput, UserUpdateWithoutDialogsInput>, UserUncheckedUpdateWithoutDialogsInput>
  }

  export type UserCreateNestedManyWithoutDialogInput = {
    create?: XOR<UserCreateWithoutDialogInput, UserUncheckedCreateWithoutDialogInput> | UserCreateWithoutDialogInput[] | UserUncheckedCreateWithoutDialogInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDialogInput | UserCreateOrConnectWithoutDialogInput[]
    createMany?: UserCreateManyDialogInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutDialogInput = {
    create?: XOR<MessageCreateWithoutDialogInput, MessageUncheckedCreateWithoutDialogInput> | MessageCreateWithoutDialogInput[] | MessageUncheckedCreateWithoutDialogInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutDialogInput | MessageCreateOrConnectWithoutDialogInput[]
    createMany?: MessageCreateManyDialogInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type Named_dialogCreateNestedManyWithoutDialogInput = {
    create?: XOR<Named_dialogCreateWithoutDialogInput, Named_dialogUncheckedCreateWithoutDialogInput> | Named_dialogCreateWithoutDialogInput[] | Named_dialogUncheckedCreateWithoutDialogInput[]
    connectOrCreate?: Named_dialogCreateOrConnectWithoutDialogInput | Named_dialogCreateOrConnectWithoutDialogInput[]
    createMany?: Named_dialogCreateManyDialogInputEnvelope
    connect?: Named_dialogWhereUniqueInput | Named_dialogWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDialogInput = {
    create?: XOR<UserCreateWithoutDialogInput, UserUncheckedCreateWithoutDialogInput> | UserCreateWithoutDialogInput[] | UserUncheckedCreateWithoutDialogInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDialogInput | UserCreateOrConnectWithoutDialogInput[]
    createMany?: UserCreateManyDialogInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutDialogInput = {
    create?: XOR<MessageCreateWithoutDialogInput, MessageUncheckedCreateWithoutDialogInput> | MessageCreateWithoutDialogInput[] | MessageUncheckedCreateWithoutDialogInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutDialogInput | MessageCreateOrConnectWithoutDialogInput[]
    createMany?: MessageCreateManyDialogInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type Named_dialogUncheckedCreateNestedManyWithoutDialogInput = {
    create?: XOR<Named_dialogCreateWithoutDialogInput, Named_dialogUncheckedCreateWithoutDialogInput> | Named_dialogCreateWithoutDialogInput[] | Named_dialogUncheckedCreateWithoutDialogInput[]
    connectOrCreate?: Named_dialogCreateOrConnectWithoutDialogInput | Named_dialogCreateOrConnectWithoutDialogInput[]
    createMany?: Named_dialogCreateManyDialogInputEnvelope
    connect?: Named_dialogWhereUniqueInput | Named_dialogWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateManyWithoutDialogNestedInput = {
    create?: XOR<UserCreateWithoutDialogInput, UserUncheckedCreateWithoutDialogInput> | UserCreateWithoutDialogInput[] | UserUncheckedCreateWithoutDialogInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDialogInput | UserCreateOrConnectWithoutDialogInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDialogInput | UserUpsertWithWhereUniqueWithoutDialogInput[]
    createMany?: UserCreateManyDialogInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDialogInput | UserUpdateWithWhereUniqueWithoutDialogInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDialogInput | UserUpdateManyWithWhereWithoutDialogInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutDialogNestedInput = {
    create?: XOR<MessageCreateWithoutDialogInput, MessageUncheckedCreateWithoutDialogInput> | MessageCreateWithoutDialogInput[] | MessageUncheckedCreateWithoutDialogInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutDialogInput | MessageCreateOrConnectWithoutDialogInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutDialogInput | MessageUpsertWithWhereUniqueWithoutDialogInput[]
    createMany?: MessageCreateManyDialogInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutDialogInput | MessageUpdateWithWhereUniqueWithoutDialogInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutDialogInput | MessageUpdateManyWithWhereWithoutDialogInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type Named_dialogUpdateManyWithoutDialogNestedInput = {
    create?: XOR<Named_dialogCreateWithoutDialogInput, Named_dialogUncheckedCreateWithoutDialogInput> | Named_dialogCreateWithoutDialogInput[] | Named_dialogUncheckedCreateWithoutDialogInput[]
    connectOrCreate?: Named_dialogCreateOrConnectWithoutDialogInput | Named_dialogCreateOrConnectWithoutDialogInput[]
    upsert?: Named_dialogUpsertWithWhereUniqueWithoutDialogInput | Named_dialogUpsertWithWhereUniqueWithoutDialogInput[]
    createMany?: Named_dialogCreateManyDialogInputEnvelope
    set?: Named_dialogWhereUniqueInput | Named_dialogWhereUniqueInput[]
    disconnect?: Named_dialogWhereUniqueInput | Named_dialogWhereUniqueInput[]
    delete?: Named_dialogWhereUniqueInput | Named_dialogWhereUniqueInput[]
    connect?: Named_dialogWhereUniqueInput | Named_dialogWhereUniqueInput[]
    update?: Named_dialogUpdateWithWhereUniqueWithoutDialogInput | Named_dialogUpdateWithWhereUniqueWithoutDialogInput[]
    updateMany?: Named_dialogUpdateManyWithWhereWithoutDialogInput | Named_dialogUpdateManyWithWhereWithoutDialogInput[]
    deleteMany?: Named_dialogScalarWhereInput | Named_dialogScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDialogNestedInput = {
    create?: XOR<UserCreateWithoutDialogInput, UserUncheckedCreateWithoutDialogInput> | UserCreateWithoutDialogInput[] | UserUncheckedCreateWithoutDialogInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDialogInput | UserCreateOrConnectWithoutDialogInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDialogInput | UserUpsertWithWhereUniqueWithoutDialogInput[]
    createMany?: UserCreateManyDialogInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDialogInput | UserUpdateWithWhereUniqueWithoutDialogInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDialogInput | UserUpdateManyWithWhereWithoutDialogInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutDialogNestedInput = {
    create?: XOR<MessageCreateWithoutDialogInput, MessageUncheckedCreateWithoutDialogInput> | MessageCreateWithoutDialogInput[] | MessageUncheckedCreateWithoutDialogInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutDialogInput | MessageCreateOrConnectWithoutDialogInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutDialogInput | MessageUpsertWithWhereUniqueWithoutDialogInput[]
    createMany?: MessageCreateManyDialogInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutDialogInput | MessageUpdateWithWhereUniqueWithoutDialogInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutDialogInput | MessageUpdateManyWithWhereWithoutDialogInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type Named_dialogUncheckedUpdateManyWithoutDialogNestedInput = {
    create?: XOR<Named_dialogCreateWithoutDialogInput, Named_dialogUncheckedCreateWithoutDialogInput> | Named_dialogCreateWithoutDialogInput[] | Named_dialogUncheckedCreateWithoutDialogInput[]
    connectOrCreate?: Named_dialogCreateOrConnectWithoutDialogInput | Named_dialogCreateOrConnectWithoutDialogInput[]
    upsert?: Named_dialogUpsertWithWhereUniqueWithoutDialogInput | Named_dialogUpsertWithWhereUniqueWithoutDialogInput[]
    createMany?: Named_dialogCreateManyDialogInputEnvelope
    set?: Named_dialogWhereUniqueInput | Named_dialogWhereUniqueInput[]
    disconnect?: Named_dialogWhereUniqueInput | Named_dialogWhereUniqueInput[]
    delete?: Named_dialogWhereUniqueInput | Named_dialogWhereUniqueInput[]
    connect?: Named_dialogWhereUniqueInput | Named_dialogWhereUniqueInput[]
    update?: Named_dialogUpdateWithWhereUniqueWithoutDialogInput | Named_dialogUpdateWithWhereUniqueWithoutDialogInput[]
    updateMany?: Named_dialogUpdateManyWithWhereWithoutDialogInput | Named_dialogUpdateManyWithWhereWithoutDialogInput[]
    deleteMany?: Named_dialogScalarWhereInput | Named_dialogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMessageInput = {
    create?: XOR<UserCreateWithoutMessageInput, UserUncheckedCreateWithoutMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessageInput
    connect?: UserWhereUniqueInput
  }

  export type DialogCreateNestedOneWithoutMessagesInput = {
    create?: XOR<DialogCreateWithoutMessagesInput, DialogUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: DialogCreateOrConnectWithoutMessagesInput
    connect?: DialogWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutMessageNestedInput = {
    create?: XOR<UserCreateWithoutMessageInput, UserUncheckedCreateWithoutMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessageInput
    upsert?: UserUpsertWithoutMessageInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessageInput, UserUpdateWithoutMessageInput>, UserUncheckedUpdateWithoutMessageInput>
  }

  export type DialogUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<DialogCreateWithoutMessagesInput, DialogUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: DialogCreateOrConnectWithoutMessagesInput
    upsert?: DialogUpsertWithoutMessagesInput
    connect?: DialogWhereUniqueInput
    update?: XOR<XOR<DialogUpdateToOneWithWhereWithoutMessagesInput, DialogUpdateWithoutMessagesInput>, DialogUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Named_dialogCreateWithoutUserInput = {
    name: string
    dialog: DialogCreateNestedOneWithoutNamed_dialogsInput
  }

  export type Named_dialogUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    dialogId: number
  }

  export type Named_dialogCreateOrConnectWithoutUserInput = {
    where: Named_dialogWhereUniqueInput
    create: XOR<Named_dialogCreateWithoutUserInput, Named_dialogUncheckedCreateWithoutUserInput>
  }

  export type Named_dialogCreateManyUserInputEnvelope = {
    data: Named_dialogCreateManyUserInput | Named_dialogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    text: string
    createdAt?: Date | string
    isRead?: boolean
    Dialog: DialogCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: number
    text: string
    createdAt?: Date | string
    dialogId: number
    isRead?: boolean
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type DialogCreateWithoutUsers_idInput = {
    pictureUrl?: string | null
    lastMessage?: string | null
    sentTime?: Date | string | null
    messages?: MessageCreateNestedManyWithoutDialogInput
    named_dialogs?: Named_dialogCreateNestedManyWithoutDialogInput
  }

  export type DialogUncheckedCreateWithoutUsers_idInput = {
    id?: number
    pictureUrl?: string | null
    lastMessage?: string | null
    sentTime?: Date | string | null
    messages?: MessageUncheckedCreateNestedManyWithoutDialogInput
    named_dialogs?: Named_dialogUncheckedCreateNestedManyWithoutDialogInput
  }

  export type DialogCreateOrConnectWithoutUsers_idInput = {
    where: DialogWhereUniqueInput
    create: XOR<DialogCreateWithoutUsers_idInput, DialogUncheckedCreateWithoutUsers_idInput>
  }

  export type Named_dialogUpsertWithWhereUniqueWithoutUserInput = {
    where: Named_dialogWhereUniqueInput
    update: XOR<Named_dialogUpdateWithoutUserInput, Named_dialogUncheckedUpdateWithoutUserInput>
    create: XOR<Named_dialogCreateWithoutUserInput, Named_dialogUncheckedCreateWithoutUserInput>
  }

  export type Named_dialogUpdateWithWhereUniqueWithoutUserInput = {
    where: Named_dialogWhereUniqueInput
    data: XOR<Named_dialogUpdateWithoutUserInput, Named_dialogUncheckedUpdateWithoutUserInput>
  }

  export type Named_dialogUpdateManyWithWhereWithoutUserInput = {
    where: Named_dialogScalarWhereInput
    data: XOR<Named_dialogUpdateManyMutationInput, Named_dialogUncheckedUpdateManyWithoutUserInput>
  }

  export type Named_dialogScalarWhereInput = {
    AND?: Named_dialogScalarWhereInput | Named_dialogScalarWhereInput[]
    OR?: Named_dialogScalarWhereInput[]
    NOT?: Named_dialogScalarWhereInput | Named_dialogScalarWhereInput[]
    id?: IntFilter<"Named_dialog"> | number
    name?: StringFilter<"Named_dialog"> | string
    dialogId?: IntFilter<"Named_dialog"> | number
    userId?: IntNullableFilter<"Named_dialog"> | number | null
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    text?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    senderId?: IntFilter<"Message"> | number
    dialogId?: IntFilter<"Message"> | number
    isRead?: BoolFilter<"Message"> | boolean
  }

  export type DialogUpsertWithoutUsers_idInput = {
    update: XOR<DialogUpdateWithoutUsers_idInput, DialogUncheckedUpdateWithoutUsers_idInput>
    create: XOR<DialogCreateWithoutUsers_idInput, DialogUncheckedCreateWithoutUsers_idInput>
    where?: DialogWhereInput
  }

  export type DialogUpdateToOneWithWhereWithoutUsers_idInput = {
    where?: DialogWhereInput
    data: XOR<DialogUpdateWithoutUsers_idInput, DialogUncheckedUpdateWithoutUsers_idInput>
  }

  export type DialogUpdateWithoutUsers_idInput = {
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: MessageUpdateManyWithoutDialogNestedInput
    named_dialogs?: Named_dialogUpdateManyWithoutDialogNestedInput
  }

  export type DialogUncheckedUpdateWithoutUsers_idInput = {
    id?: IntFieldUpdateOperationsInput | number
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: MessageUncheckedUpdateManyWithoutDialogNestedInput
    named_dialogs?: Named_dialogUncheckedUpdateManyWithoutDialogNestedInput
  }

  export type DialogCreateWithoutNamed_dialogsInput = {
    pictureUrl?: string | null
    lastMessage?: string | null
    sentTime?: Date | string | null
    users_id?: UserCreateNestedManyWithoutDialogInput
    messages?: MessageCreateNestedManyWithoutDialogInput
  }

  export type DialogUncheckedCreateWithoutNamed_dialogsInput = {
    id?: number
    pictureUrl?: string | null
    lastMessage?: string | null
    sentTime?: Date | string | null
    users_id?: UserUncheckedCreateNestedManyWithoutDialogInput
    messages?: MessageUncheckedCreateNestedManyWithoutDialogInput
  }

  export type DialogCreateOrConnectWithoutNamed_dialogsInput = {
    where: DialogWhereUniqueInput
    create: XOR<DialogCreateWithoutNamed_dialogsInput, DialogUncheckedCreateWithoutNamed_dialogsInput>
  }

  export type UserCreateWithoutDialogsInput = {
    name?: string | null
    email: string
    username: string
    password: string
    createdAt?: Date | string
    pictureUrl: string
    Message?: MessageCreateNestedManyWithoutSenderInput
    Dialog?: DialogCreateNestedOneWithoutUsers_idInput
  }

  export type UserUncheckedCreateWithoutDialogsInput = {
    id?: number
    name?: string | null
    email: string
    username: string
    password: string
    createdAt?: Date | string
    pictureUrl: string
    dialogId?: number | null
    Message?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutDialogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDialogsInput, UserUncheckedCreateWithoutDialogsInput>
  }

  export type DialogUpsertWithoutNamed_dialogsInput = {
    update: XOR<DialogUpdateWithoutNamed_dialogsInput, DialogUncheckedUpdateWithoutNamed_dialogsInput>
    create: XOR<DialogCreateWithoutNamed_dialogsInput, DialogUncheckedCreateWithoutNamed_dialogsInput>
    where?: DialogWhereInput
  }

  export type DialogUpdateToOneWithWhereWithoutNamed_dialogsInput = {
    where?: DialogWhereInput
    data: XOR<DialogUpdateWithoutNamed_dialogsInput, DialogUncheckedUpdateWithoutNamed_dialogsInput>
  }

  export type DialogUpdateWithoutNamed_dialogsInput = {
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_id?: UserUpdateManyWithoutDialogNestedInput
    messages?: MessageUpdateManyWithoutDialogNestedInput
  }

  export type DialogUncheckedUpdateWithoutNamed_dialogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_id?: UserUncheckedUpdateManyWithoutDialogNestedInput
    messages?: MessageUncheckedUpdateManyWithoutDialogNestedInput
  }

  export type UserUpsertWithoutDialogsInput = {
    update: XOR<UserUpdateWithoutDialogsInput, UserUncheckedUpdateWithoutDialogsInput>
    create: XOR<UserCreateWithoutDialogsInput, UserUncheckedCreateWithoutDialogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDialogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDialogsInput, UserUncheckedUpdateWithoutDialogsInput>
  }

  export type UserUpdateWithoutDialogsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictureUrl?: StringFieldUpdateOperationsInput | string
    Message?: MessageUpdateManyWithoutSenderNestedInput
    Dialog?: DialogUpdateOneWithoutUsers_idNestedInput
  }

  export type UserUncheckedUpdateWithoutDialogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictureUrl?: StringFieldUpdateOperationsInput | string
    dialogId?: NullableIntFieldUpdateOperationsInput | number | null
    Message?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateWithoutDialogInput = {
    name?: string | null
    email: string
    username: string
    password: string
    createdAt?: Date | string
    pictureUrl: string
    dialogs?: Named_dialogCreateNestedManyWithoutUserInput
    Message?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutDialogInput = {
    id?: number
    name?: string | null
    email: string
    username: string
    password: string
    createdAt?: Date | string
    pictureUrl: string
    dialogs?: Named_dialogUncheckedCreateNestedManyWithoutUserInput
    Message?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutDialogInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDialogInput, UserUncheckedCreateWithoutDialogInput>
  }

  export type UserCreateManyDialogInputEnvelope = {
    data: UserCreateManyDialogInput | UserCreateManyDialogInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutDialogInput = {
    text: string
    createdAt?: Date | string
    isRead?: boolean
    sender: UserCreateNestedOneWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutDialogInput = {
    id?: number
    text: string
    createdAt?: Date | string
    senderId: number
    isRead?: boolean
  }

  export type MessageCreateOrConnectWithoutDialogInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutDialogInput, MessageUncheckedCreateWithoutDialogInput>
  }

  export type MessageCreateManyDialogInputEnvelope = {
    data: MessageCreateManyDialogInput | MessageCreateManyDialogInput[]
    skipDuplicates?: boolean
  }

  export type Named_dialogCreateWithoutDialogInput = {
    name: string
    User?: UserCreateNestedOneWithoutDialogsInput
  }

  export type Named_dialogUncheckedCreateWithoutDialogInput = {
    id?: number
    name: string
    userId?: number | null
  }

  export type Named_dialogCreateOrConnectWithoutDialogInput = {
    where: Named_dialogWhereUniqueInput
    create: XOR<Named_dialogCreateWithoutDialogInput, Named_dialogUncheckedCreateWithoutDialogInput>
  }

  export type Named_dialogCreateManyDialogInputEnvelope = {
    data: Named_dialogCreateManyDialogInput | Named_dialogCreateManyDialogInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutDialogInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDialogInput, UserUncheckedUpdateWithoutDialogInput>
    create: XOR<UserCreateWithoutDialogInput, UserUncheckedCreateWithoutDialogInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDialogInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDialogInput, UserUncheckedUpdateWithoutDialogInput>
  }

  export type UserUpdateManyWithWhereWithoutDialogInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDialogInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    pictureUrl?: StringFilter<"User"> | string
    dialogId?: IntNullableFilter<"User"> | number | null
  }

  export type MessageUpsertWithWhereUniqueWithoutDialogInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutDialogInput, MessageUncheckedUpdateWithoutDialogInput>
    create: XOR<MessageCreateWithoutDialogInput, MessageUncheckedCreateWithoutDialogInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutDialogInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutDialogInput, MessageUncheckedUpdateWithoutDialogInput>
  }

  export type MessageUpdateManyWithWhereWithoutDialogInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutDialogInput>
  }

  export type Named_dialogUpsertWithWhereUniqueWithoutDialogInput = {
    where: Named_dialogWhereUniqueInput
    update: XOR<Named_dialogUpdateWithoutDialogInput, Named_dialogUncheckedUpdateWithoutDialogInput>
    create: XOR<Named_dialogCreateWithoutDialogInput, Named_dialogUncheckedCreateWithoutDialogInput>
  }

  export type Named_dialogUpdateWithWhereUniqueWithoutDialogInput = {
    where: Named_dialogWhereUniqueInput
    data: XOR<Named_dialogUpdateWithoutDialogInput, Named_dialogUncheckedUpdateWithoutDialogInput>
  }

  export type Named_dialogUpdateManyWithWhereWithoutDialogInput = {
    where: Named_dialogScalarWhereInput
    data: XOR<Named_dialogUpdateManyMutationInput, Named_dialogUncheckedUpdateManyWithoutDialogInput>
  }

  export type UserCreateWithoutMessageInput = {
    name?: string | null
    email: string
    username: string
    password: string
    createdAt?: Date | string
    pictureUrl: string
    dialogs?: Named_dialogCreateNestedManyWithoutUserInput
    Dialog?: DialogCreateNestedOneWithoutUsers_idInput
  }

  export type UserUncheckedCreateWithoutMessageInput = {
    id?: number
    name?: string | null
    email: string
    username: string
    password: string
    createdAt?: Date | string
    pictureUrl: string
    dialogId?: number | null
    dialogs?: Named_dialogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessageInput, UserUncheckedCreateWithoutMessageInput>
  }

  export type DialogCreateWithoutMessagesInput = {
    pictureUrl?: string | null
    lastMessage?: string | null
    sentTime?: Date | string | null
    users_id?: UserCreateNestedManyWithoutDialogInput
    named_dialogs?: Named_dialogCreateNestedManyWithoutDialogInput
  }

  export type DialogUncheckedCreateWithoutMessagesInput = {
    id?: number
    pictureUrl?: string | null
    lastMessage?: string | null
    sentTime?: Date | string | null
    users_id?: UserUncheckedCreateNestedManyWithoutDialogInput
    named_dialogs?: Named_dialogUncheckedCreateNestedManyWithoutDialogInput
  }

  export type DialogCreateOrConnectWithoutMessagesInput = {
    where: DialogWhereUniqueInput
    create: XOR<DialogCreateWithoutMessagesInput, DialogUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessageInput = {
    update: XOR<UserUpdateWithoutMessageInput, UserUncheckedUpdateWithoutMessageInput>
    create: XOR<UserCreateWithoutMessageInput, UserUncheckedCreateWithoutMessageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessageInput, UserUncheckedUpdateWithoutMessageInput>
  }

  export type UserUpdateWithoutMessageInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictureUrl?: StringFieldUpdateOperationsInput | string
    dialogs?: Named_dialogUpdateManyWithoutUserNestedInput
    Dialog?: DialogUpdateOneWithoutUsers_idNestedInput
  }

  export type UserUncheckedUpdateWithoutMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictureUrl?: StringFieldUpdateOperationsInput | string
    dialogId?: NullableIntFieldUpdateOperationsInput | number | null
    dialogs?: Named_dialogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DialogUpsertWithoutMessagesInput = {
    update: XOR<DialogUpdateWithoutMessagesInput, DialogUncheckedUpdateWithoutMessagesInput>
    create: XOR<DialogCreateWithoutMessagesInput, DialogUncheckedCreateWithoutMessagesInput>
    where?: DialogWhereInput
  }

  export type DialogUpdateToOneWithWhereWithoutMessagesInput = {
    where?: DialogWhereInput
    data: XOR<DialogUpdateWithoutMessagesInput, DialogUncheckedUpdateWithoutMessagesInput>
  }

  export type DialogUpdateWithoutMessagesInput = {
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_id?: UserUpdateManyWithoutDialogNestedInput
    named_dialogs?: Named_dialogUpdateManyWithoutDialogNestedInput
  }

  export type DialogUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_id?: UserUncheckedUpdateManyWithoutDialogNestedInput
    named_dialogs?: Named_dialogUncheckedUpdateManyWithoutDialogNestedInput
  }

  export type Named_dialogCreateManyUserInput = {
    id?: number
    name: string
    dialogId: number
  }

  export type MessageCreateManySenderInput = {
    id?: number
    text: string
    createdAt?: Date | string
    dialogId: number
    isRead?: boolean
  }

  export type Named_dialogUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    dialog?: DialogUpdateOneRequiredWithoutNamed_dialogsNestedInput
  }

  export type Named_dialogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dialogId?: IntFieldUpdateOperationsInput | number
  }

  export type Named_dialogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dialogId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUpdateWithoutSenderInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    Dialog?: DialogUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dialogId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dialogId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateManyDialogInput = {
    id?: number
    name?: string | null
    email: string
    username: string
    password: string
    createdAt?: Date | string
    pictureUrl: string
  }

  export type MessageCreateManyDialogInput = {
    id?: number
    text: string
    createdAt?: Date | string
    senderId: number
    isRead?: boolean
  }

  export type Named_dialogCreateManyDialogInput = {
    id?: number
    name: string
    userId?: number | null
  }

  export type UserUpdateWithoutDialogInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictureUrl?: StringFieldUpdateOperationsInput | string
    dialogs?: Named_dialogUpdateManyWithoutUserNestedInput
    Message?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutDialogInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictureUrl?: StringFieldUpdateOperationsInput | string
    dialogs?: Named_dialogUncheckedUpdateManyWithoutUserNestedInput
    Message?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDialogInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictureUrl?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUpdateWithoutDialogInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: UserUpdateOneRequiredWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutDialogInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUncheckedUpdateManyWithoutDialogInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Named_dialogUpdateWithoutDialogInput = {
    name?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneWithoutDialogsNestedInput
  }

  export type Named_dialogUncheckedUpdateWithoutDialogInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Named_dialogUncheckedUpdateManyWithoutDialogInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DialogCountOutputTypeDefaultArgs instead
     */
    export type DialogCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DialogCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Named_dialogDefaultArgs instead
     */
    export type Named_dialogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Named_dialogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DialogDefaultArgs instead
     */
    export type DialogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DialogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageDefaultArgs instead
     */
    export type MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}