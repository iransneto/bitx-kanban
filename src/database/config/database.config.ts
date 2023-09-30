import { DataSource } from 'typeorm';

const databaseProvider = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'mysecretpassword',
        database: 'bitx-kanban',
        entities: [__dirname + '/../entities/**/*.entity{.ts,.js}'],
        // seeds: [__dirname + '/../database/seeds/**/*{.ts,.js}'],
        synchronize: true,
        logging: true,
      });

      return dataSource.initialize();
    },
  },
];

export default databaseProvider;
